import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Resize Images for Websites | Alyvero",
  description:
    "Choose practical image dimensions for websites, avoid oversized uploads, and check quality after resizing and compression.",
  alternates: { canonical: "/guides/resize-image-for-web" },
};

export default function Page() {
  return (
    <main className="container content-page">
      <p className="eyebrow">Website image guide</p>
      <h1>How to Resize Images for Websites</h1>
      <p className="lead">
        A website image should be large enough to look clear in its layout, but
        not needlessly larger than the space where it appears. Correct dimensions
        can reduce page weight before you even adjust image compression.
      </p>

      <h2>Start with the display size</h2>
      <p>
        Check how wide the image will appear in the page layout and whether the
        design needs a larger source for high-density screens. Avoid uploading a
        huge original for a small thumbnail. At the same time, do not make the
        source so small that it looks blurry when visitors zoom in or view it on
        a larger screen.
      </p>

      <h2>Keep proportions consistent</h2>
      <p>
        Preserve the original aspect ratio unless the design specifically calls
        for a crop. Stretching an image to fit a different ratio can distort
        faces, products and diagrams. If a fixed shape is required, crop a copy
        rather than stretching the original.
      </p>

      <h2>Resize, then compress</h2>
      <p>
        First reduce the pixel dimensions to suit the layout. Then compress the
        result and compare its appearance and file size. These are separate
        steps: resizing changes the number of pixels, while compression changes
        how image data is encoded.
      </p>
      <ol>
        <li>Use <Link href="/resize-image">Resize Image</Link> to adjust dimensions.</li>
        <li>Use <Link href="/compress-image">Compress Image</Link> to reduce the output size.</li>
        <li>Preview the result on a page or at the intended display size.</li>
      </ol>

      <h2>Use the right format</h2>
      <p>
        JPG is often suitable for photographs, PNG can be useful for transparent
        graphics, and WebP can offer efficient web delivery. Choose a format
        supported by your publishing workflow and check the final image rather
        than relying only on the file extension.
      </p>
    </main>
  );
}
