"use client";

import {useLanguage} from "@/src/context";

import {HeroContent} from "./HeroContent";
import {HeroImage} from "./HeroImage";

export const HomeHero = () => {
    const {locale} = useLanguage();

    return (
        <section className="w-full overflow-hidden">
            <div className="grid min-h-[calc(100svh-80px)] grid-cols-1 lg:grid-cols-[52%_48%]">
                <HeroImage />

                <div
                    className="
                        relative flex items-center justify-center
                        bg-[linear-gradient(90deg,var(--sirko-parchment-200)_0%,var(--sirko-parchment-100)_52%,#f1d194_100%)]
                        px-5 py-12 sm:px-8 md:px-12 lg:px-14 lg:py-16
                    "
                >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_42%,rgba(138,79,31,0.16),transparent_36%)]" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-[linear-gradient(90deg,transparent,rgba(138,79,31,0.10))]" />

                    <HeroContent hero={locale.home.hero} />
                </div>
            </div>
        </section>
    );
};