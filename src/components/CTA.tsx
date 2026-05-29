import { ILandingContent } from "@/types"

interface Props {
    cta: ILandingContent["cta"];
}

const CTA: React.FC<Props> = ({ cta }) => {
    return (
        <section id="release" className="mt-10 mb-5 lg:my-20 scroll-mt-24">
            <div className="relative h-full w-full z-10 mx-auto py-12 sm:py-20">
                <div className="h-full w-full">
                    <div className="rounded-2xl opacity-95 absolute inset-0 -z-10 h-full w-full bg-[#050a02] bg-[linear-gradient(to_right,#12170f_1px,transparent_1px),linear-gradient(to_bottom,#12170f_1px,transparent_1px)] bg-[size:6rem_4rem]">
                        <div className="rounded-2xl absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_600px_at_50%_500px,#1C1C02,transparent)]"></div>
                    </div>

                    <div className="h-full flex flex-col items-center justify-center text-white text-center px-5">
                        <h2 className="text-2xl sm:text-3xl md:text-5xl md:leading-tight font-semibold mb-4 max-w-2xl">{cta.heading}</h2>

                        <p className="mx-auto max-w-xl md:px-5">{cta.subheading}</p>

                        <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                            <a href={cta.releaseUrl} className="flex min-h-14 w-full sm:w-fit items-center justify-center rounded-full bg-primary px-7 font-semibold text-foreground">
                                {cta.releaseLabel}
                            </a>
                            <a href={cta.privacyUrl} className="flex min-h-14 w-full sm:w-fit items-center justify-center rounded-full bg-white px-7 font-semibold text-foreground">
                                {cta.privacyLabel}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CTA
