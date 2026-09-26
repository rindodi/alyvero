import Link from "next/link";
import type { PdfGuide } from "@/lib/compressPdfGuides";

export default function SearchIntentPage({ guide }: { guide: PdfGuide }) {
  return (
    <article className="content-page">
      <p className="eyebrow">Alyvero PDF guide</p>
      <h1>{guide.title}</h1>
      <p className="lead">{guide.intro}</p>
      <div className="actions">
        <Link className="primary" href="/compress-pdf">Compress PDF</Link>
      </div>

      <section className="section">
        <h2>Quick way to handle it</h2>
        <div className="steps">
          {guide.steps.map((step, index) => (
            <div key={step}>
              <strong>{index + 1}. {step}</strong>
              <p>Use the Alyvero compressor when the next step is to create a smaller PDF.</p>
            </div>
          ))}
        </div>
      </section>

      {guide.sections.map((section) => (
        <section className="section" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>
      ))}

      <section className="section">
        <h2>More PDF help</h2>
        <div className="guide-grid">
          <Link className="guide-card" href="/compress-pdf-for-email"><strong>Compress PDF for email</strong><span>Get a smaller attachment copy.</span></Link>
          <Link className="guide-card" href="/pdf-too-large-to-upload"><strong>PDF too large to upload?</strong><span>Work toward a site's file-size limit.</span></Link>
          <Link className="guide-card" href="/compress-pdf-without-losing-quality"><strong>Keep a PDF readable</strong><span>Understand compression trade-offs.</span></Link>
          <Link className="guide-card" href="/why-pdf-still-large-after-compression"><strong>Still too large?</strong><span>Find out why compression may barely help.</span></Link>
        </div>
      </section>

      <section className="section">
        <h2>Use Alyvero</h2>
        <p>{guide.description}</p>
        <div className="actions">
          <Link className="primary" href="/compress-pdf">Open Compress PDF</Link>
          <Link className="secondary" href="/">See all tools</Link>
        </div>
      </section>
    </article>
  );
}
