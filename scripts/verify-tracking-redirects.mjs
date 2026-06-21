import assert from "node:assert/strict";

import {
  buildTrackingRedirectUrl,
  extractCommunitySlug,
  isValidTrackingToken,
} from "../src/lib/trackingRedirect.mjs";

const token = "ko_kr_dcinside_piano_001";

const iosUrl = buildTrackingRedirectUrl(token, "ios");
assert.equal(
  iosUrl?.toString(),
  "https://apps.apple.com/us/app/sheetcue-pdf-score-practice/id6773944737?pt=128962704&ct=ko_kr_dcinside_piano_001&mt=8",
);

const androidUrl = buildTrackingRedirectUrl(token, "android");
assert.equal(
  androidUrl?.toString(),
  "https://play.google.com/store/apps/details?id=com.sheetcue&referrer=utm_source%3Ddcinside_piano%26utm_medium%3Dcommunity_post%26utm_campaign%3Dpdf_feedback_launch%26utm_content%3Dko_kr_dcinside_piano_001",
);

const shortAliasAndroidUrl = buildTrackingRedirectUrl("ki1", "aos");
assert.equal(
  shortAliasAndroidUrl?.toString(),
  "https://play.google.com/store/apps/details?id=com.sheetcue&referrer=utm_source%3Dkakaotalk_instrument_community%26utm_medium%3Dcommunity_post%26utm_campaign%3Dpdf_feedback_launch%26utm_content%3Dko_kr_kakaotalk_instrument_community_001",
);

const shortAliasIosUrl = buildTrackingRedirectUrl("ki1", "ios");
assert.equal(
  shortAliasIosUrl?.toString(),
  "https://apps.apple.com/us/app/sheetcue-pdf-score-practice/id6773944737?pt=128962704&ct=ko_kr_kakaotalk_instrument_community_001&mt=8",
);

assert.equal(extractCommunitySlug("fr_fr_pianomajeur_001"), "pianomajeur");
assert.equal(extractCommunitySlug("en_us_keyboardforums_002"), "keyboardforums");
assert.equal(buildTrackingRedirectUrl(token, "bad"), null);
assert.equal(buildTrackingRedirectUrl("../../bad", "ios"), null);
assert.equal(buildTrackingRedirectUrl("", "ios"), null);
assert.equal(buildTrackingRedirectUrl(`${"a".repeat(121)}`, "ios"), null);
assert.equal(isValidTrackingToken("ko_kr_dcinside-piano_001"), true);
assert.equal(isValidTrackingToken("ko_kr_dcinside.piano_001"), false);

console.log("Tracking redirect checks passed.");
