export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <a className="logo" href="#top">
              <span className="logo-mark">
                <span>DJ</span>
              </span>
              <span className="logo-text">
                <span>DirtyJobs</span>
                <span className="tld">.studio</span>
              </span>
            </a>
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
                <a href="#services">Refactoring</a>
              </li>
              <li>
                <a href="#services">Audits</a>
              </li>
              <li>
                <a href="#services">Bug fixes</a>
              </li>
              <li>
                <a href="#services">Security scans</a>
              </li>
              <li>
                <a href="#services">CTO oversight</a>
              </li>
              <li>
                <a href="#services">Observability</a>
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
                <a href="#audit">Sample audit</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#faq">FAQ</a>
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
                <a href="#triage">Book triage →</a>
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
          <span>© 2026 DirtyJobs LLC · Made in Austin, TX</span>
          <div className="links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Security</a>
            <a href="#">Status</a>
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
