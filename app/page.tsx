import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Free Online PDF & Image Tools | Alyvero",
  description: "Free browser-based PDF and image tools for common file problems. Convert, compress, merge, split, resize and create files online.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Free Online PDF & Image Tools | Alyvero",
    description: "Free browser-based tools for common PDF and image problems: convert, compress, merge, split, resize and create files online.",
    url: "https://www.alyvero.co.ke/",
    type: "website",
    images: [{ url: "/opengraph-image" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.alyvero.co.ke/#webpage",
      url: "https://www.alyvero.co.ke/",
      name: "Free Online PDF & Image Tools | Alyvero",
      description: "Free browser-based tools for common PDF and image problems: convert, compress, merge, split, resize and create files.",
      isPartOf: { "@id": "https://www.alyvero.co.ke/#website" },
      about: { "@id": "https://www.alyvero.co.ke/#organization" },
      mainEntity: { "@id": "https://www.alyvero.co.ke/#tools" },
      breadcrumb: { "@id": "https://www.alyvero.co.ke/#breadcrumb" },
      hasPart: [
        { "@id": "https://www.alyvero.co.ke/tools" },
        { "@id": "https://www.alyvero.co.ke/pdf-tools" },
        { "@id": "https://www.alyvero.co.ke/image-tools" },
        { "@id": "https://www.alyvero.co.ke/guides" }
      ],
      inLanguage: "en"
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.alyvero.co.ke/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.alyvero.co.ke/" }
      ]
    },
    {
      "@type": "ItemList",
      "@id": "https://www.alyvero.co.ke/#tools",
      name: "Alyvero Online File Tools",
      description: "Online tools for common PDF and image file tasks.",
      numberOfItems: 10,
      itemListElement: [
        "pdf-to-word", "compress-pdf", "compress-image", "heic-to-jpg",
        "image-to-pdf", "merge-pdf", "split-pdf", "pdf-to-jpg",
        "resize-image", "jpg-to-png"
      ].map((slug, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `https://www.alyvero.co.ke/${slug}`
      }))
    }
  ]
};

const popularTools = tools.slice(0, 10);

export default function Home() {
  const pdfTools = tools.filter((t) =>
    ["pdf-to-word", "compress-pdf", "merge-pdf", "split-pdf", "pdf-to-jpg"].includes(t.slug)
  );
  const imageTools = tools.filter((t) =>
    ["compress-image", "heic-to-jpg", "image-to-pdf", "resize-image", "jpg-to-png"].includes(t.slug)
  );

  return (
    <div className="container home-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <section className="hero">
        <p className="eyebrow">Alyvero online file tools</p>
        <h1>Solve it.<br />Get it done.</h1>
        <p>Free browser-based tools for common PDF and image problems. Convert, compress, merge, split, resize and transform files directly from your phone or computer.</p>
        <form className="search-box" action="/tools">
          <input name="q" placeholder="What do you need to do?" aria-label="Search Alyvero tools" />
          <button type="submit">Find a tool</button>
        </form>
      </section>

      <section className="section" id="tools">
        <h2>Core tools</h2>
        <div className="tool-grid">
          {popularTools.map((tool) => (
            <a className="tool-card" href={`/${tool.slug}`} key={tool.slug}>
              <div className="tool-image-wrap"><Image className="tool-image" src={`/illustrations/${tool.slug}.svg`} alt="" width={480} height={300} sizes="(max-width: 640px) 45vw, (max-width: 980px) 45vw, 210px" priority={tool.slug === "pdf-to-word"} /></div>
              <h3>{tool.name}</h3><p>{tool.description}</p><span className="tool-link">Open tool →</span>
            </a>
          ))}
        </div>
        <p className="section-link"><Link href="/tools">Browse all tools →</Link> · <Link href="/pdf-tools">PDF Tools</Link> · <Link href="/image-tools">Image Tools</Link></p>
      </section>

      <section className="section">
        <h2>Popular file tasks</h2>
        <div className="task-grid">
          {[
            ["Need a smaller PDF?", "Compress PDF", "/compress-pdf"],
            ["Need to combine documents?", "Merge PDF", "/merge-pdf"],
            ["Need an editable document?", "PDF to Word", "/pdf-to-word"],
            ["Need to convert PDF pages?", "PDF to JPG", "/pdf-to-jpg"],
            ["Need a smaller image?", "Resize Image", "/resize-image"],
          ].map(([q, n, u]) => <Link className="task-card" href={u} key={u}><strong>{q}</strong><span>{n} →</span></Link>)}
        </div>
      </section>

      <section className="section hub-preview">
        <div><p className="eyebrow">PDF tools</p><h2>PDF tools for everyday document problems</h2><p>Merge, split, compress and convert PDFs without hunting through unrelated utilities.</p><Link className="tool-link" href="/pdf-tools">View PDF tools →</Link></div>
        <div className="hub-links">{pdfTools.map((t) => <Link href={`/${t.slug}`} key={t.slug}>{t.name}</Link>)}</div>
      </section>

      <section className="section hub-preview">
        <div><p className="eyebrow">Image tools</p><h2>Image tools for size and format problems</h2><p>Compress, resize, convert and turn images into useful documents directly in your browser.</p><Link className="tool-link" href="/image-tools">View image tools →</Link></div>
        <div className="hub-links">{imageTools.map((t) => <Link href={`/${t.slug}`} key={t.slug}>{t.name}</Link>)}</div>
      </section>

      <section className="section">
        <div className="info-section"><p className="eyebrow">Why Alyvero</p><h2>File tools without the clutter</h2><p>Alyvero focuses on everyday file problems instead of overwhelming you with unrelated utilities. Choose the task, select your file, process it in your browser where supported, and get your result. Each tool explains supported formats and important limitations before you begin.</p></div>
      </section>

      <section className="section info-section">
        <h2>How Alyvero works</h2>
        <div className="steps"><div><strong>1. Choose a tool</strong><p>Pick the file task you need.</p></div><div><strong>2. Select your file</strong><p>Choose a supported file from your phone or computer.</p></div><div><strong>3. Get your result</strong><p>Process it and download the finished file.</p></div></div>
      </section>

      <section className="section">
        <h2>Common questions about online file tools</h2>
        <div className="content-block">
          <h3>Do I need an account to use Alyvero?</h3><p>No account is required for the core file tools. Choose a tool, select a supported file and process it.</p>
          <h3>Are my files uploaded?</h3><p>Alyvero is designed around browser-first processing where practical. The individual tool page explains important processing and format limitations.</p>
          <h3>Can Alyvero convert a scanned PDF to Word?</h3><p>PDF to Word is intended for text-based PDFs. Scanned documents may require OCR, and the tool does not promise full OCR conversion.</p>
          <h3>Why did my compressed file barely shrink?</h3><p>Some PDFs and images are already optimized. Compression cannot always reduce a file substantially without changing quality or structure.</p>
          <h3>What is the difference between JPG and PNG?</h3><p>JPG commonly produces smaller photographic files through lossy compression, while PNG supports lossless compression and transparency. See the <Link href="/glossary">file terms glossary</Link> for definitions.</p>
          <h3>Where can I learn about a specific file problem?</h3><p>Use the <Link href="/guides">Alyvero guides</Link> for practical explanations, then open the relevant tool from the guide or <Link href="/tools">tool directory</Link>.</p>
        </div>
      </section>

      <section className="section"><h2>Privacy-conscious file processing</h2><p>Alyvero is designed around browser-first processing where practical. Read the <Link href="/privacy">Privacy Policy</Link> for information about cookies, analytics, advertising and contact-form data.</p></section>
      <section className="section"><h2>Need help?</h2><p>Browse the <Link href="/guides">file problem guides</Link>, explore <Link href="/tools">all tools</Link>, check the <Link href="/glossary">glossary</Link>, or <Link href="/contact">contact Alyvero</Link> to report a problem.</p></section>
    </div>
  );
}
