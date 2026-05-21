export function WorkOrderTicket() {
  return (
    <div className="ticket" aria-hidden="true">
      <div className="ticket-hd">
        <div className="no">Work Order · DJ-2026-1142</div>
        <div className="stamp">CRITICAL</div>
      </div>
      <div className="ticket-body">
        <div className="ticket-row">
          <span className="k">Client</span>
          <span className="v">[REDACTED] · Seed-stage SaaS</span>
        </div>
        <div className="ticket-row">
          <span className="k">Built with</span>
          <span className="v">Cursor + Claude + vibes</span>
        </div>
        <div className="ticket-row">
          <span className="k">Files in App.jsx</span>
          <span className="v err">1 (2,847 lines)</span>
        </div>
        <div className="ticket-row">
          <span className="k">Test coverage</span>
          <span className="v err">0.0%</span>
        </div>
        <div className="ticket-row">
          <span className="k">Secrets in repo</span>
          <span className="v err">3 found</span>
        </div>
        <div className="ticket-row">
          <span className="k">npm audit</span>
          <span className="v warn">412 vulns · 41 critical</span>
        </div>
        <div className="ticket-row">
          <span className="k">Auth status</span>
          <span className="v warn">3 partial implementations</span>
        </div>
        <div className="ticket-row">
          <span className="k">Time to cleanup</span>
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
