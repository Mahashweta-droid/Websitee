"use client";

import React from "react";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen overflow-hidden relative bg-black text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-black" />
        <div className="absolute -top-10 -left-10 w-96 h-96 rounded-full blur-3xl bg-blue-500/20" />
        <div className="absolute bottom-0 right-0 w-[28rem] h-[28rem] rounded-full blur-3xl bg-purple-500/10" />
        <div className="absolute inset-0 backdrop-blur-2xl bg-black/30" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 pt-28 pb-24">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-thin tracking-tight">Terms of Service</h1>
          <p className="mt-3 text-sm text-gray-400">Last Updated: 30th August 2025</p>
        </div>

        <div className="rounded-3xl border border-blue-400/20 bg-white/5 shadow-2xl shadow-blue-900/30 backdrop-blur-xl p-6 sm:p-10">
          <div className="prose prose-invert max-w-none text-gray-300">
            <p><strong>Last Updated:</strong> 30th August 2025</p>
            <p>These Terms of Service ("Terms") govern your use of the Deep Horizon mobile application ("App") and services provided by Deep Horizon Security Technologies Pvt. Ltd. By downloading or using the App, you agree to be bound by these Terms.</p>

            <h2>1. Eligibility</h2>
            <p>You must be at least 18 years old and legally capable of entering into binding agreements under Indian law.</p>

            <h2>2. Scope of Services</h2>
            <p>Deep Horizon provides technology-enabled access to security personnel and emergency support. Services are subject to availability and operational limitations. We do not guarantee uninterrupted or error-free service.</p>

            <h2>3. User Obligations</h2>
            <p>You agree to:</p>
            <ul>
              <li>Provide accurate and updated information.</li>
              <li>Use the App solely for lawful and legitimate purposes.</li>
              <li>Refrain from initiating false alarms, hoaxes, or misuse.</li>
              <li>Maintain confidentiality of your login credentials.</li>
            </ul>
            <p>Abuse of the App may result in permanent suspension and legal action.</p>

            <h2>4. Law Enforcement Cooperation</h2>
            <p>By using the App, you consent to Deep Horizon sharing your personal information, including location and account data, with law enforcement and regulatory authorities when required, without further notice to you.</p>

            <h2>5. Payments &amp; Refunds</h2>
            <ul>
              <li>Fees are displayed in the App and are subject to applicable taxes.</li>
              <li>Payments are final and non-refundable, except as mandated by law.</li>
              <li>Payment failures or disputes with third-party gateways are beyond Deep Horizon’s liability.</li>
            </ul>

            <h2>6. Service Limitations and Disclaimers</h2>
            <ul>
              <li>Deep Horizon does not replace government emergency services (police, fire, ambulance).</li>
              <li>Response times and availability of personnel cannot be guaranteed.</li>
              <li>We are not responsible for delays, failures, or inaccuracies caused by network outages, device errors, or third-party services.</li>
            </ul>

            <h2>7. Limitation of Liability</h2>
            <p>To the maximum extent permitted under Indian law:</p>
            <ul>
              <li>Deep Horizon is not liable for indirect, incidental, or consequential damages.</li>
              <li>Liability for direct damages, if any, shall not exceed the amount paid by you for the specific service in question.</li>
              <li>Deep Horizon disclaims liability for the independent actions of third-party security personnel.</li>
            </ul>

            <h2>8. Termination</h2>
            <p>We reserve the right to suspend or terminate your account, with or without notice, if:</p>
            <ul>
              <li>You breach these Terms,</li>
              <li>You misuse the App,</li>
              <li>Required by law enforcement or regulatory order.</li>
            </ul>

            <h2>9. Intellectual Property</h2>
            <p>All intellectual property rights in the App, trademarks, and content remain the exclusive property of Deep Horizon. Unauthorized reproduction, modification, or distribution is prohibited.</p>

            <h2>10. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless Deep Horizon, its directors, employees, and partners from any claims, liabilities, damages, or expenses arising from:</p>
            <ul>
              <li>Your misuse of the App,</li>
              <li>Violation of these Terms,</li>
              <li>Violation of rights of third parties.</li>
            </ul>

            <h2>11. Governing Law and Jurisdiction</h2>
            <p>These Terms are governed by Indian law. Any disputes shall be subject to the exclusive jurisdiction of the courts in Guwahati, Assam.</p>

            <h2>12. Changes to Terms</h2>
            <p>We may modify these Terms at our discretion. Continued use of the App after changes constitutes your acceptance of the revised Terms.</p>

            <h2>13. Contact</h2>
            <p>
              Deep Horizon Security Technologies Pvt. Ltd.<br />
              Address – Ashirwad Bhavan, Near Maligaon Overbridge, Guwahati 781012, Assam<br />
              Email: support@deephorizon.io<br />
              Phone: +91-3613102680
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link href="/" className="inline-block px-5 py-2 rounded-xl border border-blue-400/20 bg-white/5 hover:bg-white/10 text-blue-300 hover:text-blue-200 transition">← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}


