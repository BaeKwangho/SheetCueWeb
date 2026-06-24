import { NextResponse, type NextRequest } from "next/server";

import { buildTrackingRedirectUrl } from "@/lib/trackingRedirect.mjs";

const noStoreHeaders = {
  "Cache-Control": "no-store",
};

export const config = {
  matcher: "/t/:path*",
};

export function proxy(request: NextRequest) {
  const match = request.nextUrl.pathname.match(/^\/t\/([^/]+)\/([^/]+)\/?$/);

  if (!match) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: noStoreHeaders,
    });
  }

  const [, token, platform] = match;
  const destination = buildTrackingRedirectUrl(token, platform, {
    acceptLanguage: request.headers.get("accept-language"),
    country: request.headers.get("x-vercel-ip-country") ?? request.headers.get("cf-ipcountry"),
  });

  if (!destination) {
    return new NextResponse("Not Found", {
      status: 404,
      headers: noStoreHeaders,
    });
  }

  return NextResponse.redirect(destination, {
    status: 302,
    headers: noStoreHeaders,
  });
}
