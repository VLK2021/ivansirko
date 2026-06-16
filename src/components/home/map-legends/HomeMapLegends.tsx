"use client";

import {motion} from "framer-motion";

import {useLanguage} from "@/src/context";

import {CampaignMapPreview} from "./CampaignMapPreview";
import {LegendsFactsPreview} from "./LegendsFactsPreview";

export const HomeMapLegends = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative px-4 pb-12 pt-1 sm:px-6 md:pb-14 lg:px-8">
            <div className="mx-auto grid w-full max-w-[92rem] grid-cols-1 gap-5 lg:grid-cols-[1.35fr_1fr]">
                <motion.div
                    initial={{opacity: 0, x: -24}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true, amount: 0.25}}
                    transition={{duration: 0.55, ease: "easeOut"}}
                >
                    <CampaignMapPreview locale={locale.home.mapLegends.map} />
                </motion.div>

                <motion.div
                    initial={{opacity: 0, x: 24}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true, amount: 0.25}}
                    transition={{duration: 0.55, ease: "easeOut", delay: 0.08}}
                >
                    <LegendsFactsPreview locale={locale.home.mapLegends.legends} />
                </motion.div>
            </div>
        </section>
    );
};