import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const crawlers = [
    "Googlebot",
    "Bingbot",
    "GPTBot",
    "OAI-SearchBot",
    "ClaudeBot",
    "PerplexityBot",
    "YandexBot",
  ];

  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...crawlers.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: "https://www.alyvero.co.ke/sitemap.xml",
    host: "https://www.alyvero.co.ke",
  };
}
