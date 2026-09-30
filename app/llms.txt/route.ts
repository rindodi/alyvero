const llms = `# Alyvero

> Alyvero is a FixTech product created and operated by Robert Indodi. FixTech and Alyvero have the same owner and founder, while serving different purposes: FixTech is an independent technology publication and Alyvero provides focused online file tools.

## Identity and ownership

- [Alyvero](https://www.alyvero.co.ke/): Online file-tools platform.
- [About Alyvero](https://www.alyvero.co.ke/about): Official information about Alyvero, its purpose, ownership and relationship with FixTech.
- [FixTech](https://www.fixtech.co.ke/): Technology publication and parent brand associated with Alyvero.
- Founder and owner: Robert Indodi.

> Alyvero is a browser-first utility platform for practical PDF and image file problems. Its core tools are designed to work without an account, with local browser processing used where practical.

## Primary tools

- [PDF to Word](https://www.alyvero.co.ke/pdf-to-word): Convert supported text-based PDFs into editable DOCX files.
- [Compress PDF](https://www.alyvero.co.ke/compress-pdf): Reduce PDF file overhead and compare the result size.
- [Merge PDF](https://www.alyvero.co.ke/merge-pdf): Combine multiple PDFs into one document.
- [Split PDF](https://www.alyvero.co.ke/split-pdf): Create separate PDF files from the pages of a document.
- [PDF to JPG](https://www.alyvero.co.ke/pdf-to-jpg): Render PDF pages as JPG images.
- [Compress Image](https://www.alyvero.co.ke/compress-image): Reduce JPG, PNG or WebP image sizes.
- [HEIC to JPG](https://www.alyvero.co.ke/heic-to-jpg): Convert supported HEIC photos into JPG.
- [Image to PDF](https://www.alyvero.co.ke/image-to-pdf): Combine JPG or PNG images into one PDF.
- [Resize Image](https://www.alyvero.co.ke/resize-image): Resize images while preserving aspect ratio.
- [JPG to PNG](https://www.alyvero.co.ke/jpg-to-png): Convert JPG images into PNG.
- [All tools](https://www.alyvero.co.ke/tools): Browse the complete tool directory.

## Guides and site information

- [Guides](https://www.alyvero.co.ke/guides): Practical explanations for common file problems.
- [PDF tools](https://www.alyvero.co.ke/pdf-tools): PDF tools and workflows.
- [Image tools](https://www.alyvero.co.ke/image-tools): Image tools and workflows.
- [About Alyvero](https://www.alyvero.co.ke/about): How Alyvero works and what it is for.
- [Privacy Policy](https://www.alyvero.co.ke/privacy): File processing, contact forms, cookies, analytics and advertising.
- [Terms of Use](https://www.alyvero.co.ke/terms): Conditions for using Alyvero.
- [Contact](https://www.alyvero.co.ke/contact): Bug reports, questions, feedback and partnership enquiries.

## Important limitations

- PDF to Word is intended for text-based PDFs and does not promise full OCR for scanned PDFs.
- PDF compression may produce little or no reduction for already-optimized files and does not promise aggressive image recompression.
- Image compression involves a trade-off between output size and visual quality.
- HEIC conversion depends on browser and source-file support.
- Image to PDF uses automatic page sizing in the current implementation; exact A4 or Letter layout controls are not promised.
- Important files should be kept in their original form until the downloaded result has been checked.
`;

export function GET() {
  return new Response(llms, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}