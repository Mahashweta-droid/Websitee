"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AccountDeletionPage() {
  return (
    <>
      <Nav variant="policy" />
      <section className="policy-hero">
        <div className="policy-hero-inner">
          <span className="eyebrow">Legal</span>
          <h1>Account Deletion Request</h1>
          <p className="policy-meta">Deep Horizon Security Technologies Pvt. Ltd.</p>
        </div>
      </section>
      <div className="policy-body">
        <div className="policy-inner">
          <div className="policy-section">
            <h2>How to Request Account Deletion</h2>
            <ol>
              <li>Send an email to <a href="mailto:support@deephorizon.io">support@deephorizon.io</a> with the subject &ldquo;Account Deletion Request&rdquo;</li>
              <li>Include your registered email address or phone number</li>
              <li>We will verify your identity and process your request within 30 days</li>
            </ol>
          </div>
          <div className="policy-section">
            <h2>What Data Will Be Deleted</h2>
            <p>Upon account deletion, the following data will be permanently removed from our systems:</p>
            <ul>
              <li>Personal information (name, email, phone)</li>
              <li>Location history</li>
              <li>Chat messages</li>
              <li>Emergency contacts</li>
              <li>Medical information</li>
              <li>App usage data</li>
            </ul>
          </div>
          <div className="policy-section">
            <h2>What Data Will Be Retained</h2>
            <p>Due to legal and regulatory requirements, the following data must be retained:</p>
            <ul>
              <li><strong>Transaction records</strong> &mdash; Required for financial compliance (retained for 7 years)</li>
              <li><strong>Incident logs</strong> &mdash; Required for legal compliance (retained for 5 years)</li>
            </ul>
          </div>
          <div className="policy-section">
            <h2>Data Retention Period</h2>
            <ul>
              <li><strong>Most data:</strong> Deleted within 30 days of request</li>
              <li><strong>Financial records:</strong> Retained for 7 years (legal requirement)</li>
              <li><strong>Incident logs:</strong> Retained for 5 years (legal requirement)</li>
            </ul>
          </div>
          <div className="policy-section">
            <h2>Contact</h2>
            <div className="policy-contact-box">
              <p>For account deletion requests or questions about data retention:</p>
              <p><a href="mailto:support@deephorizon.io">support@deephorizon.io</a></p>
              <p><a href="https://www.deephorizon.io/" target="_blank" rel="noopener noreferrer">www.deephorizon.io</a></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
