"use client";

import Image from "next/image";
import {motion} from "framer-motion";

import {useLanguage} from "@/src/context";

export const HomeLegacyPreview = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
            <div className="relative min-h-[420px] md:min-h-[500px]">
                <Image
                    src="/images/sirko/legacy/legacy-background.png"
                    alt=""
                    fill
                    sizes="100vw"
                    priority={false}
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_45%,rgba(210,165,95,0.18)_75%,rgba(210,165,95,0.42)_100%)]" />

                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[var(--sirko-parchment)] via-[rgba(214,173,103,0.65)] to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[var(--sirko-parchment)] via-[rgba(214,173,103,0.65)] to-transparent" />

                <div className="absolute inset-y-0 left-0 w-36 bg-gradient-to-r from-[var(--sirko-parchment)] via-[rgba(214,173,103,0.55)] to-transparent" />

                <div className="absolute inset-y-0 right-0 w-36 bg-gradient-to-l from-[var(--sirko-parchment)] via-[rgba(214,173,103,0.55)] to-transparent" />

                <div className="relative z-10 mx-auto flex min-h-[420px] max-w-[1700px] flex-col items-center justify-center gap-6 px-6 py-12 md:min-h-[500px] md:flex-row md:gap-10 md:px-12 lg:px-20">
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="relative h-[260px] w-[260px] shrink-0 md:h-[340px] md:w-[340px] lg:h-[420px] lg:w-[420px]"
                    >
                        <Image
                            src="/images/sirko/legacy/legacy-emblem.png"
                            alt=""
                            fill
                            sizes="420px"
                            className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.45)]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.1}}
                        className="max-w-[900px] text-center md:text-left"
                    >
                        <h2 className="font-serif text-4xl font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)] md:text-5xl">
                            {locale.home.legacyPreview.title}
                        </h2>

                        <div className="my-6 h-px w-56 bg-gradient-to-r from-transparent via-[rgba(96,53,20,0.55)] to-transparent md:mx-0" />

                        <div className="space-y-4 font-serif text-lg leading-8 text-[var(--sirko-ink)] md:text-xl md:leading-9">
                            {locale.home.legacyPreview.paragraphs.map((paragraph) => (
                                <p key={paragraph}>
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};