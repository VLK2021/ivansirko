import {MilitaryCampaign, MilitaryLanguage} from "@/src/types/military";

type CampaignOverviewProps = {
    campaign: MilitaryCampaign;
    currentLang: MilitaryLanguage;
};

export const CampaignOverview = ({campaign, currentLang}: CampaignOverviewProps) => {
    const title = currentLang === "en" ? campaign.titleEn : campaign.titleUk;
    const period = currentLang === "en" ? campaign.periodEn : campaign.periodUk;
    const summary = currentLang === "en" ? campaign.summaryEn : campaign.summaryUk;
    const content = currentLang === "en" ? campaign.contentEn : campaign.contentUk;

    return (
        <header className="relative overflow-hidden border border-[#d8b16a]/45 bg-[#120701]/88 p-6 shadow-[0_35px_130px_rgba(18,7,1,0.42)] sm:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(216,177,106,0.28),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_46%,rgba(148,85,31,0.18))]" />

            <div className="relative z-10">
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.34em] text-[#d8b16a]">
                    {period}
                </p>

                <h1 className="max-w-5xl text-4xl font-semibold tracking-tight text-[#f7d78a] sm:text-6xl">
                    {title}
                </h1>

                <p className="mt-6 max-w-4xl border-l-2 border-[#d8b16a] pl-5 text-lg font-semibold leading-8 text-[#ead39a]">
                    {summary}
                </p>

                <div className="mt-7 grid gap-5 text-base leading-8 text-[#f6e1ad] md:grid-cols-2">
                    {content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </header>
    );
};