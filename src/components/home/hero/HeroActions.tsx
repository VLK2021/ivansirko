import Link from "next/link";

import {HERO_ACTIONS} from "@/src/constants/home";
import type {HeroActionKey} from "@/src/constants/home";

type HeroActionsProps = {
    labels: Record<HeroActionKey, string>;
};

export const HeroActions = ({labels}: HeroActionsProps) => {
    return (
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
            {HERO_ACTIONS.map((action) => (
                <Link
                    key={action.href}
                    href={action.href}
                    className={
                        action.variant === "primary"
                            ? "inline-flex min-h-12 items-center justify-center border border-[rgba(61,29,9,0.72)] bg-gradient-to-b from-[#a85f24] to-[#632c0e] px-7 text-xs font-black uppercase tracking-[0.1em] text-[#ffedbd] shadow-[0_14px_28px_rgba(55,25,8,0.28)] transition hover:-translate-y-0.5 hover:brightness-105"
                            : "inline-flex min-h-12 items-center justify-center border border-[rgba(61,29,9,0.52)] bg-gradient-to-b from-[#f9e8bd] to-[#d6ad63] px-7 text-xs font-black uppercase tracking-[0.1em] text-[var(--sirko-ink)] shadow-[0_14px_28px_rgba(55,25,8,0.16)] transition hover:-translate-y-0.5 hover:brightness-105"
                    }
                >
                    {labels[action.key]}
                </Link>
            ))}
        </div>
    );
};