import {HeroTrident} from "./HeroTrident";

export const HeroOrnament = () => {
    return (
        <div className="my-7 flex items-center justify-center gap-4 text-[var(--sirko-bronze)] lg:justify-start">
            <span className="h-px w-20 bg-[rgba(138,79,31,0.5)] sm:w-28" />
            <HeroTrident className="h-9 w-9 sm:h-10 sm:w-10" />
            <span className="h-px w-20 bg-[rgba(138,79,31,0.5)] sm:w-28" />
        </div>
    );
};