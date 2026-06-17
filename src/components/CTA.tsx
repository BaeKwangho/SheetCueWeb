import { ILandingContent } from "@/types"

interface Props {
    cta: ILandingContent["cta"];
}

const CTA: React.FC<Props> = ({ cta }) => {
    return (
        <section id="release" className="my-8 scroll-mt-24 lg:my-24">
            <div className="sheetcue-final-cta relative z-10 mx-auto overflow-hidden rounded-[2rem] px-6 py-14 text-white sm:py-20">
                <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
                    <p className="mb-4 text-sm font-bold uppercase text-[#83eefa]">Release status</p>
                    <h2 className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">{cta.heading}</h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/64 md:text-lg">{cta.subheading}</p>

                    <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
                        <a href={cta.releaseUrl} className="sheetcue-hero-cta flex min-h-14 w-full items-center justify-center rounded-full px-8 font-bold text-white sm:w-fit">
                            {cta.releaseLabel}
                        </a>
                        <a href={cta.privacyUrl} className="text-sm font-semibold text-white/58 underline-offset-4 hover:text-white hover:underline">
                            {cta.privacyLabel}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
