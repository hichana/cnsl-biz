export function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <a className="logo" href="#top" aria-label="DirtyJobs dot studio">
          <span className="logo-mark"><span>DJ</span></span>
          <span className="logo-text">
            <span>DirtyJobs</span>
            <span className="tld">.studio</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#audit">Audit</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">FAQ</a>
        </div>
        <a className="nav-cta" href="#triage">
          Book triage <span>→</span>
        </a>
      </div>
    </nav>
  );
}
