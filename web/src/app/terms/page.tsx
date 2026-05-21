import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms of Service — DirtyJobs.studio",
  description:
    "The terms that govern using the DirtyJobs.studio website and engaging Dirty Jobs Studio for refactors, audits, security scans, and CTO oversight.",
};

const EFFECTIVE_DATE = "May 21, 2026";

export default function TermsPage() {
  return (
    <>
      <Nav />
      <main className="legal">
        <div className="wrap">
          <header className="legal-head">
            <span className="eyebrow">Legal · Doc 02</span>
            <h1>Terms of Service</h1>
            <div className="legal-meta">
              <span>Effective {EFFECTIVE_DATE}</span>
              <span>Dirty Jobs Studio</span>
            </div>
          </header>

          <div className="legal-body">
            <p className="lead">
              Plain version: don&apos;t abuse the site, don&apos;t pirate our
              writeups, pay your invoices, and we&apos;ll do the dirty work you
              hired us for. The long version is below in case the lawyers ask.
            </p>

            <div className="legal-toc">
              <h4>Sections</h4>
              <ol>
                <li>
                  <a href="#agree">Agreement</a>
                </li>
                <li>
                  <a href="#services">The services</a>
                </li>
                <li>
                  <a href="#engagements">Engagements and SOWs</a>
                </li>
                <li>
                  <a href="#fees">Fees, invoices, refunds</a>
                </li>
                <li>
                  <a href="#access">Access to your systems</a>
                </li>
                <li>
                  <a href="#ip">Intellectual property</a>
                </li>
                <li>
                  <a href="#use">Acceptable use of the site</a>
                </li>
                <li>
                  <a href="#warranty">Warranties and disclaimers</a>
                </li>
                <li>
                  <a href="#liability">Limitation of liability</a>
                </li>
                <li>
                  <a href="#indemnify">Indemnification</a>
                </li>
                <li>
                  <a href="#term">Term and termination</a>
                </li>
                <li>
                  <a href="#law">Governing law and disputes</a>
                </li>
                <li>
                  <a href="#misc">Miscellaneous</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ol>
            </div>

            <h2 id="agree">
              <span className="num">01</span>Agreement
            </h2>
            <p>
              These Terms of Service (<strong>&ldquo;Terms&rdquo;</strong>) are
              a contract between you and Dirty Jobs Studio (
              <strong>&ldquo;Dirty Jobs&rdquo;</strong>,{" "}
              <strong>&ldquo;we&rdquo;</strong>,{" "}
              <strong>&ldquo;us&rdquo;</strong>). By using dirtyjobs.studio,
              booking triage, or engaging us for cleanup work, you agree to
              these Terms. If you don&apos;t, stop using the site and don&apos;t
              engage us.
            </p>

            <h2 id="services">
              <span className="num">02</span>The services
            </h2>
            <p>
              We provide professional software services — refactoring, audits,
              bug fixes, security scans, CTO oversight, observability work, and
              related advisory. We are <strong>not</strong> a SaaS product, and
              the site itself is informational. The specifics of what we do for
              you are defined in your engagement — see Section 03.
            </p>

            <h2 id="engagements">
              <span className="num">03</span>Engagements and SOWs
            </h2>
            <p>
              Every paid engagement starts with either a written statement of
              work (SOW), a signed order form, or — for smaller jobs — an email
              exchange that clearly describes scope, deliverables, timeline, and
              fee. If a signed SOW conflicts with these Terms, the SOW controls
              for that engagement.
            </p>
            <ul>
              <li>
                <strong>Scope changes</strong> are made in writing (email is
                fine) and may change the fee or timeline.
              </li>
              <li>
                <strong>Subcontractors.</strong> We may use subcontractors bound
                by confidentiality obligations. We remain responsible for their
                work.
              </li>
              <li>
                <strong>Cooperation.</strong> We need timely access, reviews,
                and decisions from you. Delays on your side may shift our
                delivery dates.
              </li>
            </ul>

            <h2 id="fees">
              <span className="num">04</span>Fees, invoices, refunds
            </h2>
            <ul>
              <li>
                Fees are stated in the SOW or pricing tier you accepted. Unless
                stated otherwise, fees are in USD and exclude taxes.
              </li>
              <li>
                If using invoices, they are due <strong>net 14</strong> from the
                invoice date. Past-due balances accrue interest at the lesser of
                1.5% per month or the maximum allowed by law.
              </li>
              <li>
                Fixed-fee engagements are non-refundable once work has begun,
                except as required by law. Retainers and prepaid blocks of hours
                are non-refundable but unused hours roll forward for the term
                stated in the SOW.
              </li>
              <li>
                Emergency rates are billed in 15-minute increments from first
                response.
              </li>
            </ul>

            <h2 id="access">
              <span className="num">05</span>Access to your systems
            </h2>
            <p>
              You authorize us to access the repositories, accounts, and
              environments you grant us access to, solely to perform the
              engagement. You confirm that you have the right to grant that
              access and that doing so does not violate any agreement with a
              third party.
            </p>
            <div className="legal-callout">
              <strong>Security defaults</strong>
              We require MFA on every account we touch, never store long-lived
              production credentials on local machines, and prefer scoped tokens
              or break-glass access for production systems. We&apos;ll work with
              your team to set this up.
            </div>

            <h2 id="ip">
              <span className="num">06</span>Intellectual property
            </h2>
            <h3>Your stuff stays yours</h3>
            <p>
              Work product we create for you under an engagement — including
              code we write, patches we ship, audit reports, and architecture
              documents — belongs to you upon full payment, with the exceptions
              below.
            </p>
            <h3>Our toolkit stays ours</h3>
            <p>
              We retain ownership of our pre-existing materials, internal tools,
              templates, checklists, scripts, and general know-how (the{" "}
              <strong>&ldquo;Dirty Jobs Toolkit&rdquo;</strong>). To the extent
              any Toolkit material is embedded in a deliverable, we grant you a
              perpetual, worldwide, royalty-free, non-exclusive license to use
              it as part of that deliverable.
            </p>
            <h3>Open source</h3>
            <p>
              We may use and contribute back to open source software.
              Open-source components are licensed under their respective
              licenses, not these Terms.
            </p>
            <h3>The site</h3>
            <p>
              The marketing site, including text, design, code, the Dirty Jobs
              name and logo, and any case studies, is owned by Dirty Jobs and
              protected by applicable IP laws. Don&apos;t copy or rebrand it.
            </p>

            <h2 id="use">
              <span className="num">07</span>Acceptable use of the site
            </h2>
            <p>You agree not to:</p>
            <ul>
              <li>
                Scrape, mirror, or rebrand the site or our published writeups.
              </li>
              <li>
                Probe, scan, or stress-test the site without our written
                permission (we will give it if you ask).
              </li>
              <li>
                Submit forms with content that&apos;s illegal, harassing, or
                that you don&apos;t have the rights to share.
              </li>
              <li>
                Use the site to train AI models on our content. The irony would
                not be lost on us.
              </li>
            </ul>

            <h2 id="warranty">
              <span className="num">08</span>Warranties and disclaimers
            </h2>
            <p>
              We perform the services in a professional, workmanlike manner
              consistent with industry standards. We do not guarantee that any
              system will be bug-free, performant, or free of vulnerabilities.
              Software is software.
            </p>
            <p>
              <strong>
                EXCEPT FOR THE EXPRESS WARRANTY IN THIS SECTION, THE SITE AND
                THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
                AVAILABLE.&rdquo; WE DISCLAIM ALL OTHER WARRANTIES, EXPRESS OR
                IMPLIED, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, AND NON-INFRINGEMENT.
              </strong>
            </p>

            <h2 id="liability">
              <span className="num">09</span>Limitation of liability
            </h2>
            <p>
              <strong>
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEITHER PARTY WILL BE
                LIABLE FOR INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR
                PUNITIVE DAMAGES, OR FOR LOST PROFITS OR REVENUE, EVEN IF
                ADVISED OF THE POSSIBILITY. OUR TOTAL AGGREGATE LIABILITY FOR
                ANY CLAIM ARISING OUT OF OR RELATED TO THE SERVICES IS LIMITED
                TO THE FEES YOU PAID US IN THE TWELVE (12) MONTHS PRECEDING THE
                EVENT GIVING RISE TO THE CLAIM.
              </strong>
            </p>
            <p className="muted">
              The limitations above do not apply to a party&apos;s
              indemnification obligations, breach of confidentiality, IP
              infringement, gross negligence, or willful misconduct, or to
              liability that cannot be limited by law.
            </p>

            <h2 id="indemnify">
              <span className="num">10</span>Indemnification
            </h2>
            <p>
              Each party will defend the other against third-party claims
              arising from its own gross negligence, willful misconduct, or
              infringement of the other party&apos;s IP, and will pay damages
              finally awarded by a court (or amounts agreed in settlement). The
              indemnified party will give prompt notice of the claim and
              reasonable cooperation in the defense.
            </p>

            <h2 id="term">
              <span className="num">11</span>Term and termination
            </h2>
            <p>
              Each engagement runs for the term stated in its SOW. Either party
              may terminate an engagement for material breach not cured within
              15 days of written notice. You may also terminate for convenience
              on 14 days&apos; written notice; if you do, you owe fees for work
              performed and reasonable wind-down through the effective
              termination date.
            </p>
            <p>
              Sections that by nature should survive termination — IP,
              confidentiality, warranties, liability, indemnity, and governing
              law — will survive.
            </p>

            <h2 id="law">
              <span className="num">12</span>Governing law and disputes
            </h2>
            <p>
              These Terms are governed by the laws of the State of Texas,
              without regard to its conflict of laws principles. Each party
              submits to the exclusive jurisdiction of the state and federal
              courts located in Travis County, Texas for any dispute arising out
              of or related to these Terms or any engagement.
            </p>
            <p>
              Before filing suit, the parties will attempt to resolve any
              dispute in good faith for at least 30 days through written notice
              and a meeting between authorized representatives.
            </p>

            <h2 id="misc">
              <span className="num">13</span>Miscellaneous
            </h2>
            <ul>
              <li>
                <strong>Entire agreement.</strong> These Terms, plus any signed
                SOW or order form, are the entire agreement and supersede prior
                discussions on the same subject.
              </li>
              <li>
                <strong>Amendments.</strong> We may update these Terms from time
                to time; the effective date will change. Your continued use of
                the site or services after an update means you accept it.
              </li>
              <li>
                <strong>Assignment.</strong> Neither party may assign these
                Terms without the other&apos;s written consent, except to a
                successor in interest as part of a merger, acquisition, or sale
                of substantially all assets.
              </li>
              <li>
                <strong>Severability.</strong> If any provision is held
                unenforceable, the rest will remain in effect.
              </li>
              <li>
                <strong>No waiver.</strong> A delay or failure to enforce any
                right is not a waiver of it.
              </li>
              <li>
                <strong>Force majeure.</strong> Neither party is liable for
                delays caused by events outside its reasonable control.
              </li>
            </ul>

            <h2 id="contact">
              <span className="num">14</span>Contact
            </h2>
            <p>
              Questions, notices, or legal correspondence go to{" "}
              <a href="mailto:hello@mail.dirtyjobs.studio">
                hello@mail.dirtyjobs.studio
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
