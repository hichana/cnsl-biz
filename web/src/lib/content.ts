export type Tone = "roast";

export type Service = {
  no: string;
  icn: string;
  title: string;
  body: string;
  bold: string;
  roast: string;
  includes?: string[];
};

export type ProcessStep = {
  no: string;
  title: string;
  body: string;
  stat: [string, string];
};

export type Platform = { mark: string; name: string; tag: string; logo: string };

export type Tier = {
  kind?: "triage" | "trade";
  tradeRef?: "01" | "02" | "03";
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
    icn: "☠",
    title: "Locks & Doors",
    body: "Security hardening for AI-built apps. Secrets out of git, RLS turned on, auth consolidated to one provider, dependency CVEs triaged, cloud permissions tightened.",
    bold: "We close the holes your AI didn't know it left open.",
    roast:
      "Your .env is in git. Has been since March. Your Stripe key is on the client. We checked.",
    includes: [
      "Secret scanning & rotation",
      "Auth consolidation (Clerk / Supabase / Auth.js)",
      "RLS, tenant isolation, PII handling",
      "Snyk + Semgrep + manual triage",
      "Cloud & agent permission review",
    ],
  },
  {
    no: "02",
    icn: "◎",
    title: "Wiring & Lights",
    body: "AI observability the way it actually needs to be done. Sentry for the app, LangSmith for the tracing LLM calls and seeing costs and prompt evals.",
    bold: "We show you exactly how everything works.",
    roast: "Traces, evals, alerts, cost visbility. You need these my friend",
    includes: [
      "Sentry + structured logs + alerts",
      "LangSmith traces",
      "Prompt versioning",
      "Agent / tool-call failure analysis",
      "LLM cost & latency dashboards",
    ],
  },
  {
    no: "03",
    icn: "C",
    title: "The Foreman",
    body: 'The Senior Engineer your team needs, bringing a "good bones" opinionated take on your code base so your AI agent can build out new features and you can scale.',
    bold: "We get you production-grade and keep you there.",
    roast:
      "We'll return all your Slack messages even without the promise of stock options.",
    includes: [
      "Architecture & PR review",
      "AI-generated code review",
      "Agent guardrails & approval gates",
      "Vendor & tooling decisions",
      "Roadmap sanity checks",
    ],
  },
];

export const PROCESS: ProcessStep[] = [
  {
    no: "01",
    title: "Triage",
    body: "Bring us into the fold, tell us your biggest problem or concern. We'll break it all down into a series of discrete facts that will inform which parts of our three trades will should focus on first.",
    stat: ["TURNAROUND", "48 HRS"],
  },
  {
    no: "02",
    title: "Plan",
    body: "Get a detailed plan for the work that you can confirm with your AI agent. We're ready to walk you through any part of it so you're on board.",
    stat: ["DELIVERABLE", "Detailed plan with access to a shared Kanban board"],
  },
  {
    no: "03",
    title: "Hammer away",
    body: "We get to work, staying in regular contact with you and sharing our progress. Each security hole closed or bug fixed is an opportunity for us to talk in plain-English, ZERO sycophancy.",
    stat: ["BENEFIT", "Human/AI collabo level 10,000, achieved"],
  },
  {
    no: "04",
    title: "Plan some more",
    body: "As your app becomes more and more production-grade, we adapt based on new issues that may have come along, new priorities for your startup. We adapt with you.",
    stat: ["RESULT", "You outpace the competition"],
  },
];

export const PLATFORMS: Platform[] = [
  { mark: "Sn", name: "Snyk", tag: "SCA", logo: "/assets/stack/snyk.svg" },
  { mark: "Sg", name: "Semgrep", tag: "SAST", logo: "/assets/stack/semgrep.svg" },
  { mark: "Wo", name: "WorkOS", tag: "Auth", logo: "/assets/stack/workos.svg" },
  { mark: "S", name: "Supabase", tag: "RLS / Auth", logo: "/assets/stack/supabase.svg" },
  { mark: "Se", name: "Sentry", tag: "Errors", logo: "/assets/stack/sentry.svg" },
  { mark: "Ls", name: "LangSmith", tag: "LLM traces", logo: "/assets/stack/langsmith.svg" },
  { mark: "Lc", name: "LangChain", tag: "Agents", logo: "/assets/stack/langchain.svg" },
  { mark: "Lg", name: "LangGraph", tag: "Workflows", logo: "/assets/stack/langgraph.svg" },
  { mark: "Br", name: "Braintrust", tag: "Evals", logo: "/assets/stack/braintrust.svg" },
  { mark: "▲", name: "Vercel", tag: "Deploy", logo: "/assets/stack/vercel.svg" },
  { mark: "Cf", name: "Cloudflare", tag: "Edge", logo: "/assets/stack/cloudflare.svg" },
  { mark: "St", name: "Stripe", tag: "Billing", logo: "/assets/stack/stripe.svg" },
  { mark: "Ca", name: "Claude managed agents", tag: "Agents", logo: "/assets/stack/claude-managed-agents.svg" },
  { mark: "Ha", name: "Hermes Agents", tag: "Agents", logo: "/assets/stack/hermes-agents.svg" },
  { mark: "Gh", name: "GitHub", tag: "Reviews", logo: "/assets/stack/github.svg" },
];

