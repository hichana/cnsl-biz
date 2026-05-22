import { FAQS } from "@/lib/content";
import { SecHead } from "./SecHead";

export function FAQ() {
  return (
    <section className="sec" id="faq">
      <div className="wrap">
        <SecHead
          no="06"
          kicker="FAQ"
          title={
            <>
              Questions we get{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                weekly.
              </em>
            </>
          }
          right={
            <>
              If your question isn&apos;t here, email
              hello@mail.dirtyjobs.studio and just ask.
            </>
          }
        />
        <div className="faq">
          {FAQS.map((it, i) => (
            <details key={i} open={i === 0}>
              <summary>
                <span className="q-no">{String(i + 1).padStart(2, "0")}</span>
                <span className="q-txt">{it.q}</span>
                <span className="pm">+</span>
              </summary>
              <div className="a">{it.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
