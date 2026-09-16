import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

export const dynamic = "force-static";

/**
 * Tüm tarayıcılara açık. Yapay zekâ tarayıcıları (GPTBot, ClaudeBot, PerplexityBot, Google-Extended vb.)
 * Adem'in kararıyla (16.09.2026) izinli: GEO hedefleniyor.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-SearchBot",
          "anthropic-ai",
          "PerplexityBot",
          "Google-Extended",
          "Applebot-Extended",
          "Bytespider",
          "CCBot",
          "meta-externalagent",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
