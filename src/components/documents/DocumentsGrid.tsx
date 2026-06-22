import {DocumentsCard} from "./DocumentsCard";
import {DocumentItem} from "@/src/types/documents/documents";

type DocumentsGridProps = {
    items: DocumentItem[];
    detailsLabel: string;
    downloadLabel: string;
    closeLabel: string;
};

export const DocumentsGrid = ({
                                  items,
                                  detailsLabel,
                                  downloadLabel,
                                  closeLabel,
                              }: DocumentsGridProps) => {
    return (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {items.map((item) => (
                <DocumentsCard
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