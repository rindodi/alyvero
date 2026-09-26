import type { Metadata } from "next";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title: "Online File Tools | PDF & Image Utilities",
  description:
    "Use Alyvero's free online file tools to convert PDF to Word, compress PDFs and images, convert HEIC to JPG, and create PDFs from images.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Online File Tools | Alyvero",
    description: "Free browser-based PDF and image tools for everyday file problems.",
    url: "https://alyvero.vercel.app/",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1>Solve it.<br />Get it done.</h1>
        <p>
          Simple online tools for converting, compressing and creating files directly from
          your browser. Choose a specific tool, process your file and download the result.
        </p>
        <form className="search-box" action="/#tools">
          <input name="q" placeholder="What do you need to do?" aria-label="Search Alyvero tools" />
          <button type="submit">Find a tool</button>
        </form>
      </section>
      <section className="section" id="tools">
        <h2>Popular tools</h2>
        <div className="tool-grid">
          {tools.map((tool) => (
            <a className="tool-card" href={`/${tool.slug}`} key={tool.slug}>
              <h3>{tool.name}</h3><p>{tool.description}</p><span className="tool-link">Open tool →</span>
            </a>
          ))}
        </div>
      </section>
      <section className="section info-section">
        <h2>Simple tools for common file problems</h2>
        <p>
          Alyvero focuses on useful file tasks rather than a large directory of unrelated utilities.
          The first tools cover common PDF and image problems and are designed to work without an Alyvero account.
        </p>
        <div className="steps">
          <div><strong>1. Choose a tool</strong><p>Pick the conversion, compression or file-creation task you need.</p></div>
          <div><strong>2. Select your file</strong><p>Choose a supported file from your phone or computer.</p></div>
          <div><strong>3. Get your result</strong><p>Process the file and download the finished result.</p></div>
        </div>
      </section>
      <section className="section">
        <h2>Privacy-conscious file processing</h2>
        <p>
          Alyvero uses browser-first processing where practical. Tool pages explain supported formats,
          limitations and processing expectations before you use them. See the{" "}
          <a href="/privacy">Privacy Policy</a> for information about cookies, analytics, advertising and contact-form data.
        </p>
      </section>
    </div>
  );
}
