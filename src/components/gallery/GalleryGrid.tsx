import {GalleryItem} from "@/src/types/gallery";
import {GalleryCard} from "./GalleryCard";

type GalleryGridProps = {
    items: GalleryItem[];
    detailsLabel: string;
    downloadLabel: string;
    closeLabel: string;
};

export const GalleryGrid = ({
                                items,
                                detailsLabel,
                                downloadLabel,
                                closeLabel,
                            }: GalleryGridProps) => {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
                <GalleryCard
                    key={item.id}
                    item={item}
                    detailsLabel={detailsLabel}
                    downloadLabel={downloadLabel}
                    closeLabel={closeLabel}
                />
            ))}
        </div>
    );
};