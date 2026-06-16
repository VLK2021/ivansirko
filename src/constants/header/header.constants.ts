export type HeaderNavKey =
    | "home"
    | "biography"
    | "military"
    | "documents"
    | "gallery"
    | "legends"
    | "legacy";

export type HeaderNavItem = {
    key: HeaderNavKey;
    href: string;
};

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
    {
        key: "home",
        href: "/",
    },
    {
        key: "biography",
        href: "/biography",
    },
    {
        key: "military",
        href: "/military",
    },
    {
        key: "documents",
        href: "/documents",
    },
    {
        key: "gallery",
        href: "/gallery",
    },
    {
        key: "legends",
        href: "/legends",
    },
    {
        key: "legacy",
        href: "/legacy",
    },
];