"use client";

import {useLanguage} from "@/src/context";

import {HeroContent} from "./HeroContent";
import {HeroImage} from "./HeroImage";

export const HomeHero = () => {
    const {locale} = useLanguage();

    return (
        <section className="w-full overflow-hidden bg-[var(--sirko-parchment-200)]">
            <div className="grid min-h-[calc(100svh-80px)] grid-cols-1 lg:grid-cols-[52%_48%]">
                <HeroImage />

                <div className="relative flex items-center justify-center bg-gradient-to-r from-[var(--sirko-parchment-200)] via-[var(--sirko-parchment-100)] to-[var(--sirko-parchment-50)] px-5 py-12 sm:px-8 md:px-12 lg:px-14 lg:py-16">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_45%_35%,rgba(255,246,216,0.55),transparent_38%)]" />
                    <HeroContent hero={locale.home.hero} />
                </div>
            </div>
        </section>
    );
};