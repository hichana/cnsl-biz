## JOB SEARCH:
    - before doing a social media strategy need to get some things in order
        - clean up X posts and responses
        - Make English CV
        - LinkedIn 
            - fix up profile
                - includes my work in Founder University, Resolved.sh, and so on
                - see notes from Bianca in WhatsApp
            - toggle open for work
                - only for recruiters setting
        - YT, X, LinkedIn strategy
        - Make Japanese CV

## PROJECT: DIRTY JOBS:
- need
    -x customize copy throughout
    -x set up email
        - hello@mail.dirtyjobs.studio
        - matt@mail.dirtyjobs.studio
    -x deploy to Vercel
        - set up custom domain
    -x favicon
    - reword copy again

Reframe it all around:
- security and observability
- think we can assume the AI will always be 



    - fix current bug
    - Add Google Analytics
    - rethink pricing
    - Add Calendly link functionality
    - add platform logos to front page (in downloads folder now)
    - Ask Adam if he can do the $2500/mo plan
    -x set up now
        - Calendly
            - free for now, they can schedule a meeting and I'll create a payment link
    - set up after getting firt bite
        - Stripe products corresponding to DJ pricing
        - Slack
        - Hermes connected to Slack
        - Hermes with its own email

- http://dirtyjobs.studio
    - do as much upfront work before buying the domain and populating SquareSpace with content, setting up Stripe, and so on
- Business: Productized AI Slop cleanup targeting non-technical founders who built applications using AI
- Internal tools
    - Calendly
- Services
    - refactoring
    - feature and functionality audits
    - user data stewardship audits
    - bug fixes
        - "My AI is stuck in a loop trying to add a payment gateway; audit this repository file and tell me why it's breaking."
    - testing (unit, integration, e2e)
    - CTO oversight, architectural validation
    - security scans (we proxy to other API services like either through API or we just use our own sub)
        - https://www.sonarsource.com/products/sonarqube/
        - Snyk
        - https://semgrep.dev
    - cloud services/infrastructure setup and management (Vercel, Supabase, etc.)
    - Observability (LangChain, Braintrust, etc.)
- website
    - inspired by https://upcode.com/unlimited
    - use the example of the train going off the tracks meme -- "Is this how your app probably works?" -- "There's a difference between 'it works' and 'It WORKS!!!'"
    - use Squarespace: For a limited time, take 20% off any new website plan. Use code at checkout: MAY20WF
    - if traction, can incrementally build my own platform and billing
    - needs an ironclad TOS and privacy policy to protect us
    - for hourly, set up Calendly upfront meeting payments: https://calendly.com/payments
- email
    - set it up in Maileroo to forward to my GMAIL
- SNS
    - TikTok videos on code walkthroughs targeting vibe coders
    - mayb use a service that does UGC to make vertical influencer videos
- experiment
    - do a free trials, ask Adam first if he'd be willing to help out. All I'd be asking him for is to tell me how the free trial goes so I know how to approach it for others. I don't see him as a subscriber unless he actually needs it.
    - Maybe show to Adam, ask how much he'd be willing to pay and if he's interested
        - maybe I can use his Studio OS to run it, frame as if I'm buildling a studio and was inspired by StudioOS
    - going above and beyond for initial customers will be key
    - find trusted initial customers who won't abuse the system
- process
    - clients can submit infiinite requests, but we strictly control the throughput, scope and communication channels
        - we run sprint cycles (fast tasks, planned milestones) with clear priorities, weekly reporting (Hermes will have to facilitate this), one accountable delivery lead
        - scope changes are handled by reprioritization / change control
    - we record video walkthroughs using OBS, share with client via Google Drive or CloudFlare or something
    - our Hermes project Kanban is also hooked up to Slack where users can modify (ex. mark something "DONE")
        - actually, managing the Kanban board via Slack may be *the* way clients queue up tasks
        - I could step in and decompose and scope things on their Kanban, which would be using their time
    - Start a Slack, invite users
    - automate as I get experience and more clients come in
    - once sufficient clients come in, jack up pricing significantly
    - cancel at any time
    - Work is done on only one task at a time, even when waiting for client feedback
    - zoom calls can happen but use client alotted time
- internal
    - leverage Hermes agent for each client


































































































