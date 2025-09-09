"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
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
          <h1 className="text-4xl md:text-5xl font-thin tracking-tight">Privacy Policy</h1>
          <p className="mt-3 text-sm text-gray-400">Last Updated: 30th August 2025</p>
        </div>

        <div className="rounded-3xl border border-blue-400/20 bg-white/5 shadow-2xl shadow-blue-900/30 backdrop-blur-xl p-6 sm:p-10">
          <div className="prose prose-invert max-w-none text-gray-300">
            <p><strong>Last Updated:</strong> 30th August 2025</p>
            <p>Deep Horizon Security Technologies Pvt. Ltd. ("Deep Horizon," "we," "our," or "us") is committed to protecting your personal information while ensuring compliance with applicable laws and security requirements. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Deep Horizon mobile application ("App") and associated services.</p>
            <h2>1. Information We Collect</h2>
            <p>We may collect and process the following categories of data:</p>
            <ul>
              <li><strong>Identity Information:</strong> Name, contact number, email, government-issued identification (if required).</li>
              <li><strong>Location Data:</strong> Real-time GPS location for security deployment and monitoring.</li>
              <li><strong>Emergency Contact Data:</strong> Names and phone numbers of persons you designate.</li>
              <li><strong>Payment Information:</strong> Processed by third-party gateways (Deep Horizon does not store card details).</li>
              <li><strong>Device &amp; Network Information:</strong> Device model, operating system, IP address, and app usage logs.</li>
              <li><strong>Sensitive Incident Data:</strong> Records of security alerts, requests for help, and interactions with personnel.</li>
            </ul>
            <h2>2. Use of Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Deliver and improve our security services.</li>
              <li>Authenticate your identity and prevent fraud or misuse.</li>
              <li>Facilitate real-time coordination with security personnel.</li>
              <li>Provide lawful information-sharing with law enforcement and regulatory authorities.</li>
              <li>Meet contractual, regulatory, and legal obligations.</li>
            </ul>
            <h2>3. Disclosure of Information</h2>
            <p>We reserve the right to disclose your personal information under the following circumstances:</p>
            <ul>
              <li><strong>Law Enforcement and Government Authorities:</strong> Deep Horizon may share your information, including location data, account details, and usage history, with law enforcement agencies, government bodies, or regulatory authorities without prior notice to you, if required by law, regulation, or in the interest of public safety and national security.</li>
              <li><strong>Security Personnel and Service Providers:</strong> Limited information may be shared with authorized security professionals and third-party service providers engaged by us.</li>
              <li><strong>Legal Proceedings:</strong> If necessary, we may disclose information in connection with investigations, litigation, or to protect our rights, safety, and property.</li>
            </ul>
            <h2>4. Data Security</h2>
            <p>We implement encryption, restricted access, and monitoring systems. However, no method of transmission or storage is completely secure. You acknowledge that you use the App at your own risk.</p>
            <h2>5. Data Retention</h2>
            <p>We retain personal information for as long as necessary to:</p>
            <ul>
              <li>Fulfil service obligations,</li>
              <li>Comply with applicable laws,</li>
              <li>Assist in investigations,</li>
              <li>Resolve disputes and enforce agreements.</li>
            </ul>
            <h2>6. User Rights and Limitations</h2>
            <p>While you may request access, correction, or deletion of your personal data, Deep Horizon reserves the right to deny such requests where retention is mandated by law, regulatory requirements, or ongoing investigations.</p>
            <h2>7. Children’s Data</h2>
            <p>The App is not intended for individuals below 18 years of age. We do not knowingly collect their data.</p>
            <h2>8. Changes to Privacy Policy</h2>
            <p>We may amend this Privacy Policy at our sole discretion. Continued use of the App constitutes acceptance of revised terms.</p>
            <h2>9. Contact</h2>
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


