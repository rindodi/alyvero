import type { Metadata } from "next";
import Link from "next/link";
import { tools } from "@/lib/tools";

export const metadata: Metadata = {
  title:"Simple Online File Tools for PDF & Images",
  description:"Focused browser-based tools for everyday PDF and image problems. Convert, compress and create files without an account.",
  alternates:{canonical:"/"},
  openGraph:{title:"Alyvero — Simple Online File Tools",description:"Focused browser-based tools for everyday PDF and image problems.",url:"https://www.alyvero.co.ke/",type:"website",images:[{url:"/opengraph-image"}]},
};

export default function Home(){
 return <div className="container home-page">
  <section className="hero">
   <div>
    <p className="eyebrow">Alyvero / file utilities</p>
    <h1>Solve the file.<br/>Move on.</h1>
    <p>Focused online tools for the PDF and image problems that interrupt everyday work. Pick the task, process your file and keep the result.</p>
    <form className="search-box" action="/tools">
      <input name="q" placeholder="What do you need to do?" aria-label="Search Alyvero tools"/>
      <button type="submit">Find a tool</button>
    </form>
   </div>
  </section>

  <section className="section section-rule" id="tools">
   <p className="eyebrow">Core tools</p><h2>One task. One clear tool.</h2>
   <p>Five focused utilities cover the common PDF and image jobs Alyvero supports today.</p>
   <div className="tool-grid">{tools.map(tool=><a className="tool-card" href={`/${tool.slug}`} key={tool.slug}>
     <div className="tool-image-wrap"><img className="tool-image" src={`/illustrations/${tool.slug}.svg`} alt="" aria-hidden="true"/></div>
     <h3>{tool.name}</h3><p>{tool.description}</p><span className="tool-link">Open tool →</span>
   </a>)}</div>
   <p className="section-link"><Link href="/tools">Browse all tools →</Link> · <Link href="/pdf-tools">PDF tools</Link> · <Link href="/image-tools">Image tools</Link></p>
  </section>

  <section className="section info-section">
   <p className="eyebrow" style={{color:"#9fb2ff"}}>The workflow</p>
   <h2>Less hunting. More done.</h2>
   <p>There is no need to learn a large dashboard. Start with the file problem you actually have.</p>
   <div className="steps">
    <div><strong>Choose the task</strong><p>Open the tool that matches the result you need.</p></div>
    <div><strong>Work with your file</strong><p>Select a supported file and follow the tool's instructions.</p></div>
    <div><strong>Check the result</strong><p>Download the new file and keep the original until you are satisfied.</p></div>
   </div>
  </section>

  <section className="section">
   <p className="eyebrow">Why Alyvero</p><h2>Useful information stays close to the action.</h2>
   <p>Every tool explains supported formats and known limitations before you use it. Where practical, processing happens in the browser. Alyvero does not require an account for the core tools.</p>
   <p>For example, <Link href="/pdf-to-word">PDF to Word</Link> is intended for text-based PDFs rather than promising OCR for scanned pages. <Link href="/compress-pdf">Compress PDF</Link> reports the actual before-and-after file size instead of promising a fixed reduction.</p>
  </section>

  <section className="section section-rule">
   <p className="eyebrow">Need context?</p><h2>Start with the problem.</h2>
   <p>Read the <Link href="/guides">file problem guides</Link> for practical explanations, or go straight to <Link href="/tools">the tool directory</Link>. If something does not work as expected, <Link href="/contact">contact Alyvero</Link>.</p>
  </section>
 </div>
}