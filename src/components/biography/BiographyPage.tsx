"use client";

import {RouteBackground} from "@/src/common/routeBackground";
import {useLanguage} from "@/src/context";

import {BiographyAside} from "./BiographyAside";
import {BiographyContent} from "./BiographyContent";
import {BiographyHero} from "./BiographyHero";

type SupportedLang = "uk" | "en";

const getContextLanguage = (context: unknown): SupportedLang => {
    if (!context || typeof context !== "object") {
        return "uk";
    }

    const value = context as Record<string, unknown>;

    const possibleLang =
        value.lang ??
        value.language ??
        value.currentLang ??
        value.currentLanguage;

    return possibleLang === "en" ? "en" : "uk";
};

export const BiographyPage = () => {
    const languageContext = useLanguage();
    const {locale} = languageContext;
    const currentLang = getContextLanguage(languageContext);

    return (
        <RouteBackground>
            <section className="relative min-h-screen w-full px-4 pb-20 pt-14 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-[96rem]">
                    <BiographyAside
                        title={locale.biography.kicker}
                        sections={locale.biography.sections}
                    />

                    <div className="min-w-0 xl:ml-[370px] 2xl:ml-[390px]">
                        <BiographyHero
                            kicker={locale.biography.kicker}
                            title={locale.biography.title}
                            description={locale.biography.description}
                        />

                        <BiographyContent currentLang={currentLang} />
                    </div>
                </div>
            </section>
        </RouteBackground>
    );
};