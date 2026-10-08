import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HEIC vs JPG: Which Image Format Is Better?",
  description:
    "Compare HEIC and JPG image formats, including quality, file size and compatibility.",
  alternates: {
    canonical: "/heic-vs-jpg",
  },
};

export default function HeicVsJpgPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold text-center">
        HEIC vs JPG: Which Image Format Is Better?
      </h1>

      <p className="mt-5 text-center text-gray-600">
        Learn the differences between HEIC and JPG image formats.
      </p>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">
          What is HEIC?
        </h2>

        <p>
          HEIC is a modern image format used by many Apple devices.
          It provides high-quality images with smaller file sizes.
        </p>

        <h2 className="text-2xl font-semibold">
          What is JPG?
        </h2>

        <p>
          JPG is one of the most widely supported image formats.
          It works with websites, apps, and most devices.
        </p>

        <h2 className="text-2xl font-semibold">
          HEIC vs JPG: Which should you use?
        </h2>

        <p>
          Choose HEIC when saving storage space is important.
          Choose JPG when you need maximum compatibility.
        </p>

        <h2 className="text-2xl font-semibold">
          Can HEIC be converted to JPG?
        </h2>

        <p>
          Yes. Alyvero can help convert HEIC images into JPG format
          for easier sharing and uploading.
        </p>
      </section>
    </main>
  );
  }
