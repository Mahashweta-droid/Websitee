"use client";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <>
      <Nav variant="about" />

      <section className="about-hero">
        <div className="about-hero-inner">
          <span className="eyebrow">Our Story</span>
          <h1>We built this for the person<br />in <em>tomorrow&rsquo;s</em> headline.</h1>
          <p className="about-hero-sub">Deep Horizon was born from a realisation that came slowly, then all at once &mdash; that too many people face their most dangerous moments completely alone. We decided to change that.</p>
        </div>
      </section>

      <section className="about-section about-alt">
        <div className="about-section-inner">
          <span className="eyebrow">Where we started</span>
          <h2>The moment we<br />couldn&rsquo;t ignore.</h2>
          <p>Every few days, there would be another story. A woman attacked on her way home from work. A student who didn&rsquo;t make it back to her hostel. A family refreshing their phone, waiting for news that never came good.</p>
          <p>And every time, the same thought: <em>this could have been prevented.</em> If only someone had been watching. If only there had been a way to reach help before it was too late. If only she hadn&rsquo;t been alone in that moment.</p>
          <p>We felt that helplessness &mdash; the helplessness that victims&rsquo; families must carry long after the headline disappears. And we couldn&rsquo;t accept that our only response was to feel it again with the next story.</p>
          <p>So we built something.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-inner">
          <span className="eyebrow">What we believe</span>
          <h2>Safety is not a luxury.<br />It is a right.</h2>
          <p>If you can afford a driver, a bodyguard, a gated community &mdash; you are protected. If you can&rsquo;t, you navigate the world with hope and a message that says <em>&ldquo;I reached safely.&rdquo;</em></p>
          <p>We don&rsquo;t think that&rsquo;s enough.</p>
          <p>Every person &mdash; regardless of what they earn, where they live, or what time they travel &mdash; deserves to have someone in their corner. A trained professional. A real human being. Someone who will be there the moment something feels wrong, and who will stay until everything is right again.</p>
          <p>That belief is the foundation of everything we build.</p>
        </div>
      </section>

      <section className="about-mission">
        <div className="about-mission-inner">
          <span className="eyebrow">Our Mission</span>
          <blockquote>To make every person in India feel as safe as the <em>most protected</em> person in India.</blockquote>
          <p className="about-mission-footnote">Not through fear. Not through false promises. But through real technology, real humans, and real action &mdash; in the moments that matter most.</p>
        </div>
      </section>

      <section className="about-section about-alt">
        <div className="about-section-inner">
          <span className="eyebrow">What we built</span>
          <h2>A personal security concierge.<br />In your pocket.</h2>
          <p>Deep Horizon sits quietly until it&rsquo;s needed &mdash; then responds with the full force of real-time technology and a team of trained human agents, around the clock.</p>
          <p>Real-time tracking. Scheduled check-ins that escalate automatically. A single tap that reaches emergency services. Video monitoring that puts a trained eye on your situation instantly. And when it matters most &mdash; a human agent who sees what you see, makes the calls you can&rsquo;t, and stays with you until help arrives.</p>
          <p>Backed by verified security partners. SOC Monitored. Available from &#8377;149 a month &mdash; because safety shouldn&rsquo;t cost more than most people can afford.</p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section-inner">
          <span className="eyebrow">Who we are</span>
          <h2>A small team.<br />A deep conviction.</h2>
          <p>We are a small, deeply committed team based in Guwahati, Assam.</p>
          <p>We are not a security company pretending to be a tech startup, or a tech startup pretending to understand security. We are both &mdash; and we built Deep Horizon because we genuinely believe India needs it.</p>
          <p>We think about the person taking the last bus home. The student navigating a new city alone. The parent who hasn&rsquo;t heard back from their child. The family that sent someone off in the morning and is waiting by the phone.</p>
          <p>We build for them. We always will.</p>
        </div>
      </section>

      <Footer full />
    </>
  );
}
