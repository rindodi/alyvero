"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import ToolShell, { formatBytes } from "@/components/ToolShell";

export default function Tool() {
  const [result, setResult] = useState<{url:string;size:number}|null>(null);
  const [message, setMessage] = useState("");

  async function process(files: File[]) {
    if (!files.length) return;
    setMessage("Creating PDF...");
    setResult(null);
    try {
      const pdf = await PDFDocument.create();
      for (const file of files) {
        const bytes = new Uint8Array(await file.arrayBuffer());
        const image = file.type === "image/png" ? await pdf.embedPng(bytes) : await pdf.embedJpg(bytes);
        const maxW = 595, maxH = 842;
        const scale = Math.min(maxW/image.width, maxH/image.height, 1);
        const w = image.width*scale, h = image.height*scale;
        const page = pdf.addPage([w,h]);
        page.drawImage(image,{x:0,y:0,width:w,height:h});
      }
      const bytes = await pdf.save();
      const blob = new Blob([new Uint8Array(bytes)],{type:"application/pdf"});
      setResult({url:URL.createObjectURL(blob),size:blob.size});
      setMessage("Your PDF is ready.");
    } catch {
      setMessage("We couldn't create the PDF. Check that the images are valid JPG or PNG files.");
    }
  }

  return <ToolShell title="Image to PDF" description="Turn one or more JPG or PNG images into a PDF directly in your browser." accept="image/jpeg,image/png" multiple>
    {(files, setFiles) => <>
      <div className="actions"><button className="primary" disabled={!files.length} onClick={()=>process(files)}>Create PDF</button><button className="secondary" onClick={()=>{setFiles([]);setResult(null);setMessage("");}}>Clear</button></div>
      {message && <div className={`status ${result ? "success" : "error"}`}>{message}</div>}
      {result && <div className="metric"><span>PDF size</span><strong>{formatBytes(result.size)}</strong></div>}
      {result && <div className="actions"><a className="primary" href={result.url} download="alyvero-images.pdf">Download PDF</a></div>}
    </>}
  </ToolShell>;
}