import type { Metadata } from "next";
import Sections from "@/components/Sections";
import { localeMetadata } from "@/lib/seo";

// French route: the static HTML is generated in French at build time, so
// crawlers that don't run JS read the language the metadata claims.
export const metadata: Metadata = localeMetadata("fr");

export default function HomeFr() {
  return <Sections locale="fr" />;
}
