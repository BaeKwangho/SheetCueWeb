import React from 'react';
import Image from 'next/image';

import { IHeroDetails } from '@/types';

interface Props {
    hero: IHeroDetails;
}

const Hero: React.FC<Props> = ({ hero }) => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center overflow-hidden px-5 pb-0 pt-32 md:pt-40"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="sheetcue-hero-grid absolute inset-0 h-full w-full">
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent via-[rgba(245,250,249,0.72)] to-white backdrop-blur-[2px]">
            </div>

            <div className="w-full text-center max-w-6xl">
                <p className="sheetcue-eyebrow mx-auto mb-5 w-fit rounded-full border border-[var(--sheetcue-border)] bg-white/82 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.18em] shadow-sm">{hero.eyebrow}</p>
                <h1 className="sheetcue-hero-title mx-auto max-w-lg text-4xl font-extrabold tracking-normal md:max-w-4xl md:text-6xl md:leading-tight">{hero.heading}</h1>
                <p className="mx-auto mt-5 max-w-2xl text-foreground md:text-xl">{hero.subheading}</p>
                <p className="mx-auto mt-4 max-w-2xl text-base text-foreground-accent md:text-lg">{hero.secondarySubheading}</p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 w-full mx-auto">
                    <a href="#release" className="flex min-h-14 w-full items-center justify-center rounded-full bg-[var(--sheetcue-ink)] px-7 font-bold text-white shadow-lg shadow-[rgba(16,43,46,0.16)] transition hover:bg-black sm:w-fit">
                        {hero.primaryCta}
                    </a>
                    <a href={hero.secondaryCtaUrl} className="flex min-h-14 w-full items-center justify-center rounded-full border border-[var(--sheetcue-border)] bg-white/90 px-7 font-bold text-[var(--sheetcue-ink)] shadow-sm transition hover:border-primary sm:w-fit">
                        {hero.secondaryCta}
                    </a>
                </div>
                <div className="sheetcue-hero-media sheetcue-landscape-device relative z-10 mx-auto mt-12 w-full max-w-[1080px] rounded-[2rem] border bg-white p-2 md:mt-16">
                    <Image
                        src={hero.centerImageSrc}
                        width={1800}
                        height={1080}
                        quality={100}
                        sizes="(max-width: 768px) 100vw, 1080px"
                        priority={true}
                        loading="eager"
                        alt={hero.imageAlt}
                        className="h-auto w-full rounded-[1.45rem]"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
