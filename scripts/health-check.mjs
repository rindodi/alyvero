const baseUrl = process.env.ALYVERO_BASE_URL || "https://www.alyvero.co.ke";

const checks = [
  { path: "/", required: "Alyvero" },
  { path: "/tools", required: "Alyvero" },
  { path: "/pdf-to-word", required: "PDF to Word" },
  { path: "/compress-pdf", required: "Compress PDF" },
  { path: "/compress-image", required: "Compress Image" },
  { path: "/heic-to-jpg", required: "HEIC to JPG" },
  { path: "/image-to-pdf", required: "Image to PDF" },
  { path: "/merge-pdf", required: "Merge PDF" },
  { path: "/split-pdf", required: "Split PDF" },
  { path: "/pdf-to-jpg", required: "PDF to JPG" },
  { path: "/resize-image", required: "Resize Image" },
  { path: "/jpg-to-png", required: "JPG to PNG" },
  { path: "/pdf-tools", required: "PDF" },
  { path: "/image-tools", required: "Image" },
  { path: "/guides", required: "Guides" },
  { path: "/about", required: "About" },
  { path: "/privacy", required: "Privacy" },
  { path: "/terms", required: "Terms" },
  { path: "/contact", required: "Contact" },
  { path: "/robots.txt", required: "Sitemap:" },
  { path: "/sitemap.xml", required: "https://www.alyvero.co.ke/" },
  { path: "/llms.txt", required: "Alyvero" },
];

const failures = [];

async function check(path, required) {
  const url = new URL(path, baseUrl).toString();

  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: { "User-Agent": "Alyvero-HealthCheck/2.0" },
    });
    const body = await response.text();

    if (!response.ok) {
      failures.push(`${path}: HTTP ${response.status}`);
      return;
    }

    if (!body.toLowerCase().includes(required.toLowerCase())) {
      failures.push(`${path}: expected text "${required}" was not found`);
      return;
    }

    if (!path.endsWith(".txt") && !path.endsWith(".xml")) {
      const canonical = body.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i)?.[1];
      if (canonical && !canonical.startsWith("https://www.alyvero.co.ke")) {
        failures.push(`${path}: canonical points to ${canonical}`);
        return;
      }
      if (body.includes("alyvero.vercel.app")) {
        failures.push(`${path}: contains old Vercel domain`);
        return;
      }
    }

    console.log(`OK  ${response.status}  ${path}`);
  } catch (error) {
    failures.push(`${path}: ${error instanceof Error ? error.message : String(error)}`);
  }
}

await Promise.all(checks.map(({ path, required }) => check(path, required)));

if (failures.length) {
  console.error("\nAlyvero production health check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`\nAlyvero production health check passed: ${checks.length} endpoints verified.`);
