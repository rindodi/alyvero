import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { tool: string };

export function ToolIllustration({ tool, className = "", ...props }: Props) {
  return (
    <svg viewBox="0 0 240 100" role="img" aria-label={tool} className={`tool-illustration ${className}`} {...props}>
      {tool === "pdf-to-word" && (
        <>
          <rect x="12" y="11" width="62" height="78" rx="9" className="alyvero-illustration-sheet" />
          <path d="M58 11v16h16" className="alyvero-illustration-fold" />
          <text x="43" y="56" textAnchor="middle" className="alyvero-illustration-label">PDF</text>
          <path d="M84 50h60l-7-6m7 6-7 6" className="alyvero-illustration-arrow" />
          <rect x="158" y="11" width="70" height="78" rx="9" className="alyvero-illustration-sheet" />
          <path d="M212 11v16h16" className="alyvero-illustration-fold" />
          <text x="193" y="56" textAnchor="middle" className="alyvero-illustration-label">DOCX</text>
        </>
      )}

      {tool === "compress-pdf" && (
        <>
          <rect x="18" y="11" width="62" height="78" rx="9" className="alyvero-illustration-sheet" />
          <path d="M64 11v16h16" className="alyvero-illustration-fold" />
          <text x="49" y="56" textAnchor="middle" className="alyvero-illustration-label">PDF</text>
          <path d="M100 31h38M100 50h38M100 69h38" className="alyvero-illustration-lines" />
          <path d="M151 50h22l-7-6m7 6-7 6" className="alyvero-illustration-arrow" />
          <rect x="181" y="20" width="48" height="62" rx="9" className="alyvero-illustration-sheet" />
          <text x="205" y="56" textAnchor="middle" className="alyvero-illustration-label">PDF</text>
        </>
      )}

      {tool === "compress-image" && (
        <>
          <rect x="13" y="18" width="82" height="64" rx="10" className="alyvero-illustration-image" />
          <path d="m28 66 19-20 14 14 10-10 14 16" className="alyvero-illustration-mountain" />
          <circle cx="71" cy="33" r="6" className="alyvero-illustration-sun" />
          <path d="M112 50h35l-7-6m7 6-7 6" className="alyvero-illustration-arrow" />
          <rect x="163" y="27" width="55" height="46" rx="8" className="alyvero-illustration-image" />
          <path d="m173 62 13-14 10 10 7-7 9 11" className="alyvero-illustration-mountain" />
        </>
      )}

      {tool === "heic-to-jpg" && (
        <>
          <rect x="12" y="18" width="78" height="64" rx="10" className="alyvero-illustration-image" />
          <text x="51" y="56" textAnchor="middle" className="alyvero-illustration-label">HEIC</text>
          <path d="M101 50h48l-7-6m7 6-7 6" className="alyvero-illustration-arrow" />
          <rect x="159" y="18" width="70" height="64" rx="10" className="alyvero-illustration-image" />
          <text x="194" y="56" textAnchor="middle" className="alyvero-illustration-label">JPG</text>
        </>
      )}

      {tool === "image-to-pdf" && (
        <>
          <rect x="8" y="20" width="45" height="52" rx="7" className="alyvero-illustration-image" />
          <rect x="60" y="20" width="45" height="52" rx="7" className="alyvero-illustration-image" />
          <path d="M17 61 28 48l8 8 7-7 6 8M69 61l11-13 8 9 7-6 7 10" className="alyvero-illustration-mountain" />
          <path d="M116 50h29l-7-6m7 6-7 6" className="alyvero-illustration-arrow" />
          <rect x="157" y="11" width="62" height="78" rx="9" className="alyvero-illustration-sheet" />
          <path d="M203 11v16h16" className="alyvero-illustration-fold" />
          <text x="188" y="56" textAnchor="middle" className="alyvero-illustration-label">PDF</text>
        </>
      )}
    </svg>
  );
}
