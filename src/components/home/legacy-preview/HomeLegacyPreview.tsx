"use client";

import Image from "next/image";
import {motion} from "framer-motion";

import {useLanguage} from "@/src/context";

export const HomeLegacyPreview = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
            <div className="relative h-[390px] w-full overflow-hidden md:h-[440px] lg:h-[500px]">
                <Image
                    src="/images/sirko/legacy/legacy-background.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-fill object-center"
                    priority={false}
                />

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,rgba(212,169,96,0.12)_82%,rgba(212,169,96,0.24)_100%)]" />

                <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[rgba(212,169,96,0.24)] via-[rgba(212,169,96,0.08)] to-transparent" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[rgba(212,169,96,0.24)] via-[rgba(212,169,96,0.08)] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[rgba(212,169,96,0.18)] via-[rgba(212,169,96,0.06)] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[rgba(212,169,96,0.18)] via-[rgba(212,169,96,0.06)] to-transparent" />

                <div className="absolute inset-0 z-10 mx-auto flex max-w-[1800px] items-center justify-center gap-10 px-6 md:px-12 lg:px-20">
                    <motion.div
                        initial={{opacity: 0, scale: 0.94}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{duration: 0.6}}
                        className="relative hidden h-[264px] w-[264px] shrink-0 md:block lg:h-[341px] lg:w-[341px]"
                    >
                        <Image
                            src="/images/sirko/legacy/legacy-emblem.png"
                            alt=""
                            fill
                            sizes="341px"
                            className="object-contain drop-shadow-[0_24px_44px_rgba(0,0,0,0.42)]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{opacity: 0, x: 26}}
                        whileInView={{opacity: 1, x: 0}}
                        viewport={{once: true}}
                        transition={{duration: 0.6, delay: 0.15}}
                        className="max-w-[1120px] text-center md:text-left"
                    >
                        <h2 className="font-serif text-[28px] font-black uppercase tracking-[0.1em] text-[var(--sirko-bronze-dark)] md:text-[34px] lg:text-[45px]">
                            {locale.home.legacyPreview.title}
                        </h2>

                        <div className="mx-auto my-4 h-px w-52 bg-gradient-to-r from-transparent via-[var(--sirko-bronze)] to-transparent md:mx-0" />

                        <div className="space-y-3 font-serif text-xl leading-9 text-[var(--sirko-ink)] md:text-[1.7rem] md:leading-[2.55rem] lg:text-[1.75rem] lg:leading-[2.65rem]">
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