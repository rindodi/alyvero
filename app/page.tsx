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
    images: [{ url: "/opengraph-image" }],
  },
};

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
              <div className="tool-image-wrap"><img className="tool-image" src={`/illustrations/${tool.slug}.svg`} alt="" aria-hidden="true" /></div>
              <h3>{tool.name}</h3>
              <p>{tool.description}</p>
              <span className="tool-link">Open tool →</span>
            </a>
          ))}
        </div>
        <p className="section-link"><Link href="/tools">Browse all Alyvero tools →</Link> <span aria-hidden="true"> · </span><Link href="/pdf-tools">PDF Tools</Link> <span aria-hidden="true"> · </span><Link href="/image-tools">Image Tools</Link></p>
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
