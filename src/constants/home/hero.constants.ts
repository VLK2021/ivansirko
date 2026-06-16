export type HeroActionKey = "biography" | "military" | "documents";

export type HeroAction = {
    key: HeroActionKey;
    href: string;
    variant: "primary" | "secondary";
};

export const HERO_ACTIONS: HeroAction[] = [
    {
        key: "biography",
        href: "/biography",
        variant: "primary",
    },
    {
        key: "military",
        href: "/military",
        variant: "secondary",
    },
    {
        key: "documents",
        href: "/documents",
        variant: "secondary",
    },
];