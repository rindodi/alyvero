export type PdfGuide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  steps: string[];
  sections: { heading: string; paragraphs: string[] }[];
};

export const pdfGuides: PdfGuide[] = [
  {
    slug: "pdf-too-large-to-upload",
    title: "PDF too large to upload? Reduce the file size first",
    description: "Alyvero can create a smaller PDF copy in your browser. The current MVP uses lightweight PDF optimization, so image-heavy files may see limited reduction.",
    intro: "A PDF can be perfectly readable and still fail an upload because a website has a strict file-size limit. Check the limit, identify what is making the PDF large, and then create a smaller copy.",
    steps: ["Check the site's maximum file size", "Keep the original PDF as a backup", "Compress the PDF and compare the before-and-after size", "Upload the smaller copy"],
    sections: [
      { heading: "Why a PDF becomes too large", paragraphs: ["Scanned documents and PDFs containing photographs often contain far more data than ordinary text documents. High-resolution page images can dominate the file size even when the document looks simple.", "Embedded fonts, duplicated resources, attachments and other document objects can also contribute. Two PDFs with the same number of pages can therefore have very different sizes."] },
      { heading: "Check the upload limit first", paragraphs: ["A website may specify a limit such as 2 MB, 5 MB, 10 MB or another value. Knowing the target matters because a small reduction is useful only if it gets the file below the site's limit.", "If the PDF is already below the limit, further compression may not be worth the possible quality trade-off."] },
      { heading: "When compression does not solve it", paragraphs: ["A browser-only PDF re-save cannot guarantee a dramatic reduction in every file. If most of the PDF is made from large scanned images, the document may remain close to its original size.", "In that situation, rescan at a sensible resolution, export the source with smaller images, or use a compressor that explicitly recompresses embedded images."] }
    ]
  },
  {
    slug: "compress-pdf-for-email",
    title: "Compress a PDF for email",
    description: "Use Alyvero's Compress PDF tool when you need a smaller copy for an email attachment. Compare the resulting file size before sending it.",
    intro: "Email services can impose attachment limits, and a PDF that looks small on your screen can still be too large to send. Compressing a copy is often the quickest first step.",
    steps: ["Check your email service's attachment limit", "Compress the PDF", "Compare the new file size with the limit", "Open the compressed PDF before sending it"],
    sections: [
      { heading: "How small does the PDF need to be?", paragraphs: ["There is no universal target. The useful target is the attachment limit of the email service and the amount of room you want below it.", "If the limit is 25 MB and your PDF is 24 MB, a tiny reduction technically works but leaves little margin. A file several times larger than the limit may need deeper compression."] },
      { heading: "Keep readability in mind", paragraphs: ["A smaller file is not automatically a better file. Text should remain legible, pages should render correctly, and important images should still contain enough detail for their purpose.", "Always open the compressed copy before attaching it. Keep the original until you have confirmed the smaller version is acceptable."] },
      { heading: "If the PDF is still too large", paragraphs: ["Image-heavy PDFs are a common difficult case. A browser-only optimizer may have limited room to reduce them because the bulk of the bytes are already inside page images.", "If that happens, export or scan the source at a more appropriate resolution, or use a tool that explicitly supports image recompression."] }
    ]
  },
  {
    slug: "reduce-pdf-size",
    title: "How to reduce PDF file size",
    description: "Understand what makes PDFs large and the practical steps that can reduce PDF file size without blindly sacrificing readability.",
    intro: "Reducing a PDF is not one single operation. A text-heavy PDF, a scanned form and a photo-filled brochure can all need different treatment.",
    steps: ["Find out what is making the PDF large", "Make a copy before changing it", "Run the PDF through a compressor", "Compare size and readability before replacing the original"],
    sections: [
      { heading: "Text PDFs are often already compact", paragraphs: ["A PDF made mostly from selectable text can be relatively small. Re-saving it may remove some redundant document structure, but there may not be much to remove.", "If the file barely changes size, that is useful information rather than a failed result: the document may already be reasonably optimized."] },
      { heading: "Scans and photos are different", paragraphs: ["A scanned page is effectively an image inside the PDF. Dozens of high-resolution scanned pages can therefore make a PDF much larger than a similar text document.", "For these files, image resolution and image compression usually have more influence on final size than PDF metadata or document structure."] },
      { heading: "A practical reduction workflow", paragraphs: ["Start with the least destructive option and inspect the result. If the reduction is not enough, move upstream and change the source images or scan settings rather than repeatedly processing the same file.", "The right size is the smallest file that still meets the document's purpose."] }
    ]
  },
  {
    slug: "compress-pdf-without-losing-quality",
    title: "How to compress a PDF without losing readability",
    description: "Learn how to make a PDF smaller while keeping text, forms and important images readable.",
    intro: "PDF compression involves trade-offs. The goal is not simply the smallest possible file; it is a file that is small enough while remaining useful.",
    steps: ["Keep the original file", "Compress a copy", "Inspect small text and important images", "Use the smaller copy only if it still meets your needs"],
    sections: [
      { heading: "What quality means in a PDF", paragraphs: ["For a business document, quality may mean readable text and intact forms. For a scanned receipt, it may mean preserving small numbers. For a photograph-heavy document, it may mean retaining enough image detail.", "There is no single compression setting that is correct for every PDF."] },
      { heading: "Avoid repeatedly compressing the same file", paragraphs: ["If a workflow repeatedly converts or recompresses already compressed images, visible artifacts can accumulate. Keep an untouched original and create a new working copy when you need a smaller version.", "For important documents, compare small text, signatures, forms and any images that carry information."] },
      { heading: "Alyvero's current limitation", paragraphs: ["The MVP compressor uses PDF re-saving and object streams. It does not claim to deeply recompress every embedded image. Some PDFs may therefore become only slightly smaller or show no reduction.", "That limitation is intentional: Alyvero reports the actual before-and-after result instead of promising a percentage that the file cannot deliver."] }
    ]
  },
  {
    slug: "compress-pdf-on-android",
    title: "How to compress a PDF on Android",
    description: "A practical Android workflow for reducing a PDF file size without installing another app first.",
    intro: "If a PDF is sitting in your Android Downloads or Files and a website says it is too large, a browser-based compressor can be a convenient first attempt.",
    steps: ["Open Alyvero in your Android browser", "Choose Compress PDF", "Select the PDF from your device", "Download and check the smaller copy"],
    sections: [
      { heading: "Before you start", paragraphs: ["Know where the PDF is stored and check the maximum file size allowed by the site where you plan to upload it. Keep the original file until you have checked the result.", "A browser-based workflow is useful when you do not want to install another app for a one-time document task."] },
      { heading: "What if the file barely gets smaller?", paragraphs: ["That can happen when the PDF is already compact or when its size is dominated by scanned pages and large embedded images.", "If the file came from a scanner or camera, changing the source scan resolution can sometimes have a much larger effect than reprocessing the finished PDF."] },
      { heading: "Check the downloaded file", paragraphs: ["After downloading, open the new PDF on your phone and confirm that pages, text, forms and important images still look correct. Do not replace the original until you are satisfied."] }
    ]
  },
  {
    slug: "compress-pdf-on-iphone",
    title: "How to compress a PDF on iPhone",
    description: "Learn how to reduce a PDF on iPhone using a browser-based workflow and what to do when the file remains large.",
    intro: "When an iPhone PDF is too large for an upload or email attachment, you do not necessarily need another app. A browser workflow can handle a straightforward compression attempt.",
    steps: ["Open Alyvero on your iPhone", "Open Compress PDF", "Choose the PDF from Files", "Download and inspect the compressed copy"],
    sections: [
      { heading: "Finding the PDF on iPhone", paragraphs: ["iOS commonly stores documents in the Files app, including On My iPhone, iCloud Drive and third-party storage providers. The browser file picker lets you select the document from available locations.", "If the PDF is inside another app, save or share a copy to Files first if that is the easiest way to make it available to the browser."] },
      { heading: "Do not expect every PDF to shrink dramatically", paragraphs: ["A text-based PDF may already be relatively efficient. A scanned document can be dominated by page images. Those files can therefore produce very different compression results.", "Alyvero shows the actual original and new sizes so you can see whether the operation made a meaningful difference."] },
      { heading: "After compression", paragraphs: ["Open the downloaded PDF before sending it or uploading it elsewhere. Check the pages that matter most, especially forms, small print, signatures and image-based evidence."] }
    ]
  },
  {
    slug: "compress-pdf-for-whatsapp",
    title: "Compress a PDF for WhatsApp",
    description: "How to make a PDF smaller before sharing it on WhatsApp, and what to do if compression barely changes the file size.",
    intro: "Sharing a PDF through WhatsApp can be inconvenient when the file is much larger than it needs to be. Compressing a copy first can make uploading and sharing easier.",
    steps: ["Save the PDF somewhere your browser can access", "Open Alyvero's Compress PDF tool", "Compare the original and new size", "Open the result before sharing it"],
    sections: [
      { heading: "Why make the PDF smaller?", paragraphs: ["A smaller document can be easier to upload, download and store. It can also help when the same file needs to be sent to several people or moved between devices.", "Do not assume the smallest possible PDF is always best. If the document contains a receipt, certificate, diagram or other visual evidence, readability still matters."] },
      { heading: "If the PDF contains photos or scans", paragraphs: ["Large images are often the dominant part of a scanned PDF. A simple PDF re-save may not significantly reduce those images, so the result can remain surprisingly large.", "If that happens, reduce the source image resolution or use a compressor designed to recompress embedded images. Alyvero's MVP deliberately tells you when its own reduction is limited."] },
      { heading: "Keep an original copy", paragraphs: ["Create a smaller sharing copy rather than overwriting the original. This gives you a clean source if you later need to print the document, extract information or produce a higher-quality version."] }
    ]
  },
  {
    slug: "why-pdf-still-large-after-compression",
    title: "Why is my PDF still large after compression?",
    description: "Find out why a PDF may remain large after compression and which parts of the document usually account for the file size.",
    intro: "A PDF compressor cannot always make a large PDF dramatically smaller. Understanding why prevents you from repeatedly processing the same file and expecting a result the document structure cannot provide.",
    steps: ["Compare the original and compressed sizes", "Identify whether the PDF is scan- or image-heavy", "Inspect the source document if possible", "Use deeper image compression or a lower-resolution source when necessary"],
    sections: [
      { heading: "The PDF may already be optimized", paragraphs: ["If a text-based PDF is already efficiently encoded, re-saving it may produce little change. There may simply not be much redundant structure to remove.", "A small or zero reduction is therefore not automatically evidence that the original file is broken."] },
      { heading: "Images often dominate PDF size", paragraphs: ["A PDF containing high-resolution photographs or scans can be large because those images contain most of the file's bytes. Removing metadata or changing document structure will not necessarily make a large image smaller.", "This is why PDF optimization and image recompression should be treated as different operations."] },
      { heading: "What to do next", paragraphs: ["If you control the source, export the document with appropriately sized images or rescan paper documents at a sensible resolution. If you only have the finished PDF, use a compressor that explicitly supports image recompression when the smaller size is essential.", "Alyvero's MVP reports when its browser-only optimization cannot reduce the file further rather than manufacturing a success message."] }
    ]
  }
];

export function getPdfGuide(slug: string) {
  return pdfGuides.find((guide) => guide.slug === slug);
}
