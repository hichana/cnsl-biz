#!/usr/bin/env node
/**
 * Cron-safe wrapper for scripts/scrape-x-list.mjs.
 *
 * Loads .env, runs the scraper, validates JSON, and writes:
 *   data/x-list/runs/<timestamp>.json
 *   data/x-list/latest.json
 *   data/x-list/latest-meta.json
 *
 * Set SCRAPE_SILENT_SUCCESS=1 to print nothing on success, which is useful
 * for Hermes no-agent cron jobs. Failures still exit non-zero with stderr.
 */

import 'dotenv/config';
import { spawn } from 'node:child_process';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const repoRoot = resolve(__dirname, '..');
const outDir = resolve(repoRoot, 'data/x-list');
const runsDir = resolve(outDir, 'runs');
const silentSuccess = process.env.SCRAPE_SILENT_SUCCESS === '1' || process.argv.includes('--silent-success');

function timestampForFile(date = new Date()) {
  return date.toISOString().replace(/[:.]/g, '-');
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

  const startedAt = new Date();
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

  if (!silentSuccess) {
    console.log(`Scraped ${tweets.length} tweets (${uniqueIds.size} unique IDs)`);
    console.log(`Saved: ${runPath}`);
    console.log(`Latest: ${latestPath}`);
  }
}

main().catch(error => {
  console.error(error.message);
  process.exit(1);
});
