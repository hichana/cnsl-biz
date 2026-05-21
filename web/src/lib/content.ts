export type Tone = "roast" | "cheeky" | "serious";

export type Service = {
  no: string;
  icn: string;
  title: string;
  body: string;
  roast: string;
  cheeky: string;
  serious: string;
};

export type ProcessStep = {
  no: string;
  title: string;
  body: string;
  stat: [string, string];
};

export type Platform = { mark: string; name: string; tag: string };

export type Tier = {
  name: string;
  price: string;
  per: string;
  desc: string;
  feats: string[];
  cta: string;
  featured?: boolean;
};

export type Faq = { q: string; a: string };

export const SERVICES: Service[] = [
  {
    no: "01",
    icn: "</>",
    title: "Refactoring",
    body: "We unwind the 2,400-line App.jsx your AI cheerfully copy-pasted itself into. Real modules, real names, real separation of concerns.",
    roast: "If your file is named final-FINAL-v3-USE-THIS.jsx, please call.",
    cheeky:
      "Long files, tangled imports, four versions of the same component — we untangle it.",
    serious:
      "Modularization, naming consistency, dead-code removal, dependency hygiene.",
  },
  {
    no: "02",
    icn: "?",
    title: "Feature Audits",
    body: "We walk every user flow and tell you which features actually work, which ones half-work, and which ones the AI hallucinated entirely.",
    roast:
      'Spoiler: your "AI-powered analytics dashboard" returns Math.random().',
    cheeky:
      "We map every flow and grade what ships, what stalls, and what's faking it.",
    serious:
      "End-to-end flow validation, gap analysis, prioritized findings report.",
  },
  {
    no: "03",
    icn: "DB",
    title: "Data Stewardship",
    body: "PII in localStorage? Public Supabase tables? Stripe keys on the client? We audit what you're storing, who can see it, and how badly that ends.",
    roast: "Your users' phone numbers are one curl away. We checked.",
    cheeky: "Where data lives, who can read it, and what regulators would say.",
    serious:
      "RLS policies, encryption at rest, retention, consent, GDPR/CCPA posture.",
  },
  {
    no: "04",
    icn: "!",
    title: "Bug Fixes",
    body: "“My AI is stuck in a loop trying to add a payment gateway.” We've seen it. We can read the repo and tell you why, in English.",
    roast: 'We won\'t ask why there are 47 commits called "trying again".',
    cheeky: "Stuck loops, regressions, payment integrations that almost work.",
    serious:
      "Root-cause diagnosis, targeted fixes, regression tests for what we touched.",
  },
  {
    no: "05",
    icn: "T",
    title: "Testing",
    body: "Unit, integration, end-to-end. We write the tests your AI swore it had written and then quietly didn't.",
    roast: 'Your test suite is one console.log("works!") in App.jsx.',
    cheeky:
      "Coverage on the parts that matter — checkout, auth, anything that loses money.",
    serious:
      "Vitest/Jest unit, Playwright/Cypress E2E, CI integration, coverage gates.",
  },
  {
    no: "06",
    icn: "C",
    title: "CTO Oversight",
    body: 'A senior engineer in your standup who reads PRs, says "no" to footguns, and answers the question "is this dumb?" before you ship it.',
    roast: "Like a CTO, except we'll actually return your Slack messages.",
    cheeky:
      "Architecture review, hiring help, a grown-up on the technical decisions.",
    serious:
      "Fractional technical leadership, architectural reviews, hiring support.",
  },
  {
    no: "07",
    icn: "☠",
    title: "Security Scans",
    body: "SonarQube, Snyk, Semgrep on a schedule, plus a human reading the results. Turns the 1,200-finding wall of red into the 6 things that matter today.",
    roast: "Your .env is in git. Has been since March.",
    cheeky: "We run the scanners and triage the noise so you don't.",
    serious:
      "SAST, SCA, secret scanning, dependency triage, remediation roadmap.",
  },
  {
    no: "08",
    icn: "☁",
    title: "Cloud & Infra",
    body: "Vercel, Supabase, Cloudflare, the works. Set up properly — staging, prod, backups, env vars in one place, deploys that don't break on Sundays.",
    roast: "Yes, you can have a staging environment. No, prod isn't one.",
    cheeky:
      "Environments, secrets, deploys, backups — boring stuff done right.",
    serious:
      "Environment topology, IaC, CI/CD, secrets management, observability hooks.",
  },
  {
    no: "09",
    icn: "◎",
    title: "Observability",
    body: "LangChain traces, Braintrust evals, Sentry, logs that aren't just console.error. So next time it breaks, you'll know before your user emails you.",
    roast: "“It works on my machine” is not a monitoring strategy.",
    cheeky: "Traces, logs, evals, alerts — eyes on the thing while you sleep.",
    serious:
      "LLM tracing, evals, error tracking, structured logging, SLO/alert design.",
  },
];

