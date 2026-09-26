import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SearchIntentPage from "@/components/SearchIntentPage";
import { getPdfGuide, pdfGuides } from "@/lib/compressPdfGuides";

export function generateStaticParams() {
  return pdfGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getPdfGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/${guide.slug}` },
    openGraph: { title: guide.title, description: guide.description, url: `https://alyvero.vercel.app/${guide.slug}`, type: "article" },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getPdfGuide(slug);
  if (!guide) notFound();
  return <SearchIntentPage guide={guide} />;
}
