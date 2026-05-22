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
                Dirty Jobs Studio · Human-In-The-Loop Safety Crew for AI
                Builders
              </span>
            </div>

            {variant === "roast" && (
              <h1 className="display display-xl hero-h">
                <span className="ln">
                  Your AI <em>shipped.</em>
                </span>
                <span className="ln">Now make it</span>
                <span className="ln">
                  <em>production-grade.</em>
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
                  <em>safely.</em>
                </span>
              </h1>
            )}

            <p className="hero-sub">
              <b>
                Security hardening, LLM observability, and Senior Engineer-level
                oversight
              </b>{" "}
              for founders shipping software with AI agents. We make sure what
              your AI just put in production is safe, observable, and
              supervised.
            </p>

            <div className="hero-ctas">
              <a className="btn btn-hazard" href="#triage">
                Book a readiness audit <span className="arrow">→</span>
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
