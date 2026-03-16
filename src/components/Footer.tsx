import Link from "next/link";
import Image from "next/image";

interface FooterProps {
  full?: boolean;
}

export default function Footer({ full = false }: FooterProps) {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link href="/" className="footer-brand-logo nav-logo">
            <Image
              src="/images/logotransparent.png"
              className="nav-logo-img"
              alt="Deep Horizon Logo"
              width={36}
              height={36}
            />
            <div className="nav-wordmark">
              Deep <span>Horizon</span>
            </div>
          </Link>
          <p className="footer-brand-tagline">
            {full
              ? "Personal Security Concierge. Real-time monitoring, human backup, and silent alarms for when it matters most."
              : "Personal Security Concierge."}
          </p>
        </div>
        <div className="footer-col">
          <h4>Product</h4>
          <Link href="/#features">Features</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/#for-everyone">For Everyone</Link>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <Link href="/about">About</Link>
          <Link href="/blog">Blog</Link>
          <a href="mailto:abhishek@deephorizon.io?subject=Careers%20at%20Deep%20Horizon">
            Careers
          </a>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/refund-policy">Refund Policy</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          &copy; 2026 Deep Horizon Security Technologies Private Limited
          {full && (
            <> &middot; Ashirwad Bhavan, Maligaon, Guwahati 781012, Assam &middot; +91 86380 71503</>
          )}
        </p>
      </div>
    </footer>
  );
}
