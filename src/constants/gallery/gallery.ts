import {GalleryItem} from "@/src/types/gallery";

export const GALLERY_ITEMS_PER_PAGE = 12;

export const GALLERY_ITEMS: GalleryItem[] = Array.from({length: 24}).map(
    (_, index) => {
        const number = String(index + 1).padStart(2, "0");

        return {
            id: `gallery-${number}`,
            order: index + 1,
            image: `/images/gallery/gallery-${number}.jpg`,
        };
    }
);