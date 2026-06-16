import Link from "next/link";

import {ParchmentCard} from "@/src/common/parchment-card";
import type {FeatureCardType} from "@/src/constants/home/feature-cards.constants";

import {FeatureCardIcon} from "./FeatureCardIcon";

type FeatureCardProps = {
    type: FeatureCardType;
    title: string;
    description: string;
    actionLabel: string;
    href: string;
};

export const FeatureCard = ({
                                type,
                                title,
                                description,
                                actionLabel,
                                href,
                            }: FeatureCardProps) => {
    return (
        <ParchmentCard
            interactive
            className="h-full min-h-[210px]"
            innerClassName="flex h-full flex-col items-center justify-between px-5 py-7 text-center"
        >
            <div className="flex flex-col items-center">
                <FeatureCardIcon
                    type={type}
                    className="mb-4 h-12 w-12 text-[var(--sirko-bronze)]"
                />

                <h3 className="font-serif text-lg font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)]">
                    {title}
                </h3>

                <p className="mt-3 max-w-[230px] text-sm leading-6 text-[var(--sirko-ink-muted)]">
                    {description}
                </p>
            </div>

            <Link
                href={href}
                className="mt-6 inline-flex min-h-10 items-center justify-center border border-[rgba(90,43,16,0.48)] bg-[linear-gradient(180deg,#a85f24_0%,#652d0f_100%)] px-5 text-xs font-black uppercase tracking-[0.14em] text-[var(--sirko-gold-pale)] shadow-[0_10px_22px_rgba(55,24,7,0.22)] transition duration-300 hover:-translate-y-0.5 hover:brightness-110"
            >
                {actionLabel}
            </Link>
        </ParchmentCard>
    );
};