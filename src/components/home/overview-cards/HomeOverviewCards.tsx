"use client";

import {motion} from "framer-motion";

import {useLanguage} from "@/src/context";

import {MilitaryPreviewCard} from "./MilitaryPreviewCard";
import {TimelinePreviewCard} from "./TimelinePreviewCard";

export const HomeOverviewCards = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative px-4 pb-12 pt-2 sm:px-6 md:pb-14 lg:px-8">
            <div className="mx-auto grid w-full max-w-[92rem] grid-cols-1 gap-5 lg:grid-cols-[1.05fr_1fr]">
                <motion.div
                    initial={{opacity: 0, x: -24}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true, amount: 0.25}}
                    transition={{duration: 0.55, ease: "easeOut"}}
                >
                    <TimelinePreviewCard locale={locale.home.overviewCards.timeline} />
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 24}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true, amount: 0.25}}
                    transition={{duration: 0.55, ease: "easeOut", delay: 0.08}}
                >
                    <MilitaryPreviewCard locale={locale.home.overviewCards.military} />
                </motion.div>
            </div>
        </section>
    );
};