import Link from "next/link";

export function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link className="logo" href="/" aria-label="Dirty Jobs dot studio">
          <span className="logo-mark">
            <span>DJ</span>
          </span>
          <span className="logo-text">
            <span>DirtyJobs</span>
            <span className="tld">.studio</span>
          </span>
        </Link>
        <div className="nav-links">
          <Link href="/#services">Services</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#audit">Audit</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <Link className="nav-cta" href="/#triage">
          Book triage <span>→</span>
        </Link>
      </div>
    </nav>
  );
}
