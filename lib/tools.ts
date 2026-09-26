export type ToolInfo = {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  supported: string[];
  notes: string;
  faqs: { question: string; answer: string }[];
};

export const tools: ToolInfo[] = [
  {
    slug: "pdf-to-word",
    name: "PDF to Word",
    description: "Convert text-based PDF files into editable Word documents in your browser.",
    longDescription: "PDF to Word is designed for text-based PDFs that need to be edited in Microsoft Word or another DOCX-compatible editor. Processing happens in the browser where supported, so you can work without creating an Alyvero account.",
    supported: ["Text-based PDF files", "DOCX output"],
    notes: "Scanned or image-only PDFs may not convert correctly because this tool does not promise full OCR.",
    faqs: [
      { question: "Can I convert a scanned PDF?", answer: "This tool is intended for text-based PDFs. Scanned PDFs may require OCR and may not convert correctly." },
      { question: "Do I need an account?", answer: "No Alyvero account is required." }
    ]
  },
  {
    slug: "compress-pdf",
    name: "Compress PDF",
    description: "Reduce PDF file size in your browser for easier uploading, emailing or sharing.",
    longDescription: "Compress PDF re-saves supported PDF files to reduce unnecessary file overhead. The result depends on how the original PDF was created; already-optimized PDFs may show little or no size reduction.",
    supported: ["PDF input", "PDF output"],
    notes: "This MVP does not promise aggressive image recompression. A small reduction can be normal for an already-optimized PDF.",
    faqs: [
      { question: "Will every PDF become smaller?", answer: "No. Some PDFs are already optimized, so the resulting file may be only slightly smaller or the same size." },
      { question: "Does compression change the PDF?", answer: "The tool creates a new PDF file. Always check the result before replacing your original." }
    ]
  },
  {
    slug: "compress-image",
    name: "Compress Image",
    description: "Reduce JPG, PNG or WebP image file size in your browser.",
    longDescription: "Compress Image lets you choose an image and adjust compression quality before creating a smaller copy. It is useful when a photo or graphic is too large for a website, email, upload form or messaging service.",
    supported: ["JPG", "PNG", "WebP"],
    notes: "Lower quality can produce a smaller file but may also reduce visual detail. Keep the original if image quality matters.",
    faqs: [
      { question: "Can I choose the compression quality?", answer: "Yes. The tool provides a quality control so you can balance file size and image quality." },
      { question: "Is my original image changed?", answer: "No. Alyvero creates a separate result for download." }
    ]
  },
  {
    slug: "heic-to-jpg",
    name: "HEIC to JPG",
    description: "Convert HEIC photos into JPG images directly in your browser.",
    longDescription: "HEIC to JPG is useful when an iPhone or other device produces HEIC images but a website, application or recipient expects the more widely supported JPG format.",
    supported: ["HEIC input", "JPG output", "Multiple files"],
    notes: "Conversion support can vary with browser capabilities and the source HEIC file.",
    faqs: [
      { question: "Can I convert multiple HEIC files?", answer: "Yes. The tool supports selecting multiple files." },
      { question: "Why convert HEIC to JPG?", answer: "JPG is widely supported by websites, older applications and devices." }
    ]
  },
  {
    slug: "image-to-pdf",
    name: "Image to PDF",
    description: "Combine one or more JPG or PNG images into a PDF in your browser.",
    longDescription: "Image to PDF turns selected JPG or PNG images into a single PDF document. It is useful for combining photos of documents, receipts, forms or other images into one file for sharing or storage.",
    supported: ["JPG", "PNG", "Multiple images", "PDF output"],
    notes: "Page sizing is handled automatically. Check the generated PDF before submitting documents where exact page dimensions are required.",
    faqs: [
      { question: "Can I combine several images?", answer: "Yes. Select multiple JPG or PNG files and Alyvero combines them into one PDF." },
      { question: "Are the original images changed?", answer: "No. The PDF is generated as a separate result." }
    ]
  }
] as const;
