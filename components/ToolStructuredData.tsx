type Props = { name: string; description: string; slug: string };

export default function ToolStructuredData({ name, description, slug }: Props) {
  const url = `https://alyvero.vercel.app/${slug}`;
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "@id": `${url}#app`,
      name,
      url,
      description,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Web",
      browserRequirements: "Requires a modern web browser.",
      isAccessibleForFree: true,
      publisher: { "@type": "Organization", name: "Alyvero", url: "https://alyvero.vercel.app" },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://alyvero.vercel.app/" },
        { "@type": "ListItem", position: 2, name, item: url },
      ],
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
