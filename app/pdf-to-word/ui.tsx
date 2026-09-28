"use client";

import { useState } from "react";
import { Document, Packer, Paragraph, TextRun } from "docx";
import ToolShell, { formatBytes } from "@/components/ToolShell";

export default function Tool() {
  const [message, setMessage] = useState("");
  const [output, setOutput] = useState<{url:string;name:string;size:number}|null>(null);

  async function process(files: File[]) {
    if (!files[0]) return;
    setMessage("Reading PDF text...");
    setOutput(null);
    try {
      const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
      pdfjs.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@5.7.284/build/pdf.worker.mjs";
      const buffer = await files[0].arrayBuffer();
      const pdf = await pdfjs.getDocument({ data: buffer }).promise;
      const paragraphs: Paragraph[] = [];
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const text = content.items.map((item: any) => "str" in item ? item.str : "").join(" ").replace(/\s+/g, " ").trim();
        if (text) paragraphs.push(new Paragraph({ children: [new TextRun(text)] }));
        if (i < pdf.numPages) paragraphs.push(new Paragraph({ text: "" }));
      }
      if (!paragraphs.length) throw new Error("This PDF appears to contain scanned images rather than selectable text. OCR support is not included in this MVP.");
      setMessage("Creating Word document...");
      const doc = new Document({ sections: [{ children: paragraphs }] });
      const blob = await Packer.toBlob(doc);
      const url = URL.createObjectURL(blob);
      setOutput({ url, name: files[0].name.replace(/\.pdf$/i, "") + ".docx", size: blob.size });
      setMessage("Your Word document is ready.");
    } catch (e) {
      setMessage(e instanceof Error ? e.message : "We couldn't convert this PDF.");
    }
  }

  return <ToolShell title="PDF to Word" description="Convert a text-based PDF into an editable Word document. Scanned PDFs need OCR and may not work here." accept=".pdf,application/pdf">
    {(files, setFiles) => <>
      <div className="actions">
        <button className="primary" onClick={() => process(files)} disabled={!files.length}>Convert to Word</button>
        <button className="secondary" onClick={() => { setFiles([]); setMessage(""); setOutput(null); }}>Clear</button>
      </div>
      {message && <div className={`status ${output ? "success" : "error"}`}>{message}</div>}
      {output && <div className="actions"><a className="primary" href={output.url} download={output.name}>Download Word document ({formatBytes(output.size)})</a></div>}
    </>}
  </ToolShell>;
}