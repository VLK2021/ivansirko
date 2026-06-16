"use client";

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

import {ParchmentCard} from "@/src/common/parchment-card";

type LegendFactItem = {
    title: string;
    text: string;
};

type LegendsFactsPreviewProps = {
    locale: {
        title: string;
        action: string;
        items: LegendFactItem[];
    };
};

const ICONS = [
    "/images/sirko/icons/otaman.png",
    "/images/sirko/icons/legends1.png",
    "/images/sirko/icons/doc1.png",
];

const MotionLink = motion(Link);

export const LegendsFactsPreview = ({locale}: LegendsFactsPreviewProps) => {
    return (
        <ParchmentCard
            interactive
            className="h-full min-h-[360px]"
            innerClassName="flex h-full flex-col px-6 py-7 sm:px-8"
        >
            <h3 className="text-center font-serif text-2xl font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)]">
                {locale.title}
            </h3>

            <div className="mt-7 space-y-6">
                {locale.items.map((item, index) => (
                    <motion.div
                        key={item.title}
                        initial={{opacity: 0, x: 18}}
                        whileInView={{opacity: 1, x: 0}}
                        whileHover="hover"
                        viewport={{once: true, amount: 0.35}}
                        transition={{duration: 0.4, delay: index * 0.08}}
                        className="group grid grid-cols-[64px_1fr] gap-4"
                    >
                        <motion.div
                            variants={{
                                hover: {
                                    scale: 1.08,
                                    filter: "drop-shadow(0 0 14px rgba(196,147,54,0.48))",
                                },
                            }}
                            transition={{duration: 0.22}}
                            className="relative h-14 w-14 self-start"
                        >
                            <Image
                                src={ICONS[index] ?? ICONS[0]}
                                alt=""
                                fill
                                sizes="56px"
                                className="object-contain drop-shadow-[0_8px_16px_rgba(55,24,7,0.34)]"
                            />
                        </motion.div>

                        <div>
                            <h4 className="font-serif text-base font-black uppercase tracking-[0.07em] text-[var(--sirko-ink)] transition duration-300 group-hover:text-[var(--sirko-bronze-dark)]">
                                {item.title}
                            </h4>

                            <p className="mt-1 font-serif text-sm leading-6 text-[var(--sirko-ink-muted)] transition duration-300 group-hover:text-[var(--sirko-ink-soft)]">
                                {item.text}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-auto flex justify-center pt-7">
                <MotionLink
                    href="/legends"
                    whileHover={{scale: 1.04}}
                    whileTap={{scale: 0.98}}
                    className="inline-flex min-h-11 items-center justify-center border border-[rgba(91,43,14,0.58)] bg-[rgba(255,232,170,0.08)] px-8 font-serif text-sm font-black uppercase tracking-[0.1em] text-[var(--sirko-ink)] transition duration-300 hover:bg-[rgba(255,230,170,0.2)] hover:shadow-[0_0_22px_rgba(196,147,54,0.22)]"
                >
                    {locale.action}
                </MotionLink>
            </div>
        </ParchmentCard>
    );
};