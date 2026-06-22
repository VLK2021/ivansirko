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

    if (left > 2) items.push("ellipsis");

    for (let page = left; page <= right; page += 1) {
        items.push(page);
    }

    if (right < totalPages - 1) items.push("ellipsis");

    items.push(totalPages);

    return items;
};

export const GalleryPagination = ({
                                      currentPage,
                                      totalPages,
                                      label,
                                  }: GalleryPaginationProps) => {
    if (totalPages <= 1) return null;

    const paginationItems = createPaginationItems(currentPage, totalPages);
    const hasPrevPage = currentPage > 1;
    const hasNextPage = currentPage < totalPages;

    const base =
        "flex h-9 min-w-9 items-center justify-center border px-3 text-xs font-black uppercase tracking-[0.1em] transition-colors duration-300";

    const normal =
        "border-[#d8b16a] bg-[#94551f] text-[#160903] hover:bg-[#d8b16a]";

    const active =
        "border-[#160903] bg-[#160903] text-[#f7d78a] shadow-[0_0_0_2px_rgba(216,177,106,0.8)]";

    const disabled =
        "pointer-events-none border-[#9b6a2c]/35 bg-[#94551f]/25 text-[#3a1808]/40";

    return (
        <nav className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm font-black text-[#2a1205]">
                {label} {currentPage} / {totalPages}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
                <Link
                    href={createGalleryPageHref(currentPage - 1)}
                    className={`${base} ${hasPrevPage ? normal : disabled}`}
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

                    return (
                        <Link
                            key={item}
                            href={createGalleryPageHref(item)}
                            aria-current={item === currentPage ? "page" : undefined}
                            className={`${base} ${
                                item === currentPage ? active : normal
                            }`}
                        >
                            {item}
                        </Link>
                    );
                })}

                <Link
                    href={createGalleryPageHref(currentPage + 1)}
                    className={`${base} ${hasNextPage ? normal : disabled}`}
                >
                    →
                </Link>
            </div>
        </nav>
    );
};