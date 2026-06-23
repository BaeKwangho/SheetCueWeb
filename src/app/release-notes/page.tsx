import ReleaseNotesPageContent from "@/components/ReleaseNotesPageContent";
import { releaseNotesContent } from "@/data/releaseNotes";
import { buildReleaseNotesMetadata } from "@/data/seo";

export const metadata = buildReleaseNotesMetadata("en");

const ReleaseNotesPage: React.FC = () => {
  return <ReleaseNotesPageContent content={releaseNotesContent.en} />;
};

export default ReleaseNotesPage;
