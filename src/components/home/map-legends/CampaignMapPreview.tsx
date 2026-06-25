"use client";

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

import {ParchmentCard} from "@/src/common/parchment-card";

type CampaignMapPreviewProps = {
    locale: {
        title: string;
        action: string;
    };
};

const MotionLink = motion(Link);

export const CampaignMapPreview = ({locale}: CampaignMapPreviewProps) => {
    return (
        <ParchmentCard
            interactive
            className="h-full min-h-[360px]"
            innerClassName="relative h-full overflow-hidden px-5 py-5"
        >
            <div className="relative h-full min-h-[320px] overflow-hidden">
                <motion.div
                    initial={{scale: 1.03, opacity: 0}}
                    whileInView={{scale: 1, opacity: 1}}
                    viewport={{once: true, amount: 0.35}}
                    transition={{duration: 0.7, ease: "easeOut"}}
                    className="absolute inset-0"
                >
                    <Image
                        src="/images/sirko/maps/campaign-map.png"
                        alt=""
                        fill
                        sizes="(max-width: 1024px) 100vw, 55vw"
                        className="object-cover opacity-95 transition duration-700 group-hover:scale-[1.035]"
                    />
                </motion.div>

                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,transparent_38%,rgba(48,21,6,0.22)_100%)]" />

                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,238,188,0.12),rgba(72,31,9,0.18))]" />

                <div className="relative z-10 flex h-full min-h-[320px] flex-col items-center justify-between py-3 text-center">
                    <h3 className="font-serif text-2xl font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)] drop-shadow-[0_2px_8px_rgba(255,236,180,0.35)]">
                        {locale.title}
                    </h3>

                    {/*<MotionLink*/}
                    {/*    href="/campaigns-map"*/}
                    {/*    whileHover={{scale: 1.04}}*/}
                    {/*    whileTap={{scale: 0.98}}*/}
                    {/*    className="inline-flex min-h-11 items-center justify-center border border-[rgba(74,34,10,0.72)] bg-[linear-gradient(180deg,#8f4518_0%,#4f2109_100%)] px-8 font-serif text-sm font-black uppercase tracking-[0.1em] text-[var(--sirko-gold-pale)] shadow-[0_12px_24px_rgba(55,24,7,0.32)] transition duration-300 hover:brightness-110 hover:shadow-[0_0_26px_rgba(196,147,54,0.25)]"*/}
                    {/*>*/}
                    {/*    {locale.action}*/}
                    {/*</MotionLink>*/}
                </div>
            </div>
        </ParchmentCard>
    );
};