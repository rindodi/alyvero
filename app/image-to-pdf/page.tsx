import type { Metadata } from "next";
import Tool from "./ui";
import ToolStructuredData from "@/components/ToolStructuredData";

export const metadata: Metadata = {
  title: "Image to PDF Converter Online | Alyvero",
  description: "Combine one or more JPG or PNG images into a PDF directly in your browser.",
  alternates: { canonical: "/image-to-pdf" },
  openGraph: {
    title: "Image to PDF Converter Online | Alyvero",
    description: "Combine one or more JPG or PNG images into a PDF directly in your browser.",
    url: "https://alyvero.vercel.app/image-to-pdf",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <ToolStructuredData
        name="Image to PDF Converter Online"
        description="Combine one or more JPG or PNG images into a PDF directly in your browser."
        slug="image-to-pdf"
      />
      <Tool />
    </>
  );
}
