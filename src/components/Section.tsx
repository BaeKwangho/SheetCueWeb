import SectionTitle from "./SectionTitle";

interface Props {
    id: string;
    title: string;
    description: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({ id, title, description, children }: React.PropsWithChildren<Props>) => {
    return (
        <section id={id} className="border-t border-black/10 py-20 lg:py-28">
            <div className="mb-12 max-w-3xl">
                <p className="mb-4 text-sm font-bold uppercase text-[var(--sheetcue-teal)]">{id}</p>
                <SectionTitle>
                    <h2 className="mb-5 text-left text-4xl leading-tight lg:text-5xl">{title}</h2>
                </SectionTitle>
                <p className="text-lg leading-8 text-foreground-accent">{description}</p>
            </div>
            {children}
        </section>
    )
}

export default Section
