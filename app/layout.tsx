import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";
import MobileNav from "@/components/MobileNav";
import PWARegistration from "./PWARegistration";

const siteUrl = "https://www.alyvero.co.ke";
export const metadata: Metadata = {
  metadataBase:new URL(siteUrl),
  title:{default:"Alyvero — Simple Online File Tools",template:"%s | Alyvero"},
  description:"Focused browser-based tools for everyday PDF and image file problems: PDF to Word, PDF compression, image compression, HEIC to JPG and image to PDF.",
  applicationName:"Alyvero", manifest:"/manifest.webmanifest", category:"utilities", referrer:"origin-when-cross-origin",
  robots:{index:true,follow:true,googleBot:{index:true,follow:true,"max-image-preview":"large","max-snippet":-1,"max-video-preview":-1}},
  alternates:{canonical:"/"},
  verification:{google:"n7LZAPVyGYehdp6QFwkEvMg_pfVsRKk86gB9gurNTL4"},
  openGraph:{title:"Alyvero — Simple Online File Tools",description:"Focused browser-based tools for everyday PDF and image file problems.",url:siteUrl,siteName:"Alyvero",type:"website",locale:"en_US"},
  twitter:{card:"summary",title:"Alyvero — Simple Online File Tools",description:"Focused browser-based tools for everyday PDF and image file problems."},
  icons:{icon:"/icon.svg",shortcut:"/icon.svg"},
};
export const viewport: Viewport={width:"device-width",initialScale:1,themeColor:"#3155E7"};
const organizationSchema={"@context":"https://schema.org","@type":"Organization","@id":siteUrl+"/#organization",name:"Alyvero",url:siteUrl,description:"Browser-based utility platform for common digital file conversion, compression and creation tasks."};
const websiteSchema={"@context":"https://schema.org","@type":"WebSite","@id":siteUrl+"/#website",name:"Alyvero",url:siteUrl,publisher:{"@id":siteUrl+"/#organization"},inLanguage:"en"};
export default function RootLayout({children}:{children:ReactNode}){
 return <html lang="en"><body>
  <Script id="google-adsense" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2571740083457217" crossOrigin="anonymous" strategy="beforeInteractive"/>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify([organizationSchema,websiteSchema])}}/>
  <PWARegistration/>
  <header className="site-header">
   <a className="brand-logo" href="/" aria-label="Alyvero home"><img src="/logo.svg" alt="Alyvero" width="210" height="48"/></a>
   <nav className="desktop-navigation" aria-label="Main navigation"><a href="/">Home</a><a href="/tools">Tools</a><a href="/guides">Guides</a><a href="/about">About</a><a href="/contact">Contact</a></nav>
   <MobileNav/>
  </header>
  <main>{children}</main>
  <footer className="site-footer"><span>© {new Date().getFullYear()} Alyvero</span><div className="footer-links"><a href="/tools">Tools</a><a href="/guides">Guides</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/contact">Contact</a></div><div className="powered-by">Powered by <a href="https://www.fixtech.co.ke" target="_blank" rel="noopener noreferrer">FixTech</a></div></footer>
 </body></html>
}