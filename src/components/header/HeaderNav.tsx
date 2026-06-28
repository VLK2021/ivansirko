"use client";

import {HEADER_NAV_ITEMS} from "@/src/constants/header";
import {useLanguage} from "@/src/context";

import {HeaderNavLink} from "./HeaderNavLink";

export const HeaderNav = () => {
    const {locale} = useLanguage();

    return (
        <nav className="flex items-center gap-2">
            {HEADER_NAV_ITEMS.map((item) => (
                <HeaderNavLink
                    key={item.href}
                    href={item.href}
                    label={locale.header.nav[item.key]}
                />
            ))}
        </nav>
    );
};