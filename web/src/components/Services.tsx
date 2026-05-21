import { SERVICES } from "@/lib/content";
import type { Tone } from "@/lib/content";
import { SecHead } from "./SecHead";

export function Services({ tone }: { tone: Tone }) {
  return (
    <section className="sec" id="services">
      <div className="wrap">
        <SecHead
          no="01"
          kicker="The Work"
          title={<>Nine kinds of <em style={{ fontStyle: "italic", color: "var(--accent)" }}>dirty jobs.</em></>}
          right={<>Pick the one that hurts most. We do all of them. Most engagements end up touching three or four because the symptoms cluster.</>}
        />

        <div className="svc-grid">
          {SERVICES.map((s) => (
            <article className="svc" key={s.no}>
              <div className="svc-hd">
                <div className="svc-no">/ {s.no}</div>
                <div className="svc-icn">{s.icn}</div>
              </div>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="quote">{s[tone] || s.roast}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
