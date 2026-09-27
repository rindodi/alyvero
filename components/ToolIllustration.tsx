import type { SVGProps } from "react";

type Props = SVGProps<SVGSVGElement> & { tool: string };

function Sheet({ x, y, label, small = false }: { x: number; y: number; label: string; small?: boolean }) {
  const w = small ? 48 : 62;
  const h = small ? 62 : 78;
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect width={w} height={h} rx="9" className="alyvero-illustration-sheet" />
      <path d={`M${w - 16} 0v16h16`} className="alyvero-illustration-fold" />
      <text x={w / 2} y={h / 2 + 6} textAnchor="middle" className="alyvero-illustration-label">{label}</text>
    </g>
  );
}

function Arrow({ x1, x2 }: { x1: number; x2: number }) {
  return <g className="alyvero-illustration-arrow"><path d={`M${x1} 49H${x2}`} /><path d={`m${x2 - 7}  -6 7 6-7 6`} /></g>;
}

export function ToolIllustration({ tool, className = "", ...props }: Props) {
  return (
    <svg viewBox="0 0 240 100" role="img" aria-hidden="true" className={`tool-illustration ${className}`} {...props}>
      {tool === "pdf-to-word" && <><Sheet x={12} y={11} label="PDF" /><Arrow x1={82} x2={144} /><Sheet x={158} y={11} label="DOCX" /></>}
      {tool === "compress-pdf" && <><Sheet x={18} y={11} label="PDF" /><path d="M100 31h38M100 50h38M100 69h38" className="alyvero-illustration-lines" /><path d="M151 50h22" className="alyvero-illustration-arrow" /><Sheet x={181} y={20} label="PDF" small /></>}
      {tool === "compress-image" && <><rect x="13" y="18" width="82" height="64" rx="10" className="alyvero-illustration-image" /><path d="m28 66 19-20 14 14 10-10 14 16" className="alyvero-illustration-mountain" /><circle cx="71" cy="33" r="6" className="alyvero-illustration-sun" /><path d="M112 50h35" className="alyvero-illustration-arrow" /><rect x="163" y="27" width="55" height="46" rx="8" className="alyvero-illustration-image" /><path d="m173 62 13-14 10 10 7-7 9 11" className="alyvero-illustration-mountain" /></>}
      {tool === "heic-to-jpg" && <><rect x="12" y="18" width="78" height="64" rx="10" className="alyvero-illustration-image" /><text x="51" y="56" textAnchor="middle" className="alyvero-illustration-label">HEIC</text><Arrow x1={101} x2={149} /><rect x="159" y="18" width="70" height="64" rx="10" className="alyvero-illustration-image" /><text x="194" y="56" textAnchor="middle" className="alyvero-illustration-label">JPG</text></>}
      {tool === "image-to-pdf" && <><rect x="8" y="20" width="45" height="52" rx="7" className="alyvero-illustration-image" /><rect x="60" y="20" width="45" height="52" rx="7" className="alyvero-illustration-image" /><path d="M17 61 28 48l8 8 7-7 6 8M69 61l11-13 8 9 7-6 7 10" className="alyvero-illustration-mountain" /><path d="M116 50h29" className="alyvero-illustration-arrow" /><Sheet x={157} y={11} label="PDF" />}
    </svg>
  );
}
