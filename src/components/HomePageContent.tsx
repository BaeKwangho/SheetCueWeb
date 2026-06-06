import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { ILandingContent } from "@/types";
import Image from "next/image";

interface Props {
  content: ILandingContent;
}

const HomePageContent: React.FC<Props> = ({ content }) => {
  return (
    <>
      <Hero hero={content.hero} workflowSteps={content.workflow.steps} />
      <Container>
        <Stats stats={content.stats} />
        <Benefits benefits={content.benefits} label={content.nav.menuItems[0].text} />

        <Section
          id={content.workflow.id}
          title={content.workflow.title}
          description={content.workflow.description}
        >
          {content.workflow.imageSrc && (
            <Image
              src={content.workflow.imageSrc}
              alt={content.workflow.imageAlt ?? content.workflow.title}
              width={1800}
              height={980}
              priority={true}
              loading="eager"
              className="sheetcue-workflow-board mb-8 w-full rounded-[1.75rem] border border-black/10 bg-white object-cover shadow-sm"
            />
          )}
          <div className="grid gap-5 md:grid-cols-4">
            {content.workflow.steps.map(({ number, title, description }) => (
              <article key={title} className="border border-line bg-surface p-6 shadow-sm">
                <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-lg border-2 border-primary text-sm font-bold text-foreground">
                  {number}
                </span>
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="text-base text-foreground-accent">{description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id={content.privacy.id}
          title={content.privacy.title}
          description={content.privacy.description}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {content.privacy.points.map((item) => (
              <div key={item} className="border border-line bg-surface p-6 text-center font-semibold">
                {item}
              </div>
            ))}
          </div>
        </Section>

        <FAQ faq={content.faq} />

        <CTA cta={content.cta} />
      </Container>
    </>
  );
};

export default HomePageContent;
