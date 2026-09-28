const baseUrl = process.env.ALYVERO_BASE_URL || "https://www.alyvero.co.ke";

const routes = [
  "/",
  "/tools",
  "/pdf-to-word",
  "/compress-pdf",
  "/compress-image",
  "/heic-to-jpg",
  "/image-to-pdf",
  "/privacy",
  "/contact",
];

const failures = [];

for (const route of routes) {
  const url = new URL(route, baseUrl).toString();

  try {
    const response = await fetch(url, {
      redirect: "follow",
      headers: { "User-Agent": "Alyvero-HealthCheck/1.0" },
    });

    const body = await response.text();

    if (!response.ok) {
      failures.push(`${route}: HTTP ${response.status}`);
      continue;
    }

    if (!body.toLowerCase().includes("alyvero")) {
      failures.push(`${route}: response does not contain Alyvero`);
    }

    console.log(`OK  ${response.status}  ${route}`);
  } catch (error) {
    failures.push(`${route}: ${error.message}`);
  }
}

if (failures.length) {
  console.error("\nAlyvero health check failed:");
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`\nAlyvero health check passed: ${routes.length} routes verified.`);
