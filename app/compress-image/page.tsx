import type { Metadata } from "next";
import Tool from "./ui";
import ToolStructuredData from "@/components/ToolStructuredData";
import ToolContent from "@/components/ToolContent";

export const metadata: Metadata = {
  title: "Compress Image Online | JPG, PNG & WebP",
  description: "Reduce JPG, PNG or WebP image file size in your browser while balancing quality and file size.",
  alternates: { canonical: "/compress-image" },
  openGraph: {
    title: "Compress Image Online | JPG, PNG & WebP | Alyvero",
    description: "Reduce JPG, PNG or WebP image file size in your browser while balancing quality and size.",
    url: "https://www.alyvero.co.ke/compress-image",
    type: "website",
    images: [{ url: "/opengraph-image" }],
  },
};

export default function Page() {
  return (
    <>
      <ToolStructuredData name="Compress Image Online" description="Reduce JPG, PNG or WebP image file size in your browser while balancing quality and size." slug="compress-image" />
      <Tool />
      <ToolContent slug="compress-image" />
    </>
  );
}
