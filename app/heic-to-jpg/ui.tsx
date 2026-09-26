"use client";

import { useState } from "react";
import ToolShell, { formatBytes } from "@/components/ToolShell";

export default function Tool() {
  const [results, setResults] = useState<{url:string;name:string;size:number}[]>([]);
  const [message, setMessage] = useState("");

  async function process(files: File[]) {
    if (!files.length) return;
    setResults([]);
    setMessage("Converting HEIC images...");
    try {
      const heic2any = (await import("heic2any")).default;
      const output = [];
      for (const file of files) {
        const converted = await heic2any({ blob:file, toType:"image/jpeg", quality:0.9 });
        const blob = Array.isArray(converted) ? converted[0] : converted;
        output.push({url:URL.createObjectURL(blob),name:file.name.replace(/\.heic$/i,"")+".jpg",size:blob.size});
      }
      setResults(output);
      setMessage("Your JPG files are ready.");
    } catch {
      setMessage("We couldn't convert one or more files. Try standard HEIC photos from a supported browser.");
    }
  }

  return <ToolShell title="HEIC to JPG" description="Convert iPhone and Apple HEIC photos into widely compatible JPG images. Files are processed in your browser." accept=".heic,image/heic,image/heif" multiple>
    {(files, setFiles) => <>
      <div className="actions"><button className="primary" disabled={!files.length} onClick={()=>process(files)}>Convert to JPG</button><button className="secondary" onClick={()=>{setFiles([]);setResults([]);setMessage("");}}>Clear</button></div>
      {message && <div className={`status ${results.length ? "success" : "error"}`}>{message}</div>}
      {results.map(r=><div className="file-row" key={r.name}><span>{r.name}<br/><small>{formatBytes(r.size)}</small></span><a className="primary" href={r.url} download={r.name}>Download</a></div>)}
    </>}
  </ToolShell>;
}