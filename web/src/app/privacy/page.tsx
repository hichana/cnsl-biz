import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy — DirtyJobs.studio",
  description:
    "How Dirty Jobs Studio collects, uses, stores, and shares information when you visit the site or engage the cleanup crew.",
};

const EFFECTIVE_DATE = "May 21, 2026";

export default function PrivacyPage() {
  return (
    <>
      <Nav />
      <main className="legal">
        <div className="wrap">
          <header className="legal-head">
            <span className="eyebrow">Legal · Doc 01</span>
            <h1>Privacy Policy</h1>
            <div className="legal-meta">
              <span>Effective {EFFECTIVE_DATE}</span>
              <span>Dirty Jobs Studio</span>
            </div>
          </header>

          <div className="legal-body">
            <p className="lead">
              We&apos;re a small cleanup crew, not an ad network. We collect
              what we need to talk to you, do the work you hired us for, run the
              site, and keep the lawyers happy. Nothing creepier than that.
            </p>

            <div className="legal-toc">
              <h4>Sections</h4>
              <ol>
                <li>
                  <a href="#who">Who we are</a>
                </li>
                <li>
                  <a href="#what">What we collect</a>
                </li>
                <li>
                  <a href="#how">How we use it</a>
                </li>
                <li>
                  <a href="#share">Who we share it with</a>
                </li>
                <li>
                  <a href="#code">Your code and repos</a>
                </li>
                <li>
                  <a href="#retention">How long we keep it</a>
                </li>
                <li>
                  <a href="#rights">Your rights</a>
                </li>
                <li>
                  <a href="#cookies">Cookies and analytics</a>
                </li>
                <li>
                  <a href="#security">Security</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ol>
            </div>

            <h2 id="who">
              <span className="num">01</span>Who we are
            </h2>
            <p>
              DirtyJobs.studio is operated by Dirty Jobs Studio. When this
              policy says <strong>&ldquo;we&rdquo;</strong>,{" "}
              <strong>&ldquo;us&rdquo;</strong>, or{" "}
              <strong>&ldquo;Dirty Jobs&rdquo;</strong>, it means Dirty Jobs
              Studio. When it says <strong>&ldquo;you&rdquo;</strong>, it means
              the person visiting the site or engaging us for cleanup work.
            </p>

            <h2 id="what">
              <span className="num">02</span>What we collect
            </h2>
            <h3>Information you give us</h3>
            <ul>
              <li>
                <strong>Contact details</strong> — name, email, company, and
                anything else you put in a triage booking, intake form, or
                email.
              </li>
              <li>
                <strong>Engagement details</strong> — what you want fixed, links
                to your repo, deploy targets, stack info, and any context you
                share to scope the work.
              </li>
              <li>
                <strong>Billing information</strong> — handled by our payment
                processor; we receive transaction metadata (amount, status, last
                four of the card), not full card numbers.
              </li>
              <li>
                <strong>Communications</strong> — the emails, Slack messages,
                Loom recordings, and call notes that come out of working
                together.
              </li>
            </ul>

            <h3>Information we collect automatically</h3>
            <ul>
              <li>
                <strong>Site usage</strong> — pages viewed, referrer,
                approximate location (from IP), user agent, and timestamps.
              </li>
              <li>
                <strong>Device data</strong> — browser type, OS, screen size,
                and similar technical attributes needed to render the site.
              </li>
              <li>
                <strong>Embedded video</strong> — the homepage embeds a YouTube
                short. YouTube/Google may set its own cookies if you interact
                with that player. Their policy governs that.
              </li>
            </ul>

            <h2 id="how">
              <span className="num">03</span>How we use it
            </h2>
            <ul>
              <li>To respond to triage requests and quote work.</li>
              <li>
                To actually do the work — refactors, audits, security scans, CTO
                oversight, and the rest of the menu.
              </li>
              <li>To send invoices, receipts, and engagement-related email.</li>
              <li>
                To improve the site, our process, and our writeups (in
                aggregate, anonymized form).
              </li>
              <li>
                To meet legal, tax, and accounting obligations — same as any
                other US business.
              </li>
            </ul>
            <p className="muted">
              We do not sell your personal information. We do not run behavioral
              advertising. We do not train third-party AI models on your code or
              communications.
            </p>

            <h2 id="share">
              <span className="num">04</span>Who we share it with
            </h2>
            <p>
              We share information only with vendors that help us run the
              business, and only the slice they need to do their job. Today that
              includes:
            </p>
            <ul>
              <li>
                <strong>Hosting and infrastructure</strong> — for the marketing
                site and any internal tools.
              </li>
              <li>
                <strong>Email and scheduling</strong> — for replies, bookings,
                and reminders.
              </li>
              <li>
                <strong>Payments</strong> — for processing card and ACH
                transactions.
              </li>
              <li>
                <strong>Accounting and legal advisors</strong> — under
                confidentiality obligations.
              </li>
            </ul>
            <p>
              We&apos;ll also disclose information if required by law, to
              enforce our Terms, or to protect the rights, safety, or property
              of DirtyJobs, our clients, or the public.
            </p>

            <h2 id="code">
              <span className="num">05</span>Your code and repos
            </h2>
            <p>
              When you bring us into a codebase, that code is{" "}
              <strong>yours</strong>. We treat it as confidential by default.
              Specifically:
            </p>
            <ul>
              <li>
                We access only the repos and environments you grant us access
                to, for the duration of the engagement.
              </li>
              <li>
                We do not use your private code to train models, publish
                examples, or write case studies without your written permission.
              </li>
              <li>
                We may keep our own notes, diagrams, and audit findings derived
                from the engagement so we can support follow-up work, but we
                will not publish anything identifying you without consent.
              </li>
            </ul>

            <h2 id="retention">
              <span className="num">06</span>How long we keep it
            </h2>
            <p>
              We keep engagement records, invoices, and core communications for
              as long as we have an active relationship plus the period required
              by tax and contract law (generally seven years in the US).
              Marketing inquiries that never become engagements are pruned
              within roughly two years. You can ask us to delete earlier — see
              Section 07.
            </p>

            <h2 id="rights">
              <span className="num">07</span>Your rights
            </h2>
            <p>
              Depending on where you live (California, the EU, the UK, and
              others), you may have the right to access, correct, port, or
              delete the personal information we hold about you, and to object
              to or restrict certain uses of it. To exercise any of those
              rights, email{" "}
              <a href="mailto:hello@mail.dirtyjobs.studio">
                hello@mail.dirtyjobs.studio
              </a>
              . We&apos;ll respond within 30 days. We won&apos;t discriminate
              against you for exercising your rights.
            </p>

            <h2 id="cookies">
              <span className="num">08</span>Cookies and analytics
            </h2>
            <p>
              The site uses a small number of cookies and similar technologies
              for things like remembering your theme preference and aggregate
              analytics. We don&apos;t use third-party ad trackers. You can
              block or clear cookies in your browser; the site will still work,
              it just won&apos;t remember your preferences between visits.
            </p>

            <h2 id="security">
              <span className="num">09</span>Security
            </h2>
            <p>
              We use industry-standard controls — SSO with MFA on internal
              tools, least-privilege access to client environments, encrypted
              transit and storage, hardware-backed keys for sensitive
              credentials, and short-lived tokens wherever possible. No system
              is perfectly safe; if we discover a breach that affects you,
              we&apos;ll notify you promptly with what we know and what
              we&apos;re doing about it.
            </p>

            <div className="legal-callout">
              <strong>Heads up</strong>
              If you send us screenshots, logs, or secrets via email, scrub them
              first. Better yet, use a shared password manager or a short-lived
              secret-sharing link. We&apos;ll set this up with you during
              onboarding.
            </div>

            <h2 id="contact">
              <span className="num">10</span>Contact
            </h2>
            <p>
              Questions, requests, or complaints about this policy go to{" "}
              <a href="mailto:hello@mail.dirtyjobs.studio">
                hello@mail.dirtyjobs.studio
              </a>
              . If we change this policy in a material way, we&apos;ll update
              the effective date at the top and, where appropriate, email you
              about it.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
