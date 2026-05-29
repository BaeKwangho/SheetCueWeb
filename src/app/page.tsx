import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Container>
        <Stats />
        <Benefits />

        <Section
          id="workflow"
          title="From static PDF to measure cues."
          description="Import a score, correct measure boxes, arrange repeats and timing, then rehearse from current and next cues."
        >
          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["1", "Import", "Choose a score PDF from your device."],
              ["2", "Correct", "Edit the detected measure boxes by hand."],
              ["3", "Arrange", "Set repeats, playback order, BPM, and beats."],
              ["4", "Rehearse", "Follow current and next measure cues."],
            ].map(([number, title, description]) => (
              <article key={title} className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
                <span className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-xl border-2 border-primary text-sm font-bold text-foreground">
                  {number}
                </span>
                <h3 className="mb-2 text-xl font-semibold">{title}</h3>
                <p className="text-base text-foreground-accent">{description}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="privacy"
          title="Score handling stays local-first."
          description="Imported score PDFs, rendered pages, cropped measure images, and preset metadata are stored on the user's device. The current build does not create accounts and does not upload score files."
        >
          <div className="grid gap-4 md:grid-cols-3">
            {["No account requirement", "No score uploads", "Google Ads with UMP consent"].map(item => (
              <div key={item} className="rounded-2xl border border-black/10 bg-white p-6 text-center font-semibold">
                {item}
              </div>
            ))}
          </div>
        </Section>

        <FAQ />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
