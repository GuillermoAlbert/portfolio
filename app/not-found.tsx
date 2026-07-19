import type { Metadata } from "next";
import Link from "next/link";
import RootDocument from "@/components/RootDocument";
import { SITE_URL } from "@/lib/seo";

// Root not-found (→ 404.html in the static export). With multiple root layouts
// there is no shared layout above the route groups, so this renders its own
// document shell via RootDocument. metadataBase is set here too (no parent layout
// provides it) so the inherited og:image resolves absolutely instead of localhost.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "404",
};

export default function NotFound() {
  return (
    <RootDocument lang="es">
      <main
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1.25rem",
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <h1 style={{ fontSize: "3.5rem", margin: 0, lineHeight: 1 }}>404</h1>
        <p style={{ margin: 0, opacity: 0.8 }}>
          Esta página no existe. · This page doesn’t exist. · Cette page n’existe pas.
        </p>
        <Link className="cvbtn" href="/">
          Volver al inicio · Back home · Accueil
        </Link>
      </main>
    </RootDocument>
  );
}
