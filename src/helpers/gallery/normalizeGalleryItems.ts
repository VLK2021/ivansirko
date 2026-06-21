import {normalizeWikimediaGalleryItem} from "@/src/helpers/gallery/normalizeWikimediaGalleryItem";
import {GalleryItem, GalleryRawItem} from "@/src/types/gallery";

export const normalizeGalleryItems = (
    items: GalleryRawItem[]
): GalleryItem[] => {
    return items
        .map((item) => {
            return normalizeWikimediaGalleryItem(item);
        })
        .filter((item): item is GalleryItem => {
            return Boolean(item);
        });
};