import {GalleryItem} from "@/src/types/gallery";

const normalizeKey = (value: string | null): string => {
    if (!value) {
        return "";
    }

    try {
        return decodeURIComponent(value)
            .toLowerCase()
            .replace(/^file:/g, "")
            .replace(/^файл:/g, "")
            .replace(/\.[a-z0-9]+$/i, "")
            .replace(/thumb\/[a-f0-9]\/[a-f0-9]{2}\//g, "")
            .replace(/\/\d+px-[^/]+$/g, "")
            .replace(/\(\d+\)/g, "")
            .replace(/image\s*detail\s*\d+/gi, "")
            .replace(/detail\s*\d+/gi, "")
            .replace(/repin/g, "рєпін")
            .replace(/sirko/g, "сірко")
            .replace(/ivan/g, "іван")
            .replace(/zaporozhian/g, "запорож")
            .replace(/zaporizhian/g, "запорож")
            .replace(/cossacks/g, "козаки")
            .replace(/cossack/g, "козак")
            .replace(/[^a-z0-9а-яіїєґ]+/gi, "")
            .trim();
    } catch {
        return value
            .toLowerCase()
            .replace(/[^a-z0-9а-яіїєґ]+/gi, "")
            .trim();
    }
};

const createDuplicateKeys = (item: GalleryItem): string[] => {
    const imageKey = normalizeKey(item.imageUrl);
    const titleKey = normalizeKey(item.title);
    const sourceKey = normalizeKey(item.sourceItemId);
    const authorKey = normalizeKey(item.author);
    const yearKey = normalizeKey(item.year);

    return [
        imageKey,
        sourceKey,
        titleKey,
        [titleKey, authorKey, yearKey].filter(Boolean).join("-"),
    ].filter(Boolean);
};

export const deduplicateGalleryItems = (
    items: GalleryItem[]
): GalleryItem[] => {
    const usedKeys = new Set<string>();
    const result: GalleryItem[] = [];

    for (const item of items) {
        const keys = createDuplicateKeys(item);

        if (keys.some((key) => usedKeys.has(key))) {
            continue;
        }

        keys.forEach((key) => usedKeys.add(key));
        result.push(item);
    }

    return result;
};