import type { MetadataRoute } from "next";

const base = "https://alyvero.vercel.app";
const lastModified = new Date("2026-09-26T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "", "/pdf-to-word", "/compress-pdf", "/compress-image", "/heic-to-jpg",
    "/image-to-pdf", "/about", "/privacy", "/terms", "/contact",
  ];
  return paths.map((path) => ({
    url: base + path,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));
}
