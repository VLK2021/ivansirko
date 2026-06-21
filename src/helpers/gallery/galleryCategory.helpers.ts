import {GalleryItemCategory} from "@/src/types/gallery";

export const detectGalleryCategory = (
    title: string,
    description: string | null,
    query: string
): GalleryItemCategory => {
    const value = `${title} ${description ?? ""} ${query}`.toLowerCase();

    if (
        value.includes("grave") ||
        value.includes("burial") ||
        value.includes("могила") ||
        value.includes("похован")
    ) {
        return "burial";
    }

    if (
        value.includes("monument") ||
        value.includes("statue") ||
        value.includes("памятник") ||
        value.includes("пам'ятник") ||
        value.includes("монумент")
    ) {
        return "monument";
    }

    if (
        value.includes("portrait") ||
        value.includes("портрет") ||
        value.includes("repin")
    ) {
        return "portrait";
    }

    if (
        value.includes("painting") ||
        value.includes("картина") ||
        value.includes("oil on canvas")
    ) {
        return "painting";
    }

    if (
        value.includes("coin") ||
        value.includes("medal") ||
        value.includes("artifact") ||
        value.includes("монета") ||
        value.includes("медаль")
    ) {
        return "artifact";
    }

    if (
        value.includes("museum") ||
        value.includes("музей") ||
        value.includes("exhibition")
    ) {
        return "museum";
    }

    if (
        value.includes("illustration") ||
        value.includes("engraving") ||
        value.includes("print") ||
        value.includes("lithograph")
    ) {
        return "illustration";
    }

    return "other";
};