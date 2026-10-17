import type { MetadataRoute } from "next";
import { pdfGuides } from "@/lib/compressPdfGuides";

const base = "https://www.alyvero.co.ke";

const corePaths = [
  "",
  "/tools",
  "/pdf-tools",
  "/image-tools",
  "/guides",
  "/glossary",
  "/pdf-to-word",
  "/word-to-pdf",
  "/compress-pdf",
  "/compress-image",
  "/heic-to-jpg",
  "/image-to-pdf",
  "/merge-pdf",
  "/split-pdf",
  "/pdf-to-jpg",
  "/resize-image",
  "/jpg-to-png",
  "/about",
  "/privacy",
  "/terms",
  "/contact",
  "/heic-vs-jpg",
  "/compress-images-without-losing-quality",
  "/resize-images-online",
  "/guides/best-image-format-for-web",
  "/guides/compress-jpg-without-quality-loss",
  "/guides/convert-heic-to-jpg-on-iphone",
  "/guides/reduce-image-size-for-email",
  "/guides/resize-image-for-web",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const guidePaths = pdfGuides.map((guide) => `/${guide.slug}`);
  const paths = [...new Set([...corePaths, ...guidePaths])];

  return paths.map((path) => ({
    url: `${base}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority:
      path === ""
        ? 1
        : ["/tools", "/pdf-tools", "/image-tools"].includes(path)
          ? 0.9
          : guidePaths.includes(path)
            ? 0.7
            : 0.8,
  }));
}
