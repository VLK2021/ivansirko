"use client";

import {motion} from "framer-motion";
import {useLanguage} from "@/src/context";

const SaberIcon = ({className = ""}: {className?: string}) => {
    return (
        <svg
            viewBox="0 0 120 24"
            fill="none"
            aria-hidden="true"
            className={className}
        >
            <path
                d="M8 18C34 10 62 6 104 6"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />
            <path
                d="M93 5L111 6.5L94 11"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M12 18L5 21"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
            />
        </svg>
    );
};

export const HomeIntro = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative px-4 py-10 sm:px-6 md:py-14 lg:px-8">
            <motion.div
                initial={{opacity: 0, y: 24}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.35}}
                transition={{duration: 0.7, ease: "easeOut"}}
                className="relative mx-auto w-full max-w-[86rem]"
            >
                <div className="mb-7 flex items-center justify-center gap-4 text-[var(--sirko-bronze)] sm:gap-6">
                    <SaberIcon className="h-5 w-24 opacity-70 sm:w-36" />
                    <span className="font-serif text-sm font-bold uppercase tracking-[0.45em] text-[var(--sirko-bronze-dark)] sm:text-base">
                        XVII століття
                    </span>
                    <SaberIcon className="h-5 w-24 scale-x-[-1] opacity-70 sm:w-36" />
                </div>

                <div className="relative mx-auto text-center">
                    <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[min(100%,72rem)] -translate-x-1/2 bg-[radial-gradient(circle_at_50%_45%,rgba(255,244,210,0.36),transparent_56%)]" />

                    <p className="relative mx-auto max-w-[82rem] font-serif text-xl italic leading-9 tracking-[0.015em] text-[var(--sirko-ink-soft)] first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:leading-[0.82] first-letter:text-[var(--sirko-bronze-dark)] sm:text-2xl sm:leading-10 md:text-[30px] md:leading-[1.62] lg:text-[34px]">
                        {locale.home.intro.paragraph1}
                    </p>

                    <div className="mx-auto my-6 h-px max-w-[48rem] bg-gradient-to-r from-transparent via-[rgba(90,43,16,0.34)] to-transparent" />

                    <p className="relative mx-auto max-w-[76rem] font-serif text-base leading-8 tracking-[0.01em] text-[var(--sirko-ink-muted)] sm:text-lg md:text-xl md:leading-9 lg:text-[22px]">
                        {locale.home.intro.paragraph2}
                    </p>
                </div>
            </motion.div>
        </section>
    );
};