"use client";

import {motion} from "framer-motion";
import {MilitaryCampaign, MilitaryLanguage} from "@/src/types/military";
import {CampaignOverview} from "./CampaignOverview";
import {EventTimeline} from "./EventTimeline";
import {EventDetails} from "./EventDetails";

type CampaignWorkspaceProps = {
    campaign: MilitaryCampaign;
    activeEventId: string;
    currentLang: MilitaryLanguage;
    onEventChange: (eventId: string) => void;
};

export const CampaignWorkspace = ({
                                      campaign,
                                      activeEventId,
                                      currentLang,
                                      onEventChange,
                                  }: CampaignWorkspaceProps) => {
    const events = [...campaign.events].sort((a, b) => a.order - b.order);
    const activeEvent = events.find((event) => event.id === activeEventId) ?? events[0];

    return (
        <motion.div
            key={campaign.id}
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.45}}
            className="min-w-0"
        >
            <CampaignOverview campaign={campaign} currentLang={currentLang} />

            <div className="mt-8 xl:pl-[270px]">
                <EventTimeline
                    events={events}
                    activeEventId={activeEvent?.id ?? ""}
                    currentLang={currentLang}
                    onEventChange={onEventChange}
                />

                {activeEvent && (
                    <EventDetails event={activeEvent} currentLang={currentLang} />
                )}
            </div>
        </motion.div>
    );
};