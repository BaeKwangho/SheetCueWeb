import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="mt-3 flex gap-4 rounded-xl border border-black/10 bg-white/78 p-4 shadow-sm shadow-black/[0.03]"
            variants={childVariants}
        >
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[var(--sheetcue-ink)] text-white">
                {icon}
            </div>
            <div>
                <h4 className="text-base font-bold">
                    {title}
                </h4>
                <p className="mt-1 text-sm leading-6 text-foreground-accent">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet
