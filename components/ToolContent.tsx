import Link from "next/link";
import { tools } from "@/lib/tools";

type Section = { heading: string; paragraphs: string[]; bullets?: string[] };

const content: Record<string, { intro: string; sections: Section[]; related: string[] }> = {
  "pdf-to-word": {
    intro: "Need to edit the text inside a PDF? Alyvero converts supported text-based PDFs into editable DOCX files in your browser. It is designed for documents where the text is already selectable rather than scanned pages.",
    sections: [
      { heading: "When this converter is useful", paragraphs: ["Use PDF to Word when you need to correct text, reuse a report, edit a form or continue working on a document that was saved as PDF. The output is intended for Word and other DOCX-compatible editors."] },
      { heading: "Before you convert", paragraphs: ["If you can select and copy text from the PDF, it is more likely to be suitable for this tool. A scanned document is usually an image inside a PDF and may need OCR before the text can be edited reliably."], bullets: ["Keep the original PDF until you have checked the DOCX.", "Expect complex layouts, columns, fonts or forms to need a quick review after conversion.", "Do not use this tool as a promise of perfect OCR for image-only PDFs."] },
      { heading: "After conversion", paragraphs: ["Open the DOCX and check headings, tables, spacing and page breaks before sending it on. If the source is a scanned document, use an OCR-capable workflow instead."] },
    ],
    related: ["image-to-pdf", "compress-pdf", "compress-image"],
  },
  "compress-pdf": {
    intro: "A PDF can be too large for an upload form, email attachment or messaging app even when the document looks simple. Alyvero creates a new PDF and reports the actual before-and-after size so you can see whether the file became smaller.",
    sections: [
      { heading: "Why a PDF can be large", paragraphs: ["Photos, scans, embedded fonts and other resources can make a PDF much larger than its visible text suggests. A PDF that has already been optimized may have little unnecessary overhead left to remove."] },
      { heading: "What Alyvero's compressor does", paragraphs: ["The current tool re-saves supported PDFs to reduce file overhead. It does not promise aggressive recompression of every embedded image, so a large photo-heavy PDF may show only a small reduction."], bullets: ["Check the original and result sizes after processing.", "Keep the original if the result is not smaller enough for your destination.", "For a specific problem, use the guides below for email, WhatsApp, uploads and Android or iPhone workflows."] },
      { heading: "If the PDF is still too large", paragraphs: ["The next step depends on what is making the file large. A scanned document may need image optimization, while a text-heavy PDF may already be close to its practical size."] },
    ],
    related: ["pdf-to-word", "compress-image", "image-to-pdf"],
  },
  "compress-image": {
    intro: "Large images can slow uploads, exceed form limits or take longer to send. Alyvero compresses JPG, PNG and WebP images in the browser and lets you balance output quality against file size.",
    sections: [
      { heading: "Choose the right image format", paragraphs: ["JPG is commonly used for photographs, PNG is useful when you need lossless graphics or transparency, and WebP can provide efficient web delivery. The best format depends on the image and where it will be used."] },
      { heading: "How to reduce image size", paragraphs: ["Start with a moderate quality setting, process the image and compare the result with the original. If the result is still too large, lower quality gradually rather than making a drastic change immediately."], bullets: ["Keep the original image as a backup.", "Check text and fine details at normal viewing size.", "Use the smallest file that still looks acceptable for its purpose."] },
      { heading: "Common uses", paragraphs: ["Image compression is useful before uploading photos to websites, attaching images to email, sending large pictures through messaging services or preparing assets for a web page."] },
    ],
    related: ["heic-to-jpg", "image-to-pdf", "compress-pdf"],
  },
  "heic-to-jpg": {
    intro: "HEIC is common on modern phones, but some websites, older apps and devices expect JPG instead. Alyvero converts supported HEIC photos into JPG files directly in the browser, including multiple selected files.",
    sections: [
      { heading: "Why convert HEIC to JPG?", paragraphs: ["JPG is widely accepted by upload forms, image editors and older software. Converting the file can solve compatibility problems without changing the original HEIC file."] },
      { heading: "Before conversion", paragraphs: ["Keep the original HEIC photos until you have opened the JPG results and confirmed that they look correct. Very large or unusual source files may behave differently depending on browser support."], bullets: ["Select one file first if you are troubleshooting a conversion problem.", "Check that the downloaded JPG opens normally.", "Keep originals when image quality or metadata matters."] },
      { heading: "Need a PDF instead?", paragraphs: ["If your goal is a document containing several photos, convert the images to JPG first or use Alyvero's Image to PDF tool when your source images are already JPG or PNG."] },
    ],
    related: ["compress-image", "image-to-pdf", "compress-pdf"],
  },
  "image-to-pdf": {
    intro: "Turn JPG or PNG images into one PDF when you need to submit, store or share several images as a single document. Alyvero processes the selected images in the browser and creates a separate PDF result.",
    sections: [
      { heading: "Common reasons to create an image PDF", paragraphs: ["A PDF is often easier to submit as one document than a group of photos. This can be useful for receipts, photographed forms, notes, identity documents and multi-page records."] },
      { heading: "Prepare your images", paragraphs: ["Put the images in the order you want before creating the PDF where possible. Check orientation and readability, especially when the images were captured with a phone."], bullets: ["Use clear, readable source images.", "Review the generated PDF before submitting it.", "Keep the original images until you are satisfied with the PDF."] },
      { heading: "Page size and quality", paragraphs: ["The current MVP handles page sizing automatically rather than offering full A4, Letter, margin and fit controls. For submissions that require exact dimensions, verify the resulting document before sending it."] },
    ],
    related: ["heic-to-jpg", "compress-image", "compress-pdf"],
  },
  "merge-pdf": { intro: "Combine several PDF files into one document without uploading them to a server.", sections: [{heading:"When to merge PDFs",paragraphs:["Merge reports, receipts, forms or other PDF documents when you need one file for sharing or submission."]},{heading:"Check the order",paragraphs:["Alyvero merges files in the order selected. Review the finished PDF before sending it."]}], related:["split-pdf","compress-pdf","pdf-to-word"] },
  "split-pdf": { intro: "Separate every page of a PDF into its own PDF file directly in your browser.", sections: [{heading:"Useful for page extraction",paragraphs:["Split a multi-page document when you need to send or archive individual pages."]},{heading:"Review the results",paragraphs:["Each page is produced as a separate PDF. Check filenames and page content before sharing."]}], related:["merge-pdf","compress-pdf","pdf-to-jpg"] },
  "pdf-to-jpg": { intro: "Turn PDF pages into JPG images when a website or application expects image files instead of a PDF.", sections: [{heading:"Every page becomes an image",paragraphs:["Alyvero renders each PDF page as a separate JPG in your browser. Large documents can require more memory."]},{heading:"Image quality",paragraphs:["JPG uses lossy compression. Check text and fine details before using the images for an important submission."]}], related:["jpg-to-png","image-to-pdf","compress-image"] },
  "resize-image": { intro: "Change an image's width while keeping its original proportions.", sections: [{heading:"Why resize an image",paragraphs:["Resizing can help when an upload form has dimension requirements or when a photo is unnecessarily large."]},{heading:"Output format",paragraphs:["The current Alyvero tool exports the resized result as JPG. Keep the original if you need transparency or the source format."]}], related:["compress-image","jpg-to-png","image-to-pdf"] },
  "jpg-to-png": { intro: "Convert a JPG photograph or graphic into a PNG copy directly in your browser.", sections: [{heading:"When PNG is useful",paragraphs:["PNG is lossless and can be useful when you need a PNG-specific workflow or want to avoid another JPEG compression pass."]},{heading:"Expect different file sizes",paragraphs:["PNG can be larger than the original JPG. Choose the format based on the destination rather than file size alone."]}], related:["resize-image","compress-image","image-to-pdf"] },
};

