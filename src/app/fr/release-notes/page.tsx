import ReleaseNotesPageContent from "@/components/ReleaseNotesPageContent";
import { releaseNotesContent } from "@/data/releaseNotes";
import { buildReleaseNotesMetadata } from "@/data/seo";

export const metadata = buildReleaseNotesMetadata("fr");

const FrenchReleaseNotesPage: React.FC = () => {
  return <ReleaseNotesPageContent content={releaseNotesContent.fr} />;
};

export default FrenchReleaseNotesPage;
