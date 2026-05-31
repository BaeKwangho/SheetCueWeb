import React from 'react';
import Image from 'next/image';

import { IHeroDetails, IWorkflowStep } from '@/types';

interface Props {
    hero: IHeroDetails;
    workflowSteps: IWorkflowStep[];
}

const Hero: React.FC<Props> = ({ hero, workflowSteps }) => {
    return (
        <section
            id="hero"
            className="score-paper relative flex items-center justify-center overflow-hidden px-5 pb-0 pt-28 md:pt-32"
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 border-b border-line bg-surface/80">
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-background">
            </div>

            <div className="relative w-full max-w-6xl text-center">
                <p className="mx-auto mb-4 inline-flex items-center rounded-lg border border-line bg-surface px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] text-secondary">
                    {hero.eyebrow}
                </p>
                <h1 className="mx-auto max-w-4xl text-4xl font-bold leading-tight text-foreground sm:text-5xl md:text-[3.5rem]">
                    {hero.heading}
                </h1>
                <p className="mx-auto mt-3 max-w-2xl text-lg leading-8 text-foreground">
                    {hero.subheading}
                </p>
                <p className="mx-auto mt-2 max-w-2xl leading-7 text-foreground-accent">
                    {hero.secondarySubheading}
                </p>
                <div className="mx-auto mt-5 flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
                    <a href="#release" className="flex min-h-12 w-full items-center justify-center rounded-lg bg-foreground px-7 font-semibold text-white transition-colors hover:bg-panel sm:w-fit">
                        {hero.primaryCta}
                    </a>
                    <a href={hero.secondaryCtaUrl} className="flex min-h-12 w-full items-center justify-center rounded-lg border border-line bg-surface px-7 font-semibold text-foreground transition-colors hover:border-primary sm:w-fit">
                        {hero.secondaryCta}
                    </a>
                </div>

                <div className="cue-shadow relative z-10 mx-auto mt-6 w-full max-w-[1100px] overflow-hidden rounded-lg border border-line bg-surface md:mt-8">
                    <div className="flex items-center justify-between border-b border-line px-4 py-3">
                        <div className="flex gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-correction"></span>
                            <span className="h-2.5 w-2.5 rounded-full bg-primary"></span>
                            <span className="h-2.5 w-2.5 rounded-full bg-secondary"></span>
                        </div>
                        <div className="h-2 w-24 rounded-full bg-line"></div>
                    </div>
                    <Image
                        src={hero.centerImageSrc}
                        width={1000}
                        height={608}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 1000px"
                        priority={true}
                        loading="eager"
                        fetchPriority="high"
                        alt={hero.imageAlt}
                        className="mx-auto h-auto w-full bg-surface"
                    />
                </div>

                <div className="relative z-10 mx-auto mt-6 grid max-w-4xl grid-cols-1 border border-line bg-surface text-left shadow-sm sm:grid-cols-4">
                    {workflowSteps.map((step) => (
                        <div key={step.number} className="flex items-center gap-4 border-b border-line p-3 last:border-b-0 sm:block sm:border-b-0 sm:border-r sm:p-4 sm:last:border-r-0">
                            <span className="text-xs font-bold text-primary">{step.number.padStart(2, "0")}</span>
                            <p className="text-sm font-semibold text-foreground sm:mt-2">{step.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
