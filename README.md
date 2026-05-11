# CNSL-BIZ — AI Newsletter Aggregator

A personal tool for staying on top of AI news and trends, starting with automated scanning of curated X (Twitter) lists.

## Approach

The workflow uses **Browserbase** to run a cloud browser session authenticated as the user's personal X account, then extracts and summarizes posts from targeted lists (e.g. "AI is Awesome").

### Why Browserbase

- No X API subscription required
- Handles X's bot detection and CAPTCHAs automatically (stealth mode)
- Persistent contexts mean cookies/auth survive across sessions — set up once, reuse indefinitely
- Sessions can run on a schedule without a local browser open

### High-Level Flow

```
cookie-sync (once, local machine)
    └── exports X cookies from local Chrome → Browserbase persistent context
          └── browse CLI (anywhere, scheduled)
                └── opens X list authenticated as user
                      └── extracts post text
                            └── Claude API summarizes into digest
```

---

## Initial Setup

### Prerequisites

- Node.js 22+
- Chrome installed and logged into x.com
- Browserbase account with API key and project ID

### Environment Variables

The following env vars should be set in your Claude Code environment (Settings → Project Environments → CNSL-BIZ):

```
BROWSERBASE_API_KEY=<your key>
BROWSERBASE_PROJECT_ID=<your project id>
```

For local shell use, export them or add to your shell profile.

### Install Browserbase Skills

From the project root:

```bash
npx skills add https://github.com/browserbase/skills
```

This installs 13 skills into `.agents/skills/` and creates `skills-lock.json`. The installer detects the Claude Code environment automatically.

### Install the browse CLI

```bash
npm install -g @browserbasehq/browse-cli
```

Verify: `browse --version`

### Install cookie-sync dependencies

```bash
cd .agents/skills/cookie-sync && npm install
```

---

## Step 1 — Sync X Cookies (run once on your local machine)

This exports your X login cookies from local Chrome into a Browserbase persistent context. You only need to redo this when cookies expire.

**1. Launch Chrome with remote debugging:**

```bash
# macOS
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome \
  --remote-debugging-port=9222 --user-data-dir=/tmp/chrome-debug
```

Make sure you're logged into x.com in that Chrome window.

**2. Run cookie-sync:**

```bash
export BROWSERBASE_API_KEY=<your key>
node .agents/skills/cookie-sync/scripts/cookie-sync.mjs \
  --domains x.com,twitter.com --stealth
```

**3. Save the context ID** — the script outputs something like `Context ID: ctx_abc123`. Store this somewhere safe (e.g. your `.env` file, a notes doc). You'll use it every time you browse.

**To refresh expired cookies later:**

```bash
node .agents/skills/cookie-sync/scripts/cookie-sync.mjs \
  --domains x.com,twitter.com --stealth --context ctx_abc123
```

---

## Step 2 — Browse the X List

Find the list ID from the URL when you visit the list on x.com:
`https://x.com/i/lists/1234567890` → list ID is `1234567890`

```bash
browse open "https://x.com/i/lists/<LIST_ID>" \
  --context-id <your-context-id> --persist
browse snapshot          # read page structure and element refs
browse get text body     # extract all post text
browse stop
```

The `--persist` flag saves any updated cookies back to the context, keeping the session fresh.

---

## Step 3 — Summarize with Claude API

Pipe the extracted text into a Claude API call to generate a digest. Use the `claude-api` skill or the Anthropic SDK directly. Recommended model: `claude-sonnet-4-6` or newer.

---

## Key Files

| Path | Purpose |
|---|---|
| `.agents/skills/browser/SKILL.md` | Full browse CLI reference |
| `.agents/skills/cookie-sync/SKILL.md` | Cookie sync usage and troubleshooting |
| `.agents/skills/autobrowse/SKILL.md` | Higher-level browsing automation |
| `skills-lock.json` | Tracks installed skill versions |

---

## Troubleshooting

**cookie-sync: "No DevToolsActivePort found"**
Chrome isn't running with remote debugging. Relaunch with `--remote-debugging-port=9222`.

**cookie-sync: "No open page targets found"**
Open at least one tab in the debugging Chrome window.

**browse: auth rejected by X**
Re-run cookie-sync with `--stealth` and optionally `--proxy "City,ST,US"` to match your local IP's geolocation.

**Cookies expired**
Re-run cookie-sync with `--context <id>` to refresh without creating a new context.
