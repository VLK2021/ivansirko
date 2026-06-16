type HeroTridentProps = {
    className?: string;
};

export const HeroTrident = ({className = ""}: HeroTridentProps) => {
    return (
        <svg viewBox="0 0 96 112" className={className} fill="none" aria-hidden="true">
            <path d="M48 8V96" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M30 22V54C30 70 38 83 48 96" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M66 22V54C66 70 58 83 48 96" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M19 34C18 52 24 68 38 80" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M77 34C78 52 72 68 58 80" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
            <path d="M22 92C34 94 42 99 48 105C54 99 62 94 74 92" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};