import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/tools";

const siteUrl = "https://www.alyvero.co.ke";

export const metadata: Metadata = {
  title: "All Online File Tools",
  description: "Browse Alyvero's PDF and image tools for converting, compressing and creating files in your browser.",
  alternates: { canonical: "/tools" },
  openGraph: { title: "All Online File Tools | Alyvero", description: "Browse Alyvero's PDF and image tools for common file conversion and compression problems.", url: `${siteUrl}/tools`, type: "website" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Alyvero online file tools",
  itemListElement: tools.map((tool, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: tool.name,
    url: `${siteUrl}/${tool.slug}`,
  })),
};

export default function ToolsPage() {
  return (
    <div className="container content-page tools-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <p className="eyebrow">Alyvero tools</p>
      <h1>Online tools for everyday file problems</h1>
      <p className="lead">Choose a specific PDF or image task, process your file in the browser and download the result. Alyvero keeps the toolset focused instead of filling the site with unrelated utilities.</p>
      <div className="tool-directory">
        {tools.map((tool) => (
          <article className="directory-card" key={tool.slug}>
            <div className="tool-visual" aria-hidden="true"><span>{tool.slug === "pdf-to-word" || tool.slug === "compress-pdf" ? "PDF" : tool.slug === "heic-to-jpg" ? "HEIC" : "IMG"}</span></div>
            <h2><Link href={`/${tool.slug}`}>{tool.name}</Link></h2>
            <p>{tool.longDescription}</p>
            <p><strong>Supports:</strong> {tool.supported.join(", ")}</p>
            <Link className="tool-link" href={`/${tool.slug}`}>Open {tool.name} →</Link>
          </article>
        ))}
      </div>
      <section className="content-block">
        <h2>How Alyvero works</h2>
        <p>Pick a tool, select a supported file and process it. Tool pages explain important limitations before you use them, and the original file remains separate from the downloaded result.</p>
        <p>For privacy information, see the <Link href="/privacy">Privacy Policy</Link>. For questions or reports, use <Link href="/contact">Contact Alyvero</Link>.</p>
      </section>
    </div>
  );
}
