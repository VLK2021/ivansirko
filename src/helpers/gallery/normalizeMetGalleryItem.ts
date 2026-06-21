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

export const normalizeMetGalleryItem = (
    item: GalleryRawItem
): GalleryItem | null => {
    if (!isRecord(item.raw)) {
        return null;
    }

    const imageUrl = getStringValue(item.raw, "primaryImage");
    const thumbnailUrl =
        getStringValue(item.raw, "primaryImageSmall") ?? imageUrl;

    if (!imageUrl || !thumbnailUrl) {
        return null;
    }

    const objectId = getNumberValue(item.raw, "objectID");
    const title = getStringValue(item.raw, "title") ?? "Untitled MET item";

    const description =
        stripHtml(getStringValue(item.raw, "objectName")) ??
        stripHtml(getStringValue(item.raw, "classification")) ??
        null;

    const author =
        getStringValue(item.raw, "artistDisplayName") ??
        getStringValue(item.raw, "culture");

    const year = extractYear(
        getStringValue(item.raw, "objectDate"),
        getStringValue(item.raw, "period"),
        title
    );

    const sourceUrl = getStringValue(item.raw, "objectURL");

    return {
        id: createStableId(item.source, objectId ?? title, title),
        source: item.source,
        sourceItemId: String(objectId ?? title),
        query: item.query,

        title,
        description,
        category: detectGalleryCategory(title, description, item.query),

        imageUrl,
        thumbnailUrl,

        sourceUrl,
        author,
        license: "Public domain",
        year,
        location: getStringValue(item.raw, "repository"),

        width: null,
        height: null,
        mime: null,

        isPublicDomain: Boolean(item.raw.isPublicDomain),
        tags: [item.source, item.query],
    };
};