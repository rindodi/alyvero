# Alyvero

**Alyvero — Solve it. Get it done.**

Alyvero is a browser-first utility platform for everyday digital file problems. It provides simple online tools for converting, compressing, resizing, and creating files directly in the browser.

Production website:
https://www.alyvero.co.ke

## Tools

### PDF Tools

- **PDF to Word** — Convert supported PDF files into editable Word documents.
- **Compress PDF** — Reduce PDF file sizes for easier uploading, emailing, and sharing.
- **Merge PDF** — Combine multiple PDF files into one document.
- **Split PDF** — Split PDF documents into separate pages.
- **PDF to JPG** — Convert PDF pages into JPG images.

### Image Tools

- **Compress Image** — Reduce JPG, PNG, and WebP image file sizes.
- **HEIC to JPG** — Convert HEIC photos into JPG images.
- **Image to PDF** — Create PDF files from JPG and PNG images.
- **Resize Image** — Resize JPG, PNG, and WebP images while preserving their aspect ratio.
- **JPG to PNG** — Convert JPG images into PNG format.

## Privacy-conscious processing

Alyvero is designed around browser-first file processing where practical.

Users can use the core tools without creating an account. Files are processed in the browser whenever supported by the tool. Each tool explains supported formats, limitations, and usage details.

## Technology

Alyvero is built with:

- Next.js
- TypeScript
- React

The project is deployed on Vercel.

## Project Structure

- `app/` — Next.js App Router pages and routes
- `components/` — Reusable interface components
- `lib/` — Tool definitions and supporting logic
- `public/` — Static assets and illustrations
- `scripts/` — Development and maintenance scripts
- `tests/e2e/` — End-to-end tests

## Development

Install dependencies:

```bash
npm install
