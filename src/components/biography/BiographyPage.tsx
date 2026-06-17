"use client";

import {motion} from "framer-motion";

import {RouteBackground} from "@/src/common/routeBackground";
import {useLanguage} from "@/src/context";

export const BiographyPage = () => {
    const {locale} = useLanguage();

    return (
        <RouteBackground>
            <section className="relative min-h-screen w-full px-4 py-14 sm:px-6 md:py-18 lg:px-8">
                <div className="mx-auto w-full max-w-[96rem]">
                    <aside className="fixed left-6 top-1/2 z-40 hidden w-[300px] -translate-y-1/2 xl:block 2xl:left-[calc((100vw-96rem)/2+1.5rem)]">
                        <div className="border border-[rgba(91,43,14,0.42)] bg-[rgba(255,232,170,0.24)] p-5 shadow-[0_18px_36px_rgba(55,24,7,0.14)] backdrop-blur-md">
                            <p className="font-serif text-sm font-black uppercase tracking-[0.18em] text-[var(--sirko-bronze-dark)]">
                                {locale.biography.navigationTitle}
                            </p>

                            <div className="my-4 h-px w-full bg-gradient-to-r from-[var(--sirko-bronze)] to-transparent" />

                            <nav className="flex flex-col gap-2.5 font-serif text-[15px] leading-5 text-[var(--sirko-ink)]">
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

                    <div className="min-w-0 xl:ml-[380px] 2xl:ml-[390px]">
                        <motion.div
                            initial={{opacity: 0, y: 28}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.7, ease: "easeOut"}}
                            className="max-w-[1040px] text-left"
                        >
                            <p className="font-serif text-xs font-black uppercase tracking-[0.42em] text-[var(--sirko-bronze)]">
                                {locale.biography.kicker}
                            </p>

                            <h1 className="mt-5 font-serif text-4xl font-black uppercase leading-tight tracking-[0.08em] text-[var(--sirko-ink)] sm:text-5xl lg:text-6xl 2xl:text-7xl">
                                {locale.biography.title}
                            </h1>

                            <div className="my-7 h-px w-72 bg-gradient-to-r from-[var(--sirko-bronze)] to-transparent" />

                            <p className="max-w-[900px] font-serif text-xl leading-9 text-[var(--sirko-ink-soft)] sm:text-2xl sm:leading-10">
                                {locale.biography.description}
                            </p>
                        </motion.div>

                        <div className="mt-14 max-w-[980px] space-y-8">
                            {locale.biography.sections.map((section, index) => (
                                <motion.article
                                    key={section.id}
                                    id={section.id}
                                    initial={{opacity: 0, y: 24}}
                                    whileInView={{opacity: 1, y: 0}}
                                    viewport={{once: true, amount: 0.2}}
                                    transition={{duration: 0.55, ease: "easeOut"}}
                                    className="scroll-mt-28 border border-[rgba(91,43,14,0.32)] bg-[rgba(255,239,198,0.18)] p-6 shadow-[0_18px_36px_rgba(55,24,7,0.12)] backdrop-blur-sm sm:p-8"
                                >
                                    <p className="font-serif text-xs font-black uppercase tracking-[0.22em] text-[var(--sirko-bronze)]">
                                        {String(index + 1).padStart(2, "0")}
                                    </p>

                                    <h2 className="mt-3 font-serif text-2xl font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)] sm:text-3xl">
                                        {section.title}
                                    </h2>

                                    <div className="my-5 h-px w-48 bg-gradient-to-r from-[var(--sirko-bronze)] to-transparent" />

                                    <p className="font-serif text-lg leading-8 text-[var(--sirko-ink-soft)]">
                                        {section.text}
                                    </p>
                                </motion.article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </RouteBackground>
    );
};