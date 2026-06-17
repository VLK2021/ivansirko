"use client";

import Image from "next/image";
import {motion} from "framer-motion";

import {RouteBackground} from "@/src/common/routeBackground";
import {useLanguage} from "@/src/context";

export const BiographyPage = () => {
    const {locale} = useLanguage();

    return (
        <RouteBackground>
            <section className="relative min-h-screen w-full px-4 pb-20 pt-14 sm:px-6 lg:px-8">
                <div className="mx-auto w-full max-w-[96rem]">
                    <aside className="fixed left-6 top-[128px] z-30 hidden w-[300px] xl:block 2xl:left-[calc((100vw-96rem)/2+1.5rem)]">
                        <div className="relative max-h-[calc(100vh-150px)] overflow-hidden border-2 border-[rgba(91,43,14,0.58)] bg-[rgba(218,174,92,0.42)] px-5 py-5 shadow-[0_20px_45px_rgba(55,24,7,0.24)] backdrop-blur-md">
                            <span className="pointer-events-none absolute inset-3 border border-[rgba(91,43,14,0.34)]" />
                            <span className="pointer-events-none absolute inset-5 border border-[rgba(255,235,178,0.22)]" />

                            <span className="absolute left-0 top-0 h-16 w-[3px] bg-[rgba(91,43,14,0.6)]" />
                            <span className="absolute left-0 top-0 h-[3px] w-16 bg-[rgba(91,43,14,0.6)]" />
                            <span className="absolute right-0 top-0 h-16 w-[3px] bg-[rgba(91,43,14,0.6)]" />
                            <span className="absolute right-0 top-0 h-[3px] w-16 bg-[rgba(91,43,14,0.6)]" />
                            <span className="absolute bottom-0 left-0 h-16 w-[3px] bg-[rgba(91,43,14,0.6)]" />
                            <span className="absolute bottom-0 left-0 h-[3px] w-16 bg-[rgba(91,43,14,0.6)]" />
                            <span className="absolute bottom-0 right-0 h-16 w-[3px] bg-[rgba(91,43,14,0.6)]" />
                            <span className="absolute bottom-0 right-0 h-[3px] w-16 bg-[rgba(91,43,14,0.6)]" />

                            <div className="relative z-10 flex flex-col">
                                <div className="text-center">
                                    <Image
                                        src="/images/sirko/icons/otaman.png"
                                        alt=""
                                        width={120}
                                        height={120}
                                        priority
                                        className="mx-auto h-[100px] w-[100px] object-contain drop-shadow-[0_14px_16px_rgba(55,24,7,0.28)]"
                                    />

                                    <div className="mx-auto my-4 h-px w-32 bg-gradient-to-r from-transparent via-[rgba(91,43,14,0.58)] to-transparent" />

                                    <p className="font-serif text-2xl font-black uppercase tracking-[0.16em] text-[var(--sirko-ink)]">
                                        {locale.biography.kicker}
                                    </p>
                                </div>

                                <div className="my-4 h-px w-full bg-gradient-to-r from-transparent via-[rgba(91,43,14,0.42)] to-transparent" />

                                <nav className="flex flex-col gap-2 font-serif text-[14px] leading-5 text-[var(--sirko-ink)]">
                                    {locale.biography.sections.map((section, index) => (
                                        <a
                                            key={section.id}
                                            href={`#${section.id}`}
                                            className="group grid grid-cols-[36px_1fr] gap-2 transition duration-300 hover:translate-x-1 hover:text-[var(--sirko-bronze-dark)]"
                                        >
                                            <span className="font-black tracking-[0.16em] text-[var(--sirko-bronze-dark)]">
                                                {String(index + 1).padStart(2, "0")}
                                            </span>
                                            <span>{section.title}</span>
                                        </a>
                                    ))}
                                </nav>
                            </div>
                        </div>
                    </aside>

                    <div className="min-w-0 xl:ml-[370px] 2xl:ml-[390px]">
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
                                    className="scroll-mt-32 border border-[rgba(91,43,14,0.32)] bg-[rgba(255,239,198,0.18)] p-6 shadow-[0_18px_36px_rgba(55,24,7,0.12)] backdrop-blur-sm sm:p-8"
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