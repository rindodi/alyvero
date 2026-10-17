import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resize Images Online: Choose the Right Dimensions | Alyvero",
  description:
    "Learn how to resize JPG, PNG and WebP images for websites, forms and sharing, then check dimensions and quality before uploading.",
  alternates: { canonical: "/resize-images-online" },
};

export default function Page() {
  return (
    <main className="container content-page">
      <p className="eyebrow">Image guide</p>
      <h1>Resize Images Online</h1>
      <p className="lead">
        Resizing changes an image's pixel dimensions. It is useful when a website
        asks for a specific width or height, a photo is much larger than the
        space where it will appear, or an upload form rejects an oversized image.
      </p>

      <h2>Resize dimensions, not just file size</h2>
      <p>
        Pixel dimensions and file size are related, but they are not the same.
        Reducing a photo from 4000 pixels wide to 1600 pixels wide removes image
        data and often reduces its file size too. Compressing an image changes
        how its data is stored; it does not necessarily change its width or height.
      </p>

      <h2>Choose dimensions for the job</h2>
      <p>
        Check the destination's requirements first. A profile picture, product
        image and full-width website banner usually need different dimensions.
        If a form specifies exact pixel dimensions, follow those instructions
        rather than choosing a size at random. Keep the original image so you can
        make another version later.
      </p>

      <h2>Keep the image clear</h2>
      <p>
        Reduce dimensions gradually and inspect the result at the size it will be
        displayed. Enlarging a small image cannot restore detail that was never
        captured, and repeatedly resizing the same JPEG can reduce quality. Start
        from the original whenever possible.
      </p>

      <h2>Resize an image with Alyvero</h2>
      <ol>
        <li>Open the <Link href="/resize-image">Resize Image tool</Link>.</li>
        <li>Select a JPG, PNG or WebP image.</li>
        <li>Enter the required width and review the resulting dimensions.</li>
        <li>Download the result and check it before uploading or sharing.</li>
      </ol>
      <p>
        Need a smaller download as well? Use <Link href="/compress-image">Compress Image</Link>
        after resizing. If your phone photo is in HEIC format, convert it with
        <Link href="/heic-to-jpg"> HEIC to JPG</Link> first.
      </p>
    </main>
  );
}
