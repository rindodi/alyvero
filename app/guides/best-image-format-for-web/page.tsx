import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Image Format for Web | Alyvero",
  description:
    "Learn which image formats are best for websites, including JPG, PNG and WebP.",
};

export default function Page() {
  return (
    <main>
      <h1>Best Image Format for Web</h1>

      <p>
        Choosing the right image format helps websites load faster and look better.
      </p>

      <h2>JPG</h2>

      <p>
        JPG is useful for photographs because it provides good quality with smaller files.
      </p>

      <h2>PNG</h2>

      <p>
        PNG is suitable for graphics, logos and images that need transparency.
      </p>

      <h2>WebP</h2>

      <p>
        WebP offers modern compression and is supported by most modern browsers.
      </p>
    </main>
  );
  }
