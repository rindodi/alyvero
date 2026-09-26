import type { Metadata } from "next";
import Tool from "./ui";
import ToolStructuredData from "@/components/ToolStructuredData";

export const metadata: Metadata = {
  title: "Compress PDF Online | Free PDF Compressor | Alyvero",
  description: "Reduce PDF file size in your browser for easier uploading, emailing or sharing.",
  alternates: { canonical: "/compress-pdf" },
  openGraph: {
    title: "Compress PDF Online | Free PDF Compressor | Alyvero",
    description: "Reduce PDF file size in your browser for easier uploading, emailing or sharing.",
    url: "https://alyvero.vercel.app/compress-pdf",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <ToolStructuredData
        name="Compress PDF Online"
        description="Reduce PDF file size in your browser for easier uploading, emailing or sharing."
        slug="compress-pdf"
      />
      <Tool />
    </>
  );
}
