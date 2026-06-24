"use client";

import {useMemo, useState} from "react";
import {MILITARY_CAMPAIGNS} from "@/src/constants/military";
import {RouteBackground} from "@/src/common/routeBackground";
import {MilitaryCampaign, MilitaryLanguage} from "@/src/types/military";
import {CampaignAside} from "./CampaignAside";
import {CampaignWorkspace} from "./CampaignWorkspace";

type MilitaryPageProps = {
    currentLang: MilitaryLanguage;
};

export const MilitaryPage = ({currentLang}: MilitaryPageProps) => {
    const campaigns = useMemo(
        () => [...MILITARY_CAMPAIGNS].sort((a, b) => a.order - b.order),
        []
    );

    const [activeCampaignId, setActiveCampaignId] = useState(campaigns[0]?.id ?? "");
    const [activeEventId, setActiveEventId] = useState(campaigns[0]?.events[0]?.id ?? "");

    const activeCampaign =
        campaigns.find((campaign) => campaign.id === activeCampaignId) ?? campaigns[0];

    const handleCampaignChange = (campaign: MilitaryCampaign) => {
        setActiveCampaignId(campaign.id);
        setActiveEventId(campaign.events[0]?.id ?? "");
    };

    return (
        <RouteBackground>
            <section className="relative z-10 min-h-screen px-4 pb-24 pt-8 sm:px-6 lg:px-10">
                <CampaignAside
                    campaigns={campaigns}
                    activeCampaignId={activeCampaignId}
                    currentLang={currentLang}
                    onCampaignChange={handleCampaignChange}
                />

                <div className="mx-auto max-w-[1480px] lg:pl-[340px]">
                    <CampaignWorkspace
                        campaign={activeCampaign}
                        activeEventId={activeEventId}
                        currentLang={currentLang}
                        onEventChange={setActiveEventId}
                    />
                </div>
            </section>
        </RouteBackground>
    );
};