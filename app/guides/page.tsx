import type { Metadata } from "next";
import Link from "next/link";
import { pdfGuides } from "@/lib/compressPdfGuides";

export const metadata: Metadata = {
  title: "PDF & Image File Guides | Alyvero",
  description: "Learn how to compress, convert, merge and manage PDF and image files with practical guides from Alyvero.",
  alternates: { canonical: "/guides" },
  openGraph: { title: "PDF & Image File Guides | Alyvero", description: "Practical guides for solving common PDF and image file problems.", url: "https://www.alyvero.co.ke/guides", type: "website", images: [{ url: "/opengraph-image" }] },
};

const imageGuides = [
  ["HEIC vs JPG: Which Image Format Is Better?", "Compare HEIC and JPG formats and learn when to convert images.", "/heic-vs-jpg"],
  ["How to Compress Images Without Losing Quality", "Reduce image file sizes for websites, sharing and storage.", "/compress-images-without-losing-quality"],
  ["How to Resize Images Online", "Learn how image resizing works and when to change dimensions.", "/resize-images-online"],
];

export default function GuidesPage() {
  return <div className="container content-page ecosystem-page">
    <p className="eyebrow">Alyvero guides</p>
    <h1>PDF and image file problem guides</h1>
    <p className="lead">Practical explanations for common file problems. Learn the best approach, understand limitations, then use the relevant Alyvero tool.</p>

    <section className="ecosystem-section">
      <h2>PDF guides</h2>
      <div className="guide-grid">{pdfGuides.map(guide => <Link className="guide-card" href={`/${guide.slug}`} key={guide.slug}><strong>{guide.title}</strong><span>{guide.description}</span></Link>)}</div>
    </section>

    <section className="ecosystem-section">
      <h2>Image guides</h2>
      <div className="guide-grid">{imageGuides.map(([title, description, slug]) => <Link className="guide-card" href={slug} key={slug}><strong>{title}</strong><span>{description}</span></Link>)}</div>
    </section>

    <section className="ecosystem-section">
      <h2>Use Alyvero tools</h2>
      <p>After learning the solution, use the relevant browser-based tools: <Link href="/compress-pdf">Compress PDF</Link>, <Link href="/pdf-to-word">PDF to Word</Link>, <Link href="/compress-image">Compress Image</Link>, <Link href="/heic-to-jpg">HEIC to JPG</Link> or browse <Link href="/tools">all Alyvero tools</Link>.</p>
    </section>
  </div>;
}
