"use client";

import {useLanguage} from "@/src/context";

export const HomeIntro = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative px-4 py-10 sm:px-6 md:py-12 lg:px-8">
            <div className="mx-auto max-w-5xl text-center">
                <div className="mx-auto mb-6 h-px max-w-3xl bg-gradient-to-r from-transparent via-[rgba(138,79,31,0.42)] to-transparent" />

                <p className="mx-auto max-w-4xl text-base leading-8 text-[var(--sirko-ink-soft)] sm:text-lg md:text-xl md:leading-9">
                    {locale.home.intro.text}
                </p>

                <div className="mx-auto mt-6 h-px max-w-3xl bg-gradient-to-r from-transparent via-[rgba(138,79,31,0.42)] to-transparent" />
            </div>
        </section>
    );
};