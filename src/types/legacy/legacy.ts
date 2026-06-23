export type LegacyLanguage = "uk" | "en";

export type LegacySection = {
    id: string;
    order: number;
    titleUk: string;
    titleEn: string;
    subtitleUk: string;
    subtitleEn: string;
    contentUk: string[];
    contentEn: string[];
    image: string;
};