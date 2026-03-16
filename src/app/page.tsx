"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const CheckSvg = () => (
  <svg fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7" /></svg>
);

export default function HomePage() {
  const [billingMode, setBillingMode] = useState<"monthly" | "annual">("annual");

  const pricing = {
    monthly: { ind: "₹149", indPeriod: "/mo", indSave: "\u00A0", fam: "₹649", famPeriod: "/mo", famSave: "Up to 5 members" },
    annual: { ind: "₹1,499", indPeriod: "/yr", indSave: "~2 months free vs. monthly", fam: "₹6,349", famPeriod: "/yr", famSave: "~2.2 months free · up to 5 members" },
  };
  const p = pricing[billingMode];

  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg-ring"></div>
        <div className="hero-content">
          <div className="hero-eyebrow">
            <div className="dot"></div>
            <span>Always monitoring. Always ready.</span>
          </div>
          <h1>
            Be <em>anywhere.</em>
            <br />
            Fear nothing.
          </h1>
          <p className="hero-sub">
            Deep Horizon is your personal security concierge — real-time monitoring, trained human backup, and silent emergency response. Ready the instant you need it.
          </p>
          <div className="hero-actions">
            <a href="#download" className="btn-teal">
              Start Free
              <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#features" className="btn-ghost">
              See how it works
              <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
          </div>
          <div className="hero-proof">
            <div className="hero-proof-stats">
              <div className="hps-item">
                <span className="hps-num">24/7</span>
                <span className="hps-label">Live agent coverage</span>
              </div>
              <div className="hps-divider"></div>
              <div className="hps-item">
                <span className="hps-num">&lt;90s</span>
                <span className="hps-label">Response time</span>
              </div>
              <div className="hps-divider"></div>
              <div className="hps-item">
                <span className="hps-num">100%</span>
                <span className="hps-label">Encrypted &amp; private</span>
              </div>
            </div>
          </div>
        </div>

        {/* ORBITAL VISUAL */}
        <div className="hero-visual">
          <div className="orbital-ring ring-1"></div>
          <div className="orbital-ring ring-2"></div>
          <div className="orbital-ring ring-3"></div>
          <div className="orbital-center">
            <div className="orbital-status"></div>
            <div className="orbital-label-main">Status</div>
            <div className="orbital-label-val">ACTIVE</div>
          </div>
          <div className="orbit-node on-track">
            <svg fill="none" stroke="#3B82F6" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <span className="node-lbl">Track</span>
          </div>
          <div className="orbit-node on-video">
            <svg fill="none" stroke="#EF4444" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
            <span className="node-lbl">Video</span>
          </div>
          <div className="orbit-node on-sos">
            <svg fill="none" stroke="#F5A623" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
            <span className="node-lbl">SOS</span>
          </div>
          <div className="orbit-node on-check">
            <svg fill="none" stroke="#0D1B2A" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <span className="node-lbl">Check</span>
          </div>
          {/* Floating cards */}
          <div className="float-card fc-top">
            <div className="fc-header">
              <div className="fc-icon fc-icon-teal">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
              </div>
              <div>
                <div className="fc-title">Priya is safe</div>
                <div className="fc-sub">Journey monitored · 4.46 hrs</div>
              </div>
            </div>
            <div className="fc-bar"><div className="fc-bar-fill"></div></div>
          </div>
          <div className="float-card fc-bot">
            <div className="fc-header">
              <div className="fc-icon fc-icon-red">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <div>
                <div className="fc-title">Agent connected</div>
                <div className="fc-sub">Video Monitor · Live now</div>
              </div>
            </div>
            <div style={{ marginTop: 8 }}><span className="fc-tag">● Recording</span></div>
          </div>
        </div>
      </section>

      {/* ── TRUST STRIP ── */}
      <div className="trust-strip">
        <div className="trust-inner">
          <div className="trust-item">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            <span><strong>256-bit AES</strong> encryption</span>
          </div>
          <div className="trust-item">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
            <span><strong>24/7</strong> live agent coverage</span>
          </div>
          <div className="trust-item">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            <span>Response in <strong>under 90 seconds</strong></span>
          </div>
          <div className="trust-item">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" /></svg>
            <span>Your data is <strong>never sold</strong></span>
          </div>
          <div className="trust-item">
            <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" /></svg>
            <span>App Store &amp; <strong>Play Store</strong> listed</span>
          </div>
        </div>
      </div>

      {/* ── PROBLEM SECTION ── */}
      <section style={{ background: "var(--cream)" }}>
        <div className="problem-section">
          <div>
            <div className="problem-label">
              <div className="line"></div>
              <span>The reality</span>
            </div>
            <h2 className="problem-h2">
              Danger doesn&rsquo;t<br />
              wait for you to<br />
              <em>feel ready.</em>
            </h2>
            <p className="problem-body">
              The moments that matter most are the ones we never see coming. Late-night commutes. Solo travel. Living alone. Most people face these moments with nothing but hope. We think that&rsquo;s not enough.
            </p>
            <div style={{ marginTop: 36 }}>
              <a href="#features" className="btn-ink">
                See how we help
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
            </div>
          </div>
          <div className="problem-stats">
            <div className="stat-row">
              <div className="stat-num">1<span> in 3</span></div>
              <div className="stat-text">
                <strong>Women feel unsafe commuting at night</strong>
                Even in cities considered relatively safe, the anxiety is real and constant.
              </div>
            </div>
            <div className="stat-row">
              <div className="stat-num">51<span>/hr</span></div>
              <div className="stat-text">
                <strong>Crimes against women reported every hour in India</strong>
                Countless more go unsaid. The threat is constant — your protection should be too.
              </div>
            </div>
            <div className="stat-row">
              <div className="stat-num">67<span>%</span></div>
              <div className="stat-text">
                <strong>Of incidents happen when someone is alone</strong>
                The best safety tool is a human being who has your back.
              </div>
            </div>
          </div>
          <p className="stat-sources">Sources: NCRB 2023 · NARI 2025 (National Commission for Women) · BPRD 2024</p>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="how-section">
        <div className="how-inner">
          <div className="how-header">
            <div className="how-eyebrow">How it works</div>
            <h2>Three steps to being <em>truly protected</em></h2>
            <p>From the moment something feels wrong to the moment you&rsquo;re safe — Deep Horizon has every step covered.</p>
          </div>
          <div className="how-steps">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" /></svg>
              </div>
              <h3>Set up your profile</h3>
              <p>Add your blood group, known allergens, home address, and at least one emergency contact. Your profile stays private and travels with you silently — ready to share everything that matters the moment it&rsquo;s needed.</p>
              <div className="step-arrow">
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3m-3 3.75h3m-6 3.75H6" /></svg>
              </div>
              <h3>Go about your life</h3>
              <p>Before a late commute, share your journey. In a new neighbourhood, request a safety check. Whenever doubt creeps in, check in with a live agent. Deep Horizon isn&rsquo;t just for emergencies — it&rsquo;s for every moment your instincts tell you to be careful.</p>
              <div className="step-arrow">
                <svg fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-icon">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25 4.5-4.5m-9.228-3.128A1.5 1.5 0 005.25 9.75v.563c0 5.19 3.23 9.845 7.875 11.625 4.645-1.78 7.875-6.434 7.875-11.625V9.75a1.5 1.5 0 00-1.272-1.478A9.957 9.957 0 0012 6.75a9.957 9.957 0 00-5.478 1.522z" /></svg>
              </div>
              <h3>One tap when it matters</h3>
              <p>A single tap connects you to a live agent in under 90 seconds. They already know your profile. They know who to call. They know where you are. Everything you set up is now working at full speed — because in that moment, there&rsquo;s no time to explain.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES BENTO ── */}
      <section className="features-section" id="features">
        <div className="features-inner">
          <div className="features-header">
            <div className="features-header-left">
              <span className="eyebrow">Core Features</span>
              <h2>Built for the<br /><em>moment of need</em></h2>
            </div>
          </div>
          <div className="bento">
            <div className="bento-card bc-video">
              <div className="bento-icon bi-white">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
              </div>
              <h3>Video Monitor</h3>
              <p>Connect live via encrypted HD video to a trained security agent the moment you feel unsafe. They stay with you until you&rsquo;re in the clear.</p>
              <div className="video-preview">
                <div className="vp-avatar">SOC</div>
                <div className="vp-info">
                  <div className="vp-name">Agent Rajan Mehta</div>
                  <div className="vp-status">Security Operations · Certified</div>
                </div>
                <div className="vp-live">
                  <div className="vp-live-dot"></div>
                  <span>LIVE</span>
                </div>
              </div>
              <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" as const }}>
                <span style={{ padding: "5px 12px", background: "rgba(255,255,255,0.08)", borderRadius: 100, fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>HD Encrypted</span>
                <span style={{ padding: "5px 12px", background: "rgba(255,255,255,0.08)", borderRadius: 100, fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>24/7 Available</span>
                <span style={{ padding: "5px 12px", background: "rgba(255,255,255,0.08)", borderRadius: 100, fontSize: 11, color: "rgba(255,255,255,0.5)", fontWeight: 600 }}>One Tap</span>
              </div>
            </div>

            <div className="bento-card bc-track">
              <div className="bento-icon bi-teal">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3>Track Me</h3>
              <p>Set your check-in interval and journey duration. Deep Horizon reaches out at every checkpoint — miss one and a live agent steps in immediately. Built for late commutes, solo travel, or any journey where silence shouldn&rsquo;t go unnoticed.</p>
            </div>

            <div className="bento-card bc-check">
              <div className="bento-icon bi-ink">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3>Schedule Check-in</h3>
              <p>When you lock up for the night, when you step out of the office — set a time and your agent will be there. Daily, weekly, or any rhythm that fits your life.</p>
            </div>

            <div className="bento-card bc-silent">
              <div className="bento-icon bi-red">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 8v4M12 16h.01" /></svg>
              </div>
              <h3>SOS</h3>
              <p>Tap SOS and a 10-second countdown begins. Enter your passkey to cancel if you&rsquo;re safe. If not — a live agent connects instantly on video. If you can&rsquo;t respond, they call. If the call goes unanswered, your location and full context are relayed to the relevant emergency services — police, medical, or fire. Every second is accounted for.</p>
              <div className="sos-pill">
                <div className="sos-dot"></div>
                10s countdown · Passkey to cancel
              </div>
            </div>

            <div className="bento-card bc-guard">
              <div className="bento-icon bi-white">
                <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24"><path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </div>
              <h3>Book a Bodyguard</h3>
              <p>From personal escorts and secure transport to threat assessments and full event security — book verified, PSARA-compliant professionals through the app. Every assignment is monitored live from our SOC, ready to escalate the moment any threat becomes imminent.</p>
              <div className="guard-creds">
                <span>PSARA Certified</span>
                <span className="cred-dot">·</span>
                <span>SOC Monitored</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ESCALATION ── */}
      <section className="escalation-section">
        <div className="escalation-inner">
          <div className="escalation-header">
            <div className="escalation-eyebrow">When It Matters</div>
            <h2>What happens when<br />things go <em>wrong.</em></h2>
            <p className="escalation-sub">Deep Horizon doesn&rsquo;t replace emergency services. We make sure they reach you — with the right context, at the right time, when you can&rsquo;t speak for yourself.</p>
          </div>
          <div className="escalation-timeline">
            <div className="et-step">
              <div className="et-marker"><div className="et-num">01</div><div className="et-line"></div></div>
              <div className="et-content">
                <h3>Alert triggered</h3>
                <p>You tap SOS, or you miss a scheduled check-in. The system recognises something may be wrong.</p>
              </div>
            </div>
            <div className="et-step">
              <div className="et-marker"><div className="et-num">02</div><div className="et-line"></div></div>
              <div className="et-content">
                <h3>A human agent reaches out</h3>
                <p>Depending on the trigger, an agent connects via live video or calls your phone directly. They&rsquo;re trained to assess the situation in real time.</p>
              </div>
            </div>
            <div className="et-step">
              <div className="et-marker"><div className="et-num">03</div><div className="et-line"></div></div>
              <div className="et-content">
                <h3>The agent makes the call</h3>
                <p>If the agent senses you&rsquo;re under duress — even during an active video session — they escalate immediately to the relevant emergency services. If you can&rsquo;t respond at all, they do the same. Your location, profile, and full context are relayed to police, medical, or fire. <span className="et-algo">A trained human makes this decision based on what they&rsquo;ve seen and heard. Not an algorithm.</span></p>
              </div>
            </div>
            <div className="et-step et-step-last">
              <div className="et-marker"><div className="et-num">04</div></div>
              <div className="et-content">
                <h3>Your people are informed</h3>
                <p>Your emergency contacts receive your live location and a summary of the situation — so they know what&rsquo;s happening without the panic of a context-free alert.</p>
              </div>
            </div>
          </div>
          <div className="escalation-close">
            Every second between the alert and the response is accounted for. No dead air. No waiting. No hoping someone notices.
          </div>
        </div>
      </section>

      {/* ── SCENARIOS ── */}
      <section className="persona-section" id="for-everyone">
        <div className="persona-inner">
          <div className="persona-header">
            <span className="eyebrow">Sound Familiar?</span>
            <h2>Deep Horizon is for<br /><em>moments like these</em></h2>
            <p>You don&rsquo;t have to be in danger to need it. You just have to be human.</p>
          </div>
          <div className="scenario-grid">
            <div className="scenario-card"><h3>Coming home after midnight</h3><p>The cab is moving. The streets are quiet. You just want someone to know you&rsquo;re on your way.</p></div>
            <div className="scenario-card"><h3>Living alone in a new city</h3><p>No family nearby. No familiar faces. Just you, your apartment, and the question of what happens if something goes wrong.</p></div>
            <div className="scenario-card"><h3>A solo trip no one knows about</h3><p>You&rsquo;re exploring somewhere new. The neighbourhood changed somewhere between the restaurant and your hotel. Your instincts just flagged something.</p></div>
            <div className="scenario-card"><h3>The shift that ends at 2am</h3><p>Healthcare, hospitality, field work — some jobs don&rsquo;t end at sunset. Your commute home shouldn&rsquo;t be the most uncertain part of your day.</p></div>
            <div className="scenario-card"><h3>Your mother lives alone</h3><p>She says she&rsquo;s fine. But you&rsquo;re three cities away, and you know she wouldn&rsquo;t call even if she weren&rsquo;t.</p></div>
            <div className="scenario-card"><h3>Something feels off</h3><p>You can&rsquo;t explain it. Nothing has happened yet. But something doesn&rsquo;t feel right — and you want a real person on the line.</p></div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section">
        <div className="testimonials-inner">
          <div className="test-header">
            <span className="eyebrow">Real Voices</span>
            <h2>Stories from people<br />who needed it <em>most</em></h2>
          </div>
          <div className="testimonials-grid">
            <div className="tcard">
              <div className="tcard-quote"><span className="qmark">&ldquo;</span> I was walking home at midnight and something felt off. I opened Video Monitor and the agent stayed on the line the entire walk. I never felt alone. That&rsquo;s not something another app has ever given me.</div>
              <div className="tcard-person"><div className="tcard-avatar ta1"></div><div><div className="tcard-name">Purnima Roy</div><div className="tcard-role">Accounts Manager, Guwahati</div></div></div>
            </div>
            <div className="tcard">
              <div className="tcard-quote"><span className="qmark">&ldquo;</span> The silent alarm feature is genius. I was in a situation where calling 112 would have made things worse. Deep Horizon dispatched help without me making a sound. The agent handled everything.</div>
              <div className="tcard-person"><div className="tcard-avatar ta2"></div><div><div className="tcard-name">Suraj Gupta</div><div className="tcard-role">Operations Manager, Guwahati</div></div></div>
            </div>
            <div className="tcard">
              <div className="tcard-quote"><span className="qmark">&ldquo;</span> My elderly mother lives alone. Security Check-ins mean she has a routine that also watches over her. When she missed one, we got a call in minutes. It&rsquo;s the peace of mind we couldn&rsquo;t put a price on.</div>
              <div className="tcard-person"><div className="tcard-avatar ta3"></div><div><div className="tcard-name">Anindita Acharjee</div><div className="tcard-role">Housewife, Delhi</div></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="pricing-section" id="pricing">
        <div className="pricing-inner">
          <div className="pricing-header">
            <span className="eyebrow">Pricing</span>
            <h2>Honest pricing.<br />No surprises.</h2>
          </div>

          <div className="pricing-toggle-wrap">
            <button className={`pt-option${billingMode === "monthly" ? " active" : ""}`} onClick={() => setBillingMode("monthly")}>Monthly</button>
            <button className={`pt-option${billingMode === "annual" ? " active" : ""}`} onClick={() => setBillingMode("annual")}>Annual <span className="pt-badge">Save up to 18%</span></button>
          </div>

          <div className="pricing-grid">
            <div className="pcard">
              <div className="pcard-tier">Individual</div>
              <div className="pcard-price"><span className="amt">{p.ind}</span><span className="period">{p.indPeriod}</span></div>
              <p className="pcard-savings">{p.indSave}</p>
              <p className="pcard-desc">Full protection, always on. Your silent guardian — in your pocket.</p>
              <ul className="pcard-features">
                <li><span className="pcard-check"><CheckSvg /></span>Video Monitor — on-demand or scheduled</li>
                <li><span className="pcard-check"><CheckSvg /></span>Real-time GPS tracking</li>
                <li><span className="pcard-check"><CheckSvg /></span>Schedule Check-in with auto-escalation</li>
                <li><span className="pcard-check"><CheckSvg /></span>SOS and Silent Alarm</li>
                <li><span className="pcard-check"><CheckSvg /></span>On-demand Bodyguard Booking</li>
                <li><span className="pcard-check"><CheckSvg /></span>SOC Monitoring 24/7</li>
              </ul>
              <a href="#download" className="btn-pricing-ink" style={{ display: "block", textAlign: "center", textDecoration: "none" }}>Get Started</a>
            </div>

            <div className="pcard pcard-mid">
              <div className="pcard-badge">Most Popular</div>
              <div className="pcard-tier">Family</div>
              <div className="pcard-price"><span className="amt">{p.fam}</span><span className="period">{p.famPeriod}</span></div>
              <p className="pcard-savings">{p.famSave}</p>
              <p className="pcard-desc">Everything in Individual — for everyone you love, under one plan.</p>
              <ul className="pcard-features">
                <li><span className="pcard-check"><CheckSvg /></span>All Individual features</li>
                <li><span className="pcard-check"><CheckSvg /></span>Up to 5 family members</li>
                <li><span className="pcard-check"><CheckSvg /></span>Family welfare checks — discreet &amp; private</li>
                <li><span className="pcard-check"><CheckSvg /></span>Shared safety dashboard</li>
                <li><span className="pcard-check"><CheckSvg /></span>Priority SOC response for all members</li>
                <li><span className="pcard-check"><CheckSvg /></span>On-demand Bodyguard Booking — all members</li>
              </ul>
              <a href="#download" className="btn-pricing-teal" style={{ display: "block", textAlign: "center", textDecoration: "none" }}>Protect My Family &rarr;</a>
            </div>
          </div>

          <div className="b2b-band">
            <div>
              <p className="b2b-label">For Teams &amp; Organisations</p>
              <h3>Duty of care<br />that scales.</h3>
              <ul className="b2b-feats">
                <li>Full access per seat</li>
                <li>Safety dashboard</li>
                <li>Monthly safety report</li>
                <li>Premises safety signage</li>
                <li>Dedicated support</li>
                <li>Custom onboarding</li>
              </ul>
            </div>
            <div className="b2b-right">
              <p className="b2b-custom">Custom</p>
              <p className="b2b-min">Min. 10 seats</p>
              <a href="mailto:support@deephorizon.io?subject=Deep%20Horizon%20for%20Organisations%20%E2%80%94%20Enquiry" className="btn-b2b">Talk to us &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta-final" id="download">
        <div className="cta-final-inner">
          <h2>Start living<br />without <em>fear.</em></h2>
          <p className="cta-tagline">Personal Security. In your Phone.</p>
          <p>Join thousands who&rsquo;ve made Deep Horizon their silent guardian. Available on iOS and Android — free to start.</p>
          <div className="cta-store-row">
            <a href="https://play.google.com/store/apps/details?id=com.deephorizon.security&pcampaignid=web_share" target="_blank" rel="noopener noreferrer" className="store-badge">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" /></svg>
              <div className="store-badge-text"><span className="line1">Get it on</span><span className="line2">Google Play</span></div>
            </a>
            <a href="https://apps.apple.com/in/app/deep-horizon-security/id6755099422" target="_blank" rel="noopener noreferrer" className="store-badge">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" /></svg>
              <div className="store-badge-text"><span className="line1">Download on</span><span className="line2">App Store</span></div>
            </a>
          </div>
        </div>
      </section>

      <Footer full />
    </>
  );
}
