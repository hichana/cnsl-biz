export function WorkOrderTicket() {
  return (
    <div className="ticket" aria-hidden="true">
      <div className="ticket-hd">
        <div className="no">TRIAGE REPORT #2026-1142</div>
        <div className="stamp">CRITICAL</div>
      </div>
      <div className="ticket-body">
        <div className="ticket-row">
          <span className="k">Client</span>
          <span className="v">
            [REDACTED] · Seed-stage SaaS · LLM agent in core flow
          </span>
        </div>
        <div className="ticket-row">
          <span className="k">Built with</span>
          <span className="v">Cursor + Claude + vibes</span>
        </div>
        <div className="ticket-row">
          <span className="k">Critical vulnerabilities</span>
          <span className="v err">3 found · Stripe + OpenAI + SMTP</span>
        </div>
        <div className="ticket-row">
          <span className="k">Locks & Doors</span>
          <span className="v warn">
            Immediate secrets rotation, set up RLS, hourly Supabase backups
          </span>
        </div>
        <div className="ticket-row">
          <span className="k">Wiring & Lights</span>
          <span className="v warn">Set up Sentry LangGraph, get alerts</span>
        </div>
        <div className="ticket-row">
          <span className="k">The Foreman</span>
          <span className="v warn">
            Swap out Vercel AI SDK for simple SSE, set up WorkOS auth
          </span>
        </div>
        <div className="ticket-row">
          <span className="k">Time to hardened</span>
          <span className="v ok">~ 6 weeks</span>
        </div>
      </div>
      <div className="ticket-foot">
        <span>Inspected by</span>
        <span className="sig">@GoChanaGo</span>
      </div>
    </div>
  );
}
