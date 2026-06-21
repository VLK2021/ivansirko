import {
    GALLERY_BLOCKED_KEYWORDS,
    GALLERY_POSITIVE_KEYWORDS,
} from "@/src/constants/gallery";
import {GalleryItem} from "@/src/types/gallery";

const normalizeText = (value: string): string => {
    return value.toLowerCase().replace(/\s+/g, " ").trim();
};

export const isRelevantGalleryItem = (item: GalleryItem): boolean => {
    const text = normalizeText(
        [
            item.title,
            item.description,
            item.author,
            item.year,
            item.location,
            item.source,
            item.category,
            item.sourceUrl,
            item.imageUrl,
            item.thumbnailUrl,
            ...item.tags,
        ]
            .filter(Boolean)
            .join(" ")
    );

    const hasBlockedKeyword = GALLERY_BLOCKED_KEYWORDS.some((keyword) => {
        return text.includes(normalizeText(keyword));
    });

    if (hasBlockedKeyword) {
        return false;
    }

    return GALLERY_POSITIVE_KEYWORDS.some((keyword) => {
        return text.includes(normalizeText(keyword));
    });
};