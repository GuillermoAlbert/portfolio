import type { Metadata } from "next";
import { rootMetadata } from "@/lib/seo";
import RootDocument from "@/components/RootDocument";

// Spanish root layout (serves "/"). Renders <html lang="es"> at build time.
export const metadata: Metadata = rootMetadata("es");

export default function EsLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="es">{children}</RootDocument>;
}
