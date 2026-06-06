import { IStats } from "@/types"

interface Props {
    stats: IStats[];
}

const Stats: React.FC<Props> = ({ stats }) => {
    return (
        <section id="stats" className="py-8 lg:py-14">
            <div className="sheetcue-stat-grid grid overflow-hidden rounded-[1.75rem] border sm:grid-cols-3">
                {stats.map(stat => (
                    <div key={stat.title} className="sheetcue-stat-card mx-auto max-w-md border-b p-6 text-center last:border-b-0 sm:max-w-full sm:border-b-0 sm:border-r sm:text-left sm:last:border-r-0 lg:p-8">
                        <h3 className="mb-4 flex items-center justify-center gap-2 text-2xl font-semibold sm:justify-start">
                            {stat.icon}
                            {stat.title}
                        </h3>
                        <p className="leading-7 text-foreground-accent">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats
