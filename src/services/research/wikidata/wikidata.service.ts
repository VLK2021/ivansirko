import type { AppLanguage } from "@/src/helpers";
import { WIKIDATA_API_URL, WIKIDATA_SEARCH_QUERIES } from "./wikidata.config";

const fetchWikidata = async (params: URLSearchParams) => {
    const response = await fetch(`${WIKIDATA_API_URL}?${params.toString()}`, {
        next: { revalidate: 86400 },
    });

    if (!response.ok) {
        throw new Error(`Wikidata request failed: ${response.status}`);
    }

    return response.json();
};

export const searchWikidataEntity = async (lang: AppLanguage) => {
    const params = new URLSearchParams({
        action: "wbsearchentities",
        format: "json",
        origin: "*",
        language: lang,
        uselang: lang,
        type: "item",
        search: WIKIDATA_SEARCH_QUERIES[lang],
        limit: "10",
    });

    return fetchWikidata(params);
};

export const getWikidataEntityById = async (id: string, lang: AppLanguage) => {
    const params = new URLSearchParams({
        action: "wbgetentities",
        format: "json",
        origin: "*",
        ids: id,
        languages: `${lang}|uk|en`,
        props: "info|labels|descriptions|aliases|claims|sitelinks",
        sitefilter: "ukwiki|enwiki|commonswiki",
    });

    return fetchWikidata(params);
};

export const getWikidataRawData = async (lang: AppLanguage) => {
    const search = await searchWikidataEntity(lang);

    const firstResult = search?.search?.[0];
    const entityId = firstResult?.id;

    const entity = entityId
        ? await getWikidataEntityById(entityId, lang)
        : null;

    return {
        source: "wikidata",
        lang,
        query: WIKIDATA_SEARCH_QUERIES[lang],
        entityId,
        fetchedAt: new Date().toISOString(),
        data: {
            search,
            entity,
        },
    };
};