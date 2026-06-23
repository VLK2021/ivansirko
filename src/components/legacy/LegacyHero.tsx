"use client";

import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";

type LegacyHeroProps = {
    eyebrow: string;
    title: string;
    description: string;
};

export const LegacyHero = ({eyebrow, title, description}: LegacyHeroProps) => {
    const ref = useRef<HTMLElement>(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
    const contentY = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

    return (
        <section
            ref={ref}
            className="relative mb-24 overflow-hidden border-b border-[#9b6a2c]/50 bg-[#120701] lg:min-h-screen"
        >
            <motion.div
                style={{scale: imageScale}}
                className="absolute inset-0 hidden bg-[url('/images/legacy/legacy-hero.jpg')] bg-cover bg-center lg:block"
            />

            <div className="relative z-0 block lg:hidden">
                <img
                    src="/images/legacy/legacy-hero.jpg"
                    alt=""
                    className="h-auto w-full"
                />
                <div className="absolute inset-0 bg-[#120701]/55" />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,7,1,0.95),rgba(18,7,1,0.62)_42%,rgba(18,7,1,0.2))]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(216,177,106,0.26),transparent_34%)]" />

            <motion.div
                style={{y: contentY, opacity}}
                className="relative z-10 flex min-h-[70vh] items-center px-5 py-20 sm:px-8 lg:min-h-screen lg:px-16 lg:py-28"
            >
                <div className="max-w-6xl">
                    <motion.p
                        initial={{opacity: 0, y: 24}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.7}}
                        className="mb-8 inline-flex border border-[#d8b16a] bg-[#94551f] px-5 py-2 text-[11px] font-black uppercase tracking-[0.36em] text-[#160903]"
                    >
                        {eyebrow}
                    </motion.p>

                    <motion.h1
                        initial={{opacity: 0, y: 44}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.9, delay: 0.1}}
                        className="max-w-5xl text-5xl font-semibold leading-[0.9] tracking-[-0.05em] text-[#f7d78a] sm:text-7xl lg:text-[150px] lg:leading-[0.86]"
                    >
                        {title}
                    </motion.h1>

                    <motion.p
                        initial={{opacity: 0, y: 36}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.9, delay: 0.22}}
                        className="mt-8 max-w-3xl text-base leading-8 text-[#ead39a] sm:text-xl sm:leading-9"
                    >
                        {description}
                    </motion.p>
                </div>
            </motion.div>
        </section>
    );
};