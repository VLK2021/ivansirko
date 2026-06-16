import type { AppLanguage } from "@/src/helpers";
import { WIKIDATA_API_URL, WIKIDATA_SEARCH_QUERIES } from "./wikidata.config";

const SIRKO_ENTITY_ID = "Q734876";

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
    const entityId = firstResult?.id ?? SIRKO_ENTITY_ID;

    const entity = await getWikidataEntityById(entityId, lang);

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

const getClaimValue = (claims: Record<string, any>, property: string) => {
    return claims?.[property]?.map((claim: any) => {
        return claim?.mainsnak?.datavalue?.value ?? null;
    }).filter(Boolean) ?? [];
};

export const getWikidataDebugData = async (lang: AppLanguage) => {
    const entityResponse = await getWikidataEntityById(SIRKO_ENTITY_ID, lang);
    const entity = entityResponse?.entities?.[SIRKO_ENTITY_ID];

    const claims = entity?.claims ?? {};

    return {
        source: "wikidata-debug",
        lang,
        entityId: SIRKO_ENTITY_ID,
        fetchedAt: new Date().toISOString(),
        data: {
            label: {
                uk: entity?.labels?.uk?.value ?? null,
                en: entity?.labels?.en?.value ?? null,
            },
            description: {
                uk: entity?.descriptions?.uk?.value ?? null,
                en: entity?.descriptions?.en?.value ?? null,
            },
            aliases: {
                uk: entity?.aliases?.uk?.map((item: any) => item.value) ?? [],
                en: entity?.aliases?.en?.map((item: any) => item.value) ?? [],
            },
            commonsCategory: getClaimValue(claims, "P373"),
            birthDate: getClaimValue(claims, "P569"),
            deathDate: getClaimValue(claims, "P570"),
            birthPlace: getClaimValue(claims, "P19"),
            deathPlace: getClaimValue(claims, "P20"),
            occupation: getClaimValue(claims, "P106"),
            militaryRank: getClaimValue(claims, "P410"),
            positionHeld: getClaimValue(claims, "P39"),
            sitelinks: {
                ukwiki: entity?.sitelinks?.ukwiki ?? null,
                enwiki: entity?.sitelinks?.enwiki ?? null,
                commonswiki: entity?.sitelinks?.commonswiki ?? null,
            },
        },
    };
};