import Link from "next/link";
import { tools } from "@/lib/tools";

type Section = { heading: string; paragraphs: string[]; bullets?: string[] };
type GuideLink = { slug: string; title: string };

const content: Record<string, { intro: string; sections: Section[]; related: string[]; guides?: GuideLink[] }> = {
  "pdf-to-word": {
    intro: "Need to edit the text inside a PDF? Alyvero converts supported text-based PDFs into editable DOCX files in your browser. It is designed for documents where the text is already selectable rather than scanned pages.",
    sections: [
      { heading: "When this converter is useful", paragraphs: ["Use PDF to Word when you need to correct text, reuse a report, edit a form or continue working on a document that was saved as PDF. The output is intended for Word and other DOCX-compatible editors."] },
      { heading: "Before you convert", paragraphs: ["If you can select and copy text from the PDF, it is more likely to be suitable for this tool. A scanned document is usually an image inside a PDF and may need OCR before the text can be edited reliably."], bullets: ["Keep the original PDF until you have checked the DOCX.", "Expect complex layouts, columns, fonts or forms to need a quick review after conversion.", "Do not use this tool as a promise of perfect OCR for image-only PDFs."] },
      { heading: "After conversion", paragraphs: ["Open the DOCX and check headings, tables, spacing and page breaks before sending it on. If the source is a scanned document, use an OCR-capable workflow instead."] },
    ],
    related: ["image-to-pdf", "compress-pdf", "compress-image"],
    guides: [{ slug: "pdf-too-large-to-upload", title: "PDF too large to upload?" }, { slug: "reduce-pdf-size", title: "How to reduce PDF file size" }],
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
  "merge-pdf": {
    intro: "Combine several PDF files into one document directly in your browser. Alyvero is designed for ordinary document-merging tasks such as joining reports, receipts, forms or supporting documents before a submission.",
    sections: [
      { heading: "When merging PDFs is useful", paragraphs: ["Merging is useful when a website accepts one document but your information is spread across several PDFs. It can also make a collection of related records easier to archive or share.", "The tool creates a new combined PDF rather than changing the source files. Keep the originals until you have checked the result."] },
      { heading: "Check the file order", paragraphs: ["Alyvero combines files in the order selected. Before downloading the result, check that the pages appear in the intended sequence, especially when combining forms, receipts or supporting documents."] },
      { heading: "Before an important submission", paragraphs: ["Open the finished PDF and check page count, readability, orientation and any pages that contain signatures or forms. If the destination has a file-size limit, use Compress PDF after merging."] }
    ],
    related:["split-pdf","compress-pdf","pdf-to-word"], guides:[{slug:"pdf-too-large-to-upload",title:"PDF too large to upload?"},{slug:"compress-pdf-without-losing-quality",title:"Compress without losing readability"}]
  },
  "split-pdf": {
    intro: "Separate the pages of a PDF into individual PDF files directly in your browser. This is useful when a large document contains pages that need to be submitted, shared or archived separately.",
    sections: [
      { heading: "Useful for extracting pages", paragraphs: ["Split a multi-page report, receipt bundle, form or other document when you need individual pages instead of the original combined file.", "Because each page becomes a separate PDF, the number of output files increases with the number of pages in the source document."] },
      { heading: "Review the output", paragraphs: ["Open the generated files before sharing them. Check that the expected page content is present and that the filenames make sense for the task you are completing.", "Very large PDFs can use substantial browser memory. If the browser becomes unresponsive, try a smaller document or another modern browser."] },
      { heading: "Need the pages as images?", paragraphs: ["If the destination requires JPG images rather than PDFs, Alyvero's PDF to JPG tool can render PDF pages as separate images."] }
    ],
    related:["merge-pdf","compress-pdf","pdf-to-jpg"], guides:[{slug:"reduce-pdf-size",title:"How to reduce PDF file size"},{slug:"why-pdf-still-large-after-compression",title:"Why is my PDF still large?"}]
  },
  "pdf-to-jpg": {
    intro: "Turn PDF pages into JPG images when a website, form or application expects image files instead of a PDF. Alyvero renders the pages in your browser and creates a separate JPG for each page.",
    sections: [
      { heading: "When PDF to JPG is useful", paragraphs: ["This conversion can help when an upload form accepts images but not PDF documents, or when you need to use an individual PDF page as an image in another workflow."] },
      { heading: "What happens during conversion", paragraphs: ["Each PDF page is rendered as an image. The output therefore represents the visual appearance of the page rather than preserving the PDF's editable text structure.", "Large or image-heavy PDFs can require more browser memory and may take longer to process on lower-powered phones or computers."] },
      { heading: "Check image quality", paragraphs: ["JPG uses lossy compression, so fine text or graphics can lose detail. Open the output at normal viewing size and check important information before submitting or publishing it.", "If you need PNG rather than JPG, you can convert the resulting image with Alyvero's JPG to PNG tool."] }
    ],
    related:["jpg-to-png","image-to-pdf","compress-image"], guides:[{slug:"compress-pdf-without-losing-quality",title:"Compress a PDF without losing readability"},{slug:"reduce-pdf-size",title:"How to reduce PDF file size"}]
  },
  "resize-image": { intro: "Change an image's width while keeping its original proportions.", sections: [{heading:"Why resize an image",paragraphs:["Resizing can help when an upload form has dimension requirements or when a photo is unnecessarily large."]},{heading:"Output format",paragraphs:["The current Alyvero tool exports the resized result as JPG. Keep the original if you need transparency or the source format."]}], related:["compress-image","jpg-to-png","image-to-pdf"] },
  "jpg-to-png": { intro: "Convert a JPG photograph or graphic into a PNG copy directly in your browser.", sections: [{heading:"When PNG is useful",paragraphs:["PNG is lossless and can be useful when you need a PNG-specific workflow or want to avoid another JPEG compression pass."]},{heading:"Expect different file sizes",paragraphs:["PNG can be larger than the original JPG. Choose the format based on the destination rather than file size alone."]}], related:["resize-image","compress-image","image-to-pdf"] },
};

export default function ToolContent({ slug }: { slug: string }) {
  const item = content[slug];
  const related = (item?.related ?? [])
    .map((slug) => tools.find((tool) => tool.slug === slug))
    .filter(Boolean);

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

      <div className="related-tools">
        {item.guides?.length ? (
          <>
            <h2>Helpful PDF guides</h2>
            <div className="related-grid">
              {item.guides.map((guide) => (
                <Link href={`/${guide.slug}`} className="related-card" key={guide.slug}>
                  <strong>{guide.title}</strong>
                  <span>Practical guidance for the same file problem.</span>
                </Link>
              ))}
            </div>
          </>
        ) : null}
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
