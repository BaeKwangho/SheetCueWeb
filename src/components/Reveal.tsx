"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";
import { revealTransition, revealViewport } from "./revealMotion";

interface Props {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
}

const Reveal: React.FC<Props> = ({ children, className, delay = 0, y = 24 }) => {
    const shouldReduceMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={shouldReduceMotion ? false : { opacity: 0, y }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={revealViewport}
            transition={{ ...revealTransition, delay }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
