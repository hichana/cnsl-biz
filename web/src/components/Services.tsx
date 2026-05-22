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
          title={
            <>
              Three trades.{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                One crew.
              </em>
            </>
          }
          right={
            <>
              Production oversight for AI-built software, offered in three
              parts. Choose the one you need most now, or have us knock out
              issues one after the other.
            </>
          }
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
              <em>{s.bold}</em>
              {s.includes && (
                <ul className="svc-includes">
                  {s.includes.map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              )}
              <div className="quote">{s.roast}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
