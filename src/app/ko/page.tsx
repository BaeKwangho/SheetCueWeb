import type { Metadata } from "next";

import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: landingContent.ko.metadata.title,
  description: landingContent.ko.metadata.description,
  alternates: {
    canonical: `${siteDetails.siteUrl}ko`,
    languages: {
      en: siteDetails.siteUrl,
      ko: `${siteDetails.siteUrl}ko`,
    },
  },
  openGraph: {
    title: landingContent.ko.metadata.title,
    description: landingContent.ko.metadata.description,
    url: `${siteDetails.siteUrl}ko`,
    type: "website",
    locale: "ko_KR",
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
    title: landingContent.ko.metadata.title,
    description: landingContent.ko.metadata.description,
    images: ["/images/sheetcue-hero.png"],
  },
};

const KoreanHomePage: React.FC = () => {
  return <HomePageContent content={landingContent.ko} />;
};

export default KoreanHomePage;
