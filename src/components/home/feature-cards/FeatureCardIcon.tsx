import type {FeatureCardType} from "@/src/constants/home/feature-cards.constants";

type FeatureCardIconProps = {
    type: FeatureCardType;
    className?: string;
};

export const FeatureCardIcon = ({type, className = ""}: FeatureCardIconProps) => {
    if (type === "biography") {
        return (
            <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
                <path d="M18 12h25l5 6v34H18V12Z" stroke="currentColor" strokeWidth="3" />
                <path d="M25 25h14M25 33h14M25 41h9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
        );
    }

    if (type === "military") {
        return (
            <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
                <path d="M18 48L48 18M46 16l3 11M48 18H37" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M46 48L16 18M18 16l-3 11M16 18h11" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        );
    }

    if (type === "documents") {
        return (
            <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
                <path d="M20 13h24v38H20V13Z" stroke="currentColor" strokeWidth="3" />
                <path d="M26 24h12M26 32h12M26 40h8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
        );
    }

    if (type === "legends") {
        return (
            <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
                <path d="M18 18c8-5 20-5 28 0v28c-8-4-20-4-28 0V18Z" stroke="currentColor" strokeWidth="3" />
                <path d="M32 16v30" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
            </svg>
        );
    }

    return (
        <svg viewBox="0 0 64 64" fill="none" className={className} aria-hidden="true">
            <path d="M32 9l20 8v13c0 13-8 21-20 25-12-4-20-12-20-25V17l20-8Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
            <path d="M32 18v24M24 30h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        </svg>
    );
};