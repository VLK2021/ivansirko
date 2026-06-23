type LegacyHeroProps = {
    eyebrow: string;
    title: string;
    description: string;
};

export const LegacyHero = ({
                               eyebrow,
                               title,
                               description,
                           }: LegacyHeroProps) => {
    return (
        <div className="relative mb-20 overflow-hidden border border-[#9b6a2c]/60 bg-[#2a1205]/10 px-5 py-16 shadow-[0_30px_120px_rgba(58,24,8,0.22)] sm:px-10 lg:px-16 lg:py-24">
            <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#d8b16a]/30 blur-3xl" />
            <div className="absolute -bottom-28 -right-24 h-80 w-80 rounded-full bg-[#94551f]/35 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.22),transparent_35%,rgba(148,85,31,0.18))]" />

            <div className="relative z-10 mx-auto max-w-5xl text-center">
                <p className="mb-6 inline-flex border border-[#d8b16a] bg-[#94551f] px-5 py-2 text-[11px] font-black uppercase tracking-[0.34em] text-[#160903] shadow-[0_12px_35px_rgba(58,24,8,0.25)]">
                    {eyebrow}
                </p>

                <h1 className="text-5xl font-semibold tracking-tight text-[#2a1205] sm:text-6xl lg:text-7xl">
                    {title}
                </h1>

                <div className="mx-auto mt-8 h-px max-w-2xl bg-gradient-to-r from-transparent via-[#94551f] to-transparent" />

                <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-[#4b260b] sm:text-xl">
                    {description}
                </p>
            </div>
        </div>
    );
};