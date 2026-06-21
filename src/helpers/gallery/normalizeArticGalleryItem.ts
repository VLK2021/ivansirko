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

const ARTIC_IMAGE_BASE_URL = "https://www.artic.edu/iiif/2";

export const normalizeArticGalleryItem = (
    item: GalleryRawItem
): GalleryItem | null => {
    if (!isRecord(item.raw)) {
        return null;
    }

    const imageId = getStringValue(item.raw, "image_id");

    if (!imageId) {
        return null;
    }

    const itemId = getNumberValue(item.raw, "id");
    const title = getStringValue(item.raw, "title") ?? "Untitled ArtIC item";

    const thumbnail = isRecord(item.raw.thumbnail)
        ? item.raw.thumbnail
        : null;

    const description =
        stripHtml(getStringValue(thumbnail ?? {}, "alt_text")) ??
        stripHtml(getStringValue(item.raw, "artist_display")) ??
        null;

    const imageUrl = `${ARTIC_IMAGE_BASE_URL}/${imageId}/full/1200,/0/default.jpg`;
    const thumbnailUrl = `${ARTIC_IMAGE_BASE_URL}/${imageId}/full/500,/0/default.jpg`;

    return {
        id: createStableId(item.source, itemId ?? imageId, title),
        source: item.source,
        sourceItemId: String(itemId ?? imageId),
        query: item.query,

        title,
        description,
        category: detectGalleryCategory(title, description, item.query),

        imageUrl,
        thumbnailUrl,

        sourceUrl: getStringValue(item.raw, "api_link"),
        author: getStringValue(item.raw, "artist_display"),
        license: null,
        year: extractYear(getStringValue(item.raw, "date_display"), title),
        location: "Art Institute of Chicago",

        width: null,
        height: null,
        mime: "image/jpeg",

        isPublicDomain: false,
        tags: [item.source, item.query],
    };
};