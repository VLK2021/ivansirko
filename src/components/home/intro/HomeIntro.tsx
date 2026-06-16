"use client";

import {motion} from "framer-motion";
import {useLanguage} from "@/src/context";

export const HomeIntro = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative px-4 py-10 sm:px-6 md:py-12 lg:px-8">
            <motion.div
                initial={{opacity: 0, y: 24}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.35}}
                transition={{duration: 0.7, ease: "easeOut"}}
                className="relative mx-auto w-full max-w-[82rem]"
            >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(90,43,16,0.45)] to-transparent" />

                <div className="relative mx-auto px-2 py-8 text-center sm:px-6 md:px-10 lg:px-16">
                    <p className="mx-auto max-w-[76rem] font-serif text-xl italic leading-9 tracking-[0.015em] text-[var(--sirko-ink-soft)] first-letter:font-serif first-letter:text-5xl first-letter:font-bold first-letter:text-[var(--sirko-bronze-dark)] sm:text-2xl sm:leading-10 md:text-[28px] md:leading-[1.65]">
                        {locale.home.intro.paragraph1}
                    </p>

                    <p className="mx-auto mt-5 max-w-[72rem] font-serif text-base leading-8 tracking-[0.01em] text-[var(--sirko-ink-muted)] sm:text-lg md:text-xl md:leading-9">
                        {locale.home.intro.paragraph2}
                    </p>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(90,43,16,0.28)] to-transparent" />
            </motion.div>
        </section>
    );
};