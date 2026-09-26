"use client";

import { useState } from "react";
import { PDFDocument } from "pdf-lib";
import ToolShell, { formatBytes } from "@/components/ToolShell";

export default function Tool() {
  const [result, setResult] = useState<{url:string;size:number;original:number}|null>(null);
  const [message, setMessage] = useState("");

  async function process(files: File[]) {
    const file = files[0]; if (!file) return;
    setMessage("Optimizing PDF...");
    setResult(null);
    try {
      const doc = await PDFDocument.load(await file.arrayBuffer());
      const bytes = await doc.save({ useObjectStreams: true, addDefaultPage: false });
      const blob = new Blob([new Uint8Array(bytes)], { type: "application/pdf" });
      const url = URL.createObjectURL(blob);
      setResult({ url, size: blob.size, original: file.size });
      setMessage(blob.size < file.size ? "Your PDF is ready." : "This PDF could not be reduced further by this browser-only optimizer.");
    } catch {
      setMessage("We couldn't process this PDF. It may be damaged, encrypted or unsupported.");
    }
  }

  return <ToolShell title="Compress PDF" description="Make a PDF smaller for uploading, emailing or sharing. This browser-only MVP re-saves the document; image-heavy PDFs may see little reduction." accept=".pdf,application/pdf">
    {(files, setFiles) => <>
      <div className="actions"><button className="primary" disabled={!files.length} onClick={() => process(files)}>Compress PDF</button><button className="secondary" onClick={() => {setFiles([]);setResult(null);setMessage("");}}>Clear</button></div>
      {message && <div className={`status ${result && result.size < result.original ? "success" : result ? "error" : ""}`}>{message}</div>}
      {result && <div className="result-grid">
        <div className="metric"><span>Original</span><strong>{formatBytes(result.original)}</strong></div>
        <div className="metric"><span>New size</span><strong>{formatBytes(result.size)}</strong></div>
        <div className="metric"><span>Change</span><strong>{result.size < result.original ? `${Math.round((1-result.size/result.original)*100)}% smaller` : "No reduction"}</strong></div>
      </div>}
      {result && <div className="actions"><a className="primary" href={result.url} download={files[0]?.name || "compressed.pdf"}>Download PDF</a></div>}
    </>}
  </ToolShell>;
}