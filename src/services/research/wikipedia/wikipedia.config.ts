import type { AppLanguage } from "@/src/helpers";

export const WIKIPEDIA_PAGE_TITLES: Record<AppLanguage, string> = {
    uk: "Іван Сірко",
    en: "Ivan Sirko",
};

export const getWikipediaApiBaseUrl = (lang: AppLanguage) => {
    return `https://${lang}.wikipedia.org/w/api.php`;
};

export const getWikipediaRestBaseUrl = (lang: AppLanguage) => {
    return `https://${lang}.wikipedia.org/api/rest_v1`;
};