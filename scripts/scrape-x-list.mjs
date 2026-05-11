#!/usr/bin/env node
/**
 * Scrapes tweets from the "AI is Awesome" X list via Browserbase.
 *
 * Required env vars:
 *   BROWSERBASE_API_KEY
 *   BROWSERBASE_PROJECT_ID
 *   BROWSERBASE_CONTEXT_ID
 *   AI_IS_AWESOME_LIST_ID   — full URL, e.g. https://x.com/i/lists/1601254642423250945
 *
 * Optional:
 *   MAX_TWEETS              — number of tweets to collect (default: 50)
 *   SCROLL_MIN_VIEWPORTS    — min scroll distance per round (default: 1.1)
 *   SCROLL_MAX_VIEWPORTS    — max scroll distance per round (default: 2.3)
 *   SCROLL_WAIT_MIN_MS      — min wait between scrolls (default: 3500)
 *   SCROLL_WAIT_MAX_MS      — max wait between scrolls (default: 8000)
 *
 * Output: JSON array of tweets to stdout, progress to stderr.
 * Usage:  node scripts/scrape-x-list.mjs
 */

import 'dotenv/config';
import { randomInt } from 'node:crypto';
import { Stagehand } from '@browserbasehq/stagehand';
import { chromium } from 'playwright-core';

const API_KEY    = process.env.BROWSERBASE_API_KEY;
const PROJECT_ID = process.env.BROWSERBASE_PROJECT_ID;
const CONTEXT_ID = process.env.BROWSERBASE_CONTEXT_ID;
const LIST_URL   = process.env.AI_IS_AWESOME_LIST_ID;
const MAX_TWEETS = parseInt(process.env.MAX_TWEETS ?? '50', 10);

const SCROLL_MIN_VIEWPORTS = parseFloat(process.env.SCROLL_MIN_VIEWPORTS ?? '1.1');
const SCROLL_MAX_VIEWPORTS = parseFloat(process.env.SCROLL_MAX_VIEWPORTS ?? '2.3');
const SCROLL_WAIT_MIN_MS   = parseInt(process.env.SCROLL_WAIT_MIN_MS ?? '3500', 10);
const SCROLL_WAIT_MAX_MS   = parseInt(process.env.SCROLL_WAIT_MAX_MS ?? '8000', 10);

if (!API_KEY || !PROJECT_ID || !CONTEXT_ID || !LIST_URL) {
  console.error('Missing required env vars: BROWSERBASE_API_KEY, BROWSERBASE_PROJECT_ID, BROWSERBASE_CONTEXT_ID, AI_IS_AWESOME_LIST_ID');
  process.exit(1);
}

function randomBetween(min, max) {
  if (!Number.isFinite(min) || !Number.isFinite(max) || max <= min) return min;
  return min + Math.random() * (max - min);
}

function randomIntBetween(min, max) {
  if (!Number.isFinite(min) || !Number.isFinite(max) || max <= min) return min;
  return randomInt(Math.floor(min), Math.floor(max) + 1);
}

function extractTweetsFromDOM(elements) {
  return elements.map(el => {
    const userNameEl = el.querySelector('[data-testid="User-Name"]');
    const displayName = userNameEl?.querySelector('span')?.textContent?.trim() ?? '';
    const handleHref  = userNameEl?.querySelector('a[href]')?.getAttribute('href') ?? '';
    const handle      = handleHref ? '@' + handleHref.replace(/^\//, '') : '';
    const text        = el.querySelector('[data-testid="tweetText"]')?.innerText?.trim() ?? '';
    const timestamp   = el.querySelector('time')?.getAttribute('datetime') ?? '';
    const statusHref  = el.querySelector('a[href*="/status/"]')?.getAttribute('href') ?? '';
    const tweetId     = statusHref.match(/\/status\/(\d+)/)?.[1] ?? '';
    const url         = tweetId ? `https://x.com${statusHref}` : '';
    return { tweetId, displayName, handle, text, timestamp, url };
  }).filter(t => t.tweetId);
}

async function main() {
  const stagehand = new Stagehand({
    env: 'BROWSERBASE',
    apiKey: API_KEY,
    projectId: PROJECT_ID,
    disableAPI: true,
    browserbaseSessionCreateParams: {
      browserSettings: { context: { id: CONTEXT_ID, persist: false } },
    },
    verbose: 0,
    disablePino: true,
  });

  await stagehand.init();

  const browser = await chromium.connectOverCDP({ wsEndpoint: stagehand.connectURL() });
  const ctx  = browser.contexts()[0];
  const page = ctx.pages()[0] ?? await ctx.newPage();

  try {
    process.stderr.write(`Opening ${LIST_URL}\n`);
    await page.goto(LIST_URL, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('[data-testid="tweet"]', { timeout: 20000 });

    const seen   = new Set();
    const tweets = [];
    let noNewRounds = 0;

    while (tweets.length < MAX_TWEETS && noNewRounds < 4) {
      const batch = await page.$$eval('[data-testid="tweet"]', extractTweetsFromDOM);
      let added = 0;

      for (const t of batch) {
        if (!seen.has(t.tweetId)) {
          seen.add(t.tweetId);
          tweets.push(t);
          added++;
          if (tweets.length >= MAX_TWEETS) break;
        }
      }

      process.stderr.write(`  ${tweets.length} tweets collected (${added} new this round)\n`);
      noNewRounds = added === 0 ? noNewRounds + 1 : 0;

      if (tweets.length < MAX_TWEETS) {
        const distance = randomBetween(SCROLL_MIN_VIEWPORTS, SCROLL_MAX_VIEWPORTS);
        const waitMs = randomIntBetween(SCROLL_WAIT_MIN_MS, SCROLL_WAIT_MAX_MS);
        await page.evaluate(viewports => window.scrollBy(0, window.innerHeight * viewports), distance);
        await page.waitForTimeout(waitMs);
      }
    }

    console.log(JSON.stringify(tweets, null, 2));
    process.stderr.write(`\nDone — scraped ${tweets.length} tweets.\n`);
  } finally {
    await browser.close();
    await stagehand.close();
  }
}

main().catch(e => {
  console.error('Error:', e.message);
  process.exit(1);
});
