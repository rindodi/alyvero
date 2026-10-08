import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compress Images Without Losing Quality | Alyvero",
  description:
    "Compress JPG, PNG and WebP images online while keeping good image quality. Reduce file size for websites and sharing.",
  alternates: {
    canonical: "/compress-images-without-losing-quality",
  },
};

export default function CompressImagesWithoutLosingQualityPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="text-4xl font-bold text-center">
        Compress Images Without Losing Quality
      </h1>

      <p className="mt-5 text-center text-gray-600">
        Reduce image file size while keeping photos clear and useful.
      </p>

      <section className="mt-10 space-y-6">
        <h2 className="text-2xl font-semibold">
          Why compress images?
        </h2>

        <p>
          Large image files can slow down websites, take longer to upload,
          and use more storage space. Image compression helps create smaller
          files that are easier to manage.
        </p>

        <h2 className="text-2xl font-semibold">
          How image compression works
        </h2>

        <p>
          Image compression removes unnecessary data from an image while
          keeping the visual quality as clear as possible.
        </p>

        <h2 className="text-2xl font-semibold">
          Tips for better image compression
        </h2>

        <ul className="list-disc space-y-2 pl-6">
          <li>Resize very large images before compressing.</li>
          <li>Use the right image format for your needs.</li>
          <li>Keep original images as backups.</li>
        </ul>

        <h2 className="text-2xl font-semibold">
          Compress images online
        </h2>

        <p>
          Alyvero lets you reduce image sizes directly in your browser
          without installing software.
        </p>

        <a
          href="/compress-image"
          className="inline-block rounded-lg bg-black px-6 py-3 text-white"
        >
          Compress Image Online
        </a>
      </section>
    </main>
  );
  }
