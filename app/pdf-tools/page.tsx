import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/tools";
import { pdfGuides } from "@/lib/compressPdfGuides";

export const metadata: Metadata = {
  title: "Online PDF Tools & Guides",
  description: "Alyvero PDF tools and practical guides for converting, compressing and working with PDF files.",
  alternates: { canonical: "/pdf-tools" },
  openGraph: { title: "PDF Tools & Guides | Alyvero", description: "Practical PDF tools and guides for common document problems.", url: "https://www.alyvero.co.ke/pdf-tools", type: "website", images: [{ url: "/opengraph-image" }] },
};

export default function PdfToolsPage() {
  const pdfTools = tools.filter((tool) => ["pdf-to-word", "compress-pdf", "image-to-pdf"].includes(tool.slug));
  return <div className="container content-page ecosystem-page">
    <p className="eyebrow">Alyvero PDF hub</p>
    <h1>PDF tools for everyday document problems</h1>
    <p className="lead">Convert, reduce and create PDFs without hunting through a directory of unrelated utilities. Start with a tool, then use the guides when the file problem needs a little more explanation.</p>
    <section className="ecosystem-section">
      <h2>PDF tools</h2>
      <div className="ecosystem-grid">{pdfTools.map(tool => <article className="ecosystem-card" key={tool.slug}>
        <h3><Link href={`/${tool.slug}`}>{tool.name}</Link></h3>
        <p>{tool.longDescription}</p>
        <Link className="tool-link" href={`/${tool.slug}`}>Open tool →</Link>
      </article>)}</div>
    </section>
    <section className="ecosystem-section">
      <h2>PDF problem guides</h2>
      <div className="guide-grid">{pdfGuides.map(guide => <Link className="guide-card" href={`/${guide.slug}`} key={guide.slug}><strong>{guide.title}</strong><span>{guide.description}</span></Link>)}</div>
    </section>
    <section className="ecosystem-section"><h2>Explore Alyvero tools</h2><p>Browse <Link href="/tools">all Alyvero tools</Link> or switch to <Link href="/image-tools">image tools</Link> for photo and image tasks.</p></section>
    <section className="ecosystem-section">
      <h2>Need a specific PDF result?</h2>
      <p>If your goal is a smaller attachment, start with <Link href="/compress-pdf">Compress PDF</Link>. If you need an editable document, use <Link href="/pdf-to-word">PDF to Word</Link>. If your source is a set of photos, <Link href="/image-to-pdf">Image to PDF</Link> can turn them into one document.</p>
    </section>
  </div>;
}
