import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://alyvero.vercel.app"),
  title: {
    default: "Alyvero — Solve it. Get it done.",
    template: "%s | Alyvero"
  },
  description: "Simple browser-first tools for converting, compressing and creating files.",
  applicationName: "Alyvero",
  robots: { index: true, follow: true },
  openGraph: {
    title: "Alyvero — Solve it. Get it done.",
    description: "Simple browser-first tools for everyday digital file problems.",
    type: "website",
    siteName: "Alyvero"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          <a className="brand" href="/" aria-label="Alyvero home">ALYVERO</a>
          <nav aria-label="Main navigation">
            <a href="/#tools">Tools</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="site-footer">
          <span>© {new Date().getFullYear()} Alyvero</span>
          <div>
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </div>
          <div className="powered-by">
            Powered by <a href="https://www.fixtech.co.ke" target="_blank" rel="noopener noreferrer">FixTech</a>
          </div>
        </footer>
      </body>
    </html>
  );
}