import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const requiredFiles = [
  "src/app/page.tsx",
  "src/app/ko/page.tsx",
  "src/components/CTA.tsx",
  "src/components/FAQ.tsx",
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

const koreanPage = readFileSync(join(root, "src/app/ko/page.tsx"), "utf8");
if (!koreanPage.includes("metadata") || !koreanPage.includes("landingContent.ko.metadata")) {
  throw new Error("Korean page must define localized metadata.");
}

console.log("Site content checks passed.");
