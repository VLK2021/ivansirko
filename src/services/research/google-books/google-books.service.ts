import type { AppLanguage } from "@/src/helpers";
import {
    GOOGLE_BOOKS_API_URL,
    GOOGLE_BOOKS_QUERIES,
} from "./google-books.config";

const sleep = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

const fetchGoogleBooks = async (query: string) => {
    const params = new URLSearchParams({
        q: query,
        maxResults: "20",
        printType: "books",
        orderBy: "relevance",
    });

    const response = await fetch(`${GOOGLE_BOOKS_API_URL}?${params.toString()}`, {
        next: {
            revalidate: 86400,
        },
    });

    if (!response.ok) {
        return {
            query,
            error: true,
            status: response.status,
            items: [],
            totalItems: 0,
        };
    }

    const data = await response.json();

    return {
        query,
        error: false,
        status: response.status,
        totalItems: data?.totalItems ?? 0,
        items: data?.items ?? [],
    };
};

export const getGoogleBooksRawData = async (lang: AppLanguage) => {
    const results = [];

    for (const query of GOOGLE_BOOKS_QUERIES) {
        const data = await fetchGoogleBooks(query);
        results.push(data);

        await sleep(700);
    }

    return {
        source: "google-books",
        lang,
        fetchedAt: new Date().toISOString(),
        data: {
            queries: GOOGLE_BOOKS_QUERIES,
            results,
        },
    };
};