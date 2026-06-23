import ReleaseNotesPageContent from "@/components/ReleaseNotesPageContent";
import { releaseNotesContent } from "@/data/releaseNotes";
import { buildReleaseNotesMetadata } from "@/data/seo";

export const metadata = buildReleaseNotesMetadata("ja");

const JapaneseReleaseNotesPage: React.FC = () => {
  return <ReleaseNotesPageContent content={releaseNotesContent.ja} />;
};

export default JapaneseReleaseNotesPage;
