import type { Transition } from "framer-motion";

export const revealTransition: Transition = {
    duration: 0.56,
    ease: [0.22, 1, 0.36, 1],
};

export const revealViewport = {
    once: true,
    amount: 0.22,
};

export const revealDelay = (index: number, base = 0.08): number => index * base;
