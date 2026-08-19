import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const dynamic = "force-static";

// Build-time generated share image (1200×630), served at /opengraph-image and
// shared by all locales (referenced explicitly in lib/seo.ts). Kept at the app
// root — above the per-locale route groups — so every language points to the
// same URL. Next auto-wires og:image + twitter:image.
export const alt = "Guillermo Albert García — Backend-first Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  // Departure Mono (--pixel voice), same file the 404 title uses. Single
  // weight, so no font-weight on the card — hierarchy is size + color only —
  // and every font size is a multiple of 11px, the font's native pixel grid.
  const pixel = await readFile(
    join(process.cwd(), "components/fonts/DepartureMono-Regular.otf")
  );

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
          fontFamily: "Departure Mono",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 22, color: "#9fb4d4" }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: "#34c27a" }} />
          <div>Abierto a oportunidades · Alicante (ES)</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, lineHeight: 1 }}>
            Guillermo
          </div>
          <div style={{ fontSize: 88, lineHeight: 1, marginTop: 11 }}>
            Albert García
          </div>
          <div style={{ marginTop: 33, fontSize: 33, color: "#6ea6e6" }}>
            Backend-first Full Stack Developer
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#818ea4" }}>
          <div>guillermoalbert.dev</div>
          <div>Java · Spring · Angular</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Departure Mono", data: pixel, style: "normal", weight: 400 },
      ],
    }
  );
}
