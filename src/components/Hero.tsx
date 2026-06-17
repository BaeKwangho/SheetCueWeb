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
            className="relative isolate flex min-h-[calc(100vh-1px)] items-center justify-center overflow-hidden bg-[var(--sheetcue-hero-dark)] px-5 pb-0 pt-28 text-white md:pt-32"
        >
            <div className="absolute inset-0 -z-10">
                <div className="sheetcue-hero-grid absolute inset-0" />
                <div className="sheetcue-hero-spotlight absolute inset-0" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-white" />

            <div className="w-full text-center max-w-6xl">
                <p className="sheetcue-eyebrow mx-auto mb-5 w-fit text-sm font-bold">{hero.eyebrow}</p>
                <h1 className="sheetcue-hero-title mx-auto max-w-lg text-4xl font-extrabold tracking-normal md:max-w-4xl md:text-7xl md:leading-[1.05]">{hero.heading}</h1>
                <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/72 md:text-xl">{hero.subheading}</p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <a href="#release" className="sheetcue-hero-cta flex min-h-14 w-full items-center justify-center rounded-full px-8 font-bold text-white transition sm:w-fit">
                        {hero.primaryCta}
                    </a>
                    <a href={hero.secondaryCtaUrl} className="text-sm font-semibold text-white/60 underline-offset-4 transition hover:text-white hover:underline">
                        {hero.secondaryCta}
                    </a>
                </div>
                <div className="sheetcue-hero-media sheetcue-landscape-device relative z-10 mx-auto mt-10 w-full max-w-[1080px] rounded-[2rem] border bg-white p-2 md:mt-12">
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
