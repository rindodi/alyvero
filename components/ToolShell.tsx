"use client";

import { useRef, useState, type ChangeEvent, type DragEvent, type ReactNode } from "react";

export function formatBytes(bytes:number){if(!bytes)return"0 B";const units=["B","KB","MB","GB"];const i=Math.min(Math.floor(Math.log(bytes)/Math.log(1024)),units.length-1);return `${(bytes/Math.pow(1024,i)).toFixed(i?1:0)} ${units[i]}`}

type Props={title:string;description:string;accept:string;multiple?:boolean;supported?:string[];notes?:string;longDescription?:string;faqs?:{question:string;answer:string}[];children:(files:File[],setFiles:(files:File[])=>void)=>ReactNode};

export default function ToolShell({title,description,accept,multiple=false,supported=[],notes,longDescription,faqs=[],children}:Props){
 const [files,setFilesState]=useState<File[]>([]);const[dragging,setDragging]=useState(false);const inputRef=useRef<HTMLInputElement>(null);
 const setFiles=(next:File[])=>{const clean=multiple?next:next.slice(0,1);setFilesState(clean);if(!clean.length&&inputRef.current)inputRef.current.value=""};
 const onInput=(e:ChangeEvent<HTMLInputElement>)=>{setFiles(Array.from(e.target.files??[]));e.target.value=""};
 const onDrop=(e:DragEvent<HTMLDivElement>)=>{e.preventDefault();setDragging(false);setFiles(Array.from(e.dataTransfer.files))};
 return <div className="container tool-page">
  <div className="tool-header">
   <p className="eyebrow">Alyvero / tool</p><h1>{title}</h1><p>{description}</p>
  </div>
  <div className="tool-panel">
   <div className={`dropzone${dragging?" dragging":""}`} onDragOver={e=>{e.preventDefault();setDragging(true)}} onDragLeave={()=>setDragging(false)} onDrop={onDrop}>
    <p className="eyebrow" style={{marginBottom:8}}>Input</p><h2>Select your file{multiple?"s":""}</h2>
    <p>Drop {multiple?"files":"a file"} here, or choose from your device.</p>
    <label className="primary" htmlFor="file-upload">Choose file{multiple?"s":""}</label>
    <input ref={inputRef} id="file-upload" className="file-input" type="file" accept={accept} multiple={multiple} onChange={onInput}/>
   </div>
   {files.length>0&&<div className="file-list" aria-live="polite">{files.map(file=><div className="file-row" key={`${file.name}-${file.size}-${file.lastModified}`}><span>{file.name}</span><small>{formatBytes(file.size)}</small></div>)}</div>}
   {children(files,setFiles)}
  </div>
  <section className="tool-explainer">
   <h2>About {title}</h2><p>{longDescription??description}</p>
   {supported.length>0&&<><h2>Supported formats</h2><ul>{supported.map(item=><li key={item}>{item}</li>)}</ul></>}
   {notes&&<><h2>Important to know</h2><p>{notes}</p></>}
   <h2>Processing and privacy</h2><p>Alyvero is designed to process files in the browser whenever the selected tool supports local processing. The exact processing method can vary by tool, so the information on this page matters before you begin.</p>
   {faqs.length>0&&<><h2>Frequently asked questions</h2><div className="faq-list">{faqs.map(faq=><details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></>}
   <p className="tool-privacy-note">For file handling, cookies, advertising and contact information, read the <a href="/privacy">Privacy Policy</a>.</p>
  </section>
 </div>
}