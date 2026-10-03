const sitemap = `# Alyvero sitemap

> A human-readable map of Alyvero's canonical pages, tools and guides.

## Main pages

- [Home](https://www.alyvero.co.ke/)
- [All tools](https://www.alyvero.co.ke/tools)
- [PDF tools](https://www.alyvero.co.ke/pdf-tools)
- [Image tools](https://www.alyvero.co.ke/image-tools)
- [Guides](https://www.alyvero.co.ke/guides)
- [About](https://www.alyvero.co.ke/about)
- [Privacy](https://www.alyvero.co.ke/privacy)
- [Terms](https://www.alyvero.co.ke/terms)
- [Contact](https://www.alyvero.co.ke/contact)

## File tools

- [PDF to Word](https://www.alyvero.co.ke/pdf-to-word)
- [Compress PDF](https://www.alyvero.co.ke/compress-pdf)
- [Merge PDF](https://www.alyvero.co.ke/merge-pdf)
- [Split PDF](https://www.alyvero.co.ke/split-pdf)
- [PDF to JPG](https://www.alyvero.co.ke/pdf-to-jpg)
- [Compress Image](https://www.alyvero.co.ke/compress-image)
- [HEIC to JPG](https://www.alyvero.co.ke/heic-to-jpg)
- [Image to PDF](https://www.alyvero.co.ke/image-to-pdf)
- [Resize Image](https://www.alyvero.co.ke/resize-image)
- [JPG to PNG](https://www.alyvero.co.ke/jpg-to-png)

## AI and machine-readable resources

- [llms.txt](https://www.alyvero.co.ke/llms.txt)
- [llms-full.txt](https://www.alyvero.co.ke/llms-full.txt)
- [XML sitemap](https://www.alyvero.co.ke/sitemap.xml)
`;

export function GET() {
  return new Response(sitemap, { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
