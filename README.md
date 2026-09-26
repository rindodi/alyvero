# Alyvero

**Solve it. Get it done.**

A browser-first utility platform for everyday digital file problems.

## MVP tools

- PDF to Word
- Compress PDF
- Compress Image
- HEIC to JPG
- Image to PDF

## Stack

Next.js + React + TypeScript, designed for Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Notes

The MVP intentionally favors browser-side processing. PDF compression currently re-saves PDFs with pdf-lib rather than performing deep image recompression, so some PDFs will show little or no size reduction. PDF-to-Word currently targets text-based PDFs and does not include OCR.

## Deployment

Vercel can connect directly to this GitHub repository and automatically deploy pushes. The project currently uses the Vercel deployment URL as its metadata base; replace that value with the final custom domain when the TLD is connected.
