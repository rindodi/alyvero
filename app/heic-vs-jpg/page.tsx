import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HEIC vs JPG: Which Image Format Is Better?",
  description: "Compare HEIC and JPG image formats.",
};

export default function Page() {
  return (
    <main>
      <h1>HEIC vs JPG: Which Image Format Is Better?</h1>

      <p>
        Learn the difference between HEIC and JPG image formats.
      </p>

      <h2>HEIC</h2>

      <p>
        HEIC provides high-quality images with smaller file sizes.
      </p>

      <h2>JPG</h2>

      <p>
        JPG works with most devices, websites and applications.
      </p>
    </main>
  );
}
