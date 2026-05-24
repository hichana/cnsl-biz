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
- goal today
    -x make instead a 15 minute intro call
    -x refactor pricing, make an intro offer on the site
        - make sure CC can use MCP server to
            - view our current site,
            - the DesignJoy site's pricing model
        - copy DesignJoy's model
        - "get an immediate Senior Engineer"
        - "live pair co-working"
    - post about it all on LinkedIn, post on X



Hermes Agent can help anyone defy gravity. I'll explain:

Remember the peak hype a few years ago around "UNLIMITED" graphic design studios? They were SaaS-like "creative-as-a-service" platforms that promised (and some delivered, mostly) unlimted logos, product and web design, etc. for a flat monthly fee.

I'm creating my own process to make that actually viable and it's not by having AI do the work for you.

In my case, instead of a studio selling graphic design, DJS (Dirty Jobs Studio) sells unlimited Senior Engineer oversight for founders shipping with AI.

Here's how it works 👇 👇 👇 

1) Hermes: checks the hello@mail.dirtyjobs.studio inbox every hour. For each email, Hermes:

- tosses it if it's junk.
- adds it to a once-daily digest if it's a potential customer (so I can respond personally/efficiently).
- decomposes it into multiple scoped issues if it's a work order, placing them on the Kanban board for the client and me to see, and/or reprioritizing them if that's what the client wants.

2) Hermes: checks multiple Kanban boards multiple times a day and fishes out the highest priority task. It can efficiently look across all Kanban boards for all clients and tell me what's next. All I do is ask.

3) Me: get Senior Engineer shit done, record my screen, meet with clients, and so on.

Fluidly and regularly triaging inbound, and routing/managing multiple Kanban boards based on client needs is a HUGE enabler. It removes much of the switching costs I'd normally incur managing the work, and it consolidates information so I'm not overwhelmed. 10 seconds saved here, 30 seconds saved there, it really adds up.

My computer setup:

- Main machine: MacBook Pro M5 w/ 32gb RAM
- Hermes machine: Mac Mini M2 w/ 16gb RAM

Internally, for each client, I set up:

- a folder on the Hermes machine named after the client/project, for example: "initech_app"
- a Google Drive folder with the same name so client data can be securely saved/synced
- !!!a new Hermes 'profile' with the same name, which CREATES AN INTERNAL WORKER AGENT WHO KNOWS EVERYTHING ABOUT THE CLIENT/PROJECT!!!
    ***THIS IS POWERFUL:: It means each client/project gets its own SOUL.md (the agent's identity), MEMORY.md (the agent's memories about the project) and the USER.md (what the worker agent knows about how I, the Senior Engineer, want to engage that particular client).***
- a Telegram channel with the same name for me to talk to the worker agent
- a Kanban board with the same name, managed by the worker agent
- a Slack channel with the same name that is set up basically the same as the email flow above

Telegram is my Grand Central Station:

- when I respond to emails, I just write them out in Telegram for Hermes to send.
- I don't usually look at the Kanban boards directly, instead I have Hermes present it all to me in Telegram. Hermes modifies them, marks them DONE, and so on.
- if I need changes to my calendar and/or Calendly, I just ask in Telegram since Hermes is set up for that too
- I frequently manage Telegram context by using the "/new" command to create new sessions when chatting with the client's agent. If there is some important info I want saved, I just ask Hermes to add it to the client's Google Drive folder, so nothing is lost.

Here's where DJS closes the loop:

"UNLIMITED" design studios get the benefit of making a logo or something, marking it DONE and forgetting about the client until their next work order. 

DJS can't be that passive. So each worker agent monitors the app, even if there is no active work order from the client:

- Is your token usage spiking?
- Is the website down?
- Have any Sentry errors come through?

I sleep, but each worker agent I set up for each client doesn't sleep, ever. If something needs to be addressed right away, we do that. Something added to the Kanban that the client didn't think they needed, done.

A real Senior Engineer wouldn't just sit around and wait for the next task, they'd be proactive and work in the best interests of whoever it is they're working for.

So what is really happening here, Hermes:

- dramatically reduces my switching costs between multiple clients and tasks.
- simplifies communication
- manages things so I can do the engineering side of things that I'm best at

That's how I make "unlimited Senior Engineer oversight for founders shipping with AI" work. 

And I believe we're all on the same playing field, because aside from my engineering skills, this framework the only IP that I'm creating. 

I'm not building my own app, I'm building a Hermes crew that frees me up to help clients build amazing apps and succeed.







- show my post to CLaude, have it make an Excalidraw for me
- Ask that girl from X to do me a return favor and re-post my post


- set up my internal stack (this is the innovation I can bring):
    - Hermes agent triage
        - has its own email (if get a bite/paying customer, just sign up for AgentMail and hook up the dirtyjobs, make a new subdomain for the agent email addresses like 'talk.dirtyjobs.studio', problem solved)
        - is connected to Slack
        - works with Calendly via MCP
        - manages the kanban board
            - field client emails
            - scoping, decomposition
            - task creation and management
        - does email updates to the client
        - communicates with me, often as an "employee" who then communicates with the client for us
        - 

- update Hermes agent, find out what's new

- possible contact asks:
    - Adam
        - will give him my full-time hours for at least two months as I refine my internals to make the process smooth and scaleable.
        - maybe I can use his Studio OS to run it, frame as if I'm buildling a studio and was inspired by StudioOS
    - Maybe ask Beamer if he's be open to me doing a free month of service (would let me test out the automations)
- marketing idea
    - make the trades framework open source, put it on Github and extend it to the community. 
- Dirty Jobs V2 completion (after getting firt bite)
    - Set up Stripe products corresponding to DJ pricing
    - actually build the internal stack
- security scans (we proxy to other API services like either through API or we just use our own sub)
    - https://www.sonarsource.com/products/sonarqube/
    - Snyk
    - https://semgrep.dev
- maybe use a service that does UGC to make vertical influencer videos
    - or just set up my own process for auto making and posting them
    - TikTok videos targeting vibe coders
- process
    - clients can submit infiinite requests, but we strictly control the throughput, scope and communication channels
        - we automate as much of the triage, task management, communication and so on
        - scope changes are handled by reprioritization / change control (automated as much as possible)
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
- need
    -x customize copy throughout
    -x set up email
        - hello@mail.dirtyjobs.studio
        - matt@mail.dirtyjobs.studio
    -x deploy to Vercel
        - set up custom domain
    -x favicon

- Dirty Jobs full V1 completion
    -x finalize copy
        - Overall reframe around:
            - security, senior engineer oversight and observability
            - think we can assume the AI will always be the one to implement
    -x rethink pricing
    -x add platform logos to front page (in downloads folder now)
    -x Add Google Analytics
    -x Add Calendly link functionality
        - set up Calendly to use my logo and email
    -x add OGimage
    -x set up now
        - Calendly
            - free for now, they can schedule a meeting and I'll create a payment link
    -x make sure Favicon is live on prod
    -x reviste Privacy policy and TOS based on new content
    -x fix the before train gif
    -x schedule some times on calendar to make it look like am unavailable at certain periods
    -x set up X and LinkedIn profiles

- http://dirtyjobs.studio
    - do as much upfront work before buying the domain and populating SquareSpace with content, setting up Stripe, and so on
- I think my innovations here can be 
    - triage via Hermes
    - Hermes-facilitated communication
    - Hermes is the one that manages the board, does scoping and decomposes work into achievable chunks
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
    - cloud services/infrastructure setup and management (Vercel, Supabase, etc.)
    - Observability (LangChain, Braintrust, etc.)
- email
    - set it up in Maileroo to forward to my GMAIL
- website
    - inspired by https://upcode.com/unlimited
    - use the example of the train going off the tracks meme -- "Is this how your app probably works?" -- "There's a difference between 'it works' and 'It WORKS!!!'"
    - use Squarespace: For a limited time, take 20% off any new website plan. Use code at checkout: MAY20WF
    - if traction, can incrementally build my own platform and billing
    - needs an ironclad TOS and privacy policy to protect us
    - for hourly, set up Calendly upfront meeting payments: https://calendly.com/payments
- experiment
    - do a free trials, ask Adam first if he'd be willing to help out. All I'd be asking him for is to tell me how the free trial goes so I know how to approach it for others. I don't see him as a subscriber unless he actually needs it.
    - Maybe show to Adam, ask how much he'd be willing to pay and if he's interested
    - going above and beyond for initial customers will be key
    - find trusted initial customers who won't abuse the system

        - actually, just write a post both on X and LinkedIn about this, before I even build it!
        - I started an "unlimited" solo studio, here's how I plan on making it work (or something like that)

