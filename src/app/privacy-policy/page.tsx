"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Nav variant="policy" />
      <section className="policy-hero">
        <div className="policy-hero-inner">
          <span className="eyebrow">Legal</span>
          <h1>Privacy Policy</h1>
          <p className="policy-meta">Effective: 1<sup>st</sup> November, 2025 &nbsp;&middot;&nbsp; Last Updated: 1<sup>st</sup> November, 2025</p>
        </div>
      </section>
      <div className="policy-body">
        <div className="policy-inner">
          <div className="policy-section">
            <p>This Privacy Policy describes how Deep Horizon Security Technologies Pvt. Ltd. (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) collects, uses, stores, and protects the personal information of users (&ldquo;you&rdquo; or &ldquo;your&rdquo;) who visit our website and use the Deep Horizon App or related digital services.</p>
            <p>We are committed to safeguarding your privacy and ensuring transparency in how your data is handled.</p>
          </div>
          <div className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>We may collect the following types of information when you use our website, app, or services:</p>
            <h3>1.1 Personal Information</h3>
            <p>Information that can identify you, such as:</p>
            <ul><li>Full name</li><li>Mobile number and email address</li><li>Location data (when using security or emergency features)</li><li>Payment details (processed via secure third-party gateways)</li><li>Device and app usage information</li></ul>
            <h3>1.2 Non-Personal Information</h3>
            <p>Technical and analytical data that does not identify you directly, such as:</p>
            <ul><li>Device type, operating system, and browser type</li><li>IP address and general geographic location</li><li>App usage metrics, crash logs, and performance data</li></ul>
          </div>
          <div className="policy-section">
            <h2>2. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul><li>Provide, operate, and improve the Deep Horizon App and related services</li><li>Enable core features such as live protection, emergency response, and real-time tracking</li><li>Process payments, subscriptions, and in-app transactions securely</li><li>Communicate service updates, alerts, or critical safety notifications</li><li>Personalise user experience and enhance app performance</li><li>Comply with legal, safety, and regulatory obligations</li></ul>
            <div className="policy-note">We do not sell, rent, or trade your personal information to any third parties.</div>
          </div>
          <div className="policy-section">
            <h2>3. Information Sharing and Disclosure</h2>
            <p>We may share your information only under the following limited circumstances:</p>
            <ul><li><strong>With Authorised Service Partners:</strong> To deliver emergency response, protection, or support services.</li><li><strong>With Payment Gateways:</strong> To securely process your transactions.</li><li><strong>With Law Enforcement or Authorities:</strong> When required by law, for safety, or in emergencies.</li><li><strong>With Analytics or Cloud Providers:</strong> For performance monitoring or data storage under strict confidentiality agreements.</li></ul>
            <p>All third parties handling user data are bound by data protection obligations consistent with this Privacy Policy and applicable laws.</p>
          </div>
          <div className="policy-section">
            <h2>4. Data Retention</h2>
            <p>We retain personal information only for as long as necessary to:</p>
            <ul><li>Provide services you have requested or subscribed to,</li><li>Comply with legal requirements,</li><li>Resolve disputes or enforce our agreements, and</li><li>Assist in legal requirements or ongoing investigations.</li></ul>
            <p>Data may be securely deleted or anonymised after its retention purpose has been fulfilled.</p>
          </div>
          <div className="policy-section">
            <h2>5. Data Security</h2>
            <p>We implement industry-standard security measures to protect user data against unauthorised access, alteration, disclosure, or destruction. These include encryption, access control, secure servers, and periodic security audits.</p>
            <p>However, no system is completely immune to breaches. By using our services, you acknowledge and accept this inherent risk.</p>
          </div>
          <div className="policy-section">
            <h2>6. Your Rights</h2>
            <p>Subject to applicable laws (including the Digital Personal Data Protection Act, 2023), you have the right to:</p>
            <ul><li>Access and request a copy of your personal data</li><li>Request correction or deletion of inaccurate or outdated information</li><li>Withdraw consent for processing (where applicable)</li><li>Request data portability, if supported</li></ul>
            <p>However, we reserve the right to retain data where retention is mandated by law, regulatory requirements, ongoing investigations, or in the interest of public safety and national security.</p>
            <p>To exercise these rights, please contact us at <a href="mailto:support@deephorizon.io">support@deephorizon.io</a>.</p>
          </div>
          <div className="policy-section">
            <h2>7. Cookies and Tracking</h2>
            <p>Our website may use cookies and similar technologies to enhance user experience and analyse site performance. You can choose to disable cookies through your browser settings; however, some website features may not function properly as a result.</p>
          </div>
          <div className="policy-section">
            <h2>8. Children&rsquo;s Privacy</h2>
            <p>Our services are intended for individuals aged 18 years and above. We do not knowingly collect or process personal data from minors. If we become aware of any such data, we will delete it promptly.</p>
          </div>
          <div className="policy-section">
            <h2>9. Third-Party Links</h2>
            <p>Our website and app may contain links to external websites or services not operated by us. We are not responsible for the content, security, or privacy practices of those third-party platforms.</p>
          </div>
          <div className="policy-section">
            <h2>10. Policy Updates</h2>
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or legal obligations. The updated version will be posted on this page with a revised &ldquo;Last Updated&rdquo; date. Continued use of our services after such updates constitutes acceptance of the revised policy.</p>
          </div>
          <div className="policy-section">
            <h2>11. Contact Us</h2>
            <div className="policy-contact-box">
              <p>Deep Horizon Security Technologies Pvt. Ltd.</p>
              <p><a href="mailto:support@deephorizon.io">support@deephorizon.io</a></p>
              <p><a href="https://www.deephorizon.io/" target="_blank" rel="noopener noreferrer">www.deephorizon.io</a></p>
              <p>1<sup>st</sup> Floor, Ashirwad Bhavan, Near Maligaon Overbridge, Guwahati 781012, Assam</p>
            </div>
          </div>
          <div className="policy-section">
            <h2>12. Governing Law</h2>
            <p>This Privacy Policy and any disputes arising out of it shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction vested in the courts of Guwahati, Assam.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
