import Image from "next/image";
import { PLATFORMS } from "@/lib/content";
import { SecHead } from "./SecHead";

export function Platforms() {
  return (
    <section className="sec" id="platforms">
      <div className="wrap">
        <SecHead
          no="04"
          kicker="Tools of the trade"
          title={
            <>
              The stack we&apos;ll{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                plumb in.
              </em>
            </>
          }
          right={
            <>
              We&apos;re stack-agnostic, but we can and will guide your
              architecture so that it&apos;s great. Here are some great ones in
              our quiver.
            </>
          }
        />
        <div className="platforms">
          {PLATFORMS.map((p) => (
            <div className="plat" key={p.name}>
              <div className="plat-mark">
                <Image src={p.logo} alt={p.name} width={40} height={40} style={{ height: "auto" }} />
              </div>
              <div className="plat-name">{p.name}</div>
              <div className="plat-tag">{p.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
