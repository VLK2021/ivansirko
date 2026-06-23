"use client";

import {motion, useScroll, useTransform} from "framer-motion";
import {useRef} from "react";
import {
    LegacyLanguage,
    LegacySection as LegacySectionType,
} from "@/src/types/legacy";

type LegacySectionProps = {
    item: LegacySectionType;
    currentLang: LegacyLanguage;
};

export const LegacySection = ({
                                  item,
                                  currentLang,
                              }: LegacySectionProps) => {
    const ref = useRef<HTMLElement>(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
    const imageScale = useTransform(scrollYProgress, [0, 1], [1.12, 1]);
    const numberY = useTransform(scrollYProgress, [0, 1], [120, -120]);
    const textY = useTransform(scrollYProgress, [0, 1], [70, -70]);

    const isReversed = item.order % 2 === 0;

    const title = currentLang === "en" ? item.titleEn : item.titleUk;
    const subtitle = currentLang === "en" ? item.subtitleEn : item.subtitleUk;
    const content = currentLang === "en" ? item.contentEn : item.contentUk;

    return (
        <section
            ref={ref}
            className="relative min-h-screen overflow-hidden border-y border-[#9b6a2c]/35"
        >
            <motion.div
                style={{y: imageY, scale: imageScale}}
                className="absolute inset-0"
            >
                <img
                    src={item.image}
                    alt={title}
                    className="h-full w-full object-cover"
                />
            </motion.div>

            <div
                className={`absolute inset-0 ${
                    isReversed
                        ? "bg-[linear-gradient(270deg,rgba(18,7,1,0.96),rgba(18,7,1,0.72)_42%,rgba(18,7,1,0.18))]"
                        : "bg-[linear-gradient(90deg,rgba(18,7,1,0.96),rgba(18,7,1,0.72)_42%,rgba(18,7,1,0.18))]"
                }`}
            />

            <motion.div
                style={{y: numberY}}
                className={`pointer-events-none absolute top-16 hidden text-[220px] font-semibold leading-none tracking-[-0.08em] text-[#f7d78a]/10 lg:block ${
                    isReversed ? "left-12" : "right-12"
                }`}
            >
                {String(item.order).padStart(2, "0")}
            </motion.div>

            <div
                className={`relative z-10 flex min-h-screen items-center px-5 py-24 sm:px-8 lg:px-16 ${
                    isReversed ? "justify-end" : "justify-start"
                }`}
            >
                <motion.article
                    style={{y: textY}}
                    initial={{opacity: 0, x: isReversed ? 80 : -80}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true, amount: 0.28}}
                    transition={{duration: 0.9}}
                    className="relative max-w-2xl border border-[#d8b16a]/45 bg-[#120701]/78 p-6 shadow-[0_35px_130px_rgba(0,0,0,0.55)] backdrop-blur-md sm:p-9 lg:p-11"
                >
                    <div className="absolute -left-3 -top-3 h-20 w-20 border-l border-t border-[#d8b16a]/70" />
                    <div className="absolute -bottom-3 -right-3 h-20 w-20 border-b border-r border-[#d8b16a]/70" />

                    <p className="mb-5 text-[11px] font-black uppercase tracking-[0.32em] text-[#d8b16a]">
                        Legacy / {String(item.order).padStart(2, "0")}
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight text-[#f7d78a] sm:text-5xl">
                        {title}
                    </h2>

                    <p className="mt-6 border-l-2 border-[#d8b16a] pl-5 text-lg font-semibold leading-8 text-[#ead39a]">
                        {subtitle}
                    </p>

                    <div className="mt-7 space-y-5 text-base leading-8 text-[#f6e1ad]">
                        {content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </motion.article>
            </div>
        </section>
    );
};