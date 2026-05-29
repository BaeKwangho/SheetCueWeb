import type { Metadata } from "next";

import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: landingContent.ja.metadata.title,
  description: landingContent.ja.metadata.description,
  alternates: {
    canonical: `${siteDetails.siteUrl}ja`,
  },
  openGraph: {
    title: landingContent.ja.metadata.title,
    description: landingContent.ja.metadata.description,
    url: `${siteDetails.siteUrl}ja`,
    type: "website",
    locale: "ja_JP",
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
    title: landingContent.ja.metadata.title,
    description: landingContent.ja.metadata.description,
    images: ["/images/sheetcue-hero.png"],
  },
};

const JapaneseHomePage: React.FC = () => {
  return <HomePageContent content={landingContent.ja} />;
};

export default JapaneseHomePage;
