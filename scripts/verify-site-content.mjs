import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const expectedLocales = ["en", "ko", "ja", "de", "fr", "es", "zh-TW"];
const requiredFiles = [
  "src/app/page.tsx",
  "src/app/release-notes/page.tsx",
  "src/app/ko/page.tsx",
  "src/app/ko/release-notes/page.tsx",
  "src/app/ja/page.tsx",
  "src/app/ja/release-notes/page.tsx",
  "src/app/de/page.tsx",
  "src/app/de/release-notes/page.tsx",
  "src/app/fr/page.tsx",
  "src/app/fr/release-notes/page.tsx",
  "src/app/es/page.tsx",
  "src/app/es/release-notes/page.tsx",
  "src/app/zh-TW/page.tsx",
  "src/app/zh-TW/release-notes/page.tsx",
  "src/app/robots.ts",
  "src/app/sitemap.ts",
  "public/google4d373a09b6a07242.html",
  "scripts/localize-static-html.mjs",
  "src/components/CTA.tsx",
  "src/components/FAQ.tsx",
  "src/components/ReleaseNotesPageContent.tsx",
  "src/components/Benefits/BenefitSection.tsx",
  "functions/t/[token]/[platform].js",
  "src/data/releaseNotes.ts",
  "src/data/seo.ts",
  "next.config.mjs",
];

const missing = requiredFiles.filter((file) => !existsSync(join(root, file)));
if (missing.length > 0) {
  throw new Error(`Missing required files: ${missing.join(", ")}`);
}

const cta = readFileSync(join(root, "src/components/CTA.tsx"), "utf8");
if (!cta.includes('id="release"')) {
  throw new Error("CTA section must expose id=\"release\" for release links.");
}

const faq = readFileSync(join(root, "src/components/FAQ.tsx"), "utf8");
if (!faq.includes('Disclosure as="div"')) {
  throw new Error("FAQ Disclosure must render as a real element, not Fragment.");
}

const nextConfig = readFileSync(join(root, "next.config.mjs"), "utf8");
if (!nextConfig.includes("qualities") || !nextConfig.includes("100")) {
  throw new Error("Next image config must allow quality={100}.");
}

if (!nextConfig.includes("trailingSlash: true")) {
  throw new Error("Next static export must use trailingSlash: true so GitHub Pages serves localized routes as directories.");
}

const packageJson = readFileSync(join(root, "package.json"), "utf8");
if (!packageJson.includes("scripts/localize-static-html.mjs")) {
  throw new Error("Build script must localize exported HTML lang attributes.");
}

const htmlLocalizer = readFileSync(join(root, "scripts/localize-static-html.mjs"), "utf8");
for (const locale of expectedLocales) {
  if (!htmlLocalizer.includes(`locale: "${locale}"`)) {
    throw new Error(`Static HTML localizer must include locale ${locale}.`);
  }
}

const koreanPage = readFileSync(join(root, "src/app/ko/page.tsx"), "utf8");
if (!koreanPage.includes("metadata") || !koreanPage.includes('buildPageMetadata("ko")')) {
  throw new Error("Korean page must define localized metadata.");
}

const releaseNotesPage = readFileSync(join(root, "src/app/release-notes/page.tsx"), "utf8");
if (!releaseNotesPage.includes("metadata") || !releaseNotesPage.includes('buildReleaseNotesMetadata("en")')) {
  throw new Error("English release notes page must define localized metadata.");
}

const content = readFileSync(join(root, "src/data/landingContent.tsx"), "utf8");
for (const locale of expectedLocales) {
  if (!content.includes(`"${locale}"`)) {
    throw new Error(`Landing content must include locale ${locale}.`);
  }
}

for (const locale of expectedLocales.filter((locale) => locale !== "en")) {
  const page = readFileSync(join(root, `src/app/${locale}/page.tsx`), "utf8");
  const releasePage = readFileSync(join(root, `src/app/${locale}/release-notes/page.tsx`), "utf8");

  if (!page.includes("metadata") || !page.includes(`buildPageMetadata("${locale}")`)) {
    throw new Error(`${locale} page must define localized metadata.`);
  }

  if (!releasePage.includes("metadata") || !releasePage.includes(`buildReleaseNotesMetadata("${locale}")`)) {
    throw new Error(`${locale} release notes page must define localized metadata.`);
  }

  if (page.includes(`\${siteDetails.siteUrl}${locale}.html`)) {
    throw new Error(`${locale} page metadata must not use .html canonical URLs.`);
  }
}

const siteDetails = readFileSync(join(root, "src/data/siteDetails.ts"), "utf8");
if (!siteDetails.includes("https://sheetcue.com/")) {
  throw new Error("Default site URL must point to the production domain.");
}

const seo = readFileSync(join(root, "src/data/seo.ts"), "utf8");
for (const required of ["languageAlternates", "releaseNotesLanguageAlternates", "SoftwareApplication", "FAQPage", "summary_large_image", "og-image.png"]) {
  if (!seo.includes(required)) {
    throw new Error(`SEO helper must include ${required}.`);
  }
}

for (const schemaType of ["Organization", "SoftwareApplication", "WebPage", "FAQPage"]) {
  if (!seo.includes(`"@type": "${schemaType}"`)) {
    throw new Error(`Structured data must include schema.org ${schemaType}.`);
  }
}

const googleVerification = readFileSync(join(root, "public/google4d373a09b6a07242.html"), "utf8").trim();
if (googleVerification !== "google-site-verification: google4d373a09b6a07242.html") {
  throw new Error("Google Search Console verification HTML must match the issued token.");
}

const benefitSection = readFileSync(join(root, "src/components/Benefits/BenefitSection.tsx"), "utf8");
if (benefitSection.includes('initial="offscreen"')) {
  throw new Error("Benefit sections must render visible by default for full-page captures and no-JS fallback.");
}

const homePageContent = readFileSync(join(root, "src/components/HomePageContent.tsx"), "utf8");
if (!homePageContent.includes('type="application/ld+json"') || !homePageContent.includes("buildStructuredData(content)")) {
  throw new Error("Homepage must render JSON-LD structured data.");
}

const robots = readFileSync(join(root, "src/app/robots.ts"), "utf8");
for (const expected of ["OAI-SearchBot", "GPTBot", "sitemap"]) {
  if (!robots.includes(expected)) {
    throw new Error(`Robots route must include ${expected}.`);
  }
}

const sitemap = readFileSync(join(root, "src/app/sitemap.ts"), "utf8");
if (!sitemap.includes("supportedLocales") || !sitemap.includes("alternates") || !sitemap.includes("releaseNotesUrl")) {
  throw new Error("Sitemap must include localized home and release notes URLs with alternates.");
}

console.log("Site content checks passed.");
