import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/data/seo";
import { siteDetails } from "@/data/siteDetails";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: new URL(siteDetails.siteUrl).origin,
  };
}
