import type { Metadata } from "next";
import Link from "next/link";
import Tool from "./ui";
import ToolStructuredData from "@/components/ToolStructuredData";
import ToolContent from "@/components/ToolContent";
import { pdfGuides } from "@/lib/compressPdfGuides";

export const metadata: Metadata = {
  title: "Compress PDF Online | Free PDF Compressor",
  description: "Compress a PDF in your browser for email, uploads, WhatsApp and sharing. Compare the original and new file sizes after processing.",
  alternates: { canonical: "/compress-pdf" },
  openGraph: {
    title: "Compress PDF Online | Free PDF Compressor | Alyvero",
    description: "Reduce PDF file size in your browser and compare the result.",
    url: "https://www.alyvero.co.ke/compress-pdf",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <ToolStructuredData name="Compress PDF Online" description="Reduce PDF file size in your browser for easier uploading, emailing or sharing." slug="compress-pdf" />
      <Tool />
      <ToolContent slug="compress-pdf" />
      <section className="section container intent-hub">
        <h2>PDF compression guides</h2>
        <p>
          The right way to reduce a PDF depends on why it is large and where you need to send it.
          These guides cover common file-size problems and explain what to try before and after compression.
        </p>
        <div className="guide-grid">
          {pdfGuides.map((guide) => (
            <Link className="guide-card" href={`/${guide.slug}`} key={guide.slug}>
              <strong>{guide.title}</strong><span>{guide.description}</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
