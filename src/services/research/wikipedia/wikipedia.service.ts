import type { AppLanguage } from "@/src/helpers";
import {
    getWikipediaApiBaseUrl,
    getWikipediaRestBaseUrl,
    WIKIPEDIA_PAGE_TITLES,
} from "./wikipedia.config";

type ResearchResponse<T> = {
    error: boolean;
    status: number;
    data: T | null;
};

const fetchWikipedia = async <T>(url: string): Promise<ResearchResponse<T>> => {
    const response = await fetch(url, {
        next: {
            revalidate: 86400,
        },
    });

    if (!response.ok) {
        return {
            error: true,
            status: response.status,
            data: null,
        };
    }

    return {
        error: false,
        status: response.status,
        data: await response.json(),
    };
};

export const getWikipediaSummary = async (lang: AppLanguage) => {
    const title = WIKIPEDIA_PAGE_TITLES[lang];

    const url = `${getWikipediaRestBaseUrl(lang)}/page/summary/${encodeURIComponent(title)}`;

    return fetchWikipedia(url);
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

    return fetchWikipedia(url);
};

export const getWikipediaRawData = async (lang: AppLanguage) => {
    const results = await Promise.allSettled([
        getWikipediaSummary(lang),
        getWikipediaPageDetails(lang),
    ]);

    const [summaryResult, pageDetailsResult] = results;

    return {
        source: "wikipedia",
        lang,
        title: WIKIPEDIA_PAGE_TITLES[lang],
        fetchedAt: new Date().toISOString(),
        data: {
            summary:
                summaryResult.status === "fulfilled"
                    ? summaryResult.value
                    : {
                        error: true,
                        status: null,
                        data: null,
                        message:
                            summaryResult.reason instanceof Error
                                ? summaryResult.reason.message
                                : "Unknown error",
                    },
            pageDetails:
                pageDetailsResult.status === "fulfilled"
                    ? pageDetailsResult.value
                    : {
                        error: true,
                        status: null,
                        data: null,
                        message:
                            pageDetailsResult.reason instanceof Error
                                ? pageDetailsResult.reason.message
                                : "Unknown error",
                    },
        },
    };
};