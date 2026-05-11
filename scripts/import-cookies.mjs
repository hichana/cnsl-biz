#!/usr/bin/env node
// Imports X cookies (Cookie-Editor JSON format) into a Browserbase persistent context.

import Browserbase from '@browserbasehq/sdk';
import { Stagehand } from '@browserbasehq/stagehand';

const API_KEY = process.env.BROWSERBASE_API_KEY;
if (!API_KEY) { console.error('BROWSERBASE_API_KEY required'); process.exit(1); }

const COOKIES = [
    {
        "domain": ".x.com",
        "expirationDate": 1804334361.90687,
        "httpOnly": true,
        "name": "auth_token",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "value": "22fd4be29ba531b9c2fc43a522a1f2bf20cfc6e9"
    },
    {
        "domain": ".x.com",
        "expirationDate": 1803988711.257337,
        "httpOnly": false,
        "name": "guest_id",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "value": "v1%3A176977431098384608"
    },
    {
        "domain": ".x.com",
        "expirationDate": 1810012342.310323,
        "httpOnly": false,
        "name": "twid",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "value": "u%3D2492378305"
    },
    {
        "domain": ".x.com",
        "expirationDate": 1804334362.113699,
        "httpOnly": false,
        "name": "ct0",
        "path": "/",
        "sameSite": "lax",
        "secure": true,
        "value": "cfb0fc890b0c68cba451e23d737c003e1720a53c2e771458b30fde0c656cdb42d63a3242d226d66c174db22ebabb4be3938e53abf11c6872beaffdabbcc718c68a9b9cfa01794165026ce174c4a287c1"
    },
    {
        "domain": ".x.com",
        "expirationDate": 1813036339.42008,
        "httpOnly": false,
        "name": "guest_id_ads",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "value": "v1%3A176977431098384608"
    },
    {
        "domain": ".x.com",
        "expirationDate": 1813036339.420205,
        "httpOnly": false,
        "name": "guest_id_marketing",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "value": "v1%3A176977431098384608"
    },
    {
        "domain": ".x.com",
        "expirationDate": 1804334361.906679,
        "httpOnly": true,
        "name": "kdt",
        "path": "/",
        "sameSite": null,
        "secure": true,
        "value": "c2ptBop2p8iLRWj2tXbqsYCM8EKVQKAnVapmRGZa"
    },
    {
        "domain": ".x.com",
        "expirationDate": 1804334314.932011,
        "httpOnly": false,
        "name": "personalization_id",
        "path": "/",
        "sameSite": "no_restriction",
        "secure": true,
        "value": "\"v1_3hzUs9evtt5fXjYasaMTNQ==\""
    }
];

function sameSiteMap(v) {
  if (v === 'lax') return 'Lax';
  if (v === 'strict') return 'Strict';
  if (v === 'no_restriction') return 'None';
  return undefined;
}

function toCookieParams(cookies) {
  return cookies.map(c => {
    const p = {
      name: c.name,
      value: c.value,
      domain: c.domain,
      path: c.path,
      httpOnly: c.httpOnly,
      secure: c.secure,
    };
    if (c.expirationDate) p.expires = Math.floor(c.expirationDate);
    const ss = sameSiteMap(c.sameSite);
    if (ss) p.sameSite = ss;
    return p;
  });
}

async function main() {
  const bb = new Browserbase({ apiKey: API_KEY });
  const ctx = await bb.contexts.create({});
  console.log(`Created context: ${ctx.id}`);

  const cloud = new Stagehand({
    env: 'BROWSERBASE',
    apiKey: API_KEY,
    disableAPI: true,
    browserbaseSessionCreateParams: {
      browserSettings: { context: { id: ctx.id, persist: true } },
    },
    verbose: 0,
    disablePino: true,
  });
  await cloud.init();
  console.log(`Session: ${cloud.browserbaseSessionID}`);

  const cookieParams = toCookieParams(COOKIES);
  await cloud.context.addCookies(cookieParams);
  console.log(`Injected ${cookieParams.length} cookies`);
  await cloud.close();

  console.log('\nDone! Context ID saved to .env as BROWSERBASE_CONTEXT_ID');
  console.log(`Context ID: ${ctx.id}`);
  console.log(`\nBrowse with:\n  browse open https://x.com --context-id ${ctx.id} --persist`);
}

main().catch(e => { console.error('Error:', e.message); process.exit(1); });
