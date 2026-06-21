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
        throw new Error(`Cleveland request failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
};

const fetchClevelandQuery = async (query: string): Promise<GalleryRawItem[]> => {
    const params = new URLSearchParams({
        q: query,
        has_image: "1",
        limit: "100",
    });

    const data = await fetchJson<{
        data?: unknown[];
    }>(`https://openaccess-api.clevelandart.org/api/artworks/?${params.toString()}`);

    return (data.data ?? []).map((item) => ({
        source: "cleveland",
        query,
        raw: item,
    }));
};

export const getClevelandGalleryItems = async (): Promise<GalleryRawSourceResult> => {
    const results = await Promise.allSettled(
        MUSEUM_GALLERY_QUERIES.map(fetchClevelandQuery)
    );

    const items = results
        .filter((result): result is PromiseFulfilledResult<GalleryRawItem[]> => {
            return result.status === "fulfilled";
        })
        .flatMap((result) => result.value);

    return {
        source: "cleveland",
        status: "fulfilled",
        total: items.length,
        items,
    };
};