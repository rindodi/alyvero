"use client";

import { useState } from "react";
import ToolShell, { formatBytes } from "@/components/ToolShell";

export default function Tool() {
  const [message, setMessage] = useState("");

  return (
    <ToolShell
      title="Word to PDF"
      description="Prepare a Word document for PDF conversion. Full DOCX-to-PDF rendering is not yet available in this browser-first MVP."
      accept=".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      supported={["DOCX input"]}
      notes="This version intentionally does not claim to create a PDF yet. Use a desktop Word processor or another DOCX-to-PDF converter when you need the actual PDF output."
      faqs={[
        { question: "Does this version create a PDF?", answer: "Not yet. Full DOCX-to-PDF rendering is still being developed." },
        { question: "Can I still select a Word file?", answer: "Yes. You can select a DOCX file to verify that the browser accepts the format, but no PDF is generated." }
      ]}
    >
      {(files, setFiles) => (
        <>
          <div className="actions">
            <button
              className="primary"
              disabled={!files.length}
              onClick={() => setMessage("DOCX selected. PDF rendering is not available in this MVP yet.")}
            >
              Check Word file
            </button>
            <button
              className="secondary"
              onClick={() => {
                setFiles([]);
                setMessage("");
              }}
            >
              Clear
            </button>
          </div>
          {message && <div className="status error">{message}</div>}
          {files[0] && (
            <div className="result-grid">
              <div className="metric"><span>Selected file</span><strong>{files[0].name}</strong></div>
              <div className="metric"><span>File size</span><strong>{formatBytes(files[0].size)}</strong></div>
              <div className="metric"><span>PDF output</span><strong>Not available yet</strong></div>
            </div>
          )}
        </>
      )}
    </ToolShell>
  );
}
