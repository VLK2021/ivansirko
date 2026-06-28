"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect, useState} from "react";

import {HEADER_NAV_ITEMS} from "@/src/constants/header";
import {useLanguage} from "@/src/context";

export const HeaderMobileMenu = () => {
    const {locale} = useLanguage();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <div className="xl:hidden">
            <button
                type="button"
                aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={isOpen}
                onClick={() => setIsOpen((value) => !value)}
                className="relative z-[80] flex size-11 items-center justify-center rounded-full border border-[var(--sirko-gold-pale)] bg-[var(--sirko-wood-950)] !text-[var(--sirko-gold-pale)] shadow-[0_0_28px_rgba(255,232,176,0.22)] transition hover:bg-[var(--sirko-bronze)] hover:!text-[var(--sirko-wood-950)]"
            >
                <span className="relative flex size-5 flex-col justify-center gap-1.5">
                    <span className={`h-0.5 w-full rounded-full bg-current transition ${isOpen ? "translate-y-2 rotate-45" : ""}`} />
                    <span className={`h-0.5 w-full rounded-full bg-current transition ${isOpen ? "opacity-0" : ""}`} />
                    <span className={`h-0.5 w-full rounded-full bg-current transition ${isOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                </span>
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-[70] bg-[rgba(9,3,1,0.78)] backdrop-blur-md">
                    <div className="absolute right-4 top-24 w-[min(360px,calc(100vw-2rem))] border border-[var(--sirko-bronze)] bg-[linear-gradient(180deg,var(--sirko-wood-900)_0%,var(--sirko-wood-950)_100%)] p-5 shadow-[0_30px_100px_rgba(0,0,0,0.7)]">
                        <p className="mb-5 font-serif text-xs font-black uppercase tracking-[0.24em] !text-[var(--sirko-gold)]">
                            {locale.header.menu}
                        </p>

                        <nav className="flex flex-col gap-3">
                            {HEADER_NAV_ITEMS.map((item) => {
                                const isActive = pathname === item.href;

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className={`border px-4 py-3 font-serif text-sm font-black uppercase tracking-[0.16em] transition ${
                                            isActive
                                                ? "border-[var(--sirko-gold-pale)] bg-[var(--sirko-bronze)] !text-[var(--sirko-wood-950)] shadow-[0_0_26px_rgba(255,232,176,0.22)]"
                                                : "border-[rgba(255,232,176,0.32)] bg-[rgba(255,232,176,0.08)] !text-[var(--sirko-gold-pale)] hover:border-[var(--sirko-gold-pale)] hover:bg-[var(--sirko-gold-pale)] hover:!text-[var(--sirko-wood-950)]"
                                        }`}
                                    >
                                        {locale.header.nav[item.key]}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            )}
        </div>
    );
};