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
        y: 36
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            ease: "easeOut",
            duration: 0.55,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -18,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            ease: "easeOut",
            duration: 0.45,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;
    const image = (
        <div className="w-full">
            <Image
                src={imageSrc}
                alt={title}
                width={1120}
                height={680}
                quality={100}
                className="h-auto w-full border border-line bg-surface shadow-lg"
            />
        </div>
    );

    return (
        <section className="benefit-section">
            <motion.div
                className="mb-16 grid items-center gap-8 border-t border-line pt-12 lg:grid-cols-2 lg:gap-14"
                variants={containerVariants}
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("w-full", { "lg:order-1": !imageAtRight })}
                    
                >
                    <div className="w-full text-center lg:text-left">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <p className="mx-auto mt-3 leading-7 text-foreground-accent lg:ml-0">
                                {description}
                            </p>
                        </motion.div>

                        <div className="mt-8 lg:hidden">
                            {image}
                        </div>

                        <div className="mx-auto lg:ml-0 w-full">
                            {bullets.map((item, index) => (
                                <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className={clsx("hidden lg:block", { "lg:order-2": !imageAtRight })}>
                    {image}
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection
