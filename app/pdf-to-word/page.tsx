import type { Metadata } from "next";
import Tool from "./ui";
import ToolStructuredData from "@/components/ToolStructuredData";
import ToolContent from "@/components/ToolContent";

export const metadata: Metadata = {
  title: "PDF to Word Converter Online",
  description: "Convert text-based PDF files into editable Word documents in your browser. Best for PDFs with selectable text; scanned PDFs may require OCR.",
  alternates: { canonical: "/pdf-to-word" },
  openGraph: {
    title: "PDF to Word Converter Online | Alyvero",
    description: "Convert text-based PDF files into editable Word documents in your browser.",
    url: "https://www.alyvero.co.ke/pdf-to-word",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <ToolStructuredData name="PDF to Word Converter Online" description="Convert text-based PDF files into editable Word documents online in your browser." slug="pdf-to-word" />
      <Tool />
      <ToolContent slug="pdf-to-word" />
    </>
  );
}
