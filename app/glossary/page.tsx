import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "PDF & Image File Terms Glossary",
  description: "Plain-language definitions for common PDF, image and file-conversion terms used across Alyvero.",
  alternates: { canonical: "/glossary" },
};

const terms = [
  ["PDF", "Portable Document Format, a document format designed to preserve page layout across devices and software."],
  ["DOCX", "The modern Microsoft Word document format used for editable word-processing files."],
  ["JPG", "A widely used image format that commonly provides smaller files through lossy compression."],
  ["PNG", "An image format that supports lossless compression and transparency."],
  ["HEIC", "An image container commonly produced by Apple devices and based on the HEIF image standard."],
  ["Compression", "Reducing file size by removing redundancy or changing how data is represented."],
  ["Resize", "Changing an image's pixel dimensions while keeping the image content."],
  ["OCR", "Optical character recognition, which attempts to turn text visible in scanned images into machine-readable text."],
];

export default function GlossaryPage() {
  return (
    <div className="container content-page">
      <p className="eyebrow">Alyvero glossary</p>
      <h1>PDF and image file terms</h1>
      <p className="lead">Plain-language definitions for the file formats and processing terms used throughout Alyvero.</p>
      <div className="content-block">
        {terms.map(([term, definition]) => (
          <section key={term}>
            <h2>{term}</h2>
            <p>{definition}</p>
          </section>
        ))}
      </div>
      <p>Need to perform a file task? Browse <Link href="/tools">all Alyvero tools</Link>, or start with the <Link href="/pdf-tools">PDF tools</Link> and <Link href="/image-tools">image tools</Link> hubs.</p>
    </div>
  );
}
