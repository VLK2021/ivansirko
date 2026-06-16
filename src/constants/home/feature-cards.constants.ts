export type FeatureCardType =
    | "biography"
    | "military"
    | "documents"
    | "legends"
    | "legacy";

export type FeatureCardConfig = {
    id: FeatureCardType;
    href: string;
    icon: string;
};

export const FEATURE_CARDS: FeatureCardConfig[] = [
    {
        id: "biography",
        href: "/biography",
        icon: "/images/sirko/icons/otaman.png",
    },
    {
        id: "military",
        href: "/military",
        icon: "/images/sirko/icons/otaman.png",
    },
    {
        id: "documents",
        href: "/documents",
        icon: "/images/sirko/icons/otaman.png",
    },
    {
        id: "legends",
        href: "/legends",
        icon: "/images/sirko/icons/otaman.png",
    },
    {
        id: "legacy",
        href: "/legacy",
        icon: "/images/sirko/icons/otaman.png",
    },
];