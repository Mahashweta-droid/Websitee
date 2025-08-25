import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Deep Horizon",
  description: "Advanced security solutions for everyone's safety"
};

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" data-oid="b1jifow">
      <head data-oid="x0ail_k">
        <Script
          type="module"
          src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/preload/dist/index.js"
          data-oid="zxbuq9a" />

      </head>
      <body className="antialiased" data-oid="hqec2:a">
        {children}
      </body>
    </html>);

}