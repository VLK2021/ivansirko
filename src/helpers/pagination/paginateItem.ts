export type PaginatedResult<T> = {
    items: T[];
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
};

type PaginateItemsParams<T> = {
    items: T[];
    page?: number;
    limit?: number;
};

export const paginateItems = <T>({
                                     items,
                                     page = 1,
                                     limit = 24,
                                 }: PaginateItemsParams<T>): PaginatedResult<T> => {
    const safeLimit = Math.min(Math.max(limit, 1), 100);
    const total = items.length;
    const totalPages = Math.max(1, Math.ceil(total / safeLimit));
    const safePage = Math.min(Math.max(page, 1), totalPages);

    const startIndex = (safePage - 1) * safeLimit;

    return {
        items: items.slice(startIndex, startIndex + safeLimit),
        page: safePage,
        limit: safeLimit,
        total,
        totalPages,
        hasNextPage: safePage < totalPages,
        hasPrevPage: safePage > 1,
    };
};