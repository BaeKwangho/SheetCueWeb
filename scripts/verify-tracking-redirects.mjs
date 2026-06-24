import assert from "node:assert/strict";

import {
  buildTrackingRedirectUrl,
  extractCommunitySlug,
  isValidTrackingToken,
} from "../src/lib/trackingRedirect.mjs";

const token = "ko_kr_dcinside_piano_001";
const localeStoreCases = [
  {
    token: "en_us_threads_profile_001",
    appStoreBaseUrl: "https://apps.apple.com/us/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=en_US&gl=US",
  },
  {
    token: "ko_kr_threads_profile_001",
    appStoreBaseUrl: "https://apps.apple.com/kr/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=ko&gl=KR",
  },
  {
    token: "ja_jp_threads_profile_001",
    appStoreBaseUrl: "https://apps.apple.com/jp/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=ja&gl=JP",
  },
  {
    token: "de_de_threads_profile_001",
    appStoreBaseUrl: "https://apps.apple.com/de/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=de&gl=DE",
  },
  {
    token: "fr_fr_threads_profile_001",
    appStoreBaseUrl: "https://apps.apple.com/fr/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=fr&gl=FR",
  },
  {
    token: "es_es_threads_profile_001",
    appStoreBaseUrl: "https://apps.apple.com/es/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=es&gl=ES",
  },
  {
    token: "zh_tw_threads_profile_001",
    appStoreBaseUrl: "https://apps.apple.com/tw/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=zh_TW&gl=TW",
  },
];
const youtubeProfileLocaleCases = [
  {
    acceptLanguage: "ko-KR,ko;q=0.9,en-US;q=0.8",
    appStoreBaseUrl: "https://apps.apple.com/kr/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=ko&gl=KR",
    token: "ko_kr_youtube_profile_001",
  },
  {
    acceptLanguage: "ja-JP,ja;q=0.9,en-US;q=0.8",
    appStoreBaseUrl: "https://apps.apple.com/jp/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=ja&gl=JP",
    token: "ja_jp_youtube_profile_001",
  },
  {
    acceptLanguage: "de-DE,de;q=0.9,en-US;q=0.8",
    appStoreBaseUrl: "https://apps.apple.com/de/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=de&gl=DE",
    token: "de_de_youtube_profile_001",
  },
  {
    acceptLanguage: "fr-FR,fr;q=0.9,en-US;q=0.8",
    appStoreBaseUrl: "https://apps.apple.com/fr/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=fr&gl=FR",
    token: "fr_fr_youtube_profile_001",
  },
  {
    acceptLanguage: "es-ES,es;q=0.9,en-US;q=0.8",
    appStoreBaseUrl: "https://apps.apple.com/es/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=es&gl=ES",
    token: "es_es_youtube_profile_001",
  },
  {
    acceptLanguage: "zh-TW,zh;q=0.9,en-US;q=0.8",
    appStoreBaseUrl: "https://apps.apple.com/tw/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=zh_TW&gl=TW",
    token: "zh_tw_youtube_profile_001",
  },
  {
    acceptLanguage: "pt-BR,pt;q=0.9",
    appStoreBaseUrl: "https://apps.apple.com/us/app/sheetcue/id6773944737",
    playStoreLocaleParams: "hl=en_US&gl=US",
    token: "en_us_youtube_profile_001",
  },
];
const youtubeProfileCountryCases = [
  { country: "KR", appStoreLocale: "kr", playStoreLocaleParams: "hl=ko&gl=KR", token: "ko_kr_youtube_profile_001" },
  { country: "US", appStoreLocale: "us", playStoreLocaleParams: "hl=en_US&gl=US", token: "en_us_youtube_profile_001" },
  { country: "JP", appStoreLocale: "jp", playStoreLocaleParams: "hl=ja&gl=JP", token: "ja_jp_youtube_profile_001" },
  { country: "DE", appStoreLocale: "de", playStoreLocaleParams: "hl=de&gl=DE", token: "de_de_youtube_profile_001" },
  { country: "FR", appStoreLocale: "fr", playStoreLocaleParams: "hl=fr&gl=FR", token: "fr_fr_youtube_profile_001" },
  { country: "ES", appStoreLocale: "es", playStoreLocaleParams: "hl=es&gl=ES", token: "es_es_youtube_profile_001" },
  { country: "TW", appStoreLocale: "tw", playStoreLocaleParams: "hl=zh_TW&gl=TW", token: "zh_tw_youtube_profile_001" },
];

const iosUrl = buildTrackingRedirectUrl(token, "ios");
assert.equal(
  iosUrl?.toString(),
  "https://apps.apple.com/kr/app/sheetcue/id6773944737?pt=128962704&ct=ko_kr_dcinside_piano_001&mt=8",
);

const androidUrl = buildTrackingRedirectUrl(token, "android");
assert.equal(
  androidUrl?.toString(),
  "https://play.google.com/store/apps/details?id=com.sheetcue&hl=ko&gl=KR&referrer=utm_source%3Ddcinside_piano%26utm_medium%3Dcommunity_post%26utm_campaign%3Ddcinside_piano%26utm_content%3Dko_kr_dcinside_piano_001",
);

