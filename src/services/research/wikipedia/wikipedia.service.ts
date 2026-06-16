import type { AppLanguage } from "@/src/helpers";
import {
    getWikipediaApiBaseUrl,
    getWikipediaRestBaseUrl,
    WIKIPEDIA_PAGE_TITLES,
} from "./wikipedia.config";

export const getWikipediaSummary = async (lang: AppLanguage) => {
    const title = WIKIPEDIA_PAGE_TITLES[lang];

    const url = `${getWikipediaRestBaseUrl(lang)}/page/summary/${encodeURIComponent(title)}`;

    const response = await fetch(url, {
        next: { revalidate: 86400 },
    });

    if (!response.ok) {
        throw new Error(`Wikipedia summary request failed: ${response.status}`);
    }

    return response.json();
};

export const getWikipediaPageDetails = async (lang: AppLanguage) => {
    const title = WIKIPEDIA_PAGE_TITLES[lang];

    const params = new URLSearchParams({
        action: "query",
        format: "json",
        origin: "*",
        prop: "extracts|pageimages|info|categories|links|langlinks",
        titles: title,
        explaintext: "1",
        exintro: "0",
        redirects: "1",
        inprop: "url",
        piprop: "thumbnail|original",
        pithumbsize: "1200",
        cllimit: "50",
        pllimit: "50",
        lllimit: "50",
    });

    const url = `${getWikipediaApiBaseUrl(lang)}?${params.toString()}`;

    const response = await fetch(url, {
        next: { revalidate: 86400 },
    });

    if (!response.ok) {
        throw new Error(`Wikipedia page details request failed: ${response.status}`);
    }

    return response.json();
};

export const getWikipediaRawData = async (lang: AppLanguage) => {
    const [summary, pageDetails] = await Promise.all([
        getWikipediaSummary(lang),
        getWikipediaPageDetails(lang),
    ]);

    return {
        source: "wikipedia",
        lang,
        title: WIKIPEDIA_PAGE_TITLES[lang],
        fetchedAt: new Date().toISOString(),
        data: {
            summary,
            pageDetails,
        },
    };
};