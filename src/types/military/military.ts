export type MilitaryLanguage = "uk" | "en";

export type MilitaryEntityType =
    | "campaign"
    | "battle"
    | "raid"
    | "siege"
    | "defense"
    | "political-military";

export type MilitaryDirection =
    | "early-years"
    | "crimea"
    | "steppe"
    | "ruina"
    | "ottoman"
    | "zaporizhia"
    | "final-years";

export type MilitaryImportance = "major" | "medium" | "minor";

export type MilitaryResult =
    | "victory"
    | "defeat"
    | "unclear"
    | "strategic-success"
    | "political-result";

export type MilitaryConfidence = "high" | "medium" | "low";

export type MilitaryEvent = {
    id: string;
    slug?: string;
    order: number;
    year: string;
    dateUk?: string;
    dateEn?: string;
    type: MilitaryEntityType;
    direction: MilitaryDirection;
    importance: MilitaryImportance;
    resultType: MilitaryResult;
    confidence: MilitaryConfidence;
    titleUk: string;
    titleEn: string;
    locationUk?: string;
    locationEn?: string;
    opponentsUk?: string[];
    opponentsEn?: string[];
    resultUk?: string;
    resultEn?: string;
    summaryUk: string;
    summaryEn: string;
    contentUk: string[];
    contentEn: string[];
    hasDetailPage: boolean;
    image?: string;
    sources?: string[];
};

export type MilitaryCampaign = {
    id: string;
    slug: string;
    order: number;
    direction: MilitaryDirection;
    titleUk: string;
    titleEn: string;
    shortTitleUk: string;
    shortTitleEn: string;
    periodUk: string;
    periodEn: string;
    summaryUk: string;
    summaryEn: string;
    contentUk: string[];
    contentEn: string[];
    image?: string;
    events: MilitaryEvent[];
};