import { MARQUEE_CTA } from "@/lib/content";

export function CtaMarquee() {
  const loop = [...MARQUEE_CTA, ...MARQUEE_CTA, ...MARQUEE_CTA, ...MARQUEE_CTA];
  return (
    <section className="cta-marquee" id="triage" aria-label="Book a call">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <div className="marquee-item" key={i}>
            <span>{t}</span>
            <span className="sep"></span>
          </div>
        ))}
      </div>
    </section>
  );
}
