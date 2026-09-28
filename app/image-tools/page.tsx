import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Image Tools & Guides",
  description: "Alyvero image tools for compressing images, converting HEIC photos to JPG and creating PDFs from images.",
  alternates: { canonical: "/image-tools" },
  openGraph: { title: "Image Tools & Guides | Alyvero", description: "Practical browser-based image tools for common file compatibility and size problems.", url: "https://www.alyvero.co.ke/image-tools", type: "website" },
};

export default function ImageToolsPage() {
  const imageTools = tools.filter((tool) => ["compress-image", "heic-to-jpg", "image-to-pdf"].includes(tool.slug));
  return <div className="container content-page ecosystem-page">
    <p className="eyebrow">Alyvero image hub</p>
    <h1>Image tools for size, format and document problems</h1>
    <p className="lead">Compress an image for an upload, convert a HEIC photo when a site expects JPG, or turn several images into one PDF.</p>
    <section className="ecosystem-section">
      <h2>Image tools</h2>
      <div className="ecosystem-grid">{imageTools.map(tool => <article className="ecosystem-card" key={tool.slug}>
        <h3><Link href={`/${tool.slug}`}>{tool.name}</Link></h3>
        <p>{tool.longDescription}</p>
        <Link className="tool-link" href={`/${tool.slug}`}>Open tool →</Link>
      </article>)}</div>
    </section>
    <section className="ecosystem-section"><h2>Explore Alyvero tools</h2><p>Browse <Link href="/tools">all Alyvero tools</Link> or switch to <Link href="/pdf-tools">PDF tools and guides</Link> for document tasks.</p></section>
    <section className="ecosystem-section">
      <h2>Common image workflows</h2>
      <div className="workflow-list">
        <div><strong>Image too large for a website?</strong><span>Use <Link href="/compress-image">Compress Image</Link>, then compare the new file size and visual quality.</span></div>
        <div><strong>iPhone photo saved as HEIC?</strong><span>Use <Link href="/heic-to-jpg">HEIC to JPG</Link> when a website or application needs JPG.</span></div>
        <div><strong>Several photos need to become one document?</strong><span>Use <Link href="/image-to-pdf">Image to PDF</Link> to create one PDF from multiple JPG or PNG files.</span></div>
      </div>
    </section>
  </div>;
}
