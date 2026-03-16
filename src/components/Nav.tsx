"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavProps {
  variant?: "default" | "policy" | "blog" | "about";
}

export default function Nav({ variant = "default" }: NavProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setDrawerOpen(false);
    };
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".site-nav") && !target.closest(".nav-drawer")) {
        setDrawerOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <nav className="site-nav">
        <Link href="/" className="nav-logo">
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

        <div className="nav-links">
          {variant === "default" && (
            <>
              <a href="#features">Features</a>
              <a href="#for-everyone">For Everyone</a>
              <a href="#pricing">Pricing</a>
              <Link href="/blog">Blog</Link>
              <a href="#download" className="nav-pill">
                Get Protected &rarr;
              </a>
            </>
          )}
          {variant === "about" && (
            <>
              <Link href="/#features">Features</Link>
              <Link href="/#for-everyone">For Everyone</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/blog">Blog</Link>
              <Link href="/#download" className="nav-pill">
                Get Protected &rarr;
              </Link>
            </>
          )}
          {(variant === "policy" || variant === "blog") && (
            <>
              <Link href="/#features">Features</Link>
              <Link href="/#pricing">Pricing</Link>
              <Link href="/about">About</Link>
              <Link href="/#download" className="nav-pill">
                Get Protected &rarr;
              </Link>
            </>
          )}
        </div>

        <button
          className={`nav-hamburger${drawerOpen ? " open" : ""}`}
          onClick={() => setDrawerOpen(!drawerOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      <div className={`nav-drawer${drawerOpen ? " open" : ""}`}>
        {variant === "default" ? (
          <>
            <a href="#features" onClick={closeDrawer}>Features</a>
            <a href="#for-everyone" onClick={closeDrawer}>For Everyone</a>
            <a href="#pricing" onClick={closeDrawer}>Pricing</a>
            <Link href="/blog" onClick={closeDrawer}>Blog</Link>
            <a href="#download" className="nav-pill-mobile" onClick={closeDrawer}>
              Get Protected &rarr;
            </a>
          </>
        ) : (
          <>
            <Link href="/" onClick={closeDrawer}>&larr; Home</Link>
            <Link href="/#features" onClick={closeDrawer}>Features</Link>
            <Link href="/#pricing" onClick={closeDrawer}>Pricing</Link>
            <Link href="/about" onClick={closeDrawer}>About</Link>
            <Link href="/blog" onClick={closeDrawer}>Blog</Link>
            <Link href="/#download" className="nav-pill-mobile" onClick={closeDrawer}>
              Get Protected &rarr;
            </Link>
          </>
        )}
      </div>
    </>
  );
}