export default function ToolContent({ slug }: { slug: string }) {
  const item = content[slug];
  const related = (item?.related ?? [])
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter(Boolean);
  const tool = tools.find((entry) => entry.slug === slug);

  if (!item) return null;

  return (
    <section className="section container tool-content">
      <p className="lead">{item.intro}</p>
      {item.sections.map((section) => (
        <section className="content-block" key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets ? (
            <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          ) : null}
        </section>
      ))}
      {tool ? (
        <section className="content-block">
          <h2>Common questions</h2>
          {tool.faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
          <p>For important files, keep the original until you have checked the downloaded result. See the <Link href="/privacy">Privacy Policy</Link> for Alyvero's approach to cookies, analytics, advertising and contact-form information.</p>
        </section>
      ) : null}
      <div className="related-tools">
        <h2>Related Alyvero tools</h2>
        <div className="related-grid">
          {related.map((tool) => tool ? (
            <Link href={`/${tool.slug}`} className="related-card" key={tool.slug}>
              <strong>{tool.name}</strong>
              <span>{tool.description}</span>
            </Link>
          ) : null)}
        </div>
        <p className="tool-hub-link"><Link href={["pdf-to-word", "compress-pdf", "merge-pdf", "split-pdf", "pdf-to-jpg"].includes(slug) ? "/pdf-tools" : "/image-tools"}>{["pdf-to-word", "compress-pdf", "merge-pdf", "split-pdf", "pdf-to-jpg"].includes(slug) ? "Explore all PDF tools →" : "Explore all image tools →"}</Link> <span aria-hidden="true"> · </span><Link href="/tools">View all Alyvero tools →</Link></p>
      </div>
    </section>
  );
}
