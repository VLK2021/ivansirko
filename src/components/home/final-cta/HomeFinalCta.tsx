"use client";

import Image from "next/image";
import {motion} from "framer-motion";

import {useLanguage} from "@/src/context";

import {FinalCtaButton} from "./FinalCtaButton";

export const HomeFinalCta = () => {
    const {locale} = useLanguage();

    return (
        <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
            <motion.div
                initial={{opacity: 0, y: 22}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true, amount: 0.3}}
                transition={{duration: 0.65, ease: "easeOut"}}
                className="relative min-h-[310px] w-full overflow-hidden"
            >
                <Image
                    src="/images/sirko/final-cta/final-cta-background.png"
                    alt=""
                    fill
                    sizes="100vw"
                    className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(120,65,24,0.24),transparent_48%),linear-gradient(180deg,rgba(17,7,2,0.16),rgba(17,7,2,0.34))]" />

                <div className="relative z-10 mx-auto flex min-h-[310px] max-w-[92rem] flex-col items-center justify-center px-5 py-10 text-center sm:px-6 lg:px-8">
                    <h2 className="font-serif text-2xl font-black uppercase tracking-[0.08em] text-[var(--sirko-gold-pale)] sm:text-3xl md:text-4xl">
                        {locale.home.finalCta.title}
                    </h2>

                    <p className="mt-3 max-w-[980px] font-serif text-base font-bold leading-7 text-[rgba(255,232,176,0.86)] sm:text-lg md:text-xl">
                        {locale.home.finalCta.subtitle}
                    </p>

                    <div className="mt-8 grid w-full max-w-[1180px] grid-cols-1 gap-5 md:grid-cols-3">
                        {locale.home.finalCta.links.map((link) => (
                            <FinalCtaButton
                                key={link.href}
                                href={link.href}
                                title={link.title}
                                subtitle={link.subtitle}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
};