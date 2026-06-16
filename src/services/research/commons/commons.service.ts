import type { AppLanguage } from "@/src/helpers";
import { COMMONS_API_URL } from "./commons.config";

const COMMONS_CATEGORY_NAME = "Ivan Sirko";

const fetchCommons = async (params: URLSearchParams) => {
    const response = await fetch(`${COMMONS_API_URL}?${params.toString()}`, {
        next: {
            revalidate: 86400,
        },
    });

    if (!response.ok) {
        throw new Error(`Commons request failed: ${response.status}`);
    }

    return response.json();
};

export const getCommonsCategoryMembers = async (category: string) => {
    const params = new URLSearchParams({
        action: "query",
        format: "json",
        origin: "*",
        list: "categorymembers",
        cmtitle: `Category:${category}`,
        cmlimit: "100",
    });

    return fetchCommons(params);
};

export const getCommonsFileDetails = async (fileTitles: string[]) => {
    if (!fileTitles.length) {
        return null;
    }

    const params = new URLSearchParams({
        action: "query",
        format: "json",
        origin: "*",
        prop: "imageinfo",
        titles: fileTitles.join("|"),
        iiprop: "url|size|mime|metadata|commonmetadata|extmetadata",
        iiurlwidth: "1200",
    });

    return fetchCommons(params);
};

export const getCommonsRawData = async (lang: AppLanguage) => {
    const categoryMembers = await getCommonsCategoryMembers(COMMONS_CATEGORY_NAME);

    const members = categoryMembers?.query?.categorymembers ?? [];

    const files = members
        .filter((item: { title?: string }) => item.title?.startsWith("File:"))
        .map((item: { title: string }) => item.title);

    const subcategories = members
        .filter((item: { title?: string }) => item.title?.startsWith("Category:"))
        .map((item: { title: string }) => item.title);

    const fileDetails = await getCommonsFileDetails(files);

    return {
        source: "commons",
        lang,
        category: COMMONS_CATEGORY_NAME,
        fetchedAt: new Date().toISOString(),
        data: {
            categoryMembers,
            subcategories,
            files,
            fileDetails,
        },
    };
};