export const TIERS: Tier[] = [
  {
    kind: "triage",
    name: "Triage",
    price: "$250",
    per: "one-time",
    desc: "48-hour deep-dive. We map every gap in your product across all three Trades and hand you a prioritized, trade-by-trade remediation plan — so you know exactly which fires to put out first and what it'll cost.",
    feats: [
      "Repo & infra walkthrough call",
      "Security findings",
      "Observability gap analysis",
      "AI surface review (prompts, agents, tools)",
      "Written trade-by-trade remediation plan",
    ],
    cta: "Book the triage",
  },
  {
    kind: "trade",
    tradeRef: "01",
    name: "Locks & Doors",
    price: "$4,500",
    per: "/ sprint",
    desc: "4-week security hardening sprint. Secrets out of git, RLS on, auth consolidated, CVEs triaged, cloud permissions locked down.",
    feats: [
      "Secret scanning & rotation",
      "Auth consolidation (Clerk / Supabase / Auth.js)",
      "RLS, tenant isolation, PII handling",
      "Snyk + Semgrep + manual triage",
      "Cloud & agent permission review",
    ],
    cta: "Scope this trade",
  },
  {
    kind: "trade",
    tradeRef: "02",
    name: "Wiring & Lights",
    price: "$3,500",
    per: "/ sprint",
    desc: "4-week observability sprint. Sentry live, LangSmith traces wired, cost dashboards running, evals covering your critical prompts.",
    feats: [
      "Sentry + structured logs + alerts",
      "LangSmith traces wired",
      "Prompt versioning & eval suites",
      "Agent / tool-call failure analysis",
      "LLM cost & latency dashboards",
    ],
    cta: "Scope this trade",
  },
  {
    kind: "trade",
    tradeRef: "03",
    name: "The Foreman",
    price: "$4,500",
    per: "/ month",
    desc: "Senior Engineer on retainer. PRs reviewed, dashboards watched, agent failures triaged. The ongoing oversight layer your AI-built app actually needs.",
    feats: [
      "Architecture & PR review",
      "AI-generated code review",
      "Agent guardrails & approval gates",
      "Vendor & tooling decisions",
      "Roadmap sanity checks",
    ],
    cta: "Hire the Foreman",
    featured: true,
  },
];

export const FAQS: Faq[] = [
  {
    q: "I built it with Cursor / Bolt / Lovable / Claude Code. Will you still touch it?",
    a: "Yes. We don't care what you used. We care will continue to use them if it makes sense for you and your goals, or we'll guide you to use something better.",
  },
  {
    q: "Are you a dev shop, or consultants?",
    a: "No, we sell three products we call 'Trades', each with their own subset of features. Our AI agents and your AI agents are the ones who still do the heavy lifting as we steer them towards best practices that are now clear in the age of AI-assisted software development.",
  },
  {
    q: "Do you sign NDAs? How do you handle access?",
    a: "Yes. A mutual NDA on the way in is no problem. We work from named engineer accounts with least-privilege scopes, we never reference clients by name without explicit written permission, and we don't publish before/afters of your repo. We remove ourselves from your repos and services on the day the engagement ends.",
  },
  {
    q: "How fast can you start?",
    a: "Readiness audit kickoff within 48 hours of payment. Work starts very shortly after that. We don't do month-long discovery phases, we have AI for that.",
  },
  {
    q: "We have a Senior Engineer. Do we still need the Foreman?",
    a: "Plenty of teams could use an on-demand injection of technical talent who can fill in the gaps as-needed. Let your current engineers focus on what they're good at, let us do what they don't want to or can't.",
  },
];

export const MARQUEE_TOP: string[] = [
  "AGENT TOOL CALL: undefined()",
  "PROMPT DRIFT UNCAUGHT FOR 14 DAYS",
  "EVAL COVERAGE: 0 PROMPTS",
  "LLM SPEND: 47× BUDGET",
  "SENTRY: 0 EVENTS CAPTURED",
  "HUMAN-IN-LOOP: DISABLED IN PROD",
  "AI MERGED ITS OWN PR",
  "AUTH MIDDLEWARE: TODO (3 MO. AGO)",
  ".ENV.LOCAL COMMITTED",
  "STRIPE_SECRET_KEY EXPOSED",
  "ROW LEVEL SECURITY: DISABLED",
  "CORS: *",
  "NPM AUDIT: 412 VULNS",
  "INFINITE LOOP DETECTED",
  'console.log("WORKS!")',
];

export const MARQUEE_CTA: string[] = [
  "Book a readiness audit",
  "Production oversight for AI-built apps",
  "Secure. Observe. Govern.",
  "Your AI shipped a security hole",
];
