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

    const baseClass =
        "flex h-11 min-w-11 items-center justify-center border px-4 text-sm font-black transition-all duration-300";

    const activeClass =
        "border-[#2a1205] bg-[#2a1205] text-[#f7d78a] shadow-[0_0_0_3px_rgba(247,215,138,0.7)]";

    const inactiveClass =
        "border-[#2a1205] bg-[#f7d78a] text-[#2a1205] shadow-[0_8px_24px_rgba(58,24,8,0.22)] hover:bg-[#ffffff] hover:text-[#2a1205] hover:shadow-[0_0_0_3px_rgba(42,18,5,0.35)]";

    const disabledClass =
        "pointer-events-none border-[#8b5a24]/25 bg-[#f7d78a]/25 text-[#8b5a24]/40";

    return (
        <nav className="mt-16 flex flex-col items-center gap-5">
            <p className="text-sm font-black text-[#2a1205]">
                {label} {currentPage} / {totalPages}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
                <Link
                    href={createGalleryPageHref(currentPage - 1)}
                    className={`${baseClass} ${
                        hasPrevPage ? inactiveClass : disabledClass
                    }`}
                >
                    ←
                </Link>

                {paginationItems.map((item, index) => {
                    if (item === "ellipsis") {
                        return (
                            <span
                                key={`ellipsis-${index}`}
                                className="flex h-11 min-w-11 items-center justify-center text-sm font-black text-[#2a1205]"
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
                            className={`${baseClass} ${
                                isActive ? activeClass : inactiveClass
                            }`}
                        >
                            {item}
                        </Link>
                    );
                })}

                <Link
                    href={createGalleryPageHref(currentPage + 1)}
                    className={`${baseClass} ${
                        hasNextPage ? inactiveClass : disabledClass
                    }`}
                >
                    →
                </Link>
            </div>
        </nav>
    );
};