Hermes agent has made the 'unlimited design studio' idea a reality for anyone. 
Hermes Agent is helping me defy gravity and I want to see what others think. 

I'm doing that, but in my case I'm not selling graphic design, I'm selling human-in-the-loop Senior Engineers for founders shipping with AI agents.
We both see the same inbound, the same work orders.
Junk is tossed, and potential customers are provided to me in a single daily digest so I can respond personally.
2) Hermes tosses junk emails, 
Potential clients are flagged for me. I respond personally.

) If the email With each work order captured from step 1, Hermes decomposes it into multiple scoped issues, placing them on the Hermes Kanban board (each client has their own). It re-prioritizes the Kanban if the client says the need it fast, flags me if it needs a human touch.


Full disclosure, I work ALL THE TIME, and checking multiple Kanban boards woulI will check multiple kanban boards constantly, but Hermes can mediate so it's not overwhelming. 

) Hermes flags me, the Senior Engineer, AFTER it's prioritized the various tasks across multiple client Kanban boards for me. Since each client of Dirty Jobs Studio has their own Slack channel where we can chat at any time, it means Hermes can also see it. 

2) Checking multiple Kanban boards multiple times a day and fishing out the highest priority task would be distracting, so I let Hermes mediate here. It can efficiently look across all client Kanban boards and tell me what's next.

Hermes:
- removes cognitive load from
    - managing the Kanban
- let's me still be a person who engages with another person

Telegram is my lifeline to my Hermes Agent. 
- when I'm responding ot emails, I just toss it into Telegram and let Hermes send it for me

- I ask it to mark things done on the kanban, or change it it at all
- I ask it to draft and send email messages or Slack messages for me. Our telegram chat is grand central station.


Slack is a little different, somehow I like to be in there to respond instead of passing to Telegram
- Slack is set up and works mostly the same as email when it comes to managing Kanban, but I will respond more directly there.

You probably think that there is so much more needed to make an "UNLIMITED" Senior Engineer service work, and I'm sure there will be, but they are mostly supporting the Kanban process:

- Slack is integrated with my Hermes Agent as well, so it basically works the same as how I described the email flow above. 
- 



- has other tools like a connection to my calendar and Calendly, so scheduling is clear and runs through the same Telegram as everything else



- tips
    - I often use the /new slash command to start a new session and save tokens
    - my main Hermes profile corresponds to 

- each client has a project name (agent name/profile name), which has a repo where data can be saved


- basically the same process happens with Slack. each client gets their own Slack channel

This is key:
- 


Think about why an "UNLIMITED" design studio could work in the first place. A huge part of it is how discrete the work is, like "make a logo" gets "DONE", and there's another one after that, then "DONE" again. 

It's the clients who manage their brand and direction.

For AI builders, they also manage their brand and direction, but an app codebase is more like a single evolving 


The client's app needs to evolve, all parts, together. 
So imagine we set up LangGraph observability for you. Is your token usage spiking? Is your website down?

This is why we do integration If you know about software you'd know that's exactly why we do things like integration testing, so changing one small feature doesn't make the whole app explode. 

Each worker agent that runs for the client can monitor a live website for instance, or flag me if anything is broken. It can pipe into the client's Sentry account to see if any bugs have occurred. 




, and you realize it's because someone needs a design, you do it, done, move onto another client.

"Here's where we close the loop. Most services like this would wait for the client to ... but Hermes has a job it runs for each client. It flags me when it finds... so I can flag the user and we can add new work to the queue. "We still haven't set up Row Level Security for your database yet. Should we add that to your Kanban and prioritize it?"


and wiat to be told what to do. That's where this idea would fail. Instead, they need to be proactive, and think in the best interests of the person they're working for...

- letting Hermes relieve me of switching costs jumping between multiple Kanban boards and communication channels
- letting Hermes relieve me of switching costs, jumping from email to the Kanban boards, to doing research, or whatever. I can be task focused to get things done for the client
- consolodating information, like inbound potential customer messages, getting a digest and then responding in one go makes it much more efficient but still lets me be human.

, replicable by anyone who is serious about it.

And that's mostly it, my evolving framework to make an "UNLIMITED" Senior Engineer service work. 

