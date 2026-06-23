"use client";

import {motion} from "framer-motion";

type LegacyQuoteProps = {
    quote: string;
};

export const LegacyQuote = ({quote}: LegacyQuoteProps) => {
    return (
        <motion.section
            initial={{opacity: 0, y: 60}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.35}}
            transition={{duration: 0.9}}
            className="relative mx-auto mb-24 max-w-7xl overflow-hidden px-4 py-20"
        >
            <div className="absolute left-1/2 top-0 h-full w-px bg-gradient-to-b from-transparent via-[#94551f]/60 to-transparent" />

            <p className="relative z-10 mx-auto max-w-5xl text-center text-3xl font-semibold leading-[1.35] tracking-tight text-[#2a1205] sm:text-5xl">
                “{quote}”
            </p>
        </motion.section>
    );
};