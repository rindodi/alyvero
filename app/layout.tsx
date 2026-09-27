import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const siteUrl = "https://www.alyvero.co.ke";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Alyvero — Online File Tools | PDF & Image Tools",
    template: "%s | Alyvero",
  },
  description: "Free browser-based tools for converting, compressing and creating PDF and image files. PDF to Word, PDF compression, image compression, HEIC to JPG and image to PDF.",
  applicationName: "Alyvero",
  category: "utilities",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  alternates: { canonical: "/" },
  verification: {
    google: "n7LZAPVyGYehdp6QFwkEvMg_pfVsRKk86gB9gurNTL4",
  },
  openGraph: {
    title: "Alyvero — Online File Tools",
    description: "Simple browser-based tools for converting, compressing and creating PDF and image files.",
    url: siteUrl,
    siteName: "Alyvero",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Alyvero — Online File Tools",
    description: "Simple browser-based tools for everyday PDF and image file problems.",
  },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#5b4ee8" };

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Alyvero",
  url: siteUrl,
  description: "Browser-based utility platform for common digital file conversion, compression and creation tasks.",
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Alyvero",
  url: siteUrl,
  publisher: { "@id": `${siteUrl}/#organization` },
  inLanguage: "en",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }} />
        <header className="site-header">
          <a className="brand-logo" href="/" aria-label="Alyvero home">
            <img src="/logo.svg" alt="Alyvero" width="210" height="48" />
          </a>
          <nav aria-label="Main navigation">
            <a href="/" aria-current="page">Home</a>
            <a href="/tools">Tools</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Alyvero</span>
          <div><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/contact">Contact</a></div>
          <div className="powered-by">Powered by{" "}<a href="https://www.fixtech.co.ke" target="_blank" rel="noopener noreferrer">FixTech</a></div>
        </footer>
      </body>
    </html>
  );
}
