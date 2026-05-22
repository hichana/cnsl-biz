import { TIERS } from "@/lib/content";
import { SecHead } from "./SecHead";

export function Pricing() {
  const triage = TIERS.find((t) => t.kind === "triage")!;
  const trades = TIERS.filter((t) => t.kind === "trade");

  return (
    <section className="sec" id="pricing">
      <div className="wrap">
        <SecHead
          no="05"
          kicker="Pricing"
          title={
            <>
              One triage.{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Three trades.
              </em>
            </>
          }
          right={
            <>
              Start with the $250 Triage — we tell you exactly which Trades to
              you need and why. Plug the result into your AI if you think it can
              fix everything for you. Or move on to our Trades if you want it
              done once and for all.
            </>
          }
        />

        {/* ── Step 1: Triage ─────────────────────────────────────────── */}
        <div className="pricing-triage">
          <div className="pricing-triage-badge">
            <span className="pricing-step">Step 01</span>
            <span className="pricing-step-label">Start here</span>
          </div>
          <div className="pricing-triage-inner">
            <div className="pricing-triage-left">
              <div className="tier-name">{triage.name}</div>
              <p className="tier-desc">{triage.desc}</p>
              <ul className="tier-feats">
                {triage.feats.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
            <div className="pricing-triage-right">
              <div className="tier-price">
                <span className="p">{triage.price}</span>
                <span className="per">{triage.per}</span>
              </div>
              <p className="pricing-triage-output">
                Output: a written remediation plan mapping your gaps to the
                three Trades below — so you arrive at the next step knowing
                exactly where to go next.
              </p>
              <a className="btn btn-hazard" href="#triage">
                {triage.cta} <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Step 2: Trades ─────────────────────────────────────────── */}
        <div className="pricing-flow">
          <div className="pricing-flow-line" />
          <div className="pricing-flow-label">
            <span className="pricing-step">Step 02</span>
            <span className="pricing-step-label">Pick your trades</span>
          </div>
          <div className="pricing-flow-line" />
        </div>

        <div className="tiers">
          {trades.map((t) => (
            <div
              className={`tier ${t.featured ? "featured" : ""}`}
              key={t.name}
            >
              {t.tradeRef && (
                <div className="tier-trade-no">Trade / {t.tradeRef}</div>
              )}
              <div className="tier-name">{t.name}</div>
              <div className="tier-price">
                <span className="p">{t.price}</span>
                <span className="per">{t.per}</span>
              </div>
              <p className="tier-desc">{t.desc}</p>
              <ul className="tier-feats">
                {t.feats.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <a
                className={`btn ${t.featured ? "btn-hazard" : "btn-ghost"}`}
                href="#triage"
              >
                {t.cta} <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* ── Bundle note ────────────────────────────────────────────── */}
        <div className="pricing-bundle">
          <span className="pricing-bundle-label">Bundle rate</span>
          <span className="pricing-bundle-text">
            Locks &amp; Doors + Wiring &amp; Lights together:{" "}
            <strong>$7,000</strong>. All three Trades including The Foreman
            retainer: <strong>from $11,500 / mo</strong>. Book the triage and
            we&apos;ll quote your stack.
          </span>
        </div>
      </div>
    </section>
  );
}
