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
  await page.getByRole("link", { name: buttonText }).click();
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

test("Merge PDF combines two PDFs and downloads the result", async ({ page }) => {
  await page.goto("/merge-pdf");
  const pdf = await pdfBytesPromise;
  await page.locator("#file-upload").setInputFiles([
    { name: "one.pdf", mimeType: "application/pdf", buffer: pdf },
    { name: "two.pdf", mimeType: "application/pdf", buffer: pdf },
  ]);
  await page.getByRole("button", { name: "Merge PDFs" }).click();
  await expect(page.getByText("Your merged PDF is ready.")).toBeVisible();
  await downloadAndAssert(page, "Download merged PDF", ".pdf");
});

test("Split PDF creates page downloads", async ({ page }) => {
  await upload(page, "/split-pdf", "test.pdf", "application/pdf", await pdfBytesPromise);
  await page.getByRole("button", { name: "Split PDF" }).click();
  await expect(page.getByText("Created 1 page PDFs.")).toBeVisible();
  await downloadAndAssert(page, "Download (", ".pdf");
});

test("PDF to JPG creates a JPG download", async ({ page }) => {
  await upload(page, "/pdf-to-jpg", "test.pdf", "application/pdf", await pdfBytesPromise);
  await page.getByRole("button", { name: "Convert to JPG" }).click();
  await expect(page.getByText("Created 1 JPG images.")).toBeVisible();
  await downloadAndAssert(page, "Download (", ".jpg");
});

test("Resize Image creates a JPG download", async ({ page }) => {
  await upload(page, "/resize-image", "test.png", "image/png", pngBytes);
  await page.getByRole("button", { name: "Resize Image" }).click();
  await expect(page.getByText("Your resized image is ready.")).toBeVisible();
  await downloadAndAssert(page, "Download resized image", ".jpg");
});

test("JPG to PNG creates a PNG download", async ({ page }) => {
  // Generate a real JPEG with the browser's own encoder so the fixture is
  // guaranteed to be decodable by createImageBitmap in the conversion tool.
  const jpgBase64 = await page.evaluate(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 2;
    canvas.height = 2;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Could not create JPEG test fixture.");
    context.fillStyle = "#2874d0";
    context.fillRect(0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg").split(",")[1];
  });
  const jpgBytes = Buffer.from(jpgBase64, "base64");
  await upload(page, "/jpg-to-png", "test.jpg", "image/jpeg", jpgBytes);
  await page.getByRole("button", { name: "Convert to PNG" }).click();
  await expect(page.getByText("Your PNG is ready.")).toBeVisible();
  await downloadAndAssert(page, "Download PNG", ".png");
});
test("Homepage exposes all ten core tools", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator(".home-page .tool-card")).toHaveCount(10);
});
