import Link from "next/link";

type CommonPaginationProps = {
    currentPage: number;
    totalPages: number;
    label: string;
    basePath: string;
};

type PaginationItem = number | "ellipsis";

const createPageHref = (basePath: string, page: number): string => {
    return page <= 1 ? basePath : `${basePath}?page=${page}`;
};

const createPaginationItems = (
    currentPage: number,
    totalPages: number
): PaginationItem[] => {
    if (totalPages <= 3) {
        return Array.from({length: totalPages}, (_, index) => index + 1);
    }

    if (currentPage <= 2) {
        return [1, 2, "ellipsis", totalPages];
    }

    if (currentPage >= totalPages - 1) {
        return [1, "ellipsis", totalPages - 1, totalPages];
    }

    return [1, "ellipsis", currentPage, "ellipsis", totalPages];
};

export const CommonPagination = ({
                                     currentPage,
                                     totalPages,
                                     label,
                                     basePath,
                                 }: CommonPaginationProps) => {
    if (totalPages <= 1) return null;

    const paginationItems = createPaginationItems(currentPage, totalPages);
    const hasPrevPage = currentPage > 1;
    const hasNextPage = currentPage < totalPages;

    const base =
        "flex h-9 min-w-9 items-center justify-center border px-3 text-xs font-black uppercase tracking-[0.1em] transition-colors duration-300";

    const normal =
        "border-[#d8b16a] bg-[#94551f] text-[#160903] hover:bg-[#d8b16a] hover:text-[#160903]";

    const active =
        "border-[#d8b16a] bg-[#d8b16a] text-[#160903] shadow-[0_0_0_3px_rgba(22,9,3,0.65)]";

    const disabled =
        "pointer-events-none border-[#d8b16a]/35 bg-[#94551f]/35 text-[#160903]/40";

    return (
        <nav className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm font-black text-[#2a1205]">
                {label} {currentPage} / {totalPages}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2">
                <Link
                    href={createPageHref(basePath, currentPage - 1)}
                    aria-disabled={!hasPrevPage}
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

                    const isActive = item === currentPage;

                    return (
                        <Link
                            key={item}
                            href={createPageHref(basePath, item)}
                            aria-current={isActive ? "page" : undefined}
                            className={`${base} ${isActive ? active : normal}`}
                        >
                            {item}
                        </Link>
                    );
                })}

                <Link
                    href={createPageHref(basePath, currentPage + 1)}
                    aria-disabled={!hasNextPage}
                    className={`${base} ${hasNextPage ? normal : disabled}`}
                >
                    →
                </Link>
            </div>
        </nav>
    );
};