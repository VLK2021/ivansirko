"use client";

import Image from "next/image";
import {motion} from "framer-motion";

import {useLanguage} from "@/src/context";

export const HomeLegacyPreview = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
            <div className="relative min-h-[480px] md:min-h-[560px] lg:min-h-[620px]">
                <Image
                    src="/images/sirko/legacy/legacy-background.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority={false}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_35%,rgba(212,169,96,0.18)_75%,rgba(212,169,96,0.42)_100%)]" />

                <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[var(--sirko-parchment)] via-[rgba(214,173,103,0.55)] to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[var(--sirko-parchment)] via-[rgba(214,173,103,0.55)] to-transparent" />

                <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[var(--sirko-parchment)] via-[rgba(214,173,103,0.4)] to-transparent" />

                <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[var(--sirko-parchment)] via-[rgba(214,173,103,0.4)] to-transparent" />

                <div className="relative z-10 mx-auto flex min-h-[480px] max-w-[1800px] flex-col items-center justify-center gap-8 px-6 py-12 md:min-h-[560px] md:flex-row md:gap-14 md:px-12 lg:min-h-[620px] lg:px-20">
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="relative h-[320px] w-[320px] shrink-0 md:h-[420px] md:w-[420px] lg:h-[500px] lg:w-[500px]"
                    >
                        <Image
                            src="/images/sirko/legacy/legacy-emblem.png"
                            alt=""
                            fill
                            sizes="500px"
                            className="object-contain drop-shadow-[0_35px_60px_rgba(0,0,0,0.45)]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 30}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.15}}
                        className="max-w-[1100px] text-center md:text-left"
                    >
                        <h2 className="font-serif text-5xl font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)] md:text-6xl lg:text-7xl">
                            {locale.home.legacyPreview.title}
                        </h2>

                        <div className="my-8 h-px w-72 bg-gradient-to-r from-transparent via-[rgba(96,53,20,0.55)] to-transparent md:mx-0" />

                        <div className="space-y-6 font-serif text-2xl leading-10 text-[var(--sirko-ink)] md:text-[2rem] md:leading-[3rem]">
                            {locale.home.legacyPreview.paragraphs.map(
                                (paragraph) => (
                                    <p key={paragraph}>
                                        {paragraph}
                                    </p>
                                )
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};