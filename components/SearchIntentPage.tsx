import Link from "next/link";
import type { PdfGuide } from "@/lib/compressPdfGuides";

const stepNotes: Record<string, string[]> = {
  "pdf-too-large-to-upload": [
    "Find the upload limit before changing the document so you know the size you actually need to reach.",
    "Keep an untouched copy because compression is a file-management step, not a replacement for the source document.",
    "Compare the original and result sizes; a small change can still be useful if it crosses the destination site's limit.",
    "Open the smaller PDF and confirm that the pages still look right before submitting it."
  ],
  "compress-pdf-for-email": [
    "Use the attachment limit of your email service as the target rather than chasing an arbitrary percentage reduction.",
    "Alyvero creates a separate result, so you can compare it with the original before deciding which copy to send.",
    "Leave some room below the attachment limit when practical, especially if the service applies a strict maximum.",
    "Check the compressed document before attaching it, particularly when it contains forms, signatures or small print."
  ],
  "reduce-pdf-size": [
    "A quick look at the document type helps: text-heavy PDFs behave differently from scans and photo-filled documents.",
    "Work from a copy so the original remains available if the reduced version is unsuitable.",
    "Start with the least destructive option and inspect the result instead of assuming every PDF needs aggressive compression.",
    "Judge success by both file size and readability; the smallest file is not necessarily the most useful one."
  ],
  "compress-pdf-without-losing-quality": [
    "Preserve the original first, especially when the document contains information that cannot easily be recreated.",
    "Compression should create a working copy so you can compare the result without losing the source.",
    "Inspect the parts of the document where quality matters most, such as small text, signatures, forms and evidence images.",
    "Only replace the larger file when the smaller version still serves the purpose for which the PDF was created."
  ],
  "compress-pdf-on-android": [
    "On Android, locate the document in Downloads, Files or the storage provider where it was saved before opening the tool.",
    "Choose the PDF from the browser file picker and keep the original until you have verified the output.",
    "The browser workflow is useful for a one-off task when installing another app would add unnecessary friction.",
    "Open the downloaded result on the phone and check the pages before uploading or sharing it elsewhere."
  ],
  "compress-pdf-on-iphone": [
    "On iPhone, the Files picker can expose documents stored locally, in iCloud Drive or in supported third-party storage locations.",
    "Select the PDF from Files and create a separate compressed copy rather than overwriting the source.",
    "A text PDF may change very little, while a scan-heavy PDF can remain large because its page images contain most of the data.",
    "Preview the downloaded result before sending it, paying particular attention to forms, signatures and small text."
  ],
  "compress-pdf-for-whatsapp": [
    "Make sure the PDF is available to the browser from your phone's file storage before starting the compression step.",
    "Create a smaller sharing copy so the original remains available for printing, editing or later use.",
    "Compare the actual byte sizes instead of assuming the result is smaller simply because processing completed.",
    "Open the result before sending it through WhatsApp so a quality problem does not reach the recipient."
  ],
  "why-pdf-still-large-after-compression": [
    "Start by comparing the two file sizes; this tells you whether the operation produced a meaningful reduction at all.",
    "Check whether scans or photographs dominate the document because those images can account for most of its bytes.",
    "If you control the source, examine the export or scan settings before repeatedly compressing the finished PDF.",
    "When browser-only optimization is insufficient, deeper image recompression or a lower-resolution source may be required."
  ]
};

const relatedTools = [
  { href: "/compress-pdf", title: "Compress PDF", description: "Create a smaller PDF copy and compare the actual file size." },
  { href: "/merge-pdf", title: "Merge PDF", description: "Combine related PDF documents before sharing or submitting them." },
  { href: "/split-pdf", title: "Split PDF", description: "Separate a document into one-page PDF files." },
  { href: "/pdf-to-jpg", title: "PDF to JPG", description: "Turn PDF pages into separate image files." }
];

function getStepNote(guide: PdfGuide, index: number) {
  return stepNotes[guide.slug]?.[index] ?? "Follow this step, then check the result before moving to the next part of the workflow.";
}

export default function SearchIntentPage({ guide }: { guide: PdfGuide }) {
  return (
    <article className="content-page">
      <nav className="breadcrumbs" aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href="/guides">Guides</Link>
        <span aria-hidden="true">/</span>
        <Link href="/pdf-tools">PDF tools</Link>
      </nav>
      <p className="eyebrow">Alyvero PDF guide</p>
      <h1>{guide.title}</h1>
      <p className="lead">{guide.intro}</p>
      <div className="actions">
        <Link className="primary" href="/compress-pdf">Compress PDF</Link>
        <Link className="secondary" href="/pdf-tools">Browse PDF tools</Link>
      </div>

      <section className="section">
        <h2>Practical workflow</h2>
        <div className="steps">
          {guide.steps.map((step, index) => (
            <div key={step}>
              <strong>{index + 1}. {step}</strong>
              <p>{getStepNote(guide, index)}</p>
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
        <h2>Related PDF tools</h2>
        <div className="guide-grid">
          {relatedTools.map((tool) => (
            <Link className="guide-card" href={tool.href} key={tool.href}>
              <strong>{tool.title}</strong>
              <span>{tool.description}</span>
            </Link>
          ))}
        </div>
      </section>

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
        <h2>Explore Alyvero</h2>
        <p>{guide.description}</p>
        <p>For image-format questions, visit the <Link href="/image-tools">image tools hub</Link>. The <Link href="/glossary">PDF and image glossary</Link> explains common file terms.</p>
        <div className="actions">
          <Link className="primary" href="/compress-pdf">Open Compress PDF</Link>
          <Link className="secondary" href="/tools">See all tools</Link>
          <Link className="secondary" href="/guides">All guides</Link>
        </div>
      </section>
    </article>
  );
}
