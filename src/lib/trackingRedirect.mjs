import { TRACKING_ALIASES } from "../data/trackingAliases.mjs";

const APP_STORE_BASE_URLS_BY_LOCALE = Object.freeze({
  de_de: "https://apps.apple.com/de/app/sheetcue/id6773944737",
  en_us: "https://apps.apple.com/us/app/sheetcue/id6773944737",
  es_es: "https://apps.apple.com/es/app/sheetcue/id6773944737",
  fr_fr: "https://apps.apple.com/fr/app/sheetcue/id6773944737",
  ja_jp: "https://apps.apple.com/jp/app/sheetcue/id6773944737",
  ko_kr: "https://apps.apple.com/kr/app/sheetcue/id6773944737",
  zh_tw: "https://apps.apple.com/tw/app/sheetcue/id6773944737",
});
const GOOGLE_PLAY_LOCALE_PARAMS = Object.freeze({
  de_de: Object.freeze({ hl: "de", gl: "DE" }),
  en_us: Object.freeze({ hl: "en_US", gl: "US" }),
  es_es: Object.freeze({ hl: "es", gl: "ES" }),
  fr_fr: Object.freeze({ hl: "fr", gl: "FR" }),
  ja_jp: Object.freeze({ hl: "ja", gl: "JP" }),
  ko_kr: Object.freeze({ hl: "ko", gl: "KR" }),
  zh_tw: Object.freeze({ hl: "zh_TW", gl: "TW" }),
});
const GOOGLE_PLAY_BASE_URL = "https://play.google.com/store/apps/details";
const GOOGLE_PLAY_PACKAGE_ID = "com.sheetcue";
const TOKEN_PATTERN = /^[a-z0-9_-]+$/;
const MAX_TOKEN_LENGTH = 120;
const LOCALE_PREFIXES = ["ko_kr", "en_us", "fr_fr", "de_de", "ja_jp", "es_es", "zh_tw"];
const SEQUENCE_SUFFIX_PATTERN = /_\d{3}$/;
const PLATFORM_ALIASES = Object.freeze({
  aos: "android",
});

/**
 * @param {unknown} token
 * @returns {token is string}
 */
export function isValidTrackingToken(token) {
  return (
    typeof token === "string" &&
    token.length > 0 &&
    token.length <= MAX_TOKEN_LENGTH &&
    TOKEN_PATTERN.test(token)
  );
}

/**
 * @param {string} token
 * @returns {string | null}
 */
export function extractCommunitySlug(token) {
  if (!isValidTrackingToken(token) || !SEQUENCE_SUFFIX_PATTERN.test(token)) {
    return null;
  }

  const tokenWithoutSequence = token.replace(SEQUENCE_SUFFIX_PATTERN, "");
  const localePrefix = extractLocalePrefix(token);

  if (!localePrefix) {
    return null;
  }

  const communitySlug = tokenWithoutSequence.slice(localePrefix.length + 1);
  return communitySlug.length > 0 && TOKEN_PATTERN.test(communitySlug) ? communitySlug : null;
}

/**
 * @param {string} token
 * @returns {string | null}
 */
function extractLocalePrefix(token) {
  if (!isValidTrackingToken(token) || !SEQUENCE_SUFFIX_PATTERN.test(token)) {
    return null;
  }

  const tokenWithoutSequence = token.replace(SEQUENCE_SUFFIX_PATTERN, "");
  return LOCALE_PREFIXES.find((locale) => tokenWithoutSequence.startsWith(`${locale}_`)) ?? null;
}

/**
 * @param {unknown} token
 * @returns {string | null}
 */
function resolveTrackingToken(token) {
  if (typeof token !== "string") {
    return null;
  }

  return TRACKING_ALIASES[token] ?? token;
}

/**
 * @param {string} token
 * @returns {URL | null}
 */
function buildAppStoreUrl(token) {
  if (!isValidTrackingToken(token)) {
    return null;
  }

  const localePrefix = extractLocalePrefix(token);
  const baseUrl = APP_STORE_BASE_URLS_BY_LOCALE[localePrefix];

  if (!baseUrl) {
    return null;
  }

  const url = new URL(baseUrl);
  url.searchParams.set("pt", "128962704");
  url.searchParams.set("ct", token);
  url.searchParams.set("mt", "8");
  return url;
}

/**
 * @param {string} token
 * @returns {URL | null}
 */
function buildGooglePlayUrl(token) {
  const communitySlug = extractCommunitySlug(token);

  if (!communitySlug) {
    return null;
  }

  const localePrefix = extractLocalePrefix(token);
  const localeParams = GOOGLE_PLAY_LOCALE_PARAMS[localePrefix];

  if (!localeParams) {
    return null;
  }

  const referrer = new URLSearchParams({
    utm_source: communitySlug,
    utm_medium: "community_post",
    utm_campaign: communitySlug,
    utm_content: token,
  });
  const url = new URL(GOOGLE_PLAY_BASE_URL);
  url.searchParams.set("id", GOOGLE_PLAY_PACKAGE_ID);
  url.searchParams.set("hl", localeParams.hl);
  url.searchParams.set("gl", localeParams.gl);
  url.searchParams.set("referrer", referrer.toString());
  return url;
}

/**
 * @param {unknown} token
 * @param {unknown} platform
 * @returns {URL | null}
 */
export function buildTrackingRedirectUrl(token, platform) {
  const resolvedToken = resolveTrackingToken(token);
  const resolvedPlatform = typeof platform === "string" ? PLATFORM_ALIASES[platform] ?? platform : null;

  if (!isValidTrackingToken(resolvedToken) || !resolvedPlatform) {
    return null;
  }

  if (resolvedPlatform === "ios") {
    return buildAppStoreUrl(resolvedToken);
  }

  if (resolvedPlatform === "android") {
    return buildGooglePlayUrl(resolvedToken);
  }

  return null;
}
