import type { Metadata } from "next";
import Tool from "./ui";
import ToolStructuredData from "@/components/ToolStructuredData";

export const metadata: Metadata = {
  title: "PDF to Word Converter Online | Alyvero",
  description: "Convert text-based PDF files into editable Word documents online in your browser.",
  alternates: { canonical: "/pdf-to-word" },
  openGraph: {
    title: "PDF to Word Converter Online | Alyvero",
    description: "Convert text-based PDF files into editable Word documents online in your browser.",
    url: "https://alyvero.vercel.app/pdf-to-word",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <ToolStructuredData
        name="PDF to Word Converter Online"
        description="Convert text-based PDF files into editable Word documents online in your browser."
        slug="pdf-to-word"
      />
      <Tool />
    </>
  );
}
