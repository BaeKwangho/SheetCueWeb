import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";
import { buildPageMetadata } from "@/data/seo";

export const metadata = buildPageMetadata("zh-TW");

const TraditionalChineseHomePage: React.FC = () => {
  return <HomePageContent content={landingContent["zh-TW"]} />;
};

export default TraditionalChineseHomePage;
