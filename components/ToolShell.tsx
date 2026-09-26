"use client";

import { useState, type ChangeEvent, type DragEvent, type ReactNode } from "react";

export function formatBytes(bytes: number) {
  if (!bytes) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(1024));
  return `${(bytes / Math.pow(1024, i)).toFixed(i ? 1 : 0)} ${units[i]}`;
}

type Props = {
  title: string;
  description: string;
  accept: string;
  multiple?: boolean;
  supported?: string[];
  notes?: string;
  longDescription?: string;
  faqs?: { question: string; answer: string }[];
  children: (files: File[], setFiles: (files: File[]) => void) => ReactNode;
};

export default function ToolShell({
  title,
  description,
  accept,
  multiple = false,
  supported = [],
  notes,
  longDescription,
  faqs = [],
  children
}: Props) {
  const [files, setFilesState] = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);

  const setFiles = (next: File[]) => {
    const clean = multiple ? next : next.slice(0, 1);
    setFilesState(clean);
  };

  const onInput = (e: ChangeEvent<HTMLInputElement>) => {
    setFiles(Array.from(e.target.files ?? []));
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    setFiles(Array.from(e.dataTransfer.files));
  };

  return (
    <div className="container tool-page">
      <div className="tool-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      <div className="tool-panel">
        <div
          className={`dropzone${dragging ? " dragging" : ""}`}
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
        >
          <h2>Choose your file{multiple ? "s" : ""}</h2>
          <p>Drag and drop here, or choose from your device.</p>
          <label className="primary" htmlFor="file-upload">
            Choose file{multiple ? "s" : ""}
          </label>
          <input
            id="file-upload"
            className="file-input"
            type="file"
            accept={accept}
            multiple={multiple}
            onChange={onInput}
          />
        </div>

        {files.length > 0 && (
          <div className="file-list" aria-live="polite">
            {files.map((file) => (
              <div className="file-row" key={`${file.name}-${file.size}-${file.lastModified}`}>
                <span>{file.name}</span>
                <small>{formatBytes(file.size)}</small>
              </div>
            ))}
          </div>
        )}

        {children(files, setFiles)}
      </div>

      <section className="tool-explainer">
        <h2>About {title}</h2>
        <p>{longDescription ?? description}</p>

        {supported.length > 0 && (
          <>
            <h2>Supported formats and files</h2>
            <ul>{supported.map((item) => <li key={item}>{item}</li>)}</ul>
          </>
        )}

        {notes && (
          <>
            <h2>Important to know</h2>
            <p>{notes}</p>
          </>
        )}

        <h2>How Alyvero processes your file</h2>
        <p>
          Alyvero is designed to process files in the browser whenever the selected tool supports local processing.
          When a tool uses a different processing architecture, the tool page should explain that before processing begins.
          Do not upload files containing information you are not comfortable submitting to an online service.
        </p>

        {faqs.length > 0 && (
          <>
            <h2>Frequently asked questions</h2>
            <div className="faq-list">
              {faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </>
        )}

        <p className="tool-privacy-note">
          For more information about privacy, cookies, advertising and file handling, read our{" "}
          <a href="/privacy">Privacy Policy</a>.
        </p>
      </section>
    </div>
  );
}
