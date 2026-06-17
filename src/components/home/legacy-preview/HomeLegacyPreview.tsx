"use client";

import Image from "next/image";
import {motion} from "framer-motion";

import {useLanguage} from "@/src/context";

export const HomeLegacyPreview = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
            <div className="relative min-h-[340px] md:min-h-[400px] lg:min-h-[450px]">
                <Image
                    src="/images/sirko/legacy/legacy-background.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                    priority={false}
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_36%,rgba(212,169,96,0.16)_76%,rgba(212,169,96,0.38)_100%)]" />

                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--sirko-parchment-300)] via-[rgba(210,168,93,0.48)] to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--sirko-parchment-300)] via-[rgba(210,168,93,0.48)] to-transparent" />
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[var(--sirko-parchment-300)] via-[rgba(210,168,93,0.32)] to-transparent" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[var(--sirko-parchment-300)] via-[rgba(210,168,93,0.32)] to-transparent" />

                <div className="relative z-10 mx-auto flex min-h-[340px] max-w-[1800px] flex-col items-center justify-center gap-5 px-6 py-7 md:min-h-[400px] md:flex-row md:gap-10 md:px-12 lg:min-h-[450px] lg:px-20">
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="relative h-[230px] w-[230px] shrink-0 md:h-[280px] md:w-[280px] lg:h-[330px] lg:w-[330px]"
                    >
                        <Image
                            src="/images/sirko/legacy/legacy-emblem.png"
                            alt=""
                            fill
                            sizes="330px"
                            className="object-contain drop-shadow-[0_24px_44px_rgba(0,0,0,0.42)]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 28}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.15}}
                        className="max-w-[1080px] text-center md:text-left"
                    >
                        <h2 className="font-serif text-3xl font-black uppercase tracking-[0.1em] text-[var(--sirko-bronze-dark)] md:text-4xl lg:text-5xl">
                            {locale.home.legacyPreview.title}
                        </h2>

                        <div className="my-5 h-px w-56 bg-gradient-to-r from-transparent via-[var(--sirko-bronze)] to-transparent md:mx-0" />

                        <div className="space-y-4 font-serif text-xl leading-9 text-[var(--sirko-ink)] md:text-[1.7rem] md:leading-[2.6rem]">
                            {locale.home.legacyPreview.paragraphs.map((paragraph) => (
                                <p key={paragraph}>{paragraph}</p>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};