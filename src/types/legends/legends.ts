export type LegendsLanguage = "uk" | "en";

export type LegendItem = {
    id: string;
    order: number;
    slug: string;

    titleUk: string;
    titleEn: string;

    summaryUk: string;
    summaryEn: string;

    contentUk: string[];
    contentEn: string[];

    image?: string;
};