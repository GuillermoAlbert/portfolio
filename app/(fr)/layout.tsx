import type { Metadata } from "next";
import { rootMetadata } from "@/lib/seo";
import RootDocument from "@/components/RootDocument";

// French root layout (serves "/fr"). Renders <html lang="fr"> at build time.
export const metadata: Metadata = rootMetadata("fr");

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="fr">{children}</RootDocument>;
}
