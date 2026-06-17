import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Reveal from "@/components/Reveal";
import { revealDelay } from "@/components/revealMotion";
import { buildStructuredData } from "@/data/seo";
import { ILandingContent } from "@/types";
import Image from "next/image";

interface Props {
  content: ILandingContent;
}

const HomePageContent: React.FC<Props> = ({ content }) => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData(content)) }}
      />
      <Hero hero={content.hero} />
      <Container>
        <Stats stats={content.stats} />
        <Benefits benefits={content.benefits} label={content.nav.menuItems[0].text} />

        <Section
          id={content.workflow.id}
          title={content.workflow.title}
          description={content.workflow.description}
        >
          {content.workflow.imageSrc && (
            <Reveal delay={0.08} y={20}>
              <Image
                src={content.workflow.imageSrc}
                alt={content.workflow.imageAlt ?? content.workflow.title}
                width={1800}
                height={980}
                priority={true}
                loading="eager"
                className="sheetcue-workflow-board mb-8 w-full rounded-[1.75rem] border border-black/10 bg-white object-cover shadow-sm"
              />
            </Reveal>
          )}
          <div className="grid gap-5 md:grid-cols-4">
            {content.workflow.steps.map(({ number, title, description }, index) => (
              <Reveal key={title} delay={0.16 + revealDelay(index)} y={18}>
                <article className="h-full rounded-xl border border-black/10 bg-white p-6 shadow-sm">
                <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-primary text-sm font-bold text-foreground">
                  {number}
                </span>
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="text-base text-foreground-accent">{description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Section>

        <Section
          id={content.privacy.id}
          title={content.privacy.title}
          description={content.privacy.description}
        >
          <div className="grid gap-4 md:grid-cols-3">
            {content.privacy.points.map((item, index) => (
              <Reveal key={item} delay={0.08 + revealDelay(index)} y={16}>
                <div className="h-full rounded-xl border border-black/10 bg-white p-6 text-center font-semibold">
                  {item}
                </div>
              </Reveal>
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
