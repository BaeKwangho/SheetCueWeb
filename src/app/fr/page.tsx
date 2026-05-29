import type { Metadata } from "next";

import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";
import { siteDetails } from "@/data/siteDetails";

export const metadata: Metadata = {
  title: landingContent.fr.metadata.title,
  description: landingContent.fr.metadata.description,
  alternates: {
    canonical: `${siteDetails.siteUrl}fr/`,
  },
  openGraph: {
    title: landingContent.fr.metadata.title,
    description: landingContent.fr.metadata.description,
    url: `${siteDetails.siteUrl}fr/`,
    type: "website",
    locale: "fr_FR",
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
    title: landingContent.fr.metadata.title,
    description: landingContent.fr.metadata.description,
    images: ["/images/sheetcue-hero.png"],
  },
};

const FrenchHomePage: React.FC = () => {
  return <HomePageContent content={landingContent.fr} />;
};

export default FrenchHomePage;