export const PROCESS: ProcessStep[] = [
  {
    no: "01",
    title: "Triage",
    body: "You hand us the repo, the dashboard, the panic. 48 hours later we tell you what's actually broken, in plain English.",
    stat: ["TURNAROUND", "48 HRS"],
  },
  {
    no: "02",
    title: "Audit",
    body: "Static analysis, security scans, dependency forensics, a manual read of the parts that look suspicious. Every finding is ranked.",
    stat: ["FINDINGS", "RANKED P0–P4"],
  },
  {
    no: "03",
    title: "Refactor",
    body: "We rip out the spaghetti, leave the logic that works, write tests around it, and document what we changed and why.",
    stat: ["DELIVERY", "WEEKLY PRs"],
  },
  {
    no: "04",
    title: "Hand-Off",
    body: "Docs, runbooks, deploy pipeline, a senior on Slack. You walk away with software you understand and a crew on retainer if you want one.",
    stat: ["OUTCOME", "YOU OWN IT"],
  },
];

export const PLATFORMS: Platform[] = [
  { mark: "▲", name: "Vercel", tag: "Deploy" },
  { mark: "S", name: "Supabase", tag: "Backend" },
  { mark: "Br", name: "Braintrust", tag: "Evals" },
  { mark: "Lc", name: "LangChain", tag: "Tracing" },
  { mark: "Se", name: "Sentry", tag: "Errors" },
  { mark: "Cf", name: "Cloudflare", tag: "Edge" },
  { mark: "St", name: "Stripe", tag: "Billing" },
  { mark: "Cl", name: "Clerk", tag: "Auth" },
  { mark: "Pg", name: "Postgres", tag: "Data" },
  { mark: "Ca", name: "Claude managed agents", tag: "Agents" },
  { mark: "Ha", name: "Hermes Agents", tag: "Agents" },
  { mark: "Gh", name: "GitHub", tag: "Agents" },
];

export const TIERS: Tier[] = [
  {
    name: "Triage",
    price: "$250",
    per: "one-time",
    desc: "A 90-minute audit and a written report. The fastest way to find out what's actually wrong.",
    feats: [
      "Repo walkthrough call",
      "Written audit (P0–P4)",
      "Stack & infra inventory",
      "1 week of Slack follow-up",
    ],
    cta: "Book a triage",
  },
  {
    name: "Cleanup",
    price: "$2,500",
    per: "/ month",
    desc: '20 hours a month of senior engineering. Bug fixes, refactors, the slow drumbeat of "actually finish that".',
    feats: [
      "20 hrs senior eng / mo",
      "Weekly PRs & async standup",
      "Security scans (Snyk + Semgrep)",
      "Slack channel",
    ],
    cta: "Start cleanup",
  },
  {
    name: "Crew",
    price: "$6,500",
    per: "/ month",
    desc: '60 hours, a fractional CTO, full security & observability setup. For founders past the "is this an app?" phase.',
    feats: [
      "60 hrs senior eng / mo",
      "Fractional CTO oversight",
      "Full security pipeline (SAST + SCA)",
      "Observability stack (Sentry + LangChain)",
      "Architecture reviews",
    ],
    cta: "Hire the crew",
    featured: true,
  },
  {
    name: "Demolition",
    price: "Custom",
    per: "scoped",
    desc: 'When "refactor" stops being honest. We tear it down to load-bearing logic and rebuild it properly.',
    feats: [
      "Full rewrite or replatform",
      "Dedicated team",
      "Migration & data plan",
      "White-glove handover",
    ],
    cta: "Talk to us",
  },
];

export const FAQS: Faq[] = [
  {
    q: "I built it with Cursor / Bolt / Lovable. Will you still touch it?",
    a: "Yes. We don't care which copilot wrote it; we care whether it's the kind of mess we can clean. Most of the time, the answer is yes. We've seen worse than yours.",
  },
  {
    q: "Are you going to publicly roast my code?",
    a: "No. We are professionally roast-y on the marketing site; in the actual engagement we are kind, NDA-bound, and somewhat disappointed only in private.",
  },
  {
    q: "My AI rewrote the same function fourteen times. Help.",
    a: "Classic. We diff the versions, pick the one that's closest to correct, delete the other thirteen, and write a test so it never regenerates them. Total job: usually under a day.",
  },
  {
    q: "Can you actually set up auth properly? I have three half-finished attempts.",
    a: "Yes. We'll consolidate to one provider (Clerk, Supabase Auth, Auth.js — your call or ours), wire up session, roles, and password reset, and remove the other two attempts. Two to four days, typically.",
  },
  {
    q: "How fast can you start?",
    a: "Triage in 48 hours from a signed engagement. Real work on the codebase usually starts the same week. We don't do month-long discovery phases.",
  },
  {
    q: "Will you teach me what's broken, or just fix it?",
    a: "Both. Every PR has a plain-English summary, every audit comes with a walkthrough call. You'll know what we changed, why, and how to spot the same mistake next time. You hired a crew, not a black box.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Always. Standard mutual NDA on the way in, we never reference clients by name without explicit written permission, and we don't publish before/afters of your repo.",
  },
];

export const MARQUEE_TOP: string[] = [
  "INFINITE LOOP DETECTED",
  "AUTH MIDDLEWARE: TODO (3 MO. AGO)",
  ".ENV.LOCAL COMMITTED",
  "0% TEST COVERAGE",
  "useEffect() RUNNING 1,400x",
  "CORS: *",
  "ROW LEVEL SECURITY: DISABLED",
  'console.log("WORKS!")',
  "STRIPE_SECRET_KEY EXPOSED",
  "NPM AUDIT: 412 VULNS",
];

export const MARQUEE_CTA: string[] = [
  "Book a triage call",
  "We clean up after your AI",
  "Refactor. Audit. Sleep.",
  "Your AI shipped a security hole",
];
