import {
    GalleryItem,
    GalleryItemCategory,
    GallerySourceName,
} from "@/src/types/gallery";

type FilterGalleryItemsParams = {
    items: GalleryItem[];
    category?: GalleryItemCategory;
    source?: GallerySourceName;
    search?: string;
};

export const filterGalleryItems = ({
                                       items,
                                       category,
                                       source,
                                       search,
                                   }: FilterGalleryItemsParams): GalleryItem[] => {
    let filteredItems = items.filter((item) => {
        return Boolean(item.imageUrl) && Boolean(item.thumbnailUrl);
    });

    if (category) {
        filteredItems = filteredItems.filter((item) => {
            return item.category === category;
        });
    }

    if (source) {
        filteredItems = filteredItems.filter((item) => {
            return item.source === source;
        });
    }

    if (search) {
        const normalizedSearch = search.toLowerCase().trim();

        filteredItems = filteredItems.filter((item) => {
            const text = [
                item.title,
                item.description,
                item.author,
                item.year,
                item.location,
                item.source,
                item.category,
                ...item.tags,
            ]
                .filter(Boolean)
                .join(" ")
                .toLowerCase();

            return text.includes(normalizedSearch);
        });
    }

    return filteredItems;
};