"use client";

import Image from "next/image";
import Link from "next/link";
import {motion} from "framer-motion";

import {ParchmentCard} from "@/src/common/parchment-card";
import {OVERVIEW_LINKS} from "@/src/constants/home/overview-cards.constants";

type MilitaryPreviewCardProps = {
    locale: {
        battles: {
            title: string;
            subtitle: string;
            items: string[];
            action: string;
        };
        campaigns: {
            title: string;
            subtitle: string;
            items: string[];
            action: string;
        };
    };
};

type MilitaryColumnProps = {
    icon: "sabers" | "flag";
    title: string;
    subtitle: string;
    items: string[];
    action: string;
    href: string;
};

const MotionLink = motion(Link);

const MilitaryColumn = ({
                            icon,
                            title,
                            subtitle,
                            items,
                            action,
                            href,
                        }: MilitaryColumnProps) => {
    return (
        <div className="flex h-full min-h-[260px] flex-col items-center justify-between text-center">
            <div className="flex flex-col items-center">
                {icon === "sabers" ? (
                    <motion.div
                        whileHover={{scale: 1.08}}
                        transition={{duration: 0.25, ease: "easeOut"}}
                        className="relative mb-3 h-16 w-16"
                    >
                        <Image
                            src="/images/sirko/icons/military.png"
                            alt=""
                            fill
                            sizes="64px"
                            className="object-contain drop-shadow-[0_10px_18px_rgba(55,24,7,0.38)]"
                        />
                    </motion.div>
                ) : (
                    <motion.div
                        whileHover={{scale: 1.08, x: 2}}
                        transition={{duration: 0.25, ease: "easeOut"}}
                        className="mb-3 text-[48px] leading-none text-[var(--sirko-bronze)] drop-shadow-[0_8px_14px_rgba(55,24,7,0.3)]"
                    >
                        ⚑
                    </motion.div>
                )}

                <h3 className="font-serif text-2xl font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)]">
                    {title}
                </h3>

                <p className="mt-2 max-w-[260px] font-serif text-base leading-6 text-[var(--sirko-ink-muted)]">
                    {subtitle}
                </p>

                <div className="my-4 h-px w-28 bg-gradient-to-r from-transparent via-[rgba(88,42,14,0.5)] to-transparent" />

                <ol className="space-y-2 text-left font-serif text-base leading-6 text-[var(--sirko-ink)]">
                    {items.map((item, index) => (
                        <li key={item}>
                            {index + 1}. {item}
                        </li>
                    ))}
                </ol>
            </div>

            <MotionLink
                whileHover={{scale: 1.04}}
                whileTap={{scale: 0.98}}
                href={href}
                className="mt-6 inline-flex min-h-11 items-center justify-center border border-[rgba(91,43,14,0.58)] bg-[rgba(255,232,170,0.08)] px-9 font-serif text-sm font-black uppercase tracking-[0.1em] text-[var(--sirko-ink)] transition duration-300 hover:bg-[rgba(255,230,170,0.2)] hover:shadow-[0_0_22px_rgba(196,147,54,0.22)]"
            >
                {action}
            </MotionLink>
        </div>
    );
};

export const MilitaryPreviewCard = ({locale}: MilitaryPreviewCardProps) => {
    return (
        <ParchmentCard
            interactive
            className="h-full min-h-[360px]"
            innerClassName="grid h-full grid-cols-1 gap-8 px-6 py-8 md:grid-cols-[1fr_auto_1fr] md:gap-8 md:px-8"
        >
            <MilitaryColumn
                icon="sabers"
                title={locale.battles.title}
                subtitle={locale.battles.subtitle}
                items={locale.battles.items}
                action={locale.battles.action}
                href={OVERVIEW_LINKS.battles}
            />

            <div className="hidden h-full w-px bg-gradient-to-b from-transparent via-[rgba(91,43,14,0.34)] to-transparent md:block" />

            <MilitaryColumn
                icon="flag"
                title={locale.campaigns.title}
                subtitle={locale.campaigns.subtitle}
                items={locale.campaigns.items}
                action={locale.campaigns.action}
                href={OVERVIEW_LINKS.campaigns}
            />
        </ParchmentCard>
    );
};