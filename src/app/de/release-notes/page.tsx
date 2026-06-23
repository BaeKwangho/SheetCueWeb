import ReleaseNotesPageContent from "@/components/ReleaseNotesPageContent";
import { releaseNotesContent } from "@/data/releaseNotes";
import { buildReleaseNotesMetadata } from "@/data/seo";

export const metadata = buildReleaseNotesMetadata("de");

const GermanReleaseNotesPage: React.FC = () => {
  return <ReleaseNotesPageContent content={releaseNotesContent.de} />;
};

export default GermanReleaseNotesPage;
