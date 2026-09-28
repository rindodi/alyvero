import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Alyvero — Online File Tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#111111",
        }}
      >
        <div style={{ fontSize: 28, fontWeight: 700, color: "#5b4ee8", marginBottom: 24 }}>
          ALYVERO
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.05 }}>
          Online File Tools
        </div>
        <div style={{ fontSize: 30, marginTop: 28, color: "#444444" }}>
          Convert, compress and create PDF and image files in your browser.
        </div>
        <div style={{ fontSize: 22, marginTop: 50, color: "#666666" }}>
          www.alyvero.co.ke
        </div>
      </div>
    ),
    size
  );
}
