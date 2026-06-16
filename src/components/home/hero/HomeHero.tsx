"use client";

import {useLanguage} from "@/src/context";

import {HeroContent} from "./HeroContent";
import {HeroImage} from "./HeroImage";

export const HomeHero = () => {
    const {locale} = useLanguage();

    return (
        <section className="sirko-home-hero">
            <div className="sirko-hero">
                <HeroImage />

                <div className="sirko-hero-content-wrap">
                    <HeroContent hero={locale.home.hero} />
                </div>
            </div>
        </section>
    );
};