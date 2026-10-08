import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reduce Image Size for Email | Alyvero",
  description:
    "Learn how to reduce image size for email attachments while keeping good quality.",
};

export default function Page() {
  return (
    <main>
      <h1>Reduce Image Size for Email</h1>

      <p>
        Reduce large image files so they are easier to send through email.
      </p>

      <h2>Why reduce image size?</h2>

      <p>
        Large images can exceed email attachment limits and take longer to upload.
      </p>

      <h2>Keep good image quality</h2>

      <p>
        Image compression helps lower file size while keeping photos clear.
      </p>
    </main>
  );
}
