"use client";

import {motion} from "framer-motion";

import {FEATURE_CARDS} from "@/src/constants/home/feature-cards.constants";
import {useLanguage} from "@/src/context";

import {FeatureCard} from "./FeatureCard";

export const HomeFeatureCards = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative px-4 pb-10 pt-2 sm:px-6 md:pb-12 lg:px-8">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true, amount: 0.25}}
                variants={{
                    hidden: {},
                    visible: {
                        transition: {
                            staggerChildren: 0.08,
                        },
                    },
                }}
                className="mx-auto grid w-full max-w-[92rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5"
            >
                {FEATURE_CARDS.map((card) => {
                    const content = locale.home.featureCards.items[card.id];

                    return (
                        <motion.div
                            key={card.id}
                            variants={{
                                hidden: {opacity: 0, y: 18},
                                visible: {opacity: 1, y: 0},
                            }}
                            transition={{duration: 0.45, ease: "easeOut"}}
                        >
                            <FeatureCard
                                href={card.href}
                                icon={card.icon}
                                title={content.title}
                                description={content.description}
                            />
                        </motion.div>
                    );
                })}
            </motion.div>
        </section>
    );
};