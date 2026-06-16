import type { AppLanguage } from "@/src/helpers";
import {
    COMMONS_API_URL,
    COMMONS_ROOT_CATEGORY,
} from "./commons.config";

type CommonsCategoryMember = {
    pageid: number;
    ns: number;
    title: string;
};

type CommonsMetadataItem = {
    value?: string;
};

type CommonsImageInfo = {
    url?: string;
    thumburl?: string;
    width?: number;
    height?: number;
    mime?: string;
    descriptionurl?: string;
    extmetadata?: Record<string, CommonsMetadataItem>;
};

type CommonsPage = {
    pageid: number;
    ns: number;
    title: string;
    imageinfo?: CommonsImageInfo[];
};

type CommonsApiResponse = {
    query?: {
        categorymembers?: CommonsCategoryMember[];
        pages?: Record<string, CommonsPage>;
    };
};

type CommonsCleanFile = {
    pageId: number;
    title: string;
    url: string | null;
    thumbUrl: string | null;
    width: number | null;
    height: number | null;
    mime: string | null;
    descriptionUrl: string | null;
    artist: string | null;
    license: string | null;
    credit: string | null;
    source: string | null;
};

const SIRKO_FILE_KEYWORDS = [
    "sirko",
    "сірко",
    "syrko",
    "сирко",
];

const fetchCommons = async (
    params: URLSearchParams,
): Promise<CommonsApiResponse> => {
    const response = await fetch(`${COMMONS_API_URL}?${params.toString()}`, {
        next: {
            revalidate: 86400,
        },
    });

    if (!response.ok) {
        return {};
    }

    return response.json();
};

const getCategoryMembers = async (
    category: string,
): Promise<CommonsCategoryMember[]> => {
    const params = new URLSearchParams({
        action: "query",
        format: "json",
        origin: "*",
        list: "categorymembers",
        cmtitle: `Category:${category}`,
        cmlimit: "100",
    });

    const data = await fetchCommons(params);

    return data.query?.categorymembers ?? [];
};

const getFileDetails = async (
    fileTitles: string[],
): Promise<CommonsPage[]> => {
    if (!fileTitles.length) {
        return [];
    }

    const params = new URLSearchParams({
        action: "query",
        format: "json",
        origin: "*",
        prop: "imageinfo",
        titles: fileTitles.join("|"),
        iiprop: "url|size|mime|extmetadata",
        iiurlwidth: "1200",
    });

    const data = await fetchCommons(params);

    return Object.values(data.query?.pages ?? {});
};

const cleanHtml = (value?: string) => {
    if (!value) {
        return null;
    }

    return value
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&#39;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/\s+/g, " ")
        .trim();
};

const cleanFile = (page: CommonsPage): CommonsCleanFile => {
    const info = page.imageinfo?.[0];

    return {
        pageId: page.pageid,
        title: page.title,
        url: info?.url ?? null,
        thumbUrl: info?.thumburl ?? null,
        width: info?.width ?? null,
        height: info?.height ?? null,
        mime: info?.mime ?? null,
        descriptionUrl: info?.descriptionurl ?? null,
        artist: cleanHtml(info?.extmetadata?.Artist?.value),
        license: cleanHtml(info?.extmetadata?.LicenseShortName?.value),
        credit: cleanHtml(info?.extmetadata?.Credit?.value),
        source: cleanHtml(info?.extmetadata?.Source?.value),
    };
};

const isSirkoFile = (file: CommonsCleanFile) => {
    const text = [
        file.title,
        file.artist,
        file.credit,
        file.source,
        file.descriptionUrl,
    ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

    return SIRKO_FILE_KEYWORDS.some((keyword) => text.includes(keyword));
};

const getUniqueValues = (items: string[]) => {
    return Array.from(new Set(items));
};

export const getCommonsRawData = async (lang: AppLanguage) => {
    const rootMembers = await getCategoryMembers(COMMONS_ROOT_CATEGORY);

    const rootFiles = rootMembers
        .filter((item) => item.title.startsWith("File:"))
        .map((item) => item.title);

    const subcategories = rootMembers
        .filter((item) => item.title.startsWith("Category:"))
        .map((item) => item.title.replace("Category:", ""));

    const nestedMembersResults: {
        category: string;
        members: CommonsCategoryMember[];
    }[] = [];

    for (const category of subcategories) {
        const members = await getCategoryMembers(category);

        nestedMembersResults.push({
            category,
            members,
        });
    }

    const nestedFiles = nestedMembersResults.flatMap((result) => {
        return result.members
            .filter((item) => item.title.startsWith("File:"))
            .map((item) => item.title);
    });

    const allFileTitles = getUniqueValues([
        ...rootFiles,
        ...nestedFiles,
    ]);

    const fileDetails = await getFileDetails(allFileTitles);

    const allFiles = fileDetails.map(cleanFile);
    const files = allFiles.filter(isSirkoFile);

    return {
        source: "commons",
        lang,
        rootCategory: COMMONS_ROOT_CATEGORY,
        status: files.length > 0 ? "useful" : "not-useful",
        fetchedAt: new Date().toISOString(),
        data: {
            rootCategory: COMMONS_ROOT_CATEGORY,
            subcategories,
            scannedFilesCount: allFiles.length,
            totalFilesCount: files.length,
            files,
        },
    };
};