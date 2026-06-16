import {HeroTrident} from "./HeroTrident";

type HeroPortraitProps = {
    label: string;
    description: string;
};

export const HeroPortrait = ({label, description}: HeroPortraitProps) => {
    return (
        <div className="hero-portrait relative min-h-[420px] overflow-hidden border border-[rgba(94,48,17,0.52)] lg:min-h-[520px]">
            <div className="absolute inset-0 hero-portrait-bg" />

            <div className="absolute inset-0 bg-gradient-to-r from-[rgba(22,9,4,0.10)] via-transparent to-[rgba(245,217,158,0.62)]" />

            <div className="absolute bottom-8 left-8 z-10 max-w-sm">
                <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border border-[var(--sirko-gold)] bg-[rgba(20,8,3,0.54)] text-[var(--sirko-gold-soft)]">
                    <HeroTrident className="h-11 w-11" />
                </div>

                <p className="mb-3 text-xs font-black uppercase tracking-[0.36em] text-[var(--sirko-gold-soft)]">
                    {label}
                </p>

                <p className="text-sm leading-7 text-[#f9e6b7]/86">
                    {description}
                </p>
            </div>
        </div>
    );
};