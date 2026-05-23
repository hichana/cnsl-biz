import { CREW, TIERS } from "@/lib/content";
import { SecHead } from "./SecHead";

export function Pricing() {
  const triage = TIERS.find((t) => t.kind === "triage")!;

  return (
    <section className="sec" id="pricing">
      <div className="wrap">
        <SecHead
          no="05"
          kicker="Pricing"
          title={
            <>
              Three trades.{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                One easy sub.
              </em>
            </>
          }
          right={
            <>
              {/* Start with the $250 Triage — we map every fire to the right Trade
              and hand you the punch list. Then hire The Crew on a flat monthly
              rate: one work order at a time, all three Trades on call, pause or
              cancel anytime. No retainers, no statements of work, no month-long
              discovery. */}
              A flat monthly rate that makes it all feel easy. Pause or cancel
              at any time. This is how working with a Senior Engineer should
              have been done in the first place.
            </>
          }
        />

        {/* ── Step 1: Triage ─────────────────────────────────────────── */}
        {/* <div className="pricing-triage">
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
                three Trades — so by the time you put The Crew on the clock, we
                already know what we&apos;re hammering first.
              </p>
              <a
                className="btn btn-hazard"
                href="https://calendly.com/hello-mail-wiot/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                {triage.cta} <span className="arrow">→</span>
              </a>
            </div>
          </div>
        </div>
 */}
        {/* ── Step 2: The Crew Subscription ──────────────────────────── */}
        <div className="pricing-flow">
          <div className="pricing-flow-line" />
          <div className="pricing-flow-label">
            <span className="pricing-step">Step 01</span>
            <span className="pricing-step-label">Just one simple step</span>
          </div>
          <div className="pricing-flow-line" />
        </div>

        <div className="pricing-crew">
          <div className="pricing-crew-tag">
            <span className="pricing-crew-tag-dot" />
            Subscription · no long-term contract
          </div>

          <div className="pricing-crew-grid">
            <div className="pricing-crew-left">
              <div className="tier-name">{CREW.name}</div>
              <p className="pricing-crew-tagline">{CREW.tagline}</p>
              <p className="tier-desc">{CREW.desc}</p>

              <div className="pricing-crew-trades">
                {CREW.trades.map((t) => (
                  <div className="pricing-crew-trade" key={t.ref}>
                    <div className="pricing-crew-trade-no">Trade / {t.ref}</div>
                    <div className="pricing-crew-trade-name">{t.name}</div>
                    <p className="pricing-crew-trade-blurb">{t.blurb}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pricing-crew-right">
              <div className="pricing-crew-badge">{CREW.badge}</div>

              <div className="pricing-crew-price">
                <span className="pricing-crew-price-was">{CREW.priceWas}</span>
                <div className="pricing-crew-price-now">
                  <span className="p">{CREW.priceNow}</span>
                  <span className="per">{CREW.per}</span>
                </div>
              </div>

              <ul className="pricing-crew-benefits">
                {CREW.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <a
                className="btn btn-hazard pricing-crew-cta"
                href="https://calendly.com/hello-mail-wiot/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                {CREW.cta} <span className="arrow">→</span>
              </a>

              <p className="pricing-crew-guarantee">{CREW.guarantee}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
