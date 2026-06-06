"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode } from "react";

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
            viewport={{ once: true, amount: 0.24 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
