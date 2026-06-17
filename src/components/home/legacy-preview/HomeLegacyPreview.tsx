"use client";

import Image from "next/image";
import {motion} from "framer-motion";

import {useLanguage} from "@/src/context";

export const HomeLegacyPreview = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative px-4 pb-12 pt-1 sm:px-6 md:pb-14 lg:px-8">
            <motion.div
                initial={{opacity: 0, y: 24}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.25}}
                transition={{duration: 0.65, ease: "easeOut"}}
                className="relative mx-auto min-h-[260px] w-full max-w-[92rem] overflow-hidden border border-[rgba(91,43,14,0.52)] shadow-[inset_0_0_0_1px_rgba(255,244,210,0.14),0_18px_40px_rgba(45,18,5,0.18)]"
            >
                <Image
                    src="/images/sirko/legacy/legacy-background.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,239,190,0.24),transparent_42%),linear-gradient(90deg,rgba(58,25,7,0.28),transparent_24%,transparent_76%,rgba(58,25,7,0.28))]" />

                <div className="relative z-10 grid min-h-[260px] grid-cols-1 items-center gap-6 px-6 py-8 text-center md:grid-cols-[260px_1fr] md:px-10 md:text-left lg:px-14">
                    <motion.div
                        initial={{opacity: 0, scale: 0.92}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.55, ease: "easeOut", delay: 0.12}}
                        className="mx-auto h-40 w-40 md:h-52 md:w-52"
                    >
                        <div className="relative h-full w-full">
                            <Image
                                src="/images/sirko/legacy/legacy-emblem.png"
                                alt=""
                                fill
                                sizes="220px"
                                className="object-contain drop-shadow-[0_18px_30px_rgba(45,18,5,0.42)]"
                            />
                        </div>
                    </motion.div>

                    <div className="mx-auto max-w-[760px] md:mx-0">
                        <h2 className="font-serif text-2xl font-black uppercase tracking-[0.1em] text-[var(--sirko-ink)] sm:text-3xl">
                            {locale.home.legacyPreview.title}
                        </h2>

                        <div className="mx-auto my-4 h-px w-40 bg-gradient-to-r from-transparent via-[rgba(91,43,14,0.5)] to-transparent md:mx-0" />

                        <div className="space-y-3 font-serif text-base leading-7 text-[var(--sirko-ink)] sm:text-lg sm:leading-8">
                            {locale.home.legacyPreview.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};