import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resize Image for Web | Alyvero",
  description: "Learn how to resize images for websites while keeping good quality.",
};

export default function Page() {
  return (
    <main>
      <h1>Resize Image for Web</h1>

      <p>
        Learn how to resize images for websites and improve loading speed.
      </p>

      <h2>Why resize images for websites?</h2>

      <p>
        Large images can slow down pages. Proper resizing helps websites load faster.
      </p>

      <h2>Choose the right image size</h2>

      <p>
        Use dimensions that match your website layout while keeping images clear.
      </p>
    </main>
  );
  }
