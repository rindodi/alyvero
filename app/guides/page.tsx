import type { Metadata } from "next";
import Link from "next/link";
import { pdfGuides } from "@/lib/compressPdfGuides";

export const metadata: Metadata = {
  title: "File Problem Guides",
  description: "Practical Alyvero guides explaining common PDF and image file problems, limitations and workflows.",
  alternates: { canonical: "/guides" },
  openGraph: { title: "File Problem Guides | Alyvero", description: "Practical guides for solving common PDF and image file problems.", url: "https://www.alyvero.co.ke/guides", type: "website" },
};

export default function GuidesPage() {
  return <div className="container content-page ecosystem-page">
    <p className="eyebrow">Alyvero guides</p>
    <h1>File problem guides</h1>
    <p className="lead">Short, practical explanations for the problems that lead people to file tools in the first place. Start with the problem, understand the limitation, then use the relevant Alyvero tool.</p>
    <section className="ecosystem-section">
      <h2>PDF guides</h2>
      <div className="guide-grid">{pdfGuides.map(guide => <Link className="guide-card" href={`/${guide.slug}`} key={guide.slug}><strong>{guide.title}</strong><span>{guide.description}</span></Link>)}</div>
    </section>
    <section className="ecosystem-section">
      <h2>Tool directory</h2>
      <p>Looking for the tool itself? Browse <Link href="/tools">all Alyvero tools</Link>, or go directly to <Link href="/compress-image">Compress Image</Link>, <Link href="/heic-to-jpg">HEIC to JPG</Link>, <Link href="/image-to-pdf">Image to PDF</Link> or <Link href="/pdf-to-word">PDF to Word</Link>.</p>
    </section>
  </div>;
}
