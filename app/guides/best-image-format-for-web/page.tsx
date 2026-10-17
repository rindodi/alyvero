import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Image Format for Websites: JPG, PNG or WebP | Alyvero",
  description:
    "Compare JPG, PNG and WebP for website photos, graphics and transparency, with practical advice on choosing and checking image files.",
  alternates: { canonical: "/guides/best-image-format-for-web" },
};

export default function Page() {
  return (
    <main className="container content-page">
      <p className="eyebrow">Image guide</p>
      <h1>Best Image Format for Websites</h1>
      <p className="lead">
        The best image format depends on what the image contains and how it will
        be used. A photograph, a transparent logo and a simple diagram do not
        necessarily benefit from the same format.
      </p>

      <h2>JPG for photographs</h2>
      <p>
        JPG is widely supported and works well for photographs with many colours
        and gradients. It uses lossy compression, so saving repeatedly at low
        quality can introduce visible blocks or smearing around fine details.
        Keep an original copy and inspect the compressed version before publishing.
      </p>

      <h2>PNG for sharp graphics and transparency</h2>
      <p>
        PNG preserves image data without lossy compression and supports
        transparency. It is useful for screenshots, interface graphics and
        images that need a transparent background. A photographic PNG can,
        however, be much larger than an equivalent JPG.
      </p>

      <h2>WebP for web delivery</h2>
      <p>
        WebP supports lossy and lossless compression and can be a good choice for
        website images. Check that your publishing workflow and any downstream
        tools support the format you choose. Keep a source copy when converting
        important assets.
      </p>

      <h2>A simple selection rule</h2>
      <ul>
        <li>Photographs: start with JPG or WebP.</li>
        <li>Transparent graphics and many screenshots: consider PNG or lossless WebP.</li>
        <li>Website delivery: compare the visual result and file size rather than relying on the extension alone.</li>
      </ul>

      <h2>Prepare an image before publishing</h2>
      <p>
        Resize the image to dimensions close to its displayed size, then compress
        it and review the result. Sending a 5000-pixel image to a 500-pixel slot
        wastes bytes even if the format is efficient.
      </p>
      <p>
        Use Alyvero's <Link href="/compress-image">Compress Image</Link> tool to
        reduce file size or <Link href="/resize-image">Resize Image</Link> to
        change dimensions. For more practical comparisons, see
        <Link href="/heic-vs-jpg"> HEIC vs JPG</Link>.
      </p>
    </main>
  );
}
