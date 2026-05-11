#!/usr/bin/env node
/**
 * Cron-safe wrapper for scripts/scrape-x-list.mjs.
 *
 * Loads .env, optionally jitters cron start time, respects failure backoff,
 * runs the scraper, validates JSON, and writes:
 *   data/x-list/runs/<timestamp>.json
 *   data/x-list/latest.json
 *   data/x-list/latest-meta.json
 *   data/x-list/state.json
 *
 * Set SCRAPE_SILENT_SUCCESS=1 to print nothing on success, which is useful
 * for Hermes no-agent cron jobs. Failures still exit non-zero with stderr.
 */

import 'dotenv/config';
import { randomInt } from 'node:crypto';
import { spawn } from 'node:child_process';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = resolve(__dirname, '..');
const outDir = resolve(repoRoot, 'data/x-list');
const runsDir = resolve(outDir, 'runs');
const statePath = resolve(outDir, 'state.json');

const silentSuccess = process.env.SCRAPE_SILENT_SUCCESS === '1' || process.argv.includes('--silent-success');
const jitterMaxSeconds = parseInt(process.env.SCRAPE_START_JITTER_SECONDS ?? '0', 10);
const minTweets = parseInt(process.env.MIN_TWEETS ?? '1', 10);
const backoffBaseMinutes = parseInt(process.env.SCRAPE_BACKOFF_BASE_MINUTES ?? '30', 10);
const backoffMaxMinutes = parseInt(process.env.SCRAPE_BACKOFF_MAX_MINUTES ?? '360', 10);

function timestampForFile(date = new Date()) {
  return date.toISOString().replace(/[:.]/g, '-');
}

function sleep(ms) {
  return new Promise(resolvePromise => setTimeout(resolvePromise, ms));
}

async function loadState() {
  try {
    return JSON.parse(await readFile(statePath, 'utf8'));
  } catch {
    return { consecutiveFailures: 0 };
  }
}

async function saveState(state) {
  await mkdir(outDir, { recursive: true });
  await writeFile(statePath, `${JSON.stringify(state, null, 2)}\n`, 'utf8');
}

function backoffMinutesFor(failureCount) {
  const exponent = Math.max(0, failureCount - 1);
  return Math.min(backoffMaxMinutes, backoffBaseMinutes * (2 ** exponent));
}

function runScraper() {
  return new Promise((resolvePromise, reject) => {
    const child = spawn(process.execPath, ['scripts/scrape-x-list.mjs'], {
      cwd: repoRoot,
      env: process.env,
      stdio: ['ignore', 'pipe', 'pipe'],
    });

    let stdout = '';
    let stderr = '';

    child.stdout.setEncoding('utf8');
    child.stderr.setEncoding('utf8');
    child.stdout.on('data', chunk => { stdout += chunk; });
    child.stderr.on('data', chunk => { stderr += chunk; });
    child.on('error', reject);
    child.on('close', code => {
      if (code === 0) resolvePromise({ stdout, stderr });
      else reject(new Error(`scrape-x-list exited ${code}\n${stderr}`));
    });
  });
}

async function main() {
  const required = [
    'BROWSERBASE_API_KEY',
    'BROWSERBASE_PROJECT_ID',
    'BROWSERBASE_CONTEXT_ID',
    'AI_IS_AWESOME_LIST_ID',
  ];
  const missing = required.filter(key => !process.env[key]);
  if (missing.length) {
    throw new Error(`Missing required env vars: ${missing.join(', ')}`);
  }

  await mkdir(runsDir, { recursive: true });

  const state = await loadState();
  const now = new Date();
  if (state.nextAllowedAt && new Date(state.nextAllowedAt) > now) {
    if (!silentSuccess) {
      console.log(`Skipping scrape until ${state.nextAllowedAt} after ${state.consecutiveFailures ?? 0} consecutive failure(s).`);
    }
    return;
  }

  if (jitterMaxSeconds > 0) {
    const jitterSeconds = randomInt(0, jitterMaxSeconds + 1);
    if (!silentSuccess && jitterSeconds > 0) console.log(`Jitter sleep: ${jitterSeconds}s`);
    await sleep(jitterSeconds * 1000);
  }

  const startedAt = new Date();

  try {
    const { stdout, stderr } = await runScraper();

    let tweets;
    try {
      tweets = JSON.parse(stdout);
    } catch (error) {
      throw new Error(`Scraper did not emit valid JSON: ${error.message}\nScraper stderr:\n${stderr}`);
    }

    if (!Array.isArray(tweets)) {
      throw new Error('Scraper JSON output was not an array');
    }

    if (tweets.length < minTweets) {
      throw new Error(`Scraper returned only ${tweets.length} tweet(s); minimum expected is ${minTweets}. This may indicate a login, rate-limit, or challenge page.`);
    }

    const finishedAt = new Date();
    const filename = `${timestampForFile(finishedAt)}.json`;
    const runPath = resolve(runsDir, filename);
    const latestPath = resolve(outDir, 'latest.json');
    const metaPath = resolve(outDir, 'latest-meta.json');
    const uniqueIds = new Set(tweets.map(tweet => tweet?.tweetId).filter(Boolean));
    const meta = {
      startedAt: startedAt.toISOString(),
      finishedAt: finishedAt.toISOString(),
      count: tweets.length,
      uniqueTweetIds: uniqueIds.size,
      runPath,
      latestPath,
    };

    const json = `${JSON.stringify(tweets, null, 2)}\n`;
    await writeFile(runPath, json, 'utf8');
    await writeFile(latestPath, json, 'utf8');
    await writeFile(metaPath, `${JSON.stringify(meta, null, 2)}\n`, 'utf8');
    await saveState({
      consecutiveFailures: 0,
      lastSuccessAt: finishedAt.toISOString(),
      lastCount: tweets.length,
      lastRunPath: runPath,
      nextAllowedAt: null,
    });

    if (!silentSuccess) {
      console.log(`Scraped ${tweets.length} tweets (${uniqueIds.size} unique IDs)`);
      console.log(`Saved: ${runPath}`);
      console.log(`Latest: ${latestPath}`);
    }
  } catch (error) {
    const failedAt = new Date();
    const consecutiveFailures = (state.consecutiveFailures ?? 0) + 1;
    const backoffMinutes = backoffMinutesFor(consecutiveFailures);
    const nextAllowedAt = new Date(failedAt.getTime() + backoffMinutes * 60 * 1000).toISOString();
    await saveState({
      ...state,
      consecutiveFailures,
      lastFailureAt: failedAt.toISOString(),
      lastError: error.message.slice(0, 4000),
      nextAllowedAt,
    });
    throw new Error(`${error.message}\nBackoff active after ${consecutiveFailures} consecutive failure(s); next scrape allowed at ${nextAllowedAt}.`);
  }
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
