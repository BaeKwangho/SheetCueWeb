import Image from "next/image";
import { ILandingContent } from "@/types"
import { FiShield } from "react-icons/fi";
import Reveal from "./Reveal";

interface Props {
    cta: ILandingContent["cta"];
}

const CTA: React.FC<Props> = ({ cta }) => {
    return (
        <section id="release" className="mt-10 mb-5 lg:my-20 scroll-mt-24">
            <Reveal y={22}>
                <div className="relative z-10 mx-auto w-full border border-panel bg-panel py-12 sm:py-16">
                <div className="absolute inset-x-0 top-0 h-px bg-primary"></div>

                <div className="flex h-full flex-col items-center justify-center px-5 text-center text-white">
                    <h2 className="mb-4 max-w-3xl text-2xl font-semibold sm:text-3xl md:text-5xl md:leading-tight">{cta.heading}</h2>

                    <p className="mx-auto max-w-xl leading-7 text-white/80 md:px-5">{cta.subheading}</p>

                    <div className="mt-7 flex flex-col items-center gap-4">
                        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 sm:gap-x-4">
                            <a href={cta.appStoreUrl} target="_blank" rel="noreferrer" aria-label={cta.appStoreBadgeAlt} className="inline-flex h-11 w-[148px] items-center justify-center transition-opacity hover:opacity-85 sm:h-12 sm:w-[162px]">
                                <Image
                                    src={cta.appStoreBadgeSrc}
                                    width={162}
                                    height={48}
                                    alt={cta.appStoreBadgeAlt}
                                    unoptimized
                                    className="max-h-full max-w-full object-contain"
                                />
                            </a>
                            <a href={cta.playStoreUrl} target="_blank" rel="noreferrer" aria-label={cta.playStoreBadgeAlt} className="inline-flex h-11 w-[148px] items-center justify-center transition-opacity hover:opacity-85 sm:h-12 sm:w-[162px]">
                                <Image
                                    src={cta.playStoreBadgeSrc}
                                    width={162}
                                    height={48}
                                    alt={cta.playStoreBadgeAlt}
                                    unoptimized
                                    className="max-h-full max-w-full object-contain"
                                />
                            </a>
                        </div>
                        <a href={cta.privacyUrl} className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-white/70 underline-offset-4 transition hover:text-white hover:underline">
                            <FiShield aria-hidden="true" />
                            {cta.privacyLabel}
                        </a>
                    </div>
                </div>
                </div>
            </Reveal>
        </section>
    )
}

export default CTA
