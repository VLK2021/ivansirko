import {
    GALLERY_REVALIDATE_SECONDS,
    WIKIMEDIA_GALLERY_QUERIES,
} from "@/src/constants/gallery";
import {GalleryRawItem, GalleryRawSourceResult} from "@/src/types/gallery";

const WIKIMEDIA_API_URL = "https://commons.wikimedia.org/w/api.php";

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
        throw new Error(`Wikimedia request failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
};

const fetchWikimediaQuery = async (query: string): Promise<GalleryRawItem[]> => {
    const params = new URLSearchParams({
        action: "query",
        generator: "search",
        gsrnamespace: "6",
        gsrsearch: query,
        gsrlimit: "50",
        prop: "imageinfo",
        iiprop: "url|mime|size|dimensions|extmetadata",
        iiurlwidth: "900",
        format: "json",
        origin: "*",
    });

    const data = await fetchJson<{
        query?: {
            pages?: Record<string, unknown>;
        };
    }>(`${WIKIMEDIA_API_URL}?${params.toString()}`);

    return Object.values(data.query?.pages ?? {}).map((item) => ({
        source: "wikimedia",
        query,
        raw: item,
    }));
};

export const getWikimediaGalleryItems = async (): Promise<GalleryRawSourceResult> => {
    const results = await Promise.allSettled(
        WIKIMEDIA_GALLERY_QUERIES.map(fetchWikimediaQuery)
    );

    const items = results
        .filter((result): result is PromiseFulfilledResult<GalleryRawItem[]> => {
            return result.status === "fulfilled";
        })
        .flatMap((result) => result.value);

    return {
        source: "wikimedia",
        status: "fulfilled",
        total: items.length,
        items,
    };
};