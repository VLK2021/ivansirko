"use client";

import type {ReactNode} from "react";
import {motion} from "framer-motion";

type HistoricalSectionProps = {
    id: string;
    number: string;
    title: string;
    children: ReactNode;
};

export const HistoricalSection = ({
                                      id,
                                      number,
                                      title,
                                      children,
                                  }: HistoricalSectionProps) => {
    return (
        <motion.article
            id={id}
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.55, ease: "easeOut"}}
            className="scroll-mt-32 border border-[rgba(91,43,14,0.32)] bg-[rgba(255,239,198,0.18)] p-6 shadow-[0_18px_36px_rgba(55,24,7,0.12)] backdrop-blur-sm sm:p-8"
        >
            <p className="font-serif text-xs font-black uppercase tracking-[0.22em] text-[var(--sirko-bronze)]">
                {number}
            </p>

            <h2 className="mt-3 font-serif text-2xl font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)] sm:text-3xl">
                {title}
            </h2>

            <div className="my-5 h-px w-48 bg-gradient-to-r from-[var(--sirko-bronze)] to-transparent" />

            <div className="font-serif text-lg leading-8 text-[var(--sirko-ink-soft)]">
                {children}
            </div>
        </motion.article>
    );
};