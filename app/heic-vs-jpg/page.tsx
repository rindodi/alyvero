import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HEIC vs JPG: Differences, File Size and Compatibility | Alyvero",
  description:
    "Compare HEIC and JPG for photo quality, storage and compatibility, and learn when converting an iPhone photo to JPG makes sense.",
  alternates: { canonical: "/heic-vs-jpg" },
};

export default function Page() {
  return (
    <main className="container content-page">
      <p className="eyebrow">Format comparison</p>
      <h1>HEIC vs JPG: Which Image Format Is Better?</h1>
      <p className="lead">
        HEIC and JPG are both used for photos, but they solve slightly different
        problems. HEIC can store a good-looking image efficiently, while JPG is
        accepted by a wider range of older software, websites and upload forms.
      </p>

      <h2>HEIC: efficient storage</h2>
      <p>
        HEIC is common on newer Apple devices and can keep file sizes down while
        preserving image quality. The drawback is compatibility: some websites,
        apps and older computers do not preview or accept HEIC files. If a
        destination supports HEIC, there may be no reason to convert.
      </p>

      <h2>JPG: broad compatibility</h2>
      <p>
        JPG is supported almost everywhere and is often the safer choice for
        forms, email attachments and sharing with people who use different
        devices. It uses lossy compression, so quality can be affected by
        repeated edits and saves. Keep the HEIC original if the photo matters.
      </p>

      <h2>Which should you choose?</h2>
      <ul>
        <li>Choose HEIC when storage efficiency matters and the apps you use accept it.</li>
        <li>Choose JPG when a website or recipient requires broad compatibility.</li>
        <li>Keep an original copy before converting or editing important photos.</li>
      </ul>

      <h2>Convert only when needed</h2>
      <p>
        If an upload rejects your iPhone photo, use Alyvero's
        <Link href="/heic-to-jpg"> HEIC to JPG converter</Link>, then open the
        downloaded file to check it before submitting. If the JPG is still too
        large, use <Link href="/compress-image">Compress Image</Link>.
      </p>
    </main>
  );
}
