"use client";

import Link from "next/link";

import {useLanguage} from "@/src/context";

const TELEGRAM_URL = "https://t.me/YOUR_TELEGRAM";

export const Footer = () => {
    const {locale} = useLanguage();

    return (
        <footer className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden bg-[linear-gradient(180deg,#1b0b03_0%,#0f0502_100%)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(196,147,54,0.12),transparent_42%)]" />

            <div className="relative z-10 mx-auto grid max-w-[92rem] grid-cols-1 gap-8 px-5 py-8 text-center md:grid-cols-[1.2fr_1fr_1fr] md:px-8 md:text-left">
                <div>
                    <p className="font-serif text-base font-black uppercase tracking-[0.16em] text-[var(--sirko-gold-pale)]">
                        {locale.footer.projectTitle}
                    </p>

                    <p className="mt-3 max-w-[560px] font-serif text-sm leading-6 text-[rgba(255,232,176,0.62)]">
                        {locale.footer.description}
                    </p>
                </div>

                <div>
                    <p className="font-serif text-xs font-black uppercase tracking-[0.18em] text-[var(--sirko-bronze)]">
                        {locale.footer.navigationTitle}
                    </p>

                    <nav className="mt-3 flex flex-col gap-2 font-serif text-sm text-[rgba(255,232,176,0.68)]">
                        <Link href="/biography" className="transition hover:text-[var(--sirko-gold-pale)]">
                            {locale.footer.links.biography}
                        </Link>
                        <Link href="/military/battles" className="transition hover:text-[var(--sirko-gold-pale)]">
                            {locale.footer.links.battles}
                        </Link>
                        <Link href="/military/campaigns" className="transition hover:text-[var(--sirko-gold-pale)]">
                            {locale.footer.links.campaigns}
                        </Link>
                        <Link href="/gallery" className="transition hover:text-[var(--sirko-gold-pale)]">
                            {locale.footer.links.gallery}
                        </Link>
                    </nav>
                </div>

                <div className="md:text-right">
                    <p className="font-serif text-xs font-black uppercase tracking-[0.18em] text-[var(--sirko-bronze)]">
                        {locale.footer.developerTitle}
                    </p>

                    <p className="mt-3 font-serif text-sm text-[rgba(255,232,176,0.68)]">
                        {locale.footer.developedBy}{" "}
                        <span className="text-[var(--sirko-gold-pale)]">
                            {locale.footer.developerName}
                        </span>
                    </p>

                    <Link
                        href={TELEGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block font-serif text-sm font-black uppercase tracking-[0.12em] text-[var(--sirko-bronze)] transition hover:text-[var(--sirko-gold-pale)]"
                    >
                        {locale.footer.telegram}
                    </Link>

                    <p className="mt-3 font-serif text-xs text-[rgba(255,232,176,0.46)]">
                        © {locale.footer.year}. {locale.footer.rights}
                    </p>
                </div>
            </div>
        </footer>
    );
};