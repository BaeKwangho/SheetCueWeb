import { IStats } from "@/types"

interface Props {
    stats: IStats[];
}

const Stats: React.FC<Props> = ({ stats }) => {
    return (
        <section id="stats" className="relative z-10 -mt-10 pb-12 lg:-mt-16 lg:pb-24">
            <div className="sheetcue-proof-strip grid gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/10 shadow-2xl shadow-black/10 sm:grid-cols-3">
                {stats.map(stat => (
                    <div key={stat.title} className="bg-[#071113] px-6 py-6 text-left text-white lg:px-8 lg:py-7">
                        <h3 className="mb-3 flex items-center gap-3 text-xl font-bold lg:text-2xl">
                            {stat.icon}
                            {stat.title}
                        </h3>
                        <p className="text-base leading-7 text-white/62">{stat.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Stats
