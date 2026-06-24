"use client";

import {motion} from "framer-motion";
import {MilitaryEvent, MilitaryLanguage} from "@/src/types/military";

type EventDetailsProps = {
    event: MilitaryEvent;
    currentLang: MilitaryLanguage;
};

export const EventDetails = ({event, currentLang}: EventDetailsProps) => {
    const title = currentLang === "en" ? event.titleEn : event.titleUk;
    const summary = currentLang === "en" ? event.summaryEn : event.summaryUk;
    const content = currentLang === "en" ? event.contentEn : event.contentUk;
    const location = currentLang === "en" ? event.locationEn : event.locationUk;
    const result = currentLang === "en" ? event.resultEn : event.resultUk;
    const opponents = currentLang === "en" ? event.opponentsEn : event.opponentsUk;

    return (
        <motion.article
            key={event.id}
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.35}}
            className="relative overflow-hidden border border-[#9b6a2c]/70 bg-[#d9b56f]/58 p-5 shadow-[0_28px_90px_rgba(58,24,8,0.2)] sm:p-8"
        >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(247,215,138,0.45),transparent_30%),linear-gradient(135deg,rgba(255,255,255,0.22),transparent_45%,rgba(148,85,31,0.16))]" />

            <div className="relative z-10">
                <p className="mb-4 text-[11px] font-black uppercase tracking-[0.28em] text-[#6f3f13]">
                    {event.year} / {event.type}
                </p>

                <h2 className="text-3xl font-semibold tracking-tight text-[#2a1205] sm:text-5xl">
                    {title}
                </h2>

                <p className="mt-6 border-l-2 border-[#94551f] pl-5 text-lg font-semibold leading-8 text-[#4b260b]">
                    {summary}
                </p>

                <div className="mt-7 grid gap-4 md:grid-cols-3">
                    {location && <MetaItem label={currentLang === "en" ? "Location" : "Місце"} value={location} />}
                    {result && <MetaItem label={currentLang === "en" ? "Result" : "Результат"} value={result} />}
                    {opponents?.length ? (
                        <MetaItem label={currentLang === "en" ? "Opponents" : "Противники"} value={opponents.join(", ")} />
                    ) : null}
                </div>

                <div className="mt-8 space-y-5 text-base leading-8 text-[#3a1808]">
                    {content.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                    ))}
                </div>
            </div>
        </motion.article>
    );
};

const MetaItem = ({label, value}: {label: string; value: string}) => (
    <div className="border border-[#9b6a2c]/45 bg-[#f3d98f]/50 p-4">
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6f3f13]">
            {label}
        </p>
        <p className="mt-2 text-sm font-semibold leading-6 text-[#2a1205]">
            {value}
        </p>
    </div>
);