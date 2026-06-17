import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";
import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("fr");

const FrenchHomePage: React.FC = () => {
  return <HomePageContent content={landingContent.fr} />;
};

export default FrenchHomePage;
