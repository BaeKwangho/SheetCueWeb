import type { MetadataRoute } from "next";

import { languageAlternates, localeUrl, releaseNotesLanguageAlternates, releaseNotesUrl } from "@/data/seo";
import { supportedLocales } from "@/data/landingContent";

export const dynamic = "force-static";

const lastModified = new Date("2026-06-23T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  const homePages = supportedLocales.map((locale) => ({
    url: localeUrl(locale),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 1 : 0.9,
    alternates: {
      languages: languageAlternates(),
    },
  }));

  const releaseNotePages = supportedLocales.map((locale) => ({
    url: releaseNotesUrl(locale),
    lastModified,
    changeFrequency: "weekly" as const,
    priority: locale === "en" ? 0.8 : 0.7,
    alternates: {
      languages: releaseNotesLanguageAlternates(),
    },
  }));

  return [...homePages, ...releaseNotePages];
}
