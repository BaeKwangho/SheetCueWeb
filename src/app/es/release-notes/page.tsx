import ReleaseNotesPageContent from "@/components/ReleaseNotesPageContent";
import { releaseNotesContent } from "@/data/releaseNotes";
import { buildReleaseNotesMetadata } from "@/data/seo";

export const metadata = buildReleaseNotesMetadata("es");

const SpanishReleaseNotesPage: React.FC = () => {
  return <ReleaseNotesPageContent content={releaseNotesContent.es} />;
};

export default SpanishReleaseNotesPage;
