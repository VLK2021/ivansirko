import {normalizeArticGalleryItem} from "@/src/helpers/gallery/normalizeArticGalleryItem";
import {normalizeClevelandGalleryItem} from "@/src/helpers/gallery/normalizeClevelandGalleryItem";
import {normalizeMetGalleryItem} from "@/src/helpers/gallery/normalizeMetGalleryItem";
import {normalizeWikimediaGalleryItem} from "@/src/helpers/gallery/normalizeWikimediaGalleryItem";
import {normalizeWikipediaGalleryItem} from "@/src/helpers/gallery/normalizeWikipediaGalleryItem";
import {GalleryItem, GalleryRawItem} from "@/src/types/gallery";

export const normalizeGalleryItems = (
    items: GalleryRawItem[]
): GalleryItem[] => {
    return items
        .map((item) => {
            if (item.source === "wikimedia") {
                return normalizeWikimediaGalleryItem(item);
            }

            if (item.source === "met") {
                return normalizeMetGalleryItem(item);
            }

            if (item.source === "cleveland") {
                return normalizeClevelandGalleryItem(item);
            }

            if (item.source === "artic") {
                return normalizeArticGalleryItem(item);
            }

            if (
                item.source === "wikipedia-uk" ||
                item.source === "wikipedia-en"
            ) {
                return normalizeWikipediaGalleryItem(item);
            }

            return null;
        })
        .filter((item): item is GalleryItem => {
            return Boolean(item);
        });
};