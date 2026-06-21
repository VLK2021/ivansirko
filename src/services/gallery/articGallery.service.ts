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
        throw new Error(`Art Institute request failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
};

const fetchArticQuery = async (query: string): Promise<GalleryRawItem[]> => {
    const params = new URLSearchParams({
        q: query,
        limit: "50",
        fields: "id,title,image_id,artist_display,date_display,thumbnail,api_link",
    });

    const data = await fetchJson<{
        data?: unknown[];
    }>(`https://api.artic.edu/api/v1/artworks/search?${params.toString()}`);

    return (data.data ?? []).map((item) => ({
        source: "artic",
        query,
        raw: item,
    }));
};

export const getArticGalleryItems = async (): Promise<GalleryRawSourceResult> => {
    const results = await Promise.allSettled(
        MUSEUM_GALLERY_QUERIES.map(fetchArticQuery)
    );

    const items = results
        .filter((result): result is PromiseFulfilledResult<GalleryRawItem[]> => {
            return result.status === "fulfilled";
        })
        .flatMap((result) => result.value);

    return {
        source: "artic",
        status: "fulfilled",
        total: items.length,
        items,
    };
};