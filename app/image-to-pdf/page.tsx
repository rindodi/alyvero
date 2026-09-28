import type { Metadata } from "next";
import Tool from "./ui";
import ToolStructuredData from "@/components/ToolStructuredData";
import ToolContent from "@/components/ToolContent";

export const metadata: Metadata = {
  title: "Image to PDF Converter Online",
  description: "Combine one or more JPG or PNG images into a PDF directly in your browser. Review page order, orientation and readability before submitting.",
  alternates: { canonical: "/image-to-pdf" },
  openGraph: {
    title: "Image to PDF Converter Online | Alyvero",
    description: "Combine one or more JPG or PNG images into a PDF directly in your browser.",
    url: "https://www.alyvero.co.ke/image-to-pdf",
    type: "website",
    images: [{ url: "/opengraph-image" }],
  },
};

export default function Page() {
  return (
    <>
      <ToolStructuredData name="Image to PDF Converter Online" description="Combine one or more JPG or PNG images into a PDF directly in your browser." slug="image-to-pdf" />
      <Tool />
      <ToolContent slug="image-to-pdf" />
    </>
  );
}
