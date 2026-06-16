export type FeatureCardType =
    | "biography"
    | "military"
    | "documents"
    | "legends"
    | "legacy";

export type FeatureCardConfig = {
    id: FeatureCardType;
    href: string;
};

export const FEATURE_CARDS: FeatureCardConfig[] = [
    {
        id: "biography",
        href: "/biography",
    },
    {
        id: "military",
        href: "/military",
    },
    {
        id: "documents",
        href: "/documents",
    },
    {
        id: "legends",
        href: "/legends",
    },
    {
        id: "legacy",
        href: "/legacy",
    },
];