import Link from "next/link";
import Image from "next/image";

export function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link className="logo" href="/" aria-label="Dirty Jobs dot studio">
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
        <div className="nav-links">
          <Link href="/#services">Services</Link>
          <Link href="/#process">Process</Link>
          <Link href="/#audit">Audit</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#faq">FAQ</Link>
        </div>
        <Link className="nav-cta" href="/#triage">
          Book audit <span>→</span>
        </Link>
      </div>
    </nav>
  );
}
