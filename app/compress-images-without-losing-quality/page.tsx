import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress Images Without Losing Quality: Practical Guide | Alyvero",
  description:
    "Reduce image file sizes with sensible dimensions and compression settings while checking that important visual details remain clear.",
  alternates: { canonical: "/compress-images-without-losing-quality" },
};

export default function Page() {
  return (
    <main className="container content-page">
      <p className="eyebrow">Image guide</p>
      <h1>Compress Images Without Losing Quality</h1>
      <p className="lead">
        Image compression is a balance between file size and appearance. The
        goal is to make a file easier to upload or share while keeping enough
        detail for its intended use. Some quality loss is possible with lossy
        formats, so inspect the result rather than assuming every setting is safe.
      </p>

      <h2>Reduce unnecessary dimensions first</h2>
      <p>
        A photo intended for a small website card usually does not need the same
        dimensions as the original camera image. Resizing to a sensible width
        can reduce the amount of image data before compression. Keep the original
        so you can create a larger version later.
      </p>

      <h2>Choose the format for the image</h2>
      <p>
        JPG and lossy WebP can be effective for photographs. PNG is useful for
        transparency and sharp graphics but may create larger files for photos.
        A format change is not automatically an improvement; check whether the
        destination supports the result.
      </p>

      <h2>Inspect the result</h2>
      <p>
        Look closely at text, thin lines, edges and faces. Images used for
        documents, receipts or evidence need enough detail to remain readable.
        Avoid repeatedly saving the same lossy image, because artifacts can build
        up. Start from the original whenever you need another version.
      </p>

      <h2>Use Alyvero to make a smaller copy</h2>
      <p>
        Open <Link href="/compress-image">Compress Image</Link>, choose your
        file and compare the original and compressed sizes. If the dimensions
        are too large, use <Link href="/resize-image">Resize Image</Link> first.
        For photos saved by an iPhone in HEIC, use
        <Link href="/heic-to-jpg"> HEIC to JPG</Link> when the destination
        requires JPG.
      </p>
    </main>
  );
}
