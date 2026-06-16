"use client";

import Link from "next/link";

import {useLanguage} from "@/src/context";

export const HeaderLogo = () => {
    const {locale} = useLanguage();

    return (
        <Link href="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--sirko-gold)] bg-[rgba(0,0,0,0.22)] font-serif text-2xl text-[var(--sirko-gold-soft)] shadow-lg">
                I
            </div>

            <div className="leading-none">
                <p className="sirko-heading text-lg font-bold uppercase tracking-[0.12em] text-[var(--sirko-gold-pale)]">
                    {locale.header.logoTitle}
                </p>

                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-[rgba(255,238,190,0.62)]">
                    {locale.header.logoSubtitle}
                </p>
            </div>
        </Link>
    );
};