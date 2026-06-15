import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";
import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("es");

const SpanishHomePage: React.FC = () => {
  return <HomePageContent content={landingContent.es} />;
};

export default SpanishHomePage;
