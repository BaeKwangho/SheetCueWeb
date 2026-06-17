import { motion } from "framer-motion"

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet> = ({ title, description, icon }: IBenefitBullet) => {
    return (
        <motion.div
            className="mt-7 flex flex-col items-center gap-3 border-t border-line pt-6 lg:flex-row lg:items-start lg:gap-5"
            variants={childVariants}
        >
            <div className="mx-auto mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-primary lg:mx-0">
                {icon}
            </div>
            <div>
                <h4 className="text-lg font-semibold">
                    {title}
                </h4>
                <p className="text-base leading-7 text-foreground-accent">
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet
