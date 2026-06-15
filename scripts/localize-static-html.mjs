import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const outDir = join(root, "out");

const localePages = [
  { locale: "en", file: "index.html" },
  { locale: "ko", file: "ko/index.html" },
  { locale: "ja", file: "ja/index.html" },
  { locale: "de", file: "de/index.html" },
  { locale: "fr", file: "fr/index.html" },
  { locale: "es", file: "es/index.html" },
  { locale: "zh-TW", file: "zh-TW/index.html" },
];

if (!existsSync(outDir)) {
  throw new Error("Missing out directory. Run next build before localizing static HTML.");
}

for (const { locale, file } of localePages) {
  const htmlPath = join(outDir, file);

  if (!existsSync(htmlPath)) {
    throw new Error(`Missing exported locale page: out/${file}`);
  }

  const html = readFileSync(htmlPath, "utf8");
  const updatedHtml = html.replace(/<html\b([^>]*)>/, (_match, attributes) => {
    const withoutLang = String(attributes).replace(/\s+lang=(["']).*?\1/, "");
    return `<html${withoutLang} lang="${locale}">`;
  });

  if (!new RegExp(`<html\\b[^>]*\\slang="${locale}"`).test(updatedHtml)) {
    throw new Error(`Failed to set html lang="${locale}" for out/${file}`);
  }

  writeFileSync(htmlPath, updatedHtml);
}

console.log("Localized exported HTML lang attributes.");
