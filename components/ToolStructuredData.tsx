type Props = { name: string; description: string; slug: string };

const site = "https://www.alyvero.co.ke";

export default function ToolStructuredData({ name, description, slug }: Props) {
  const url = `${site}/${slug}`;

  // Keep this markup focused on the page and its visible breadcrumb.
  // Avoid SoftwareApplication/WebApplication rich-result properties that
  // require additional app-specific details not shown on these tool pages.
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        isPartOf: { "@id": `${site}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        inLanguage: "en",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: `${site}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name,
          },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
