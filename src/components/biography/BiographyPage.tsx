"use client";

import {RouteBackground} from "@/src/common/routeBackground";
import {useLanguage} from "@/src/context";

import {BiographyAside} from "./BiographyAside";
import {BiographyContent} from "./BiographyContent";
import {BiographyHero} from "./BiographyHero";

const getCurrentLang = () => {
    if (typeof document === "undefined") return "uk";

    const langCookie = document.cookie
        .split("; ")
        .find((cookie) => cookie.startsWith("lang="))
        ?.split("=")[1];

    return langCookie === "en" ? "en" : "uk";
};

export const BiographyPage = () => {
    const {locale} = useLanguage();
    const currentLang = getCurrentLang();

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