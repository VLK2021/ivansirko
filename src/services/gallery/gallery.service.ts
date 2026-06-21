import {deduplicateGalleryItems} from "@/src/helpers/gallery/deduplicateGalleryItems";
import {normalizeGalleryItems} from "@/src/helpers/gallery/normalizeGalleryItems";
import {
    GalleryItem,
    GalleryRawResponse,
    GalleryRawSourceResult,
    GalleryResponse,
    GallerySourceName,
    GallerySourceService,
} from "@/src/types/gallery";

import {getArticGalleryItems} from "./articGallery.service";
import {getClevelandGalleryItems} from "./clevelandGallery.service";
import {getMetGalleryItems} from "./metGallery.service";
import {
    getWikipediaEnGalleryItems,
    getWikipediaUkGalleryItems,
} from "./wikipediaGallery.service";
import {getWikimediaGalleryItems} from "./wikimediaGallery.service";

type GallerySourceConfig = {
    source: GallerySourceName;
    service: GallerySourceService;
};

const gallerySources: GallerySourceConfig[] = [
    {
        source: "wikimedia",
        service: getWikimediaGalleryItems,
    },
    {
        source: "wikipedia-uk",
        service: getWikipediaUkGalleryItems,
    },
    {
        source: "wikipedia-en",
        service: getWikipediaEnGalleryItems,
    },
    {
        source: "met",
        service: getMetGalleryItems,
    },
    {
        source: "cleveland",
        service: getClevelandGalleryItems,
    },
    {
        source: "artic",
        service: getArticGalleryItems,
    },
];

export const gallerySourceNames = gallerySources.map(({source}) => source);

const getErrorMessage = (error: unknown): string => {
    return error instanceof Error ? error.message : "Unknown error";
};

const createRejectedSourceResult = (
    source: GallerySourceName,
    error: unknown
): GalleryRawSourceResult => {
    return {
        source,
        status: "rejected",
        total: 0,
        items: [],
        error: getErrorMessage(error),
    };
};

export const getRawGallerySources = async (): Promise<GalleryRawSourceResult[]> => {
    const results = await Promise.allSettled(
        gallerySources.map(({service}) => service())
    );

    return results.map((result, index) => {
        const source = gallerySources[index].source;

        if (result.status === "fulfilled") {
            return result.value;
        }

        return createRejectedSourceResult(source, result.reason);
    });
};

export const getRawGallerySourceByName = async (
    sourceName: GallerySourceName
): Promise<GalleryRawSourceResult> => {
    const sourceConfig = gallerySources.find(({source}) => source === sourceName);

    if (!sourceConfig) {
        return createRejectedSourceResult(
            sourceName,
            `Unknown gallery source: ${sourceName}`
        );
    }

    try {
        return await sourceConfig.service();
    } catch (error) {
        return createRejectedSourceResult(sourceName, error);
    }
};

export const getRawGalleryItems = async (): Promise<GalleryRawResponse> => {
    const sources = await getRawGallerySources();

    const items = sources.flatMap((source) => source.items);

    return {
        total: items.length,
        sources: sources.map((source) => ({
            source: source.source,
            status: source.status,
            total: source.total,
            error: source.error,
        })),
        items,
    };
};

export const getGalleryItems = async (): Promise<GalleryResponse> => {
    const rawResponse = await getRawGalleryItems();

    const normalizedItems: GalleryItem[] = normalizeGalleryItems(rawResponse.items);
    const items = deduplicateGalleryItems(normalizedItems);

    return {
        total: items.length,
        sources: rawResponse.sources,
        items,
    };
};