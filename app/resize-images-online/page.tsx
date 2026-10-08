import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resize Images Online Free | Alyvero",
  description:
    "Resize JPG, PNG, WebP and HEIC images online. Change image dimensions while keeping good quality.",
  alternates: {
    canonical: "/resize-images-online",
  },
};

export default function ResizeImagesOnlinePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold text-center">
        Resize Images Online Free
      </h1>

      <p className="mt-5 text-center text-gray-600">
        Change image dimensions quickly without installing software.
      </p>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">
          Resize images easily
        </h2>

        <p>
          Alyvero helps you resize images directly in your browser.
          Adjust image dimensions for websites, documents, and sharing.
        </p>

        <h2 className="text-2xl font-semibold">
          Supported formats
        </h2>

        <p>
          Resize common formats including JPG, PNG, WebP and HEIC images.
        </p>

        <h2 className="text-2xl font-semibold">
          Frequently Asked Questions
        </h2>

        <p>
          <strong>Does resizing reduce quality?</strong>
          <br />
          Proper resizing helps maintain image quality.
        </p>
      </section>
    </main>
  );
  }
