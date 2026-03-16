"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function TermsOfServicePage() {
  return (
    <>
      <Nav variant="policy" />

      <section className="policy-hero">
        <div className="policy-hero-inner">
          <span className="eyebrow">Legal</span>
          <h1>Terms of Service</h1>
          <p className="policy-meta">Effective: 1<sup>st</sup> November, 2025 &nbsp;&middot;&nbsp; Deep Horizon Security Technologies Pvt. Ltd.</p>
        </div>
      </section>

      <div className="policy-body">
        <div className="policy-inner">
          <div className="policy-section">
            <h2>1. Introduction</h2>
            <p>Welcome to Deep Horizon (&ldquo;App&rdquo;, &ldquo;Platform&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), operated by Deep Horizon Security Technologies Pvt. Ltd. By downloading, accessing, or using Deep Horizon, you (&ldquo;User&rdquo;, &ldquo;you&rdquo;, or &ldquo;your&rdquo;) agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;).</p>
            <p>If you do not agree with these Terms, please do not use or access the app.</p>
          </div>
          <div className="policy-section">
            <h2>2. Nature of Services</h2>
            <p>Deep Horizon is a technology-driven safety companion platform that enables users to:</p>
            <ul>
              <li>Access real-time safety features, such as emergency alerts, live location sharing, and threat detection;</li>
              <li>Connect with trusted contacts, emergency helplines, and &mdash; where available &mdash; licensed response partners;</li>
              <li>Receive digital assistance, guidance, and tracking support during distress situations.</li>
            </ul>
            <p>Deep Horizon does not provide or deploy private security personnel directly. Any physical security response is coordinated through state-licensed security agencies or public emergency responders (e.g., 112) as available.</p>
          </div>
          <div className="policy-section">
            <h2>3. User Consent &amp; Acknowledgement</h2>
            <p>By using the App, you expressly acknowledge that:</p>
            <ol>
              <li>Deep Horizon functions as a digital safety companion, not a private security agency.</li>
              <li>The platform is an assistive technology, meant to supplement &mdash; not replace &mdash; police, emergency, or professional security services.</li>
              <li>Any physical response (if provided) will be executed only by PSARA-licensed partners, and Deep Horizon&rsquo;s role is limited to coordination and communication.</li>
              <li>You are responsible for using the app safely and ensuring the accuracy of your profile, contacts, and emergency data.</li>
            </ol>
          </div>
          <div className="policy-section">
            <h2>4. User Responsibilities</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate registration details;</li>
              <li>Use the app lawfully and ethically;</li>
              <li>Not misuse emergency alert systems;</li>
              <li>Allow access to device permissions (e.g., location, notifications) for proper functioning.</li>
            </ul>
          </div>
          <div className="policy-section">
            <h2>5. Emergency &amp; Limitations</h2>
            <p>While Deep Horizon strives to offer reliable safety features:</p>
            <ul>
              <li>We do not guarantee immediate emergency response in every circumstance;</li>
              <li>The service may depend on network, device, and geographic availability;</li>
              <li>Deep Horizon is not liable for delays, failures, or outcomes of emergency interventions.</li>
            </ul>
            <div className="policy-note">Users are advised to always contact <strong>112</strong> (National ERSS) or local authorities in life-threatening situations.</div>
          </div>
          <div className="policy-section">
            <h2>6. Payments &amp; Subscriptions</h2>
            <p>Certain premium features or subscriptions may be offered within the app. All in-app payments are governed by the <Link href="/refund-policy">Refund and Cancellation Policy</Link> available within the app and on our website.</p>
          </div>
          <div className="policy-section">
            <h2>7. Privacy</h2>
            <p>Your personal data is handled in accordance with our <Link href="/privacy-policy">Privacy Policy</Link>, available in the app and at <a href="https://www.deephorizon.io/" target="_blank" rel="noopener noreferrer">www.deephorizon.io</a>.</p>
          </div>
          <div className="policy-section">
            <h2>8. Partnerships &amp; Licensing</h2>
            <p>Deep Horizon may collaborate with state-licensed private security agencies, law enforcement bodies, and verified partners to provide on-ground support. Users acknowledge that any such services are rendered under the licence of those partners, not directly by Deep Horizon Security Technologies Pvt. Ltd.</p>
          </div>
          <div className="policy-section">
            <h2>9. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, Deep Horizon shall not be liable for:</p>
            <ul>
              <li>Any indirect, incidental, or consequential damages arising from use of the app;</li>
              <li>Delays, communication errors, or non-availability of emergency response;</li>
              <li>Actions or omissions of third-party agencies or responders.</li>
            </ul>
          </div>
          <div className="policy-section">
            <h2>10. Termination</h2>
            <p>We reserve the right to suspend or terminate user access for misuse, false reporting, unlawful conduct, or violation of these Terms.</p>
          </div>
          <div className="policy-section">
            <h2>11. Governing Law &amp; Jurisdiction</h2>
            <p>These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Guwahati, Assam.</p>
          </div>
          <div className="policy-section">
            <h2>12. Contact</h2>
            <div className="policy-contact-box">
              <p>For questions or support, reach us at:</p>
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
