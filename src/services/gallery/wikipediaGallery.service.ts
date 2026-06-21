import {
    GALLERY_REVALIDATE_SECONDS,
    WIKIPEDIA_EN_TITLE,
    WIKIPEDIA_UK_TITLE,
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
        throw new Error(`Wikipedia request failed with status ${response.status}`);
    }

    return response.json() as Promise<T>;
};

const fetchWikipediaImages = async (
    source: "wikipedia-uk" | "wikipedia-en",
    endpoint: string,
    title: string
): Promise<GalleryRawSourceResult> => {
    const params = new URLSearchParams({
        action: "query",
        titles: title,
        prop: "images|pageimages",
        imlimit: "500",
        piprop: "thumbnail|original",
        pithumbsize: "900",
        format: "json",
        origin: "*",
    });

    const data = await fetchJson<{
        query?: {
            pages?: Record<string, unknown>;
        };
    }>(`${endpoint}?${params.toString()}`);

    const items: GalleryRawItem[] = Object.values(data.query?.pages ?? {}).map(
        (item) => ({
            source,
            query: title,
            raw: item,
        })
    );

    return {
        source,
        status: "fulfilled",
        total: items.length,
        items,
    };
};

export const getWikipediaUkGalleryItems = () => {
    return fetchWikipediaImages(
        "wikipedia-uk",
        "https://uk.wikipedia.org/w/api.php",
        WIKIPEDIA_UK_TITLE
    );
};

export const getWikipediaEnGalleryItems = () => {
    return fetchWikipediaImages(
        "wikipedia-en",
        "https://en.wikipedia.org/w/api.php",
        WIKIPEDIA_EN_TITLE
    );
};