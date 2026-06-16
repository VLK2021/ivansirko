"use client";

import {useLanguage} from "@/src/context";

export const HomeIntro = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative px-4 py-10 sm:px-6 md:py-12 lg:px-8">
            <div
                className="
                    pointer-events-none absolute inset-x-0 top-0 h-16
                    bg-[linear-gradient(180deg,rgba(36,17,6,0.18),transparent)]
                "
            />

            <div className="relative mx-auto w-full max-w-[82rem]">
                <div
                    className="
                        relative mx-auto w-full overflow-hidden
                        px-4 py-8 text-center sm:px-8 md:px-12 lg:px-16
                    "
                >
                    <div
                        className="
                            pointer-events-none absolute inset-0
                            bg-[radial-gradient(circle_at_10%_10%,rgba(70,31,9,0.18),transparent_2px),radial-gradient(circle_at_88%_22%,rgba(70,31,9,0.14),transparent_2px),radial-gradient(circle_at_52%_86%,rgba(70,31,9,0.12),transparent_2px)]
                            bg-[length:95px_95px,135px_135px,175px_175px]
                            opacity-70
                        "
                    />

                    <div
                        className="
                            pointer-events-none absolute inset-0
                            bg-[radial-gradient(circle_at_0%_50%,rgba(90,43,16,0.22),transparent_22%),radial-gradient(circle_at_100%_50%,rgba(90,43,16,0.18),transparent_24%)]
                            mix-blend-multiply
                        "
                    />

                    <div className="relative mx-auto max-w-[78rem]">
                        <p className="text-lg leading-9 text-[var(--sirko-ink-soft)] sm:text-xl md:text-2xl md:leading-10">
                            {locale.home.intro.paragraph1}
                        </p>

                        <p className="mx-auto mt-5 max-w-[72rem] text-base leading-8 text-[var(--sirko-ink-muted)] sm:text-lg md:text-xl md:leading-9">
                            {locale.home.intro.paragraph2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};