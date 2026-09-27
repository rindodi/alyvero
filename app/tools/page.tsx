import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/tools";

const siteUrl = "https://www.alyvero.co.ke";
export const metadata: Metadata = {
  title: "All Online File Tools",
  description: "Browse Alyvero's PDF and image tools for converting, compressing and creating files in your browser.",
  alternates: { canonical: "/tools" },
  openGraph: { title: "All Online File Tools | Alyvero", description: "Browse Alyvero's PDF and image tools for common file conversion and compression problems.", url: `${siteUrl}/tools`, type: "website" },
};
const schema = { "@context":"https://schema.org","@type":"ItemList",name:"Alyvero online file tools",itemListElement:tools.map((tool,index)=>({"@type":"ListItem",position:index+1,name:tool.name,url:`${siteUrl}/${tool.slug}`})) };
function ToolArt({slug}:{slug:string}) {
  const kind=slug==="pdf-to-word"?"PDF → DOCX":slug==="compress-pdf"?"PDF ↓":slug==="compress-image"?"IMG ↓":slug==="heic-to-jpg"?"HEIC → JPG":"IMG → PDF";
  return <div className="alyvero-tool-art" aria-hidden="true"><svg viewBox="0 0 240 130" role="presentation">
    <rect x="28" y="18" width="78" height="92" rx="9" className="art-paper"/><path d="M82 18v25h24" className="art-fold"/><path d="M82 18l24 25H82z" className="art-fold-fill"/>
    <text x="41" y="62" className="art-label">{kind}</text><path d="M42 78h45M42 89h34" className="art-line"/>
    {slug==="compress-pdf"||slug==="compress-image" ? <><path d="M130 51v42M120 61l10-10 10 10M120 83l10 10 10-10" className="art-arrow"/><rect x="159" y="47" width="48" height="56" rx="7" className="art-image"/><path d="M167 91l11-13 8 8 8-10 10 15" className="art-mountain"/></> : <><path d="M119 66h36m-10-11 11 11-11 11" className="art-arrow"/><rect x="165" y="50" width="48" height="58" rx="7" className="art-image"/><circle cx="177" cy="62" r="4" className="art-sun"/><path d="M171 98l11-14 9 8 8-10 10 16" className="art-mountain"/></>}
  </svg></div>;
}
export default function ToolsPage(){return <div className="container content-page tools-page">
<script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
<p className="eyebrow">Alyvero tools</p><h1>Online tools for everyday file problems</h1><p className="lead">Choose a specific PDF or image task, process your file in the browser and download the result. Alyvero keeps the toolset focused instead of filling the site with unrelated utilities.</p>
<div className="tool-directory">{tools.map(tool=><article className="directory-card" key={tool.slug}><ToolArt slug={tool.slug}/><h2><Link href={`/${tool.slug}`}>{tool.name}</Link></h2><p>{tool.longDescription}</p><p><strong>Supports:</strong> {tool.supported.join(", ")}</p><Link className="tool-link" href={`/${tool.slug}`}>Open {tool.name} →</Link></article>)}</div>
<section className="content-block"><h2>How Alyvero works</h2><p>Pick a tool, select a supported file and process it. Tool pages explain important limitations before you use them, and the original file remains separate from the downloaded result.</p><p>For privacy information, see the <Link href="/privacy">Privacy Policy</Link>. For questions or reports, use <Link href="/contact">Contact Alyvero</Link>.</p></section>
</div>}