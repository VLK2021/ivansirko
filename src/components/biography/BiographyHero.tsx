"use client";

import {motion} from "framer-motion";

type BiographyHeroProps = {
    kicker: string;
    title: string;
    description: string;
};

export const BiographyHero = ({kicker, title, description}: BiographyHeroProps) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 28}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.7, ease: "easeOut"}}
            className="max-w-[1040px] text-left"
        >
            <p className="font-serif text-xs font-black uppercase tracking-[0.42em] text-[var(--sirko-bronze)]">
                {kicker}
            </p>

            <h1 className="mt-5 font-serif text-4xl font-black uppercase leading-tight tracking-[0.08em] text-[var(--sirko-ink)] sm:text-5xl lg:text-6xl 2xl:text-7xl">
                {title}
            </h1>

            <div className="my-7 h-px w-72 bg-gradient-to-r from-[var(--sirko-bronze)] to-transparent" />

            <p className="max-w-[900px] font-serif text-xl leading-9 text-[var(--sirko-ink-soft)] sm:text-2xl sm:leading-10">
                {description}
            </p>
        </motion.div>
    );
};