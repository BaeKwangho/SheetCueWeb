import { ILandingContent } from "@/types"

interface Props {
    cta: ILandingContent["cta"];
}

const CTA: React.FC<Props> = ({ cta }) => {
    return (
        <section id="release" className="mt-10 mb-5 lg:my-20 scroll-mt-24">
            <div className="relative z-10 mx-auto w-full border border-panel bg-panel py-12 sm:py-16">
                <div className="absolute inset-x-0 top-0 h-px bg-primary"></div>

                <div className="flex h-full flex-col items-center justify-center px-5 text-center text-white">
                    <h2 className="mb-4 max-w-2xl text-2xl font-semibold sm:text-3xl md:text-5xl md:leading-tight">{cta.heading}</h2>

                    <p className="mx-auto max-w-xl leading-7 text-white/80 md:px-5">{cta.subheading}</p>

                    <div className="mt-6 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
                        <a href={cta.releaseUrl} className="flex min-h-12 w-full items-center justify-center rounded-lg bg-primary px-7 font-semibold text-white transition-colors hover:bg-primary-accent sm:w-fit">
                            {cta.releaseLabel}
                        </a>
                        <a href={cta.privacyUrl} className="flex min-h-12 w-full items-center justify-center rounded-lg bg-surface px-7 font-semibold text-foreground transition-colors hover:bg-line sm:w-fit">
                            {cta.privacyLabel}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
