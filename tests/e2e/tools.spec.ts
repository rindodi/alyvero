import { test, expect } from "@playwright/test";
import { PDFDocument } from "pdf-lib";

const pdfBytesPromise = PDFDocument.create().then(async (pdf) => {
  const page = pdf.addPage([612, 792]);
  page.drawText("Alyvero browser test PDF");
  return Buffer.from(await pdf.save());
});

const pngBytes = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=",
  "base64"
);

async function upload(
  page: import("@playwright/test").Page,
  path: string,
  name: string,
  mimeType: string,
  buffer: Buffer
) {
  await page.goto(path);
  await page.locator("#file-upload").setInputFiles({ name, mimeType, buffer });
  await expect(page.locator(".file-list")).toContainText(name);
}

async function downloadAndAssert(
  page: import("@playwright/test").Page,
  buttonText: string,
  extension: string
) {
  const downloadPromise = page.waitForEvent("download");
  await page.getByRole("link", { name: new RegExp(buttonText, "i") }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename().toLowerCase()).toContain(extension);
  const path = await download.path();
  expect(path).toBeTruthy();
  const fs = await import("node:fs/promises");
  const stat = await fs.stat(path!);
  expect(stat.size).toBeGreaterThan(0);
}

test("PDF to Word converts a PDF into a DOCX download", async ({ page }) => {
  await upload(page, "/pdf-to-word", "test.pdf", "application/pdf", await pdfBytesPromise);
  await page.getByRole("button", { name: "Convert to Word" }).click();
  await expect(page.getByText("Your Word document is ready.")).toBeVisible();
  await downloadAndAssert(page, "Download Word document", ".docx");
});

test("Compress PDF processes a PDF and provides a PDF download", async ({ page }) => {
  await upload(page, "/compress-pdf", "test.pdf", "application/pdf", await pdfBytesPromise);
  await page.getByRole("button", { name: "Compress PDF" }).click();
  await expect(page.getByText(/PDF is ready|could not be reduced further/)).toBeVisible();
  await downloadAndAssert(page, "Download PDF", ".pdf");
});

test("Compress Image produces an image download", async ({ page }) => {
  await upload(page, "/compress-image", "test.png", "image/png", pngBytes);
  await page.getByRole("button", { name: "Compress image" }).click();
  await expect(page.getByText("Your image is ready.")).toBeVisible();
  await downloadAndAssert(page, "Download image", ".webp");
});

test("Image to PDF creates a PDF download", async ({ page }) => {
  await upload(page, "/image-to-pdf", "test.png", "image/png", pngBytes);
  await page.getByRole("button", { name: "Create PDF" }).click();
  await expect(page.getByText("Your PDF is ready.")).toBeVisible();
  await downloadAndAssert(page, "Download PDF", ".pdf");
});

test("HEIC to JPG exposes the converter and accepts HEIC input", async ({ page }) => {
  await page.goto("/heic-to-jpg");
  await expect(page.getByRole("heading", { name: "HEIC to JPG", exact: true })).toBeVisible();
  await expect(page.locator("#file-upload")).toHaveAttribute("accept", /heic/i);
  await expect(page.getByRole("button", { name: "Convert to JPG" })).toBeDisabled();
});
