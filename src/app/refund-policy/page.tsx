"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function RefundPolicyPage() {
  return (
    <>
      <Nav variant="policy" />
      <section className="policy-hero">
        <div className="policy-hero-inner">
          <span className="eyebrow">Legal</span>
          <h1>Refund &amp; Cancellation Policy</h1>
          <p className="policy-meta">Effective: 1<sup>st</sup> November, 2025 &nbsp;&middot;&nbsp; Last Updated: 1<sup>st</sup> November, 2025</p>
        </div>
      </section>
      <div className="policy-body">
        <div className="policy-inner">
          <div className="policy-section">
            <p>This Refund and Cancellation Policy (&ldquo;Policy&rdquo;) outlines the terms under which payments, subscriptions, and in-app purchases made through the Deep Horizon App are handled.</p>
            <p>The app and all related digital services are owned and operated by Deep Horizon Security Technologies Pvt. Ltd., a company incorporated under the laws of India (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;).</p>
            <p>By purchasing or subscribing to any service or feature on the Deep Horizon App, you agree to the terms set out below.</p>
          </div>
          <div className="policy-section">
            <h2>1. General Terms</h2>
            <p>All purchases made through the Deep Horizon App, including subscriptions, credits, and premium security features, are non-transferable and, except as provided herein, non-refundable once confirmed.</p>
            <p>We recommend that users carefully review service descriptions, pricing, and plan details before completing any transaction.</p>
          </div>
          <div className="policy-section">
            <h2>2. Cancellation Policy</h2>
            <h3>2.1 Subscription Cancellations</h3>
            <p>Users may cancel their active subscriptions at any time through their respective app store accounts:</p>
            <ul><li><strong>Google Play Store:</strong> Play Store &rarr; Subscriptions &rarr; Deep Horizon &rarr; Cancel</li><li><strong>Apple App Store:</strong> Settings &rarr; Apple ID &rarr; Subscriptions &rarr; Deep Horizon &rarr; Cancel</li></ul>
            <p>Cancellations will stop auto-renewal from the next billing cycle. Users will continue to have access to the purchased plan until the current billing period ends. Payments already processed for the ongoing cycle are non-refundable.</p>
            <h3>2.2 One-Time Purchases and Credits</h3>
            <p>For one-time in-app purchases or credit packs, cancellations are not applicable once the transaction has been successfully completed.</p>
          </div>
          <div className="policy-section">
            <h2>3. Refund Eligibility</h2>
            <p>Refunds may be issued only under the following verified circumstances:</p>
            <h3>3.1 Technical Issues</h3>
            <p>If a payment is successfully processed but the corresponding service, plan, or feature is not activated or accessible due to a technical error on our platform, a full refund may be issued after verification.</p>
            <h3>3.2 Duplicate Transactions</h3>
            <p>In case of an accidental duplicate charge for the same purchase, the duplicate amount will be refunded after confirmation.</p>
            <h3>3.3 Service Unavailability</h3>
            <p>If a purchased feature or plan becomes unavailable before activation, the user will be entitled to a full refund.</p>
            <h3>3.4 Annual Subscription Grace Period</h3>
            <p>If an annual subscription is cancelled within 7 days of activation and no premium feature or emergency service has been used during that period, the user may receive a pro-rata refund.</p>
          </div>
          <div className="policy-section">
            <h2>4. Non-Refundable Situations</h2>
            <p>Refunds will not be issued in the following cases:</p>
            <ul><li>The service or feature has been successfully activated or used.</li><li>The user cancels a plan after a premium or emergency feature has been accessed.</li><li>The refund request is based on subjective dissatisfaction (e.g., change of mind or perceived service quality).</li><li>The user fails to use or access purchased plans or credits within the validity period.</li><li>The refund request is made after the eligible time window has expired.</li></ul>
          </div>
          <div className="policy-section">
            <h2>5. Refund Request Process</h2>
            <p>To request a refund, please email <a href="mailto:support@deephorizon.io">support@deephorizon.io</a> within <strong>7 days</strong> of the transaction date.</p>
            <p>Your request should include the following:</p>
            <ul><li>Registered mobile number or account ID</li><li>Transaction ID or payment receipt</li><li>Brief description of the issue</li></ul>
            <p>Once verified, approved refunds will be processed within <strong>7&ndash;10 business days</strong> to the original payment method.</p>
            <div className="policy-note">If your purchase was made through the Google Play Store or Apple App Store, refunds are governed by their respective refund policies. Deep Horizon Security Technologies Pvt. Ltd. cannot directly process refunds for transactions made through these platforms but will assist in facilitating communication where possible.</div>
          </div>
          <div className="policy-section">
            <h2>6. Policy Modifications</h2>
            <p>Deep Horizon Security Technologies Pvt. Ltd. reserves the right to update, modify, or revise this Refund and Cancellation Policy at any time. Updates will be published on this page with the revised &ldquo;Last Updated&rdquo; date. Users are encouraged to review this page periodically to stay informed of any changes.</p>
          </div>
          <div className="policy-section">
            <h2>7. Contact Us</h2>
            <div className="policy-contact-box">
              <p>For refund, cancellation, or billing-related enquiries:</p>
              <p>Deep Horizon Security Technologies Pvt. Ltd.</p>
              <p><a href="mailto:support@deephorizon.io">support@deephorizon.io</a></p>
              <p><a href="https://www.deephorizon.io/" target="_blank" rel="noopener noreferrer">www.deephorizon.io</a></p>
            </div>
          </div>
          <div className="policy-section">
            <h2>8. Governing Law</h2>
            <p>This Policy shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to this Policy shall be subject to the exclusive jurisdiction of the courts located in Guwahati, Assam, India.</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
