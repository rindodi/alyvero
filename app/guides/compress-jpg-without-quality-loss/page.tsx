import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Compress JPG Images While Keeping Good Quality | Alyvero",
  description:
    "Learn how to reduce JPG file size, avoid repeated lossy saves, and check important image details after compression.",
  alternates: { canonical: "/guides/compress-jpg-without-quality-loss" },
};

export default function Page() {
  return (
    <main className="container content-page">
      <p className="eyebrow">Image guide</p>
      <h1>Compress JPG Without Losing Quality</h1>
      <p className="lead">
        JPG uses lossy compression, which means some image information is
        discarded to reduce file size. You can often make a file noticeably
        smaller while keeping it looking good, but a promise of zero quality loss
        is not realistic for lossy compression.
      </p>

      <h2>Start from the original</h2>
      <p>
        Each time a JPG is edited and saved with lossy compression, additional
        detail can be lost. Keep the original and create a fresh compressed copy
        instead of repeatedly compressing the previous output.
      </p>

      <h2>Resize when the dimensions are excessive</h2>
      <p>
        If a photo is far larger than the space where it will be displayed,
        reducing its dimensions can lower the file size without relying only on
        stronger compression. Follow the requirements of the website or upload
        form and preserve the original for future edits.
      </p>

      <h2>Compare quality at normal viewing size</h2>
      <p>
        After compression, look for smearing around text, rough edges, banding
        and lost detail in faces or fine patterns. A file can look acceptable as
        a small thumbnail but show defects when enlarged. For receipts, documents
        and other evidence, prioritize legibility over maximum size reduction.
      </p>

      <h2>Compress a copy with Alyvero</h2>
      <p>
        Open <Link href="/compress-image">Compress Image</Link>, select the JPG
        and compare the output size with the original. If the image dimensions
        are unnecessarily large, use <Link href="/resize-image">Resize Image</Link>
        first. Keep the source until you have checked the result in the
        application where it will be used.
      </p>
    </main>
  );
}