```

An "Unlimited" AI slop cleanup studio operates on a **Productized Service** model. Instead of trading hours for dollars, you sell validation checks on features of existing vibe coded apps (see the example of the train going off the track -- use this on the home page) as a recurring monthly subscription. While clients can submit infinite requests, we strictly control the throughput, scope, and communication channels to maintain high profitability.
---
markdown# Blueprint: The "Vibe-Check" Validation Studio

This studio operates as a productized subscription service targeting non-technical founders who build applications using AI. Your service provides fractional CTO oversight, security guardrails, and architectural validation to bridge the gap between "it works" and "it's secure."

---

## 1. Productizing the Service (Scope of Work)

Because "code review" can turn into an infinite rabbit hole, you must explicitly define what constitutes a single "request."

### What Clients CAN Request (One at a Time):
* **Security Vibe-Checks:** "Scan my login page for vulnerabilities" or "Check if my database is exposed."
* **Complexity Audits:** 
* **Credential Sweep:** Scanning repositories for accidentally hardcoded OpenAI, Stripe, or AWS secret keys.
* **Architectural Sign-Off:** Reviewing a proposed database structure before the founder instructs their AI to build it.

### Strict Exclusions (What You Do NOT Do):
* You do **not** write the code for them.
* You do **not** log into their Cursor or Replit to fix the bug yourself.
* You act strictly as the **Auditor and Advisor**. You give them the exact prompt or architectural map to hand back to their AI assistant.

---

## 2. Operational Workflow: Managing the Queue

Vibe-coders move incredibly fast and expect instant gratification. You must bottleneck their speed to protect your margins.

Use code with caution.[Founder Submits Repo Link] ➔ [Studio Runs Automated Scan] ➔ [Senior Dev Audits & Records Loom] ➔ [Founder Approves / Fixes]
### The "Access & Delivery" Protocol
1. **Repository Access:** The client shares a read-only GitHub or GitLab repository link via their Trello/Notion delivery board.
2. **The 24-Hour Scan:** Your team plugs the repo into static analysis tools (like SonarQube, Snyk, or Semgrep) to instantly flag low-hanging security bugs and code complexity scores.
3. **The Human Translation (The Value Add):** A senior developer reviews the automated report and records a 3-minute video via Loom. They explain the problem in plain English: *"Your AI placed your database password directly in the frontend code. Copy-paste this exact text into your AI to make it use an environment variable instead."*
4. **Closing the Loop:** The task is marked "Done." The client goes back to their AI, fixes it, and can then submit the next validation request.
---

## 3. High-Margin Unit Economics

Because you aren't doing heavy manual coding, one senior full-stack developer can manage a significantly larger pool of validation clients than a traditional design or development studio.

* **Subscription Price:** $1,500 to $2,500 / month.
* **Developer Capacity:** One senior developer can handle **6 to 8 active validation subscriptions** (compared to only 3 for a design studio), because reviewing code and recording a Loom takes 30–45 minutes per task.
* **Automation Arbitrage:** 70% of the security and complexity flaws will be caught by automated software scanners. Your human labor is only paid to interpret those results for a non-technical founder.

---

## 4. Guardrails for Technical Risk

### Problem: The "Massive Spaghetti Codebase"
* **Scenario:** A client submits a repository with 5,000 lines of undocumented, AI-generated code jammed into a single file and asks, "Is this secure?"
* **Fix:** Reject the request as "Out of Scope due to size limits." Force the client to break the request down. They must ask you to audit specific features one by one (e.g., *“Validate just the payment checkout logic script”*).

### Problem: The Liability Loophole
* **Scenario:** You validate an app, but it gets hacked later on, and the client tries to blame your studio.
* **Fix:** Your terms of service must explicitly state that you are a **consulting and advisory service**, not a guaranteed insurance policy or a certified cybersecurity firm. Clients sign an explicit waiver acknowledging that final implementation rests entirely on them and their AI engine.
---

---

## 1. Internal Workflow & Capacity Management

To survive offering "unlimited" work, you must control the velocity of production through strict internal rules.

### The "One Active Module" Rule
* **The Queue:** Clients can log 100 cleanup tasks in their backlog, but the team only touches **one active module at a time** per subscription.
* **The Gate:** Work on Module B never begins until the client formally approves and merges the PR for Module A.
* **The Cap:** This natural bottleneck limits a client's monthly output based on their review speed and how fast they can QA and deploy.

### Standardized Scope & Turnaround
* **Micro-Tasks:** Break large cleanups into feature-sized slices. A bloated Express API becomes five separate route-group cleanups. A messy React app becomes component-by-component. Never accept "clean up the whole codebase" as a single request.
* **The 48-Hour Promise:** Turn around standard module cleanups within 24–48 hours of a complete, valid submission.
* **Strict Exclusions:** Explicitly ban high-friction, non-scalable work. No greenfield development, no full rewrites from scratch, no architecture migrations, no DevOps/infra provisioning, and no debugging production incidents. Cleanup only — inputs must be working code.

### Asynchronous Communication
* **No Meetings:** Eliminate all Zoom calls, discovery sessions, and voice/video consultations.
* **Structured Inputs:** Clients submit requests via a standardized form with mandatory fields: repo link or code paste, the specific module/feature/route to clean, a plain-English description of what it currently does, and any constraints (e.g., "can't change the public API surface"). Missing information pauses the clock immediately.

---

## 2. The Subscription Buffet Math & Profit Margins

Like a gym membership or an all-you-can-eat buffet, profitability relies on utilization averages and AI-leverage arbitrage. Vibe coders ship fast and ship messy — most won't send requests every day.

```
[Low-Usage Clients]   --> Pay $997/mo --> Submit 1-2 cleanups/mo  --> HIGH PROFIT
[Heavy-Usage Clients] --> Pay $997/mo --> Submit 8-10 cleanups/mo --> LOW PROFIT
AVERAGE PORTFOLIO MARGIN: 60% – 75% (AI does the heavy lifting)
```

### Portfolio Balancing
* **The Sleepers (30%):** Vibe coders who shipped, moved on to the next thing, and only check in occasionally. They pay and barely submit.
* **The Steady Users (50%):** Founders iterating on their product weekly. They submit regularly but are slow to review PRs, naturally throttling their own throughput.
* **The Power Users (20%):** Obsessive builders who want everything cleaned yesterday. Margin is slim, but they're subsidized by Sleepers and generate the loudest word-of-mouth.

### Financial Blueprint (AI-Leveraged Model)
Target a **60% to 75% gross profit margin** by using Hermes and other AI agents to do the bulk of analysis and code transformation — human review is the quality gate, not the production engine.

* **Monthly Subscription Price:** $997 / month (indie tier) or $1,997 / month (startup tier with priority queue)
* **Target Capacity:** One senior reviewer (you or a contractor) oversees 5–8 active client subscriptions simultaneously, with AI handling first-pass cleanup.
* **Reviewer Cost:** $0 (you) or ~$1,500 / month flat rate for a part-time contractor.
* **AI & Software Ops Cost:** ~$75 / month per client (API costs, tooling).

$$\text{Gross Profit per 6 Clients @ \$997} = \$5,982 \text{ (Revenue)} - \$1,500 \text{ (Labor)} - \$450 \text{ (Ops)} = \$4,032$$
$$\text{Gross Profit Margin} ≈ 67\%$$

---

## 3. The Minimalist Software Stack

Do not build a custom client portal until revenue justifies it. Vibe coders respect no-fluff tooling — keep it simple.

| Tool Category | Recommended Software | Operational Purpose |
| :--- | :--- | :--- |
| **Billing & Portal** | **Lemon Squeezy** or **ManyRequests** | Handles checkout, recurring subscriptions, pause/cancel, and client-facing request history. |
| **Task Management** | **Linear** or **Notion** | Kanban board: *Backlog → Needs Info → In Progress → Review / PR Open → Approved & Merged.* |
| **Code Delivery** | **GitHub PRs** | All cleanup delivered as pull requests against the client's repo. Clean diff, reviewable, mergeable. |
| **Feedback** | **Loom** + **PR comments** | Clients record a 60-second Loom walking through concerns, or leave inline PR comments. No live calls. |
| **Request Intake** | **Tally** or **Typeform** | Standardized intake form. Triggers a Linear ticket automatically via Zapier/Make. |
| **Asset & Context Storage** | **Notion page per client** | Stores repo links, stack notes, constraints, brand/naming conventions, and past decisions. |

---

## 4. Guardrails: Handling System Abusers

Some clients will try to bypass the model. Use these structural policies to handle difficult behaviors without burning margins.

### Problem: The "Ship It All This Week" Founder
* **Behavior:** Client submits seven cleanup requests at once because they have an investor demo on Friday.
* **Fix:** Point directly to the terms of service — one active module at a time. Offer a **"Seat Multiplier"** upgrade: want two modules worked in parallel? Buy a second subscription slot. Demos are not your emergency.

### Problem: The "Actually, Rewrite It" Scope Creeper
* **Behavior:** Client submits a cleanup request but the PR feedback is "can you just redo this whole thing in a better pattern?"
* **Fix:** Cleanups operate on the existing code surface. A rewrite is a new request scoped as a separate module. If the whole file is beyond salvaging, the deliverable is a written assessment — not a greenfield build. Full rewrites are excluded from all tiers.

### Problem: The "Make It Perfect" Revision Loop
* **Behavior:** Client reopens the same PR with 12 rounds of nitpick comments over two weeks, blocking the queue.
* **Fix:** Each round of substantive feedback counts as a new active task. While the team is addressing "change all var to const" on Module A, Module B sits frozen in backlog. The financial penalty for endless revisions falls on the client's own delayed timeline, not on margins.

### Problem: The "Just Clean It Up" Ghost
* **Behavior:** Client submits a request with no module specified, no description of current behavior, and a link to a 40,000-line monorepo.
* **Fix:** Move immediately to the "Needs Info" column. The 48-hour clock does not start until the intake form is complete with: specific file/module path, what it currently does, and any constraints. Auto-reply template handles this with zero manual effort.

### Problem: The "This Isn't AI Slop, This Is Custom" Client
* **Behavior:** Client insists their hand-written spaghetti code deserves special treatment outside the standard cleanup scope.
* **Fix:** All code is treated the same. The service cleans structure, removes redundancy, improves naming, and enforces consistency — regardless of origin. If their codebase requires architecture consulting or bespoke engineering decisions, that's a different engagement at a different price point.



    - emoji options
        - hazmat guy: https://openmoji.org/library/emoji-E2D9
        - shovel: https://openmoji.org/library/emoji-1FA8F
