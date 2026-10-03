const content = `# Alyvero — Full Site Context

Alyvero is a browser-first online utility platform for common PDF and image file problems. The service is operated by Robert Indodi and is a FixTech product. Core tools are designed to work without an account, with local browser processing used where practical.

## Tool directory

- PDF to Word: converts supported text-based PDFs into editable DOCX files.
- Compress PDF: reduces PDF file overhead where possible.
- Merge PDF: combines multiple PDFs into one document.
- Split PDF: creates separate PDF files from selected pages.
- PDF to JPG: renders PDF pages as JPG images.
- Compress Image: reduces JPG, PNG or WebP image sizes.
- HEIC to JPG: converts supported HEIC photos into JPG.
- Image to PDF: combines JPG or PNG images into a PDF.
- Resize Image: resizes images while preserving aspect ratio.
- JPG to PNG: converts JPG images into PNG.

## Hubs

- /tools — complete tool directory.
- /pdf-tools — PDF tools and workflows.
- /image-tools — image tools and workflows.
- /guides — practical file-problem guides.
- /about — Alyvero identity and purpose.
- /privacy — privacy information.
- /terms — terms of use.
- /contact — feedback and bug reports.

## Processing and limitations

PDF to Word is intended for text-based PDFs and does not promise full OCR for scanned PDFs. PDF compression may produce little or no reduction for already-optimized files. Image compression trades output size against visual quality. HEIC conversion depends on browser and source-file support. Image to PDF currently uses automatic page sizing rather than promising exact A4 or Letter controls. Users should keep important originals until downloaded results have been checked.

## Site map

The canonical site is https://www.alyvero.co.ke. The XML sitemap is available at /sitemap.xml and the human-readable sitemap is available at /sitemap.md.
`;

export function GET() {
  return new Response(content, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
