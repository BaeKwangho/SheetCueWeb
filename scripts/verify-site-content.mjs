import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const expectedLocales = ["en", "ko", "ja", "de", "fr", "es", "zh-TW"];
const requiredFiles = [
  "src/app/page.tsx",
  "src/app/ko/page.tsx",
  "src/app/ja/page.tsx",
  "src/app/de/page.tsx",
  "src/app/fr/page.tsx",
  "src/app/es/page.tsx",
  "src/app/zh-TW/page.tsx",
  "src/components/CTA.tsx",
  "src/components/FAQ.tsx",
  "src/components/Benefits/BenefitSection.tsx",
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

const koreanPage = readFileSync(join(root, "src/app/ko/page.tsx"), "utf8");
if (!koreanPage.includes("metadata") || !koreanPage.includes("landingContent.ko.metadata")) {
  throw new Error("Korean page must define localized metadata.");
}

const content = readFileSync(join(root, "src/data/landingContent.tsx"), "utf8");
for (const locale of expectedLocales) {
  if (!content.includes(`"${locale}"`)) {
    throw new Error(`Landing content must include locale ${locale}.`);
  }
}

for (const locale of expectedLocales.filter((locale) => locale !== "en")) {
  const page = readFileSync(join(root, `src/app/${locale}/page.tsx`), "utf8");
  const accessor = locale === "zh-TW" ? 'landingContent["zh-TW"].metadata' : `landingContent.${locale}.metadata`;

  if (!page.includes("metadata") || !page.includes(accessor)) {
    throw new Error(`${locale} page must define localized metadata.`);
  }

  if (page.includes(`\${siteDetails.siteUrl}${locale}.html`)) {
    throw new Error(`${locale} page metadata must not use .html canonical URLs.`);
  }
}

const benefitSection = readFileSync(join(root, "src/components/Benefits/BenefitSection.tsx"), "utf8");
if (benefitSection.includes('initial="offscreen"')) {
  throw new Error("Benefit sections must render visible by default for full-page captures and no-JS fallback.");
}

console.log("Site content checks passed.");
