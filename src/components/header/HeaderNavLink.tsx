"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

type HeaderNavLinkProps = {
    href: string;
    label: string;
};

export const HeaderNavLink = ({href, label}: HeaderNavLinkProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`
                relative rounded-sm border px-3 py-2
                text-[11px] font-black uppercase tracking-[0.18em]
                outline-none transition-all duration-200
                ${
                isActive
                    ? "border-[var(--sirko-gold)] bg-[rgba(196,147,54,0.22)] !text-[#fff1b8]"
                    : "border-transparent !text-[#f7d77f] hover:border-[rgba(228,193,106,0.45)] hover:bg-[rgba(228,193,106,0.12)] hover:!text-[#fff4c9]"
            }
            `}
        >
            {label}
        </Link>
    );
};