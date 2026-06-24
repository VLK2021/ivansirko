"use client";

import {motion} from "framer-motion";
import {MilitaryCampaign, MilitaryLanguage} from "@/src/types/military";

type CampaignAsideProps = {
    campaigns: MilitaryCampaign[];
    activeCampaignId: string;
    currentLang: MilitaryLanguage;
    onCampaignChange: (campaign: MilitaryCampaign) => void;
};

export const CampaignAside = ({
                                  campaigns,
                                  activeCampaignId,
                                  currentLang,
                                  onCampaignChange,
                              }: CampaignAsideProps) => {
    return (
        <aside className="mb-8 lg:fixed lg:left-10 lg:top-28 lg:z-30 lg:mb-0 lg:h-[calc(100vh-9rem)] lg:w-[300px]">
            <div className="relative h-full overflow-hidden border border-[#d8b16a]/45 bg-[#120701]/92 p-5 shadow-[0_30px_120px_rgba(18,7,1,0.45)] backdrop-blur-md">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(216,177,106,0.22),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.08),transparent_45%,rgba(148,85,31,0.18))]" />

                <div className="relative z-10">
                    <p className="mb-2 text-[11px] font-black uppercase tracking-[0.34em] text-[#d8b16a]">
                        {currentLang === "en" ? "Military archive" : "Військовий архів"}
                    </p>

                    <h2 className="mb-6 text-2xl font-semibold text-[#f7d78a]">
                        {currentLang === "en" ? "Campaigns" : "Кампанії"}
                    </h2>

                    <nav className="space-y-3 overflow-y-auto pr-1 lg:max-h-[calc(100vh-17rem)]">
                        {campaigns.map((campaign) => {
                            const isActive = campaign.id === activeCampaignId;

                            return (
                                <motion.button
                                    key={campaign.id}
                                    type="button"
                                    whileHover={{x: 6}}
                                    onClick={() => onCampaignChange(campaign)}
                                    className={`group relative w-full overflow-hidden border px-4 py-4 text-left transition duration-300 ${
                                        isActive
                                            ? "border-[#f7d78a] bg-[#94551f] text-[#160903]"
                                            : "border-[#d8b16a]/25 bg-[#d9b56f]/10 text-[#f6e1ad] hover:border-[#d8b16a] hover:bg-[#d9b56f]/20"
                                    }`}
                                >
                                    <span className="block text-[10px] font-black uppercase tracking-[0.22em]">
                                        {String(campaign.order).padStart(2, "0")}
                                    </span>

                                    <span className="mt-2 block text-base font-semibold">
                                        {currentLang === "en"
                                            ? campaign.shortTitleEn
                                            : campaign.shortTitleUk}
                                    </span>
                                </motion.button>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </aside>
    );
};