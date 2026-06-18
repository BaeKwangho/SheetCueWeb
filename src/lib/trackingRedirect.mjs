const APP_STORE_BASE_URL = "https://apps.apple.com/us/app/sheetcue-pdf-score-practice/id6773944737";
const GOOGLE_PLAY_BASE_URL = "https://play.google.com/store/apps/details";
const GOOGLE_PLAY_PACKAGE_ID = "com.sheetcue";
const TOKEN_PATTERN = /^[a-z0-9_-]+$/;
const MAX_TOKEN_LENGTH = 120;
const LOCALE_PREFIXES = ["ko_kr", "en_us", "fr_fr", "de_de", "ja_jp", "es_es", "pt_br", "zh_tw"];
const SEQUENCE_SUFFIX_PATTERN = /_\d{3}$/;

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
  const localePrefix = LOCALE_PREFIXES.find((locale) => tokenWithoutSequence.startsWith(`${locale}_`));

  if (!localePrefix) {
    return null;
  }

  const communitySlug = tokenWithoutSequence.slice(localePrefix.length + 1);
  return communitySlug.length > 0 && TOKEN_PATTERN.test(communitySlug) ? communitySlug : null;
}

/**
 * @param {string} token
 * @returns {URL | null}
 */
function buildAppStoreUrl(token) {
  if (!isValidTrackingToken(token)) {
    return null;
  }

  const url = new URL(APP_STORE_BASE_URL);
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

  const referrer = new URLSearchParams({
    utm_source: communitySlug,
    utm_medium: "community_post",
    utm_campaign: "pdf_feedback_launch",
    utm_content: token,
  });
  const url = new URL(GOOGLE_PLAY_BASE_URL);
  url.searchParams.set("id", GOOGLE_PLAY_PACKAGE_ID);
  url.searchParams.set("referrer", referrer.toString());
  return url;
}

/**
 * @param {unknown} token
 * @param {unknown} platform
 * @returns {URL | null}
 */
export function buildTrackingRedirectUrl(token, platform) {
  if (!isValidTrackingToken(token) || typeof platform !== "string") {
    return null;
  }

  if (platform === "ios") {
    return buildAppStoreUrl(token);
  }

  if (platform === "android") {
    return buildGooglePlayUrl(token);
  }

  return null;
}
