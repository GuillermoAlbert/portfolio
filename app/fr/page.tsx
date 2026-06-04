import type { Metadata } from "next";
import Sections from "@/components/Sections";
import { localeMetadata } from "@/lib/seo";

// French route. Same markup as / — the client swaps the copy to French on load
// (the URL path drives the language). Metadata + hreflang are localized here.
export const metadata: Metadata = localeMetadata("fr");

export default function HomeFr() {
  return <Sections />;
}
