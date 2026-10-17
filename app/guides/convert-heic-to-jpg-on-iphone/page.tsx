import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Convert HEIC to JPG on iPhone: Practical Options | Alyvero",
  description:
    "Learn why iPhone photos use HEIC, when JPG is more compatible, and how to convert a copy safely before sharing or uploading.",
  alternates: { canonical: "/guides/convert-heic-to-jpg-on-iphone" },
};

export default function Page() {
  return (
    <main className="container content-page">
      <p className="eyebrow">iPhone image guide</p>
      <h1>Convert HEIC to JPG on iPhone</h1>
      <p className="lead">
        iPhones can save photos in HEIC, a format that often provides good image
        quality with smaller files. Some upload forms, older apps and desktop
        workflows still expect JPG, so conversion can solve compatibility issues.
      </p>

      <h2>Check whether conversion is necessary</h2>
      <p>
        If the website or app accepts HEIC, keeping the original may be simplest.
        Convert a copy when the destination rejects the file, cannot preview it,
        or specifically asks for JPG. JPG is broadly supported but uses lossy
        compression, so do not delete the original just because the converted
        version opens successfully.
      </p>

      <h2>Convert with a browser-based tool</h2>
      <ol>
        <li>Open Alyvero's <Link href="/heic-to-jpg">HEIC to JPG converter</Link> in Safari or another modern browser.</li>
        <li>Choose the HEIC photo from the iPhone file picker.</li>
        <li>Start the conversion and download the resulting JPG.</li>
        <li>Open the downloaded image and check its appearance before uploading it.</li>
      </ol>

      <h2>If the photo is not available in Files</h2>
      <p>
        Use the iOS share or save options in Photos to make a copy available to
        the browser file picker. The exact choices can vary by iOS version and
        by where the photo is stored. Avoid converting your only copy of an
        important image.
      </p>

      <h2>What can change during conversion?</h2>
      <p>
        The JPG may have a different file size and may not retain every piece of
        metadata from the original. Check orientation, image quality and any
        details needed for your workflow. If the image is still too large after
        conversion, use <Link href="/compress-image">Compress Image</Link>.
      </p>
      <p>
        HEIC and JPG have different strengths. Read
        <Link href="/heic-vs-jpg"> HEIC vs JPG</Link> if you are deciding which
        format to keep for future photos.
      </p>
    </main>
  );
}
