import type { Metadata } from "next";
import { rootMetadata } from "@/lib/seo";
import RootDocument from "@/components/RootDocument";

// English root layout (serves "/en"). Renders <html lang="en"> at build time.
export const metadata: Metadata = rootMetadata("en");

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
