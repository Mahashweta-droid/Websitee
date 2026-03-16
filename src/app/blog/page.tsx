"use client";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function BlogPage() {
  return (
    <>
      <Nav variant="blog" />

      <section className="blog-coming-soon">
        <div className="blog-cs-inner">
          <span className="eyebrow">Blog</span>
          <h1>Stories and insights<br />coming <em>soon.</em></h1>
          <p>We&rsquo;re working on guides, research, and real stories about personal safety in India. Check back shortly.</p>
          <Link href="/" className="btn-ink">
            Back to home &rarr;
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
