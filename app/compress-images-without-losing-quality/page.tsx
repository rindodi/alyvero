import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compress Images Without Losing Quality | Alyvero",
  description: "Reduce image file size while keeping good quality.",
};

export default function Page() {
  return (
    <main>
      <h1>Compress Images Without Losing Quality</h1>

      <p>
        Compress images online and reduce file size for sharing and websites.
      </p>

      <h2>Why compress images?</h2>

      <p>
        Smaller images load faster and use less storage space.
      </p>

      <h2>Keep image quality</h2>

      <p>
        Good compression reduces file size while keeping images clear.
      </p>

      <a href="/compress-image">
        Compress Image Online
      </a>
    </main>
  );
}
