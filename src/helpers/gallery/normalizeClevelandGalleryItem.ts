import {detectGalleryCategory} from "@/src/helpers/gallery/galleryCategory.helpers";
import {
    createStableId,
    extractYear,
    getNumberValue,
    getStringValue,
    isRecord,
    stripHtml,
} from "@/src/helpers/gallery/galleryText.helpers";
import {GalleryItem, GalleryRawItem} from "@/src/types/gallery";

export const normalizeClevelandGalleryItem = (
    item: GalleryRawItem
): GalleryItem | null => {
    if (!isRecord(item.raw)) {
        return null;
    }

    const images = isRecord(item.raw.images) ? item.raw.images : null;
    const webImage = isRecord(images?.web) ? images.web : null;
    const printImage = isRecord(images?.print) ? images.print : null;

    const imageUrl =
        getStringValue(webImage ?? {}, "url") ??
        getStringValue(printImage ?? {}, "url");

    if (!imageUrl) {
        return null;
    }

    const itemId = getNumberValue(item.raw, "id");
    const title = getStringValue(item.raw, "title") ?? "Untitled Cleveland item";

    const description =
        stripHtml(getStringValue(item.raw, "description")) ??
        stripHtml(getStringValue(item.raw, "type")) ??
        null;

    const creators = Array.isArray(item.raw.creators)
        ? item.raw.creators
            .filter(isRecord)
            .map((creator) => getStringValue(creator, "description"))
            .filter(Boolean)
            .join(", ")
        : null;

    const author = creators && creators.length > 0 ? creators : null;

    return {
        id: createStableId(item.source, itemId ?? title, title),
        source: item.source,
        sourceItemId: String(itemId ?? title),
        query: item.query,

        title,
        description,
        category: detectGalleryCategory(title, description, item.query),

        imageUrl,
        thumbnailUrl: imageUrl,

        sourceUrl: getStringValue(item.raw, "url"),
        author,
        license: getStringValue(item.raw, "share_license_status"),
        year: extractYear(getStringValue(item.raw, "creation_date"), title),
        location: "Cleveland Museum of Art",

        width: getNumberValue(webImage ?? {}, "width"),
        height: getNumberValue(webImage ?? {}, "height"),
        mime: null,

        isPublicDomain:
            getStringValue(item.raw, "share_license_status") === "CC0",
        tags: [item.source, item.query],
    };
};