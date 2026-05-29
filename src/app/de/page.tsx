import type { Metadata } from "next";

import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: landingContent.de.metadata.title,
  description: landingContent.de.metadata.description,
  alternates: {
    canonical: `${siteDetails.siteUrl}de`,
  },
  openGraph: {
    title: landingContent.de.metadata.title,
    description: landingContent.de.metadata.description,
    url: `${siteDetails.siteUrl}de`,
    type: "website",
    locale: "de_DE",
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
    title: landingContent.de.metadata.title,
    description: landingContent.de.metadata.description,
    images: ["/images/sheetcue-hero.png"],
  },
};

const GermanHomePage: React.FC = () => {
  return <HomePageContent content={landingContent.de} />;
};

export default GermanHomePage;
