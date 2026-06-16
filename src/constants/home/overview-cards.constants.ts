export type TimelinePreviewEvent = {
    year: string;
    titleKey: "birth" | "firstMentions" | "otaman" | "campaigns" | "death";
};

export const TIMELINE_PREVIEW_EVENTS: TimelinePreviewEvent[] = [
    {year: "бл. 1605", titleKey: "birth"},
    {year: "1630-ті", titleKey: "firstMentions"},
    {year: "1659–1663", titleKey: "otaman"},
    {year: "1670–1680-ті", titleKey: "campaigns"},
    {year: "1680", titleKey: "death"},
];

export const OVERVIEW_LINKS = {
    timeline: "/timeline",
    battles: "/military/battles",
    campaigns: "/military/campaigns",
} as const;