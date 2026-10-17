import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reduce Image Size for Email Attachments | Alyvero",
  description:
    "Reduce oversized email images by choosing sensible dimensions and compression, then check the final file size and visual quality.",
  alternates: { canonical: "/guides/reduce-image-size-for-email" },
};

export default function Page() {
  return (
    <main className="container content-page">
      <p className="eyebrow">Image guide</p>
      <h1>Reduce Image Size for Email</h1>
      <p className="lead">
        Large photos can take longer to upload, fill an inbox and exceed an
        attachment limit. The best fix depends on whether the image is larger in
        pixel dimensions than necessary, or simply saved at a high file size.
      </p>

      <h2>Check the attachment limit</h2>
      <p>
        Check the maximum attachment size for your email provider and remember
        that email encoding can add overhead. If you are sending several images,
        the total size matters too. Aim for a comfortable margin below the limit
        rather than reducing the file by only a few bytes.
      </p>

      <h2>Resize before compressing</h2>
      <p>
        If a photo is several thousand pixels wide but will only be viewed in an
        email, smaller dimensions may be sufficient. Keep the original and make a
        copy at dimensions appropriate for the recipient's needs. Do not reduce
        the resolution of evidence, receipts or documents if small details must
        remain readable.
      </p>

      <h2>Compress and inspect the result</h2>
      <ol>
        <li>Open Alyvero's <Link href="/resize-image">Resize Image tool</Link> if the dimensions are unnecessarily large.</li>
        <li>Use <Link href="/compress-image">Compress Image</Link> to reduce the file size.</li>
        <li>Compare the original and output sizes.</li>
        <li>Open the result and inspect faces, text, edges and other important details.</li>
      </ol>

      <h2>Choose the format carefully</h2>
      <p>
        JPG is commonly suitable for photographs, while PNG is useful for
        graphics or transparency but can produce larger files. WebP can be
        efficient, although the recipient's workflow may not accept it. When
        compatibility matters most, confirm the required format before sending.
      </p>
      <p>
        Keep the original image until the recipient has received the attachment
        and you know the smaller version is acceptable.
      </p>
    </main>
  );
}
