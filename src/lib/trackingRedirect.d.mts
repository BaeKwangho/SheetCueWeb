export function isValidTrackingToken(token: unknown): token is string;
export function extractCommunitySlug(token: string): string | null;
export function buildTrackingRedirectUrl(
  token: unknown,
  platform: unknown,
  context?: { acceptLanguage?: unknown; country?: unknown },
): URL | null;
