"use client";

import {motion} from "framer-motion";

import {useLanguage} from "@/src/context";
import {FEATURE_CARDS} from "@/src/constants/home/feature-cards.constants";

import {FeatureCard} from "./FeatureCard";

export const HomeFeatureCards = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative px-4 py-10 sm:px-6 md:py-12 lg:px-8">
            <motion.div
                initial={{opacity: 0, y: 22}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.25}}
                transition={{duration: 0.55, ease: "easeOut"}}
                className="mx-auto w-full max-w-[92rem]"
            >
                {/*<div className="mb-8 text-center">*/}
                {/*    <p className="font-serif text-xs font-black uppercase tracking-[0.5em] text-[var(--sirko-bronze)]">*/}
                {/*        {locale.home.featureCards.kicker}*/}
                {/*    </p>*/}

                {/*    <h2 className="mt-3 font-serif text-3xl font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)] sm:text-4xl md:text-5xl">*/}
                {/*        {locale.home.featureCards.title}*/}
                {/*    </h2>*/}
                {/*</div>*/}

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {FEATURE_CARDS.map((card) => {
                        const content = locale.home.featureCards.items[card.id];

                        return (
                            <FeatureCard
                                key={card.id}
                                type={card.id}
                                href={card.href}
                                title={content.title}
                                description={content.description}
                                actionLabel={locale.home.featureCards.actionLabel}
                            />
                        );
                    })}
                </div>
            </motion.div>
        </section>
    );
};