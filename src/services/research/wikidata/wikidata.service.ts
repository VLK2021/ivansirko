import type { AppLanguage } from "@/src/helpers";
import { WIKIDATA_API_URL, WIKIDATA_SEARCH_QUERIES } from "./wikidata.config";

const SIRKO_ENTITY_ID = "Q734876";

type WikidataValue =
    | string
    | number
    | boolean
    | null
    | Record<string, unknown>;

type WikidataClaim = {
    mainsnak?: {
        datavalue?: {
            value?: WikidataValue;
        };
    };
};

type WikidataEntity = {
    labels?: Record<string, { value?: string }>;
    descriptions?: Record<string, { value?: string }>;
    aliases?: Record<string, { value?: string }[]>;
    claims?: Record<string, WikidataClaim[]>;
    sitelinks?: Record<string, unknown>;
};

type WikidataResponse = {
    entities?: Record<string, WikidataEntity>;
    search?: { id?: string }[];
};

type ResearchResponse<T> = {
    error: boolean;
    status: number;
    data: T | null;
};

const fetchWikidata = async (
    params: URLSearchParams,
): Promise<ResearchResponse<WikidataResponse>> => {
    const response = await fetch(`${WIKIDATA_API_URL}?${params.toString()}`, {
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
    const searchResponse = await searchWikidataEntity(lang);

    const firstResult = searchResponse.data?.search?.[0];
    const entityId = firstResult?.id ?? SIRKO_ENTITY_ID;

    const entityResponse = await getWikidataEntityById(entityId, lang);

    return {
        source: "wikidata",
        lang,
        query: WIKIDATA_SEARCH_QUERIES[lang],
        entityId,
        fetchedAt: new Date().toISOString(),
        data: {
            search: searchResponse,
            entity: entityResponse,
        },
    };
};

const getClaimValue = (
    claims: Record<string, WikidataClaim[]>,
    property: string,
): WikidataValue[] => {
    return (
        claims[property]
            ?.map((claim) => claim.mainsnak?.datavalue?.value ?? null)
            .filter((value): value is WikidataValue => value !== null) ?? []
    );
};

export const getWikidataDebugData = async (lang: AppLanguage) => {
    const entityResponse = await getWikidataEntityById(SIRKO_ENTITY_ID, lang);

    const entity = entityResponse.data?.entities?.[SIRKO_ENTITY_ID] ?? null;
    const claims = entity?.claims ?? {};

    return {
        source: "wikidata-debug",
        lang,
        entityId: SIRKO_ENTITY_ID,
        fetchedAt: new Date().toISOString(),
        data: {
            request: {
                error: entityResponse.error,
                status: entityResponse.status,
            },
            label: {
                uk: entity?.labels?.uk?.value ?? null,
                en: entity?.labels?.en?.value ?? null,
            },
            description: {
                uk: entity?.descriptions?.uk?.value ?? null,
                en: entity?.descriptions?.en?.value ?? null,
            },
            aliases: {
                uk:
                    entity?.aliases?.uk
                        ?.map((item) => item.value)
                        .filter((value): value is string => Boolean(value)) ?? [],
                en:
                    entity?.aliases?.en
                        ?.map((item) => item.value)
                        .filter((value): value is string => Boolean(value)) ?? [],
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