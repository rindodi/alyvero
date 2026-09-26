"use client";

import { useState } from "react";
import ToolShell, { formatBytes } from "@/components/ToolShell";

export default function Tool() {
  const [quality, setQuality] = useState(0.78);
  const [result, setResult] = useState<{url:string;size:number;original:number;name:string}|null>(null);
  const [message, setMessage] = useState("");

  async function process(files: File[]) {
    const file = files[0]; if (!file) return;
    setMessage("Compressing image...");
    setResult(null);
    try {
      const bitmap = await createImageBitmap(file);
      const canvas = document.createElement("canvas");
      canvas.width = bitmap.width; canvas.height = bitmap.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw new Error("Your browser could not create an image canvas.");
      ctx.drawImage(bitmap, 0, 0);
      const type = file.type === "image/png" ? "image/webp" : "image/jpeg";
      const blob = await new Promise<Blob | null>(resolve => canvas.toBlob(resolve, type, quality));
      if (!blob) throw new Error("The browser could not create the compressed image.");
      const ext = type === "image/webp" ? "webp" : "jpg";
      const name = file.name.replace(/\.[^.]+$/, "") + `-compressed.${ext}`;
      setResult({url:URL.createObjectURL(blob),size:blob.size,original:file.size,name});
      setMessage("Your image is ready.");
    } catch {
      setMessage("We couldn't compress this image. Try a JPG, PNG or WebP file.");
    }
  }

  return <ToolShell title="Compress Image" description="Reduce image file size quickly in your browser. PNG input is converted to WebP for stronger compression." accept="image/jpeg,image/png,image/webp">
    {(files, setFiles) => <>
      <label style={{display:"block",marginTop:16}}>Quality: <strong>{Math.round(quality*100)}%</strong>
        <input style={{width:"100%"}} type="range" min="0.35" max="0.95" step="0.05" value={quality} onChange={e=>setQuality(Number(e.target.value))} />
      </label>
      <div className="actions"><button className="primary" disabled={!files.length} onClick={()=>process(files)}>Compress image</button><button className="secondary" onClick={()=>{setFiles([]);setResult(null);setMessage("");}}>Clear</button></div>
      {message && <div className={`status ${result ? "success" : "error"}`}>{message}</div>}
      {result && <div className="result-grid"><div className="metric"><span>Original</span><strong>{formatBytes(result.original)}</strong></div><div className="metric"><span>New size</span><strong>{formatBytes(result.size)}</strong></div><div className="metric"><span>Reduction</span><strong>{result.size < result.original ? `${Math.round((1-result.size/result.original)*100)}%` : "0%"}</strong></div></div>}
      {result && <div className="actions"><a className="primary" href={result.url} download={result.name}>Download image</a></div>}
    </>}
  </ToolShell>;
}