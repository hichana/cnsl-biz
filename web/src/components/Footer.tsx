import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <Link className="logo" href="/">
              <Image
                src="/assets/dj_logo_lines.svg"
                alt=""
                width={34}
                height={32}
                aria-hidden="true"
              />
              <span className="logo-text">
                <span>DirtyJobs</span>
                <span className="tld">.studio</span>
              </span>
            </Link>
            <p className="foot-blurb">
              AI slop cleanup crew. Refactors, audits, security scans, and CTO
              oversight for founders who shipped a prototype and accidentally
              built a business.
            </p>
            <div className="foot-meta">
              <a href="mailto:hello@dirtyjobs.studio">
                hello@mail.dirtyjobs.studio
              </a>
            </div>
          </div>

          <div className="foot-col">
            <h4>The Work</h4>
            <ul>
              <li>
                <Link href="/#services">Refactoring</Link>
              </li>
              <li>
                <Link href="/#services">Audits</Link>
              </li>
              <li>
                <Link href="/#services">Bug fixes</Link>
              </li>
              <li>
                <Link href="/#services">Security scans</Link>
              </li>
              <li>
                <Link href="/#services">CTO oversight</Link>
              </li>
              <li>
                <Link href="/#services">Observability</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>The Crew</h4>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Case studies</a>
              </li>
              <li>
                <Link href="/#audit">Sample audit</Link>
              </li>
              <li>
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
              <li>
                <a href="#">Careers · 2 open</a>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Hotline</h4>
            <ul>
              <li>
                <Link href="/#triage">Book triage →</Link>
              </li>
              <li>
                <a href="#">Emergency rate · $750/hr</a>
              </li>
            </ul>
          </div>
        </div>

        <svg
          className="wordmark"
          viewBox="0 0 1000 158"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden="true"
        >
          <text x="500" y="138" textAnchor="middle">
            DIRTYJOBS.STUDIO
          </text>
        </svg>

        <div className="foot-bot">
          <span>© 2026 Dirty Jobs Studio</span>
          <div className="links">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
          <span>
            v1.0.0 · No AI was harmed in the making of this site (it deserved
            it)
          </span>
        </div>
      </div>
    </footer>
  );
}
