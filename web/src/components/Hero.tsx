import type { HeroVariant } from "@/lib/config";
import { YouTubeShort } from "./YouTubeShort";

export function Hero({
  variant,
  shortMuted,
}: {
  variant: HeroVariant;
  shortMuted: boolean;
}) {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        <div className="hero-grid">
          <div className="hero-head">
            <div className="hero-meta">
              <span className="eyebrow">
                Dirty Jobs Studio, your AI Slop Cleanup Crew · License #DJS-0419
                · Bonded &amp; insured
              </span>
            </div>

            {variant === "roast" && (
              <h1 className="display display-xl hero-h">
                <span className="ln">
                  Your AI <em>shipped</em>
                </span>
                <span className="ln">a security hole.</span>
                <span className="ln">
                  We&apos;re here to <em>plug it.</em>
                </span>
              </h1>
            )}
            {variant === "cleanup" && (
              <h1 className="display display-xl hero-h">
                <span className="ln">We clean up</span>
                <span className="ln">
                  after your <em>AI.</em>
                </span>
              </h1>
            )}
            {variant === "shipped" && (
              <h1 className="display display-xl hero-h">
                <span className="ln">
                  You shipped <em>fast.</em>
                </span>
                <span className="ln">Now ship it</span>
                <span className="ln">
                  <em>properly.</em>
                </span>
              </h1>
            )}

            <p className="hero-sub">
              <b>Refactoring, audits, security scans, and CTO oversight</b> on
              whatever your AI just put in production. For founders who shipped
              a prototype and accidentally built a business.
            </p>

            <div className="hero-ctas">
              <a className="btn btn-hazard" href="#triage">
                Book a triage call <span className="arrow">→</span>
              </a>
              <a className="btn btn-ghost" href="#audit">
                See a sample audit
              </a>
            </div>

            <div className="hero-foot">
              <span className="dot"></span>
              <span>Crew available · Booking 2 slots this week</span>
            </div>
          </div>

          <div className="hero-side">
            <YouTubeShort muted={shortMuted} />
          </div>
        </div>
      </div>
    </section>
  );
}