const shortAliasAndroidUrl = buildTrackingRedirectUrl("ki1", "aos");
assert.equal(
  shortAliasAndroidUrl?.toString(),
  "https://play.google.com/store/apps/details?id=com.sheetcue&hl=ko&gl=KR&referrer=utm_source%3Dkakaotalk_instrument_community%26utm_medium%3Dcommunity_post%26utm_campaign%3Dkakaotalk_instrument_community%26utm_content%3Dko_kr_kakaotalk_instrument_community_001",
);

const shortAliasIosUrl = buildTrackingRedirectUrl("ki1", "ios");
assert.equal(
  shortAliasIosUrl?.toString(),
  "https://apps.apple.com/kr/app/sheetcue/id6773944737?pt=128962704&ct=ko_kr_kakaotalk_instrument_community_001&mt=8",
);

const threadsProfileAndroidUrl = buildTrackingRedirectUrl("ko_kr_threads_profile_001", "aos");
assert.equal(
  threadsProfileAndroidUrl?.toString(),
  "https://play.google.com/store/apps/details?id=com.sheetcue&hl=ko&gl=KR&referrer=utm_source%3Dthreads_profile%26utm_medium%3Dcommunity_post%26utm_campaign%3Dthreads_profile%26utm_content%3Dko_kr_threads_profile_001",
);

const threadsProfileIosUrl = buildTrackingRedirectUrl("ko_kr_threads_profile_001", "ios");
assert.equal(
  threadsProfileIosUrl?.toString(),
  "https://apps.apple.com/kr/app/sheetcue/id6773944737?pt=128962704&ct=ko_kr_threads_profile_001&mt=8",
);

for (const { token: localeToken, appStoreBaseUrl, playStoreLocaleParams } of localeStoreCases) {
  assert.equal(
    buildTrackingRedirectUrl(localeToken, "ios")?.toString(),
    `${appStoreBaseUrl}?pt=128962704&ct=${localeToken}&mt=8`,
  );

  assert.equal(
    buildTrackingRedirectUrl(localeToken, "aos")?.toString(),
    `https://play.google.com/store/apps/details?id=com.sheetcue&${playStoreLocaleParams}&referrer=utm_source%3Dthreads_profile%26utm_medium%3Dcommunity_post%26utm_campaign%3Dthreads_profile%26utm_content%3D${localeToken}`,
  );
}

for (const { acceptLanguage, appStoreBaseUrl, playStoreLocaleParams, token: profileToken } of youtubeProfileLocaleCases) {
  assert.equal(
    buildTrackingRedirectUrl("youtube-profile", "ios", { acceptLanguage })?.toString(),
    `${appStoreBaseUrl}?pt=128962704&ct=${profileToken}&mt=8`,
  );

  assert.equal(
    buildTrackingRedirectUrl("youtube-profile", "aos", { acceptLanguage })?.toString(),
    `https://play.google.com/store/apps/details?id=com.sheetcue&${playStoreLocaleParams}&referrer=utm_source%3Dyoutube_profile%26utm_medium%3Dcommunity_post%26utm_campaign%3Dyoutube_profile%26utm_content%3D${profileToken}`,
  );
}

assert.equal(
  buildTrackingRedirectUrl("youtube-profile", "ios", { country: "KR" })?.toString(),
  "https://apps.apple.com/kr/app/sheetcue/id6773944737?pt=128962704&ct=ko_kr_youtube_profile_001&mt=8",
);

for (const { country, appStoreLocale, playStoreLocaleParams, token: profileToken } of youtubeProfileCountryCases) {
  assert.equal(
    buildTrackingRedirectUrl("youtube-profile", "ios", { country })?.toString(),
    `https://apps.apple.com/${appStoreLocale}/app/sheetcue/id6773944737?pt=128962704&ct=${profileToken}&mt=8`,
  );

  assert.equal(
    buildTrackingRedirectUrl("youtube-profile", "aos", { country })?.toString(),
    `https://play.google.com/store/apps/details?id=com.sheetcue&${playStoreLocaleParams}&referrer=utm_source%3Dyoutube_profile%26utm_medium%3Dcommunity_post%26utm_campaign%3Dyoutube_profile%26utm_content%3D${profileToken}`,
  );
}

assert.equal(extractCommunitySlug("fr_fr_pianomajeur_001"), "pianomajeur");
assert.equal(extractCommunitySlug("en_us_keyboardforums_002"), "keyboardforums");
assert.equal(buildTrackingRedirectUrl(token, "bad"), null);
assert.equal(buildTrackingRedirectUrl("pt_br_threads_profile_001", "ios"), null);
assert.equal(buildTrackingRedirectUrl("pt_br_threads_profile_001", "aos"), null);
assert.equal(buildTrackingRedirectUrl("../../bad", "ios"), null);
assert.equal(buildTrackingRedirectUrl("", "ios"), null);
assert.equal(buildTrackingRedirectUrl(`${"a".repeat(121)}`, "ios"), null);
assert.equal(isValidTrackingToken("ko_kr_dcinside-piano_001"), true);
assert.equal(isValidTrackingToken("ko_kr_dcinside.piano_001"), false);

console.log("Tracking redirect checks passed.");
