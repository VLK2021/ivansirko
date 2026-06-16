"use client";

import Link from "next/link";
import {motion} from "framer-motion";

import {ParchmentCard} from "@/src/common/parchment-card";
import {
    OVERVIEW_LINKS,
    TIMELINE_PREVIEW_EVENTS,
} from "@/src/constants/home/overview-cards.constants";

type TimelinePreviewCardProps = {
    locale: {
        title: string;
        action: string;
        events: Record<string, string>;
    };
};

const MotionLink = motion(Link);

export const TimelinePreviewCard = ({locale}: TimelinePreviewCardProps) => {
    return (
        <ParchmentCard
            interactive
            className="h-full min-h-[360px]"
            innerClassName="flex h-full flex-col px-6 py-8 sm:px-8"
        >
            <h3 className="text-center font-serif text-2xl font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)]">
                {locale.title}
            </h3>

            <div className="relative mt-8">
                <motion.div
                    initial={{scaleX: 0}}
                    whileInView={{scaleX: 1}}
                    viewport={{once: true, amount: 0.4}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                    className="absolute left-[8%] right-[8%] top-[13px] h-px origin-left bg-gradient-to-r from-[rgba(82,39,13,0.2)] via-[rgba(120,68,27,0.72)] to-[rgba(82,39,13,0.2)]"
                />

                <div className="grid grid-cols-5 gap-2">
                    {TIMELINE_PREVIEW_EVENTS.map((event, index) => (
                        <motion.div
                            key={event.year}
                            initial={{opacity: 0, y: 12}}
                            whileInView={{opacity: 1, y: 0}}
                            whileHover="hover"
                            viewport={{once: true, amount: 0.4}}
                            transition={{duration: 0.38, delay: index * 0.08}}
                            className="relative flex cursor-default flex-col items-center text-center"
                        >
                            <motion.span
                                variants={{
                                    hover: {
                                        opacity: 1,
                                        scale: 1.15,
                                    },
                                }}
                                transition={{duration: 0.25}}
                                className="pointer-events-none absolute top-[-14px] h-14 w-14 rounded-full bg-[radial-gradient(circle,rgba(196,147,54,0.32)_0%,transparent_70%)] opacity-0"
                            />

                            <motion.span
                                variants={{
                                    hover: {
                                        scale: 1.18,
                                        boxShadow:
                                            "0 0 24px rgba(196,147,54,0.72)",
                                    },
                                }}
                                transition={{duration: 0.2}}
                                className="relative z-10 h-7 w-7 rounded-full border border-[rgba(86,40,12,0.68)] bg-[linear-gradient(180deg,#d9a75a,#713613)] shadow-[0_0_0_4px_rgba(255,230,170,0.14)]"
                            />

                            <motion.span
                                variants={{
                                    hover: {
                                        scale: 1.12,
                                        color: "var(--sirko-bronze-dark)",
                                        textShadow:
                                            "0 0 12px rgba(196,147,54,0.55)",
                                    },
                                }}
                                transition={{duration: 0.2}}
                                className="mt-4 font-serif text-base font-black text-[var(--sirko-ink)]"
                            >
                                {event.year}
                            </motion.span>

                            <motion.span
                                variants={{
                                    hover: {
                                        color: "var(--sirko-ink-soft)",
                                    },
                                }}
                                transition={{duration: 0.2}}
                                className="mt-2 max-w-[130px] font-serif text-sm leading-5 text-[var(--sirko-ink-muted)]"
                            >
                                {locale.events[event.titleKey]}
                            </motion.span>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="mt-auto flex justify-center pt-8">
                <MotionLink
                    whileHover={{scale: 1.04}}
                    whileTap={{scale: 0.98}}
                    href={OVERVIEW_LINKS.timeline}
                    className="inline-flex min-h-12 items-center justify-center border border-[rgba(74,34,10,0.68)] bg-[linear-gradient(180deg,#8f4518_0%,#4f2109_100%)] px-10 font-serif text-sm font-black uppercase tracking-[0.1em] text-[var(--sirko-gold-pale)] shadow-[0_12px_24px_rgba(55,24,7,0.28)] transition duration-300 hover:brightness-110 hover:shadow-[0_0_26px_rgba(196,147,54,0.24)]"
                >
                    {locale.action}
                </MotionLink>
            </div>
        </ParchmentCard>
    );
};