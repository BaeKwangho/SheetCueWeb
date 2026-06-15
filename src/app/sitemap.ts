import type { MetadataRoute } from "next";

import { localeUrl, languageAlternates } from "@/data/seo";
import { supportedLocales } from "@/data/landingContent";

export const dynamic = "force-static";

const lastModified = new Date("2026-06-15T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return supportedLocales.map((locale) => ({
    url: localeUrl(locale),
    lastModified,
    changeFrequency: "weekly",
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: languageAlternates(),
    },
  }));
}
