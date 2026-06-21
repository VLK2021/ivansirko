import {GalleryItem, GallerySort} from "@/src/types/gallery";

export const sortGalleryItems = (
    items: GalleryItem[],
    sort: GallerySort = "title"
): GalleryItem[] => {
    return [...items].sort((a, b) => {
        if (sort === "year") {
            return (b.year ?? "").localeCompare(a.year ?? "");
        }

        if (sort === "source") {
            return a.source.localeCompare(b.source);
        }

        if (sort === "category") {
            return a.category.localeCompare(b.category);
        }

        return a.title.localeCompare(b.title);
    });
};