import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
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

        <div className="sheetcue-dark-band">
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
                className="sheetcue-workflow-board mb-8 w-full rounded-[1.75rem] border border-white/10 bg-white object-cover shadow-sm"
              />
            )}
            <div className="sheetcue-workflow-rail grid gap-3 md:grid-cols-4">
              {content.workflow.steps.map(({ number, title, description }) => (
                <article key={title} className="rounded-xl border border-white/10 bg-white/8 p-5 text-white shadow-sm">
                  <span className="mb-5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold text-[var(--sheetcue-ink)]">
                    {number}
                  </span>
                  <h3 className="mb-2 text-lg font-bold">{title}</h3>
                  <p className="text-sm leading-6 text-white/62">{description}</p>
                </article>
              ))}
            </div>
          </Section>
        </div>

        <Section
          id={content.privacy.id}
          title={content.privacy.title}
          description={content.privacy.description}
        >
          <div className="sheetcue-trust-band grid gap-px overflow-hidden rounded-2xl border border-black/10 bg-black/10 md:grid-cols-3">
            {content.privacy.points.map((item) => (
              <div key={item} className="bg-white px-6 py-7 text-left font-bold">
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
