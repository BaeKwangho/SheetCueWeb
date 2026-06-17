import type { Metadata } from "next";

import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";
import { buildPageMetadata } from "@/data/seo";

export const metadata: Metadata = buildPageMetadata("ja");

const JapaneseHomePage: React.FC = () => {
  return <HomePageContent content={landingContent.ja} />;
};

export default JapaneseHomePage;
