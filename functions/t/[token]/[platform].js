import { buildTrackingRedirectUrl } from "../../../src/lib/trackingRedirect.mjs";

const noStoreHeaders = {
  "Cache-Control": "no-store",
};

const notFound = () => new Response("Not Found", {
  status: 404,
  headers: noStoreHeaders,
});

export async function onRequestGet({ params, request }) {
  const destination = buildTrackingRedirectUrl(params.token, params.platform, {
    acceptLanguage: request.headers.get("accept-language"),
    country: request.cf?.country,
  });

  if (!destination) {
    return notFound();
  }

  return new Response(null, {
    status: 302,
    headers: {
      ...noStoreHeaders,
      Location: destination.toString(),
    },
  });
}
