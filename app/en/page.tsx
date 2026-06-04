import type { Metadata } from "next";
import Sections from "@/components/Sections";
import { localeMetadata } from "@/lib/seo";

// English route. Same markup as / — the client swaps the copy to English on load
// (the URL path drives the language). Metadata + hreflang are localized here.
export const metadata: Metadata = localeMetadata("en");

export default function HomeEn() {
  return <Sections />;
}
