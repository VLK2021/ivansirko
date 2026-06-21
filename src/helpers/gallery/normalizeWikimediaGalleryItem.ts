import {detectGalleryCategory} from "@/src/helpers/gallery/galleryCategory.helpers";
import {
    cleanFileTitle,
    createStableId,
    extractYear,
    getNumberValue,
    getStringValue,
    isRecord,
    stripHtml,
} from "@/src/helpers/gallery/galleryText.helpers";
import {GalleryItem, GalleryRawItem} from "@/src/types/gallery";

type WikimediaImageInfo = {
    url?: string;
    thumburl?: string;
    descriptionurl?: string;
    mime?: string;
    width?: number;
    height?: number;
    extmetadata?: Record<string, {value?: string}>;
};

export const normalizeWikimediaGalleryItem = (
    item: GalleryRawItem
): GalleryItem | null => {
    if (!isRecord(item.raw)) {
        return null;
    }

    const imageInfo = Array.isArray(item.raw.imageinfo)
        ? (item.raw.imageinfo[0] as WikimediaImageInfo | undefined)
        : undefined;

    if (!imageInfo?.url || !imageInfo?.thumburl) {
        return null;
    }

    const title =
        cleanFileTitle(getStringValue(item.raw, "title")) ??
        "Untitled Wikimedia image";

    const metadata = imageInfo.extmetadata ?? {};

    const description =
        stripHtml(metadata.ImageDescription?.value) ??
        stripHtml(metadata.ObjectName?.value) ??
        null;

    const author =
        stripHtml(metadata.Artist?.value) ??
        stripHtml(metadata.Credit?.value) ??
        null;

    const license =
        stripHtml(metadata.LicenseShortName?.value) ??
        stripHtml(metadata.UsageTerms?.value) ??
        null;

    const year = extractYear(
        metadata.DateTimeOriginal?.value,
        metadata.DateTime?.value,
        description,
        title
    );

    const sourceItemId =
        String(getNumberValue(item.raw, "pageid") ?? title);

    return {
        id: createStableId(item.source, sourceItemId, title),
        source: item.source,
        sourceItemId,
        query: item.query,

        title,
        description,
        category: detectGalleryCategory(title, description, item.query),

        imageUrl: imageInfo.url,
        thumbnailUrl: imageInfo.thumburl,

        sourceUrl: imageInfo.descriptionurl ?? null,
        author,
        license,
        year,
        location: null,

        width: imageInfo.width ?? null,
        height: imageInfo.height ?? null,
        mime: imageInfo.mime ?? null,

        isPublicDomain:
            license?.toLowerCase().includes("public domain") ?? false,
        tags: [item.source, item.query],
    };
};