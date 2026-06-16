"use client";

import Image from "next/image";
import {motion} from "framer-motion";

import {useLanguage} from "@/src/context";

export const HomeIntro = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative overflow-hidden px-4 py-12 sm:px-6 md:py-14 lg:px-8">
            <motion.div
                initial={{opacity: 0, y: 24}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.35}}
                transition={{duration: 0.7, ease: "easeOut"}}
                className="relative mx-auto w-full max-w-[88rem]"
            >
                <div className="mb-8 flex items-center justify-center gap-4 md:mb-10 md:gap-8">
                    <div className="relative hidden h-12 w-56 sm:block md:h-16 md:w-72 lg:w-80">
                        <Image
                            src="/images/sirko/decor/saber.png"
                            alt=""
                            fill
                            sizes="420px"
                            className="object-contain object-right opacity-85"
                        />
                    </div>

                    <span className="shrink-0 font-serif text-sm font-bold uppercase tracking-[0.38em] text-[var(--sirko-bronze-dark)] sm:text-base md:text-xl md:tracking-[0.55em]">
                        XVII століття
                    </span>

                    <div className="relative hidden h-12 w-56 scale-x-[-1] sm:block md:h-16 md:w-72 lg:w-80">
                        <Image
                            src="/images/sirko/decor/saber.png"
                            alt=""
                            fill
                            sizes="420px"
                            className="object-contain object-right opacity-85"
                        />
                    </div>
                </div>

                <div className="relative mx-auto text-center">
                    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[115%] w-[min(100%,78rem)] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_50%_50%,rgba(255,244,210,0.34),transparent_58%)]" />

                    <p className="relative mx-auto max-w-[82rem] font-serif text-xl italic leading-9 tracking-[0.015em] text-[var(--sirko-ink-soft)] first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-serif first-letter:text-7xl first-letter:font-bold first-letter:leading-[0.82] first-letter:text-[var(--sirko-bronze-dark)] sm:text-2xl sm:leading-10 md:text-[30px] md:leading-[1.62] lg:text-[34px]">
                        {locale.home.intro.paragraph1}
                    </p>

                    <div className="mx-auto my-7 flex max-w-[48rem] items-center justify-center gap-4">
                        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(90,43,16,0.36)] to-[rgba(90,43,16,0.36)]" />
                        <span className="h-1.5 w-1.5 rotate-45 bg-[var(--sirko-bronze)]" />
                        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[rgba(90,43,16,0.36)] to-[rgba(90,43,16,0.36)]" />
                    </div>

                    <p className="relative mx-auto max-w-[76rem] font-serif text-base leading-8 tracking-[0.01em] text-[var(--sirko-ink-muted)] sm:text-lg md:text-xl md:leading-9 lg:text-[22px]">
                        {locale.home.intro.paragraph2}
                    </p>
                </div>
            </motion.div>
        </section>
    );
};