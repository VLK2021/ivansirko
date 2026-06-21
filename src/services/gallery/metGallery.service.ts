import {
    GALLERY_REVALIDATE_SECONDS,
    MUSEUM_GALLERY_QUERIES,
} from "@/src/constants/gallery";
import {GalleryRawItem, GalleryRawSourceResult} from "@/src/types/gallery";

const fetchJson = async <T>(url: string): Promise<T> => {
    const response = await fetch(url, {
        next: {
            revalidate: GALLERY_REVALIDATE_SECONDS,
        },
        headers: {
            Accept: "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Met request failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
};

const fetchMetQuery = async (query: string): Promise<GalleryRawItem[]> => {
    const params = new URLSearchParams({
        q: query,
        hasImages: "true",
    });

    const searchData = await fetchJson<{
        objectIDs?: number[];
    }>(
        `https://collectionapi.metmuseum.org/public/collection/v1/search?${params.toString()}`
    );

    const objectIds = (searchData.objectIDs ?? []).slice(0, 50);

    const results = await Promise.allSettled(
        objectIds.map((id) =>
            fetchJson<unknown>(
                `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
            )
        )
    );

    return results
        .filter((result): result is PromiseFulfilledResult<unknown> => {
            return result.status === "fulfilled";
        })
        .map((result) => ({
            source: "met",
            query,
            raw: result.value,
        }));
};

export const getMetGalleryItems = async (): Promise<GalleryRawSourceResult> => {
    const results = await Promise.allSettled(
        MUSEUM_GALLERY_QUERIES.map(fetchMetQuery)
    );

    const items = results
        .filter((result): result is PromiseFulfilledResult<GalleryRawItem[]> => {
            return result.status === "fulfilled";
        })
        .flatMap((result) => result.value);

    return {
        source: "met",
        status: "fulfilled",
        total: items.length,
        items,
    };
};