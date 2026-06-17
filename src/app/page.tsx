import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";
import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("en");

const HomePage: React.FC = () => {
  return <HomePageContent content={landingContent.en} />;
};

export default HomePage;
