import {GalleryItem} from "@/src/types/gallery";

const normalizeDuplicateKey = (value: string): string => {
    return value
        .toLowerCase()
        .replace(/file:/g, "")
        .replace(/файл:/g, "")
        .replace(/\.[a-z0-9]+$/i, "")
        .replace(/[^a-z0-9а-яіїєґ]+/gi, "")
        .trim();
};

export const deduplicateGalleryItems = (
    items: GalleryItem[]
): GalleryItem[] => {
    const uniqueItems = new Map<string, GalleryItem>();

    for (const item of items) {
        const imageKey = normalizeDuplicateKey(item.imageUrl);
        const titleKey = normalizeDuplicateKey(item.title);
        const key = imageKey || titleKey || item.id;

        if (!uniqueItems.has(key)) {
            uniqueItems.set(key, item);
        }
    }

    return Array.from(uniqueItems.values());
};