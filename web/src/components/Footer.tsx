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
              Production oversight for AI-built software. Security hardening,
              LLM observability, and Senior Engineer-level engineering judgement
              for founders who shipped a prototype and accidentally built a
              business.
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
                <Link href="/#services">Locks &amp; Doors · Security</Link>
              </li>
              <li>
                <Link href="/#services">
                  Wiring &amp; Lights · Observability
                </Link>
              </li>
              <li>
                <Link href="/#services">
                  The Foreman · Senior Engineer Oversight
                </Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>The Crew</h4>
            <ul>
              <li>
                <Link href="/#pricing">Pricing</Link>
              </li>
              <li>
                <Link href="/#faq">FAQ</Link>
              </li>
            </ul>
          </div>

          <div className="foot-col">
            <h4>Hotline</h4>
            <ul>
              <li>
                <Link href="/#triage">Book readiness audit →</Link>
              </li>
              <li>
                <a href="#">Emergency rate · $250/hr</a>
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
