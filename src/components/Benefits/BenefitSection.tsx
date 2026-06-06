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
        y: 32
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
                className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-16 lg:flex-nowrap"
                variants={containerVariants}
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.22 }}
            >
                <div
                    className={clsx("flex w-full max-w-xl items-center", { "justify-start": imageAtRight, "lg:order-1 justify-end": !imageAtRight })}
                    
                >
                    <div className="sheetcue-soft-card w-full rounded-[1.75rem] border p-6 text-center lg:p-8 lg:text-left">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className="mx-auto mt-3 max-w-xl leading-7 text-foreground-accent lg:ml-0">
                                {description}
                            </p>
                        </motion.div>

                        <div className="mx-auto lg:ml-0 w-full">
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("order-first flex w-full justify-center lg:order-none lg:w-[42%]", { "lg:order-2": imageAtRight })}>
                    <div className={clsx("sheetcue-feature-device w-full max-w-[330px] sm:max-w-[350px] lg:max-w-[360px]", { "lg:ml-0": imageAtRight })}>
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
