import HomePageContent from "@/components/HomePageContent";
import { landingContent } from "@/data/landingContent";

const HomePage: React.FC = () => {
  return <HomePageContent content={landingContent.en} />;
};

export default HomePage;
