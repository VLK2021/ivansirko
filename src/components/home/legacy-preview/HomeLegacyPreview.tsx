"use client";

import Image from "next/image";
import {motion} from "framer-motion";

import {useLanguage} from "@/src/context";

export const HomeLegacyPreview = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative w-full overflow-hidden py-0">
            <motion.div
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                viewport={{once: true, amount: 0.25}}
                transition={{duration: 0.75, ease: "easeOut"}}
                className="relative min-h-[320px] w-screen overflow-hidden"
            >
                <Image
                    src="/images/sirko/legacy/legacy-background.png"
                    alt=""
                    fill
                    priority={false}
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,244,210,0.10),transparent_48%)]" />

                <div className="relative z-10 mx-auto grid min-h-[320px] w-full max-w-[92rem] grid-cols-1 items-center gap-4 px-5 py-8 text-center md:grid-cols-[340px_1fr] md:px-10 md:text-left lg:px-14">
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.55, ease: "easeOut", delay: 0.1}}
                        className="mx-auto h-64 w-64 md:h-72 md:w-72 lg:h-80 lg:w-80"
                    >
                        <div className="relative h-full w-full">
                            <Image
                                src="/images/sirko/legacy/legacy-emblem.png"
                                alt=""
                                fill
                                sizes="320px"
                                className="object-contain drop-shadow-[0_24px_42px_rgba(45,18,5,0.5)]"
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 28}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.55, ease: "easeOut", delay: 0.18}}
                        className="mx-auto max-w-[860px] md:mx-0"
                    >
                        <h2 className="font-serif text-3xl font-black uppercase tracking-[0.12em] text-[var(--sirko-ink)] sm:text-4xl">
                            {locale.home.legacyPreview.title}
                        </h2>

                        <div className="mx-auto my-5 h-px w-48 bg-gradient-to-r from-transparent via-[rgba(91,43,14,0.52)] to-transparent md:mx-0" />

                        <div className="space-y-4 font-serif text-lg leading-8 text-[var(--sirko-ink)] sm:text-xl sm:leading-9">
                            {locale.home.legacyPreview.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
};