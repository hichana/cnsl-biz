import Image from "next/image";
import { PROCESS } from "@/lib/content";
import { SecHead } from "./SecHead";
import { WorkOrderTicket } from "./WorkOrderTicket";

export function Process() {
  return (
    <section className="sec" id="process">
      <div className="wrap">
        <SecHead
          no="02"
          kicker="How it works"
          title={
            <>
              Let us fix{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                the mess
              </em>
              <br />
              While you sleep.
            </>
          }
          right={
            <>
              Four steps, fully transparent, no month-long discovery phase. Most
              engagements move from &quot;signed&quot; to &quot;first PR
              merged&quot; in under five working days.
            </>
          }
        />

        <div className="proc-layout">
          <aside className="proc-aside">
            <figure className="proc-foreman">
              <div className="proc-foreman-tag">
                <span className="ln-1">{"// INSPECTOR ON SHIFT"}</span>
                <span className="ln-2">@GoChanaGo</span>
                <span className="ln-3">
                  Senior Software Engineer · ID DJS-0419
                </span>
              </div>
              <Image
                src="/assets/go-chana-go.jpg"
                alt="DirtyJobs.studio foreman at the bench"
                width={600}
                height={750}
                priority
              />
            </figure>
            <div className="proc-aside-lbl">{"// INTAKE FORM · SAMPLE"}</div>
            <WorkOrderTicket />
            <div className="proc-aside-note">
              Every engagement starts with one of these. M. fills it out on the
              triage call, you keep a copy, nothing moves forward until
              you&apos;ve signed off on what we found.
            </div>
          </aside>

          <ol className="proc-list">
            {PROCESS.map((s) => (
              <li className="proc-row" key={s.no}>
                <div className="proc-row-no">{s.no}</div>
                <div className="proc-row-body">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                  <div className="proc-row-stat">
                    <span>{s.stat[0]}</span>
                    <b>{s.stat[1]}</b>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
