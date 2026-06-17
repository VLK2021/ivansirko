"use client";

import {motion} from "framer-motion";

import {RouteBackground} from "@/src/common/routeBackground";
import {useLanguage} from "@/src/context";

export const BiographyPage = () => {
    const {locale} = useLanguage();

    return (
        <RouteBackground>
            <section className="relative mx-auto min-h-screen w-full max-w-[96rem] px-4 py-4 sm:px-6 md:py-20 lg:px-8">
                <motion.div
                    initial={{opacity: 0, y: 28}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.7, ease: "easeOut"}}
                    className="mx-auto max-w-[980px] text-center"
                >
                    <p className="font-serif text-xs font-black uppercase tracking-[0.42em] text-[var(--sirko-bronze)]">
                        {locale.biography.kicker}
                    </p>

                    <h1 className="mt-5 font-serif text-5xl font-black uppercase leading-tight tracking-[0.08em] text-[var(--sirko-ink)] sm:text-6xl lg:text-7xl">
                        {locale.biography.title}
                    </h1>

                    <div className="mx-auto my-7 h-px w-72 bg-gradient-to-r from-transparent via-[var(--sirko-bronze)] to-transparent" />

                    <p className="font-serif text-xl leading-9 text-[var(--sirko-ink-soft)] sm:text-2xl sm:leading-10">
                        {locale.biography.description}
                    </p>
                </motion.div>

                <aside className="fixed left-2 top-[30%] z-40 hidden w-[260px] xl:block 2xl:left-[calc((100vw-92rem)/2)]">
                    <div className="border border-[rgba(91,43,14,0.42)] bg-[rgba(255,232,170,0.18)] p-5 shadow-[0_18px_36px_rgba(55,24,7,0.14)] backdrop-blur-md">
                        <p className="font-serif text-sm font-black uppercase tracking-[0.18em] text-[var(--sirko-bronze-dark)]">
                            {locale.biography.navigationTitle}
                        </p>

                        <div className="my-4 h-px w-full bg-gradient-to-r from-[var(--sirko-bronze)] to-transparent" />

                        <nav className="flex flex-col gap-3 font-serif text-base text-[var(--sirko-ink)]">
                            {locale.biography.sections.map((section) => (
                                <a
                                    key={section.id}
                                    href={`#${section.id}`}
                                    className="transition duration-300 hover:translate-x-1 hover:text-[var(--sirko-bronze-dark)]"
                                >
                                    {section.title}
                                </a>
                            ))}
                        </nav>
                    </div>
                </aside>

                <div className="mx-auto mt-14 max-w-[900px] space-y-8 xl:ml-[340px] xl:mr-auto">
                    {locale.biography.sections.map((section) => (
                        <motion.article
                            key={section.id}
                            id={section.id}
                            initial={{opacity: 0, y: 24}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true, amount: 0.25}}
                            transition={{duration: 0.55, ease: "easeOut"}}
                            className="border border-[rgba(91,43,14,0.32)] bg-[rgba(255,239,198,0.18)] p-6 shadow-[0_18px_36px_rgba(55,24,7,0.12)] backdrop-blur-sm sm:p-8"
                        >
                            <h2 className="font-serif text-3xl font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)]">
                                {section.title}
                            </h2>

                            <div className="my-5 h-px w-48 bg-gradient-to-r from-[var(--sirko-bronze)] to-transparent" />

                            <p className="font-serif text-lg leading-8 text-[var(--sirko-ink-soft)]">
                                {section.text}
                            </p>
                        </motion.article>
                    ))}
                </div>
            </section>
        </RouteBackground>
    );
};