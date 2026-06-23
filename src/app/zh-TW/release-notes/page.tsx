import ReleaseNotesPageContent from "@/components/ReleaseNotesPageContent";
import { releaseNotesContent } from "@/data/releaseNotes";
import { buildReleaseNotesMetadata } from "@/data/seo";

export const metadata = buildReleaseNotesMetadata("zh-TW");

const TraditionalChineseReleaseNotesPage: React.FC = () => {
  return <ReleaseNotesPageContent content={releaseNotesContent["zh-TW"]} />;
};

export default TraditionalChineseReleaseNotesPage;
