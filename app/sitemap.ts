import type { MetadataRoute } from "next";
import { pdfGuides } from "@/lib/compressPdfGuides";

const base = "https://www.alyvero.co.ke";
const lastModified = new Date("2026-09-26T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const core = [
    "",
    "/pdf-to-word",
    "/compress-pdf",
    "/compress-image",
    "/heic-to-jpg",
    "/image-to-pdf",
    "/about",
    "/privacy",
    "/terms",
    "/contact",
  ];
  const guidePaths = pdfGuides.map((guide) => `/${guide.slug}`);
  return [...core, ...guidePaths].map((path) => ({
    url: base + path,
    lastModified,
    changeFrequency: path === "" ? "weekly" : path === "/compress-pdf" ? "monthly" : "monthly",
    priority:
      path === ""
        ? 1
        : path === "/compress-pdf"
          ? 0.9
          : guidePaths.includes(path)
            ? 0.7
            : 0.8,
  }));
}
