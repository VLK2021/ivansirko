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
                className="h-full min-h-[270px]"
                innerClassName="
                    flex
                    h-full
                    flex-col
                    items-center
                    justify-center
                    px-5
                    py-6
                    text-center
                "
            >
                <FeatureCardIcon src={icon} />

                <div className="mb-4 h-px w-20 bg-gradient-to-r from-transparent via-[rgba(88,42,14,0.55)] to-transparent" />

                <h3
                    className="
                        font-serif
                        text-[18px]
                        font-black
                        uppercase
                        leading-tight
                        tracking-[0.08em]
                        text-[var(--sirko-ink)]
                        sm:text-[20px]
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                        mt-3
                        max-w-[250px]
                        font-serif
                        text-[14px]
                        leading-6
                        text-[var(--sirko-ink-muted)]
                        sm:text-[15px]
                    "
                >
                    {description}
                </p>
            </ParchmentCard>
        </Link>
    );
};