import type { Metadata } from "next";
import Sections from "@/components/Sections";
import { localeMetadata } from "@/lib/seo";

// English route: the static HTML is generated in English at build time, so
// crawlers that don't run JS read the language the metadata claims.
export const metadata: Metadata = localeMetadata("en");

export default function HomeEn() {
  return <Sections locale="en" />;
}
