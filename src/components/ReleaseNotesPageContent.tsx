import { FiCheckCircle, FiClock, FiGitBranch, FiShield } from "react-icons/fi";

import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import { revealDelay } from "@/components/revealMotion";
import { ReleaseNotesContent } from "@/data/releaseNotes";
import { buildReleaseNotesStructuredData } from "@/data/seo";

interface Props {
    content: ReleaseNotesContent;
}

const ReleaseNotesPageContent: React.FC<Props> = ({ content }) => {
    const latest = content.entries[0];

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(buildReleaseNotesStructuredData(content)) }}
            />
            <section className="relative overflow-hidden border-b border-line bg-[#f7fbfa] pt-28">
                <div className="absolute inset-0 -z-0 sheetcue-release-grid" aria-hidden="true" />
                <Container className="relative z-10 pb-12 lg:pb-16">
                    <Reveal className="flex max-w-4xl flex-col justify-end">
                        <div className="mb-5 flex flex-wrap items-center gap-3">
                            <span className="inline-flex items-center rounded-md border border-secondary/30 bg-white/80 px-3 py-1 text-sm font-semibold text-secondary">
                                {content.draftLabel}
                            </span>
                            <span className="text-sm font-semibold uppercase text-foreground-accent">
                                {content.eyebrow}
                            </span>
                        </div>
                        <h1 className="sheetcue-hero-title max-w-4xl text-5xl font-bold leading-[1.03] md:text-7xl">
                            {content.title}
                        </h1>
                        <p className="mt-6 max-w-2xl text-xl leading-8 text-foreground-accent">
                            {content.intro}
                        </p>
                        <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
                            <a
                                href={`#${latest.version}`}
                                className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-2 text-foreground shadow-sm transition-colors hover:border-secondary hover:text-secondary"
                            >
                                <FiClock className="h-4 w-4" aria-hidden="true" />
                                {content.latestLabel}: {latest.version}
                            </a>
                            <span className="inline-flex items-center gap-2 rounded-md border border-line bg-white px-4 py-2 text-foreground-accent shadow-sm">
                                <FiGitBranch className="h-4 w-4" aria-hidden="true" />
                                {latest.platform}
                            </span>
                        </div>
                    </Reveal>

                    <Reveal delay={0.08} y={18}>
                        <div className="mt-9 grid max-w-4xl gap-3 rounded-lg border border-line bg-white/88 p-4 shadow-sm sm:grid-cols-3">
                            <div className="rounded-md border border-line bg-[#f7fbfa] p-4">
                                <p className="text-sm font-semibold text-foreground-accent">{content.latestLabel}</p>
                                <p className="mt-1 text-2xl font-bold text-foreground">{latest.version}</p>
                            </div>
                            <div className="rounded-md border border-line bg-[#f7fbfa] p-4">
                                <p className="text-sm font-semibold text-foreground-accent">{content.dateLabel}</p>
                                <p className="mt-1 text-2xl font-bold text-foreground">{latest.date}</p>
                            </div>
                            <div className="rounded-md border border-line bg-[#f7fbfa] p-4">
                                <p className="text-sm font-semibold text-foreground-accent">{content.platformLabel}</p>
                                <p className="mt-1 text-lg font-bold leading-8 text-foreground">{latest.platform}</p>
                            </div>
                        </div>
                    </Reveal>
                </Container>
            </section>

            <Container className="py-12 lg:py-20">
                <div className="grid gap-8 lg:grid-cols-[18rem_minmax(0,1fr)]">
                    <Reveal y={18}>
                        <nav className="lg:sticky lg:top-24" aria-labelledby="release-timeline-heading">
                            <h2 id="release-timeline-heading" className="mb-4 text-2xl font-bold">
                                {content.timelineHeading}
                            </h2>
                            <ol className="space-y-3">
                                {content.entries.map((entry) => (
                                    <li key={entry.version}>
                                        <a
                                            href={`#${entry.version}`}
                                            className="block rounded-md border border-line bg-white p-4 text-left shadow-sm transition-colors hover:border-secondary hover:text-secondary"
                                        >
                                            <span className="block text-sm font-semibold text-foreground-accent">{entry.date}</span>
                                            <span className="mt-1 block text-lg font-bold text-foreground">{entry.version}</span>
                                            <span className="mt-1 block text-sm text-foreground-accent">{entry.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </Reveal>

                    <div>
                        <Reveal>
                            <h2 className="mb-6 text-3xl font-bold">{content.detailHeading}</h2>
                        </Reveal>
                        <div className="space-y-6">
                            {content.entries.map((entry, index) => (
                                <Reveal key={entry.version} delay={revealDelay(index)} y={18}>
                                    <article id={entry.version} className="scroll-mt-28 rounded-lg border border-line bg-white p-5 shadow-sm md:p-7">
                                        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line pb-5">
                                            <div>
                                                <p className="text-sm font-semibold text-foreground-accent">{entry.date}</p>
                                                <h3 className="mt-1 text-2xl font-bold md:text-3xl">
                                                    {entry.version} · {entry.title}
                                                </h3>
                                            </div>
                                            <span className="inline-flex items-center gap-2 rounded-md border border-secondary/30 bg-primary/15 px-3 py-1.5 text-sm font-bold text-secondary">
                                                <FiCheckCircle className="h-4 w-4" aria-hidden="true" />
                                                {entry.status}
                                            </span>
                                        </div>

                                        <p className="mt-5 text-lg leading-8 text-foreground-accent">{entry.summary}</p>

                                        <div className="mt-7 grid gap-7 md:grid-cols-2">
                                            <section>
                                                <h4 className="mb-3 flex items-center gap-2 text-lg font-bold">
                                                    <FiGitBranch className="h-5 w-5 text-secondary" aria-hidden="true" />
                                                    {content.highlightsHeading}
                                                </h4>
                                                <ul className="space-y-3 text-base leading-7 text-foreground-accent">
                                                    {entry.highlights.map((item) => (
                                                        <li key={item} className="flex gap-3">
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" aria-hidden="true" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </section>

                                            <section>
                                                <h4 className="mb-3 flex items-center gap-2 text-lg font-bold">
                                                    <FiCheckCircle className="h-5 w-5 text-secondary" aria-hidden="true" />
                                                    {content.fixesHeading}
                                                </h4>
                                                <ul className="space-y-3 text-base leading-7 text-foreground-accent">
                                                    {entry.fixes.map((item) => (
                                                        <li key={item} className="flex gap-3">
                                                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-correction" aria-hidden="true" />
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </section>
                                        </div>

                                        <p className="mt-7 rounded-md border border-dashed border-line bg-[#f7fbfa] px-4 py-3 text-sm font-semibold leading-6 text-foreground-accent">
                                            {entry.note}
                                        </p>
                                    </article>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>

                <Reveal y={18}>
                    <section className="mt-12 rounded-lg border border-line bg-[#102b2e] p-6 text-white shadow-sm md:p-8">
                        <div className="flex max-w-4xl flex-col gap-4 md:flex-row md:items-start">
                            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-primary text-panel">
                                <FiShield className="h-6 w-6" aria-hidden="true" />
                            </span>
                            <div>
                                <h2 className="text-2xl font-bold">{content.privacyHeading}</h2>
                                <p className="mt-3 text-lg leading-8 text-white/78">{content.privacyBody}</p>
                            </div>
                        </div>
                    </section>
                </Reveal>
            </Container>
        </>
    );
};

export default ReleaseNotesPageContent;
