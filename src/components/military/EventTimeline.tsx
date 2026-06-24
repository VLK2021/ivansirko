"use client";

import {motion} from "framer-motion";
import {MilitaryEvent, MilitaryLanguage} from "@/src/types/military";

type EventTimelineProps = {
    events: MilitaryEvent[];
    activeEventId: string;
    currentLang: MilitaryLanguage;
    onEventChange: (eventId: string) => void;
};

export const EventTimeline = ({
                                  events,
                                  activeEventId,
                                  currentLang,
                                  onEventChange,
                              }: EventTimelineProps) => {
    return (
        <aside className="mb-6 xl:fixed xl:left-[390px] xl:top-28 xl:z-30 xl:mb-0 xl:h-[calc(100vh-9rem)] xl:w-[240px]">
            <div className="relative h-full overflow-hidden border border-[#9b6a2c]/65 bg-[#d9b56f]/58 p-4 shadow-[0_24px_90px_rgba(58,24,8,0.22)] backdrop-blur-md">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(247,215,138,0.45),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.18),transparent_45%,rgba(148,85,31,0.18))]" />

                <div className="relative z-10">
                    <p className="mb-5 text-[11px] font-black uppercase tracking-[0.25em] text-[#6f3f13]">
                        {currentLang === "en" ? "Timeline" : "Хронологія"}
                    </p>

                    <div className="relative space-y-3 overflow-y-auto pr-1 xl:max-h-[calc(100vh-14rem)]">
                        <div className="absolute bottom-0 left-[19px] top-0 w-px bg-[#94551f]/60" />

                        {events.map((event) => {
                            const isActive = event.id === activeEventId;

                            return (
                                <motion.button
                                    key={event.id}
                                    type="button"
                                    whileHover={{x: 4}}
                                    onClick={() => onEventChange(event.id)}
                                    className="relative z-10 flex w-full gap-3 text-left"
                                >
                                    <span
                                        className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center border text-xs font-black ${
                                            isActive
                                                ? "border-[#160903] bg-[#94551f] text-[#160903]"
                                                : "border-[#94551f]/60 bg-[#f3d98f] text-[#5f3815]"
                                        }`}
                                    >
                                        {event.order}
                                    </span>

                                    <span
                                        className={`block flex-1 border px-3 py-2 transition ${
                                            isActive
                                                ? "border-[#94551f] bg-[#94551f]/25"
                                                : "border-transparent hover:border-[#94551f]/50"
                                        }`}
                                    >
                                        <span className="block text-xs font-black uppercase tracking-[0.16em] text-[#6f3f13]">
                                            {event.year}
                                        </span>

                                        <span className="mt-1 block text-sm font-semibold text-[#2a1205]">
                                            {currentLang === "en"
                                                ? event.titleEn
                                                : event.titleUk}
                                        </span>
                                    </span>
                                </motion.button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </aside>
    );
};