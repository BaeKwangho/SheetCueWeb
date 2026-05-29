import type { Metadata } from "next";

import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: landingContent["zh-TW"].metadata.title,
  description: landingContent["zh-TW"].metadata.description,
  alternates: {
    canonical: `${siteDetails.siteUrl}zh-TW/`,
  },
  openGraph: {
    title: landingContent["zh-TW"].metadata.title,
    description: landingContent["zh-TW"].metadata.description,
    url: `${siteDetails.siteUrl}zh-TW/`,
    type: "website",
    locale: "zh_TW",
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
    title: landingContent["zh-TW"].metadata.title,
    description: landingContent["zh-TW"].metadata.description,
    images: ["/images/sheetcue-hero.png"],
  },
};

const TraditionalChineseHomePage: React.FC = () => {
  return <HomePageContent content={landingContent["zh-TW"]} />;
};

export default TraditionalChineseHomePage;
