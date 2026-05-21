import { MARQUEE_TOP } from "@/lib/content";

export function HazardMarquee() {
  const loop = [...MARQUEE_TOP, ...MARQUEE_TOP, ...MARQUEE_TOP, ...MARQUEE_TOP];
  return (
    <div className="hazard-bar" aria-hidden="true">
      <div className="marquee-track">
        {loop.map((t, i) => (
          <div className="marquee-item" key={i}>
            <span className="sym">⚠</span>
            <span>{t}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
