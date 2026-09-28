import fs from "node:fs/promises";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const packageJson = JSON.parse(await fs.readFile(new URL("../package.json", import.meta.url), "utf8"));

function fail(message) {
  console.error(`Conversion smoke test failed: ${message}`);
  process.exit(1);
}

const pdfjsVersion = packageJson.dependencies?.["pdfjs-dist"];
if (!pdfjsVersion) fail("pdfjs-dist dependency is missing");
if (pdfjsVersion !== "6.3.289") fail(`unexpected pdfjs-dist version ${pdfjsVersion}`);

const pdfTool = await fs.readFile(new URL("../app/pdf-to-word/ui.tsx", import.meta.url), "utf8");
const workerMatch = pdfTool.match(/pdfjs-dist@(\\d+\\.\\d+\\.\\d+)\\/build\\/pdf\\.worker\\.mjs/);
if (!workerMatch) fail("PDF.js worker URL could not be detected");
if (workerMatch[1] !== pdfjsVersion) {
  fail(`PDF.js API dependency ${pdfjsVersion} does not match worker ${workerMatch[1]}`);
}

for (const dependency of ["pdf-lib", "docx", "heic2any"]) {
  try {
    require.resolve(dependency);
  } catch {
    fail(`required conversion dependency ${dependency} is not installed`);
  }
}

const { PDFDocument } = await import("pdf-lib");
const pdf = await PDFDocument.create();
pdf.addPage([200, 200]);
const pdfBytes = await pdf.save();
if (!pdfBytes.length) fail("pdf-lib did not produce PDF bytes");

const { Document, Packer, Paragraph } = await import("docx");
const doc = new Document({ sections: [{ children: [new Paragraph("Alyvero smoke test")] }] });
const docxBuffer = await Packer.toBuffer(doc);
if (!docxBuffer.length) fail("docx did not produce a document");

console.log(`Conversion smoke test passed: pdf-lib produced ${pdfBytes.length} bytes and docx produced ${docxBuffer.length} bytes.`);
console.log(`PDF.js API/worker alignment verified at version ${pdfjsVersion}.`);
