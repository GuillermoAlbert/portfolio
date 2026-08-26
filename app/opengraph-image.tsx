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
  // The card mirrors the site's own type system so it reads as a capture of
  // the page: Space Grotesk Bold on the name (the hero's --display face) and
  // Hanken Grotesk for everything else (the body face). All statically
  // instanced because Satori doesn't do variable fonts, and passing a fonts
  // array drops Satori's built-in default sans anyway.
  const display = await readFile(
    join(process.cwd(), "components/fonts/SpaceGrotesk-Bold.ttf")
  );
  const hanken = await readFile(
    join(process.cwd(), "components/fonts/HankenGrotesk-Regular.ttf")
  );
  const hankenSemi = await readFile(
    join(process.cwd(), "components/fonts/HankenGrotesk-SemiBold.ttf")
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
          fontFamily: "Hanken Grotesk",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 26, color: "#9fb4d4" }}>
          <div style={{ width: 16, height: 16, borderRadius: 8, background: "#34c27a" }} />
          <div>Abierto a oportunidades · Alicante (ES)</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "Space Grotesk", fontSize: 92, fontWeight: 700, letterSpacing: -2.8, lineHeight: 1 }}>
            Guillermo
          </div>
          <div style={{ fontFamily: "Space Grotesk", fontSize: 92, fontWeight: 700, letterSpacing: -2.8, lineHeight: 1.05 }}>
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
    {
      ...size,
      fonts: [
        { name: "Space Grotesk", data: display, style: "normal", weight: 700 },
        { name: "Hanken Grotesk", data: hanken, style: "normal", weight: 400 },
        { name: "Hanken Grotesk", data: hankenSemi, style: "normal", weight: 600 },
      ],
    }
  );
}
