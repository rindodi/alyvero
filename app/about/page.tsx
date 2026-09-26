export const metadata = {
  title: "About Alyvero",
  description: "Learn what Alyvero does, how its browser-first file tools work and why the service focuses on simple digital tasks."
};

export default function About() {
  return (
    <div className="container content-page">
      <h1>About Alyvero</h1>
      <p>
        Alyvero is a practical online utility platform for common digital file problems. The idea is simple:
        when you need to convert, compress or create a file, the tool should be easy to find and straightforward to use.
      </p>

      <h2>What Alyvero does</h2>
      <p>
        The first Alyvero tools focus on PDF and image tasks: PDF to Word, PDF compression, image compression,
        HEIC to JPG and image to PDF. Each tool has a specific job rather than trying to become a directory of unrelated
        software.
      </p>

      <h2>Browser-first processing</h2>
      <p>
        Where practical, Alyvero processes files directly in the browser. This can reduce the need to create an account
        or send a file to a remote server. The processing architecture is explained on individual tool pages and the
        Privacy Policy.
      </p>

      <h2>How Alyvero approaches utility tools</h2>
      <ul>
        <li>Clear descriptions instead of exaggerated promises.</li>
        <li>Useful information about supported formats and limitations.</li>
        <li>No forced registration for the core tools.</li>
        <li>Separate result files rather than silently replacing originals.</li>
        <li>Simple navigation so users can get to the task they need.</li>
      </ul>

      <h2>Built for practical use</h2>
      <p>
        Alyvero is intended for everyday tasks such as preparing documents for upload, reducing an image before
        sending it, converting an iPhone photo to JPG, or combining images into a PDF.
      </p>

      <h2>Questions and feedback</h2>
      <p>
        Found a problem or have a useful suggestion? Use the <a href="/contact">contact form</a>.
      </p>
    </div>
  );
}
