import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://guillermoalbert.dev";

// AI crawlers we explicitly welcome. This portfolio exists to be discovered, so
// every major AI engine is allowed — both the answer/search bots that cite pages
// in live responses (OAI-SearchBot, ChatGPT-User, PerplexityBot, Claude-User…)
// and the indexing/training crawlers (GPTBot, ClaudeBot, Google-Extended…).
// "*" below already allows them; naming them is an explicit, legible invitation
// that also survives any future tightening of the wildcard rule.
//
// IMPORTANT: this file is only the source of truth once Cloudflare's *managed
// robots.txt* (Content Signals / AI Crawl Control) is turned OFF. While that
// feature is on, Cloudflare injects its own block at the edge and overrides this.
const AI_CRAWLERS = [
  // OpenAI / ChatGPT
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic / Claude
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  // Perplexity
  "PerplexityBot",
  "Perplexity-User",
  // Google (Gemini / Vertex generative use; Googlebot handles Search separately)
  "Google-Extended",
  // Apple, Common Crawl, Meta, others
  "Applebot-Extended",
  "CCBot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      { userAgent: AI_CRAWLERS, allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
