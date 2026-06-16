import Link from "next/link";

import {ParchmentCard} from "@/src/common/parchment-card";

import {FeatureCardIcon} from "./FeatureCardIcon";

type FeatureCardProps = {
    title: string;
    description: string;
    href: string;
    icon: string;
};

export const FeatureCard = ({
                                title,
                                description,
                                href,
                                icon,
                            }: FeatureCardProps) => {
    return (
        <Link href={href} className="block h-full">
            <ParchmentCard
                interactive
                className="h-full min-h-[175px]"
                innerClassName="flex h-full flex-col items-center justify-center px-4 py-5 text-center"
            >
                <FeatureCardIcon src={icon} />

                <div className="mb-3 mt-1 h-px w-16 bg-gradient-to-r from-transparent via-[rgba(88,42,14,0.45)] to-transparent" />

                <h3 className="font-serif text-[15px] font-black uppercase tracking-[0.1em] text-[var(--sirko-ink)]">
                    {title}
                </h3>

                <p className="mt-2 max-w-[230px] font-serif text-[13px] leading-5 text-[var(--sirko-ink-muted)]">
                    {description}
                </p>
            </ParchmentCard>
        </Link>
    );
};