export type HeaderNavKey =
    | "home"
    | "biography"
    | "timeline"
    | "battles"
    | "campaigns"
    | "siches"
    | "gallery"
    | "documents"
    | "legends"
    | "legacy";

export type HeaderNavItem = {
    key: HeaderNavKey;
    href: string;
};

export const HEADER_NAV_ITEMS: HeaderNavItem[] = [
    {key: "home", href: "/"},
    {key: "biography", href: "/biography"},
    {key: "timeline", href: "/timeline"},
    {key: "battles", href: "/battles"},
    {key: "campaigns", href: "/campaigns"},
    {key: "siches", href: "/siches"},
    {key: "gallery", href: "/gallery"},
    {key: "documents", href: "/documents"},
    {key: "legends", href: "/legends"},
    {key: "legacy", href: "/legacy"},
];