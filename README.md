## Browserbase Setup for Authenticated X Access

### One-time setup
1. Get your API key at https://browserbase.com/settings and set `BROWSERBASE_API_KEY` in your environment.
2. Install the browse CLI: `npm install -g @browserbasehq/browse-cli`
3. Install cookie-sync dependencies: `cd .claude/skills/cookie-sync && npm install`

### Persist your X session (run once with Chrome open)
Launch Chrome with remote debugging enabled (or enable `chrome://flags/#allow-remote-debugging`), make sure you're logged into X, then run:

```bash
node .claude/skills/cookie-sync/scripts/cookie-sync.mjs --domains x.com,twitter.com
# → Outputs a context ID, e.g. ctx_abc123 — save this
\```

This creates a **Browserbase persistent context** with your X cookies. The context ID is reusable across sessions — you don't need your laptop open again unless cookies expire.

### Browse X as yourself (any future session)
```bash
browse open https://x.com --context-id ctx_abc123 --persist
browse snapshot   # read the page
browse stop
\```

The `--persist` flag saves any new cookies back into the context, keeping the session fresh.

### When cookies expire
Re-run cookie-sync with the same context ID to refresh without creating a new one:
```bash
node .claude/skills/cookie-sync/scripts/cookie-sync.mjs --domains x.com,twitter.com --context ctx_abc123
\```