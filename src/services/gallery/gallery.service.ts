import {deduplicateGalleryItems} from "@/src/helpers/gallery/deduplicateGalleryItems";
import {filterGalleryItems} from "@/src/helpers/gallery/filterGalleryItems";
import {isRelevantGalleryItem} from "@/src/helpers/gallery/isRelevantGalleryItem";
import {normalizeGalleryItems} from "@/src/helpers/gallery/normalizeGalleryItems";
import {sortGalleryItems} from "@/src/helpers/gallery/sortGalleryItems";
import {
    GalleryItem,
    GalleryItemCategory,
    GalleryPublicItem,
    GalleryRawSourceResult,
    GalleryResponse,
    GallerySort,
    GallerySourceName,
    GallerySourceService,
} from "@/src/types/gallery";

import {getArticGalleryItems} from "./articGallery.service";
import {getClevelandGalleryItems} from "./clevelandGallery.service";
import {getMetGalleryItems} from "./metGallery.service";
import {getWikimediaGalleryItems} from "./wikimediaGallery.service";
import {paginateItems} from "@/src/helpers/pagination";

type GallerySourceConfig = {
    source: GallerySourceName;
    service: GallerySourceService;
};

type GetGalleryItemsParams = {
    page?: number;
    limit?: number;
    category?: GalleryItemCategory;
    source?: GallerySourceName;
    search?: string;
    sort?: GallerySort;
};

const gallerySources: GallerySourceConfig[] = [
    {
        source: "wikimedia",
        service: getWikimediaGalleryItems,
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

const toPublicGalleryItem = (item: GalleryItem): GalleryPublicItem => {
    return {
        id: item.id,
        source: item.source,
        title: item.title,
        description: item.description,
        category: item.category,
        imageUrl: item.imageUrl,
        thumbnailUrl: item.thumbnailUrl,
        sourceUrl: item.sourceUrl,
        author: item.author,
        year: item.year,
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
    const sourceConfig = gallerySources.find(({source}) => {
        return source === sourceName;
    });

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

export const getGalleryItems = async ({
                                          page = 1,
                                          limit = 24,
                                          category,
                                          source,
                                          search,
                                          sort = "title",
                                      }: GetGalleryItemsParams): Promise<GalleryResponse> => {
    const rawSources = await getRawGallerySources();

    const rawItems = rawSources.flatMap((sourceResult) => {
        return sourceResult.items;
    });

    const normalizedItems = normalizeGalleryItems(rawItems);
    const relevantItems = normalizedItems.filter(isRelevantGalleryItem);
    const uniqueItems = deduplicateGalleryItems(relevantItems);

    const filteredItems = filterGalleryItems({
        items: uniqueItems,
        category,
        source,
        search,
    });

    const sortedItems = sortGalleryItems(filteredItems, sort);

    const paginatedResult = paginateItems({
        items: sortedItems,
        page,
        limit,
    });

    return {
        total: paginatedResult.total,
        page: paginatedResult.page,
        limit: paginatedResult.limit,
        totalPages: paginatedResult.totalPages,
        hasNextPage: paginatedResult.hasNextPage,
        hasPrevPage: paginatedResult.hasPrevPage,
        sources: rawSources.map((sourceResult) => ({
            source: sourceResult.source,
            status: sourceResult.status,
            total: sourceResult.total,
            error: sourceResult.error,
        })),
        items: paginatedResult.items.map(toPublicGalleryItem),
    };
};