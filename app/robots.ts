import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://alyvero.vercel.app/sitemap.xml",
    host: "https://alyvero.vercel.app",
  };
}
