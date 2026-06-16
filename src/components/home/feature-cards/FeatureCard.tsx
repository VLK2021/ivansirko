import Link from "next/link";

import {ParchmentCard} from "@/src/common/parchment-card";
import type {FeatureCardType} from "@/src/constants/home/feature-cards.constants";

import {FeatureCardIcon} from "./FeatureCardIcon";

type FeatureCardProps = {
    type: FeatureCardType;
    title: string;
    description: string;
    href: string;
};

export const FeatureCard = ({type, title, description, href}: FeatureCardProps) => {
    return (
        <Link href={href} className="block h-full">
            <ParchmentCard
                interactive
                className="h-full min-h-[155px]"
                innerClassName="flex h-full flex-col items-center justify-center px-4 py-6 text-center"
            >
                <FeatureCardIcon
                    type={type}
                    className="mb-3 h-10 w-10 text-[var(--sirko-bronze)] drop-shadow-[0_4px_10px_rgba(80,36,12,0.25)]"
                />

                <h3 className="font-serif text-[15px] font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)]">
                    {title}
                </h3>

                <p className="mt-2 max-w-[220px] font-serif text-[13px] leading-5 text-[var(--sirko-ink-muted)]">
                    {description}
                </p>
            </ParchmentCard>
        </Link>
    );
};