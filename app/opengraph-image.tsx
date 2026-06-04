import { ImageResponse } from "next/og";

export const dynamic = "force-static";

// Build-time generated share image (1200×630). Next auto-wires og:image + twitter:image.
export const alt = "Guillermo Albert García — Backend-first Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0d1a31",
          color: "#eef2f8",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#9fb4d4" }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: "#34c27a" }} />
          <div>Abierto a oportunidades · Alicante (ES)</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -2, lineHeight: 1 }}>
            Guillermo
          </div>
          <div style={{ fontSize: 92, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>
            Albert García
          </div>
          <div style={{ marginTop: 28, fontSize: 38, fontWeight: 600, color: "#6ea6e6" }}>
            Backend-first Full Stack Developer
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#818ea4" }}>
          <div>guillermoalbert.dev</div>
          <div>Java · Spring · Angular</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
