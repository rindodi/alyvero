import type { Metadata } from "next";
import Tool from "./ui";
import ToolStructuredData from "@/components/ToolStructuredData";

export const metadata: Metadata = {
  title: "HEIC to JPG Converter Online | Alyvero",
  description: "Convert HEIC photos to JPG images directly in your browser, including multiple files.",
  alternates: { canonical: "/heic-to-jpg" },
  openGraph: {
    title: "HEIC to JPG Converter Online | Alyvero",
    description: "Convert HEIC photos to JPG images directly in your browser, including multiple files.",
    url: "https://alyvero.vercel.app/heic-to-jpg",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <ToolStructuredData
        name="HEIC to JPG Converter Online"
        description="Convert HEIC photos to JPG images directly in your browser, including multiple files."
        slug="heic-to-jpg"
      />
      <Tool />
    </>
  );
}
