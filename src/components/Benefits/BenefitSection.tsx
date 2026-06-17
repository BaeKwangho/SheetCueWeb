"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    return (
        <section className="benefit-section">
            <motion.div
                className="flex flex-col items-center justify-center gap-8 border-t border-black/10 py-20 lg:flex-row lg:flex-nowrap lg:gap-24 lg:py-28"
                variants={containerVariants}
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("flex w-full max-w-xl flex-wrap items-center", { "justify-start": imageAtRight, "lg:order-1 justify-end": !imageAtRight })}
                    
                >
                    <div className="w-full text-left">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <p className="mb-4 text-sm font-bold uppercase text-[var(--sheetcue-teal)]">
                                SheetCue flow
                            </p>
                            <SectionTitle>
                                <h3 className="max-w-xl text-4xl leading-tight lg:text-5xl">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className="mt-5 max-w-lg text-lg leading-8 text-foreground-accent">
                                {description}
                            </p>
                        </motion.div>

                        <div className="mt-7 w-full">
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("order-first mt-0 flex w-full justify-center lg:order-none lg:mt-0 lg:w-auto", { "lg:order-2": imageAtRight })}>
                    <div className={clsx("sheetcue-feature-device w-full max-w-[360px]", { "lg:ml-0": imageAtRight })}>
                        <Image
                            src={imageSrc}
                            alt={title}
                            width={760}
                            height={1548}
                            quality={100}
                            priority={true}
                            loading="eager"
                            className="sheetcue-feature-shot h-auto w-full"
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection
