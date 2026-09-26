import type { Metadata } from "next";
import Tool from "./ui";
import ToolStructuredData from "@/components/ToolStructuredData";

export const metadata: Metadata = {
  title: "Compress Image Online | JPG, PNG & WebP | Alyvero",
  description: "Reduce JPG, PNG or WebP image file size in your browser while balancing quality and size.",
  alternates: { canonical: "/compress-image" },
  openGraph: {
    title: "Compress Image Online | JPG, PNG & WebP | Alyvero",
    description: "Reduce JPG, PNG or WebP image file size in your browser while balancing quality and size.",
    url: "https://alyvero.vercel.app/compress-image",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <ToolStructuredData
        name="Compress Image Online"
        description="Reduce JPG, PNG or WebP image file size in your browser while balancing quality and size."
        slug="compress-image"
      />
      <Tool />
    </>
  );
}
