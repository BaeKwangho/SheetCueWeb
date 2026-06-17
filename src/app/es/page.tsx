import type { Metadata } from "next";

import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";
import { buildPageMetadata } from "@/data/seo";

export const metadata: Metadata = buildPageMetadata("es");

const SpanishHomePage: React.FC = () => {
  return <HomePageContent content={landingContent.es} />;
};

export default SpanishHomePage;
