import {
    LegacyLanguage,
    LegacySection as LegacySectionType,
} from "@/src/types/legacy";

type LegacySectionProps = {
    item: LegacySectionType;
    currentLang: LegacyLanguage;
};

export const LegacySection = ({
                                  item,
                                  currentLang,
                              }: LegacySectionProps) => {
    const isReversed = item.order % 2 === 0;

    const title = currentLang === "en" ? item.titleEn : item.titleUk;
    const subtitle = currentLang === "en" ? item.subtitleEn : item.subtitleUk;
    const content = currentLang === "en" ? item.contentEn : item.contentUk;

    return (
        <article className="group relative overflow-hidden border border-[#9b6a2c]/55 bg-[#d9b56f]/35 p-3 shadow-[0_24px_90px_rgba(58,24,8,0.18)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_32px_120px_rgba(58,24,8,0.28)] sm:p-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,215,138,0.45),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.18),transparent_45%,rgba(148,85,31,0.18))]" />

            <div
                className={`relative z-10 grid items-stretch gap-6 lg:grid-cols-2 lg:gap-0 ${
                    isReversed ? "lg:[&>.image-block]:order-2" : ""
                }`}
            >
                <div className="image-block relative min-h-[320px] overflow-hidden border border-[#9b6a2c]/60 bg-[#160903] sm:min-h-[420px]">
                    <img
                        src={item.image}
                        alt={title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#160903]/65 via-transparent to-transparent" />

                    <span className="absolute bottom-5 left-5 border border-[#d8b16a] bg-[#94551f] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#160903]">
                        {String(item.order).padStart(2, "0")}
                    </span>
                </div>

                <div className="relative flex flex-col justify-center border border-[#9b6a2c]/45 bg-[#f3d98f]/45 p-6 sm:p-8 lg:p-12">
                    <div className="absolute right-6 top-6 h-16 w-16 border-r border-t border-[#94551f]/45" />
                    <div className="absolute bottom-6 left-6 h-16 w-16 border-b border-l border-[#94551f]/45" />

                    <p className="mb-5 text-[11px] font-black uppercase tracking-[0.3em] text-[#6f3f13]">
                        Legacy / {String(item.order).padStart(2, "0")}
                    </p>

                    <h2 className="text-3xl font-semibold tracking-tight text-[#2a1205] sm:text-4xl">
                        {title}
                    </h2>

                    <p className="mt-5 border-l-2 border-[#94551f] pl-5 text-lg font-semibold leading-8 text-[#4b260b]">
                        {subtitle}
                    </p>

                    <div className="mt-7 space-y-5 text-base leading-8 text-[#3a1808]">
                        {content.map((paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};