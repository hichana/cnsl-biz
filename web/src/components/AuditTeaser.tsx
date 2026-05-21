import { SecHead } from "./SecHead";

export function AuditTeaser() {
  return (
    <section className="sec" id="audit">
      <div className="wrap">
        <SecHead
          no="03"
          kicker="Sample audit"
          title={<>A real cleanup,<br/><em style={{ fontStyle: "italic", color: "var(--accent)" }}>names redacted.</em></>}
          right={<>Series-A B2B SaaS, built in 6 weeks with Cursor + Claude. Engaged us right before their security review. Here&apos;s the before-and-after on the metrics that matter.</>}
        />

        <div className="audit">
          <div className="audit-col before">
            <div className="audit-tag bad"><span>●</span> Day 1 · Intake</div>
            <h3>Before</h3>
            <div className="audit-list">
              <div className="r"><span className="k">Files in /src</span><span className="v err">4 (largest: 2,847 LOC)</span></div>
              <div className="r"><span className="k">Test coverage</span><span className="v err">0.0%</span></div>
              <div className="r"><span className="k">Critical CVEs</span><span className="v err">41</span></div>
              <div className="r"><span className="k">Secrets in repo</span><span className="v err">3 (Stripe, OpenAI, SMTP)</span></div>
              <div className="r"><span className="k">RLS on user data</span><span className="v err">Disabled</span></div>
              <div className="r"><span className="k">Auth implementations</span><span className="v warn">3 (partial)</span></div>
              <div className="r"><span className="k">Avg PR review time</span><span className="v dim">N/A · solo</span></div>
              <div className="r"><span className="k">Error monitoring</span><span className="v err">None</span></div>
            </div>
            <div className="audit-foot">
              <span>Bus factor</span>
              <span>1</span>
            </div>
          </div>

          <div className="audit-col after">
            <div className="audit-tag good"><span>●</span> Week 6 · Hand-off</div>
            <h3>After</h3>
            <div className="audit-list">
              <div className="r"><span className="k">Files in /src</span><span className="v ok">68 (largest: 312 LOC)</span></div>
              <div className="r"><span className="k">Test coverage</span><span className="v ok">71% (critical paths 94%)</span></div>
              <div className="r"><span className="k">Critical CVEs</span><span className="v ok">0</span></div>
              <div className="r"><span className="k">Secrets in repo</span><span className="v ok">0 · rotated &amp; vaulted</span></div>
              <div className="r"><span className="k">RLS on user data</span><span className="v ok">Enabled · policy tested</span></div>
              <div className="r"><span className="k">Auth implementations</span><span className="v ok">1 (Clerk + sessions)</span></div>
              <div className="r"><span className="k">Avg PR review time</span><span className="v ok">{"< 4 hrs"}</span></div>
              <div className="r"><span className="k">Error monitoring</span><span className="v ok">Sentry + LangSmith</span></div>
            </div>
            <div className="audit-foot">
              <span>Outcome</span>
              <span>SOC2 Type I · 90 days later</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
