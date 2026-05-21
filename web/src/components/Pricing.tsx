import { TIERS } from "@/lib/content";
import { SecHead } from "./SecHead";

export function Pricing() {
  return (
    <section className="sec" id="pricing">
      <div className="wrap">
        <SecHead
          no="05"
          kicker="Pricing"
          title={<>Four ways to <em style={{ fontStyle: "italic", color: "var(--accent)" }}>get unstuck.</em></>}
          right={<>Flat monthly rates, no hours-billed nonsense, no surprises on the invoice. Pause or cancel whenever your codebase is boring again.</>}
        />
        <div className="tiers">
          {TIERS.map((t) => (
            <div className={`tier ${t.featured ? "featured" : ""}`} key={t.name}>
              <div className="tier-name">{t.name}</div>
              <div className="tier-price">
                <span className="p">{t.price}</span>
                <span className="per">{t.per}</span>
              </div>
              <p className="tier-desc">{t.desc}</p>
              <ul className="tier-feats">
                {t.feats.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
              <a className={`btn ${t.featured ? "btn-hazard" : "btn-ghost"}`} href="#triage">
                {t.cta} <span className="arrow">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
