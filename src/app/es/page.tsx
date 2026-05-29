import type { Metadata } from "next";

import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: landingContent.es.metadata.title,
  description: landingContent.es.metadata.description,
  alternates: {
    canonical: `${siteDetails.siteUrl}es/`,
  },
  openGraph: {
    title: landingContent.es.metadata.title,
    description: landingContent.es.metadata.description,
    url: `${siteDetails.siteUrl}es/`,
    type: "website",
    locale: "es_ES",
    images: [
      {
        url: "/images/sheetcue-hero.png",
        width: 1608,
        height: 978,
        alt: siteDetails.siteName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: landingContent.es.metadata.title,
    description: landingContent.es.metadata.description,
    images: ["/images/sheetcue-hero.png"],
  },
};

const SpanishHomePage: React.FC = () => {
  return <HomePageContent content={landingContent.es} />;
};

export default SpanishHomePage;
