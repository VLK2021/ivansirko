"use client";

import Link from "next/link";

import {useLanguage} from "@/src/context";

const TELEGRAM_URL = "https://t.me/YOUR_TELEGRAM";

export const Footer = () => {
    const {locale} = useLanguage();

    return (
        <footer className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[linear-gradient(180deg,#1a0a03_0%,#090301_100%)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,147,54,0.12),transparent_45%)]" />

            <div className="relative z-10 mx-auto flex max-w-[92rem] flex-col gap-8 px-5 py-9 text-center md:px-8 lg:flex-row lg:items-center lg:justify-between lg:text-left">
                <div className="max-w-[620px]">
                    <p className="font-serif text-lg font-black uppercase tracking-[0.18em] text-[var(--sirko-gold-pale)]">
                        {locale.footer.projectTitle}
                    </p>

                    <p className="mt-4 font-serif text-base leading-7 text-[rgba(255,232,176,0.68)]">
                        {locale.footer.description}
                    </p>
                </div>

                <div className="flex flex-col items-center gap-4 lg:items-center">
                    <p className="font-serif text-xs font-black uppercase tracking-[0.22em] text-[var(--sirko-bronze)]">
                        {locale.footer.navigationTitle}
                    </p>

                    <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3 font-serif text-base text-[rgba(255,232,176,0.72)]">
                        <Link href="/biography" className="transition hover:text-[var(--sirko-gold-pale)]">
                            {locale.footer.links.biography}
                        </Link>

                        <Link href="/military" className="transition hover:text-[var(--sirko-gold-pale)]">
                            {locale.footer.links.campaigns}
                        </Link>

                        <Link href="/gallery" className="transition hover:text-[var(--sirko-gold-pale)]">
                            {locale.footer.links.gallery}
                        </Link>
                    </nav>
                </div>

                <div className="min-w-[300px] lg:text-right">
                    <p className="font-serif text-xs font-black uppercase tracking-[0.22em] text-[var(--sirko-bronze)]">
                        {locale.footer.developerTitle}
                    </p>

                    <p className="mt-4 font-serif text-base leading-7 text-[rgba(255,232,176,0.72)]">
                        {locale.footer.developedBy}{" "}
                        <span className="font-black text-[var(--sirko-gold-pale)]">
                            {locale.footer.developerName}
                        </span>
                    </p>

                    <Link
                        href={TELEGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block font-serif text-sm font-black uppercase tracking-[0.16em] text-[var(--sirko-bronze)] transition hover:text-[var(--sirko-gold-pale)]"
                    >
                        {locale.footer.telegram}
                    </Link>

                    <p className="mt-4 font-serif text-sm text-[rgba(255,232,176,0.5)]">
                        © {locale.footer.year}. {locale.footer.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
};