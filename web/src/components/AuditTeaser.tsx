import Image from "next/image";
import { SecHead } from "./SecHead";

export function AuditTeaser() {
  return (
    <section className="sec" id="audit">
      <div className="wrap">
        <SecHead
          no="03"
          kicker="Before / After"
          title={
            <>
              Off the rails.
              <br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                Back on the rails.
              </em>
            </>
          }
          right={
            <>
              Don&apos;t let pure luck keep your app working or your user&apos;s
              data secure. Let Dirty Jobs Studio keep you and your AI agents on
              track using proven best-practice software development methods.
            </>
          }
        />

        <div className="audit">
          <div className="audit-col before">
            <div className="audit-tag bad">
              <span>●</span> Day 1 · Vibe-coded, LGTM
            </div>
            <h3>Before</h3>

            <figure className="audit-gif">
              <Image
                src="/assets/vibe-train-go.gif"
                alt="Toy train derailing off its tracks — the vibe-coding meme"
                width={393}
                height={229}
                unoptimized
                priority
              />
              <figcaption>
                <span className="lbl">{"// EXHIBIT A"}</span>
                <span className="cap">
                  Shipped fast. Off the rails by Tuesday.
                </span>
              </figcaption>
            </figure>
          </div>

          <div className="audit-col after">
            <div className="audit-tag good">
              <span>●</span> Hardened · On the rails, is good
            </div>
            <h3>After</h3>

            <figure className="audit-gif">
              <Image
                src="/assets/save-train-go.gif"
                alt="Toy train back on the tracks, running smoothly"
                width={393}
                height={229}
                unoptimized
              />
              <figcaption>
                <span className="lbl">{"// EXHIBIT B"}</span>
                <span className="cap">Same train. Better track.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
