import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://guillermoalbert.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  // Bump this date when the page content actually changes — a fresh date on
  // every build teaches crawlers to ignore the sitemap.
  const lastModified = new Date("2026-06-11");
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/en`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/fr`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    // Add /work/[slug] here as case studies are created.
  ];
}
