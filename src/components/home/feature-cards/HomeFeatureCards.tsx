"use client";

import {FEATURE_CARDS} from "@/src/constants/home/feature-cards.constants";
import {useLanguage} from "@/src/context";

import {FeatureCard} from "./FeatureCard";

export const HomeFeatureCards = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative px-4 pb-10 pt-4 sm:px-6 md:pb-12 lg:px-8">
            <div className="mx-auto grid w-full max-w-[92rem] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
                {FEATURE_CARDS.map((card) => {
                    const content = locale.home.featureCards.items[card.id];

                    return (
                        <FeatureCard
                            key={card.id}
                            type={card.id}
                            href={card.href}
                            title={content.title}
                            description={content.description}
                        />
                    );
                })}
            </div>
        </section>
    );
};