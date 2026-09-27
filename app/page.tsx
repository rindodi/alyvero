import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Free Online File Tools for PDF & Images",
  description: "Alyvero provides free browser-based tools for PDF and image problems: PDF to Word, PDF compression, image compression, HEIC to JPG and image to PDF.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Free Online File Tools for PDF & Images | Alyvero",
    description: "Simple browser-based tools for converting, compressing and creating PDF and image files.",
    url: "https://www.alyvero.co.ke/",
    type: "website",
  },
};

function ToolArt({ slug }: { slug: string }) {
  const kind = slug === "pdf-to-word" ? "PDF → DOCX" :
    slug === "compress-pdf" ? "PDF ↓" :
    slug === "compress-image" ? "IMG ↓" :
    slug === "heic-to-jpg" ? "HEIC → JPG" : "IMG → PDF";
  return (
    <div className="alyvero-tool-art" aria-hidden="true">
      <svg viewBox="0 0 240 130" role="presentation">
        <rect x="28" y="18" width="78" height="92" rx="9" className="art-paper"/>
        <path d="M82 18v25h24" className="art-fold"/>
        <path d="M82 18l24 25H82z" className="art-fold-fill"/>
        <text x="41" y="62" className="art-label">{kind}</text>
        <path d="M42 78h45M42 89h34" className="art-line"/>
        {slug === "compress-pdf" || slug === "compress-image" ? (
          <>
            <path d="M130 51v42M120 61l10-10 10 10M120 83l10 10 10-10" className="art-arrow"/>
            <rect x="159" y="47" width="48" height="56" rx="7" className="art-image"/>
            <path d="M167 91l11-13 8 8 8-10 10 15" className="art-mountain"/>
          </>
        ) : (
          <>
            <path d="M119 66h36m-10-11 11 11-11 11" className="art-arrow"/>
            <rect x="165" y="50" width="48" height="58" rx="7" className="art-image"/>
            <circle cx="177" cy="62" r="4" className="art-sun"/>
            <path d="M171 98l11-14 9 8 8-10 10 16" className="art-mountain"/>
          </>
        )}
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <p className="eyebrow">Alyvero online file tools</p>
        <h1>Solve it.<br />Get it done.</h1>
        <p>Simple online tools for converting, compressing and creating files directly from your browser. Choose a specific tool, process your file and download the result.</p>
        <form className="search-box" action="/tools">
          <input name="q" placeholder="What do you need to do?" aria-label="Search Alyvero tools" />
          <button type="submit">Find a tool</button>
        </form>
      </section>
      <section className="section" id="tools">
        <h2>Popular tools</h2>
        <div className="tool-grid">
          {tools.map((tool) => (
            <a className="tool-card" href={`/${tool.slug}`} key={tool.slug}>
              <ToolArt slug={tool.slug} />
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <span className="tool-link">Open tool →</span>
            </a>
          ))}
        </div>
        <p className="section-link"><Link href="/tools">Browse all Alyvero tools →</Link></p>
      </section>
      <section className="section info-section">
        <h2>Tools for common PDF and image problems</h2>
        <p>Alyvero focuses on practical file tasks rather than a large directory of unrelated utilities. The current toolkit covers document conversion, PDF and image compression, photo compatibility and creating PDFs from images. Each tool page explains supported formats and important limitations.</p>
        <div className="steps">
          <div><strong>1. Choose a tool</strong><p>Pick the conversion, compression or file-creation task you need.</p></div>
          <div><strong>2. Select your file</strong><p>Choose a supported file from your phone or computer.</p></div>
          <div><strong>3. Get your result</strong><p>Process the file and download the finished result.</p></div>
        </div>
      </section>
      <section className="section">
        <h2>What Alyvero can help with</h2>
        <p>Need an editable document from a PDF? Start with <Link href="/pdf-to-word">PDF to Word</Link>. Trying to meet an upload or email size limit? Use <Link href="/compress-pdf">Compress PDF</Link> or <Link href="/compress-image">Compress Image</Link>. If a phone photo is saved as HEIC, use <Link href="/heic-to-jpg">HEIC to JPG</Link>. To combine photos into one document, use <Link href="/image-to-pdf">Image to PDF</Link>.</p>
      </section>
      <section className="section">
        <h2>Privacy-conscious file processing</h2>
        <p>Alyvero uses browser-first processing where practical. Tool pages explain supported formats, limitations and processing expectations before you use them. See the <Link href="/privacy">Privacy Policy</Link> for information about cookies, analytics, advertising and contact-form data.</p>
      </section>
    </div>
  );
}
