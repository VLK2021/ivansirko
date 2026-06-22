import Link from "next/link";

type GalleryPaginationProps = {
    currentPage: number;
    totalPages: number;
    label: string;
};

type PaginationItem = number | "ellipsis";

const createGalleryPageHref = (page: number): string => {
    return page <= 1 ? "/gallery" : `/gallery?page=${page}`;
};

const createPaginationItems = (
    currentPage: number,
    totalPages: number
): PaginationItem[] => {
    if (totalPages <= 7) {
        return Array.from({length: totalPages}, (_, index) => index + 1);
    }

    const items: PaginationItem[] = [1];

    const left = Math.max(2, currentPage - 1);
    const right = Math.min(totalPages - 1, currentPage + 1);

    if (left > 2) {
        items.push("ellipsis");
    }

    for (let page = left; page <= right; page += 1) {
        items.push(page);
    }

    if (right < totalPages - 1) {
        items.push("ellipsis");
    }

    items.push(totalPages);

    return items;
};

export const GalleryPagination = ({
                                      currentPage,
                                      totalPages,
                                      label,
                                  }: GalleryPaginationProps) => {
    if (totalPages <= 1) {
        return null;
    }

    const paginationItems = createPaginationItems(currentPage, totalPages);
    const hasPrevPage = currentPage > 1;
    const hasNextPage = currentPage < totalPages;

    const baseButtonClass =
        "flex h-9 min-w-9 items-center justify-center border border-[#d8b16a] px-3 text-xs font-black uppercase tracking-[0.12em] transition-colors duration-300";

    const normalButtonClass =
        "bg-[#94551f] text-[#160903] hover:bg-[#d8b16a]";

    const activeButtonClass =
        "bg-[#f7d78a] text-[#160903] shadow-[0_0_0_2px_rgba(22,9,3,0.45)]";

    const disabledButtonClass =
        "pointer-events-none bg-[#94551f]/35 text-[#160903]/35 opacity-60";

    return (
        <nav className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm font-bold text-[#2a1205]">
                {label} {currentPage} / {totalPages}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
                <Link
                    href={createGalleryPageHref(currentPage - 1)}
                    aria-disabled={!hasPrevPage}
                    className={`${baseButtonClass} ${
                        hasPrevPage ? normalButtonClass : disabledButtonClass
                    }`}
                >
                    ←
                </Link>

                {paginationItems.map((item, index) => {
                    if (item === "ellipsis") {
                        return (
                            <span
                                key={`ellipsis-${index}`}
                                className="flex h-9 min-w-9 items-center justify-center text-xs font-black text-[#2a1205]"
                            >
                                ...
                            </span>
                        );
                    }

                    const isActive = item === currentPage;

                    return (
                        <Link
                            key={item}
                            href={createGalleryPageHref(item)}
                            aria-current={isActive ? "page" : undefined}
                            className={`${baseButtonClass} ${
                                isActive ? activeButtonClass : normalButtonClass
                            }`}
                        >
                            {item}
                        </Link>
                    );
                })}

                <Link
                    href={createGalleryPageHref(currentPage + 1)}
                    aria-disabled={!hasNextPage}
                    className={`${baseButtonClass} ${
                        hasNextPage ? normalButtonClass : disabledButtonClass
                    }`}
                >
                    →
                </Link>
            </div>
        </nav>
    );
};