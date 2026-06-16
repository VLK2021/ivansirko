import type {FeatureCardType} from "@/src/constants/home/feature-cards.constants";

type FeatureCardIconProps = {
    type: FeatureCardType;
    className?: string;
};

export const FeatureCardIcon = ({
                                    type,
                                    className = "",
                                }: FeatureCardIconProps) => {
    if (type === "biography") {
        return (
            <svg viewBox="0 0 64 64" fill="none" className={className}>
                <path d="M18 12h28v40H18z" stroke="currentColor" strokeWidth="3" />
                <path d="M24 22h16M24 30h16M24 38h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
        );
    }

    if (type === "military") {
        return (
            <svg viewBox="0 0 64 64" fill="none" className={className}>
                <path d="M18 48L48 18M46 16l2 10M48 18H38" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M16 18l30 30M18 16l-2 10M16 18h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    if (type === "documents") {
        return (
            <svg viewBox="0 0 64 64" fill="none" className={className}>
                <path d="M20 14h24v36H20z" stroke="currentColor" strokeWidth="3" />
                <path d="M26 24h12M26 32h12M26 40h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                <path d="M44 14l-6 6h6" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            </svg>
        );
    }

    if (type === "legends") {
        return (
            <svg viewBox="0 0 64 64" fill="none" className={className}>
                <path d="M18 20c0-4 4-7 14-7s14 3 14 7v27c0 3-4 5-14 5s-14-2-14-5V20z" stroke="currentColor" strokeWidth="3" />
                <path d="M24 24h16M24 32h16M24 40h10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" fill="none" className={className}>
            <path d="M32 10l6 14 15 1-11 10 4 15-14-8-14 8 4-15-11-10 15-1 6-14z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
        </svg>
    );
};