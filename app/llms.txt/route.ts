const llms = `# Alyvero

Alyvero is a browser-first utility platform for common digital file problems.

## Primary tools

- PDF to Word: https://www.alyvero.co.ke/pdf-to-word
- Compress PDF: https://www.alyvero.co.ke/compress-pdf
- Compress Image: https://www.alyvero.co.ke/compress-image
- HEIC to JPG: https://www.alyvero.co.ke/heic-to-jpg
- Image to PDF: https://www.alyvero.co.ke/image-to-pdf
- All tools: https://www.alyvero.co.ke/tools

## Site information

- Homepage: https://www.alyvero.co.ke/
- About: https://www.alyvero.co.ke/about
- Privacy Policy: https://www.alyvero.co.ke/privacy
- Terms: https://www.alyvero.co.ke/terms
- Contact: https://www.alyvero.co.ke/contact

## Important limitations

- PDF to Word is intended for text-based PDFs and does not promise full OCR for scanned PDFs.
- PDF compression may produce little or no reduction for already-optimized files and does not promise aggressive image recompression.
- Image compression balances output size and visual quality.
- HEIC conversion depends on browser and source-file support.
- Image to PDF uses automatic page sizing in the current MVP; exact A4 or Letter layout controls are not currently promised.

Alyvero focuses on practical file conversion, compression and creation rather than a general-purpose directory of unrelated tools.
`;

export function GET() {
  return new Response(llms, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
