import React from 'react';
import Image from 'next/image';

import { heroDetails } from '@/data/hero';
import { withBasePath } from '@/data/paths';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full">
                <div className="absolute inset-0 h-full w-full bg-hero-background bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]">
                </div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,248,244,0.5)] to-[rgba(216,232,228,0.5)]">
            </div>

            <div className="text-center max-w-6xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-secondary">Editable score rehearsal</p>
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-foreground max-w-lg md:max-w-3xl mx-auto">{heroDetails.heading}</h1>
                <p className="mt-4 text-foreground max-w-2xl mx-auto">{heroDetails.subheading}</p>
                <p className="mt-3 text-foreground-accent max-w-2xl mx-auto">Not just a PDF viewer. SheetCue turns static pages into editable measure cues.</p>
                <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-3 w-full mx-auto">
                    <a href="#release" className="flex min-h-14 w-full sm:w-fit items-center justify-center rounded-full bg-foreground px-7 font-semibold text-white">
                        Get release updates
                    </a>
                    <a href={withBasePath("/privacy/privacy-policy.html")} className="flex min-h-14 w-full sm:w-fit items-center justify-center rounded-full border border-black/10 bg-white px-7 font-semibold text-foreground">
                        Read privacy policy
                    </a>
                </div>
                <Image
                    src={heroDetails.centerImageSrc}
                    width={1000}
                    height={608}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 1000px"
                    priority={true}
                    alt="Sketch of importing a score PDF, editing measure boxes, and rehearsing from playback cues"
                    className='relative mt-12 md:mt-16 mx-auto z-10 rounded-3xl border border-black/10 bg-white shadow-2xl'
                />
            </div>
        </section>
    );
};

export default Hero;
