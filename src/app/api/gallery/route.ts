import {NextRequest, NextResponse} from "next/server";
import {
    gallerySourceNames,
    getGalleryItems,
} from "@/src/services/gallery";
import {
    GalleryItemCategory,
    GallerySort,
    GallerySourceName,
} from "@/src/types/gallery";

export const revalidate = 86400;

const GALLERY_CATEGORIES: GalleryItemCategory[] = [
    "portrait",
    "painting",
    "monument",
    "burial",
    "museum",
    "artifact",
    "illustration",
    "other",
];

const GALLERY_SORT_OPTIONS: GallerySort[] = [
    "title",
    "year",
    "source",
    "category",
];

const getNumberParam = (
    value: string | null,
    fallback: number
): number => {
    if (!value) {
        return fallback;
    }

    const parsedValue = Number(value);

    return Number.isFinite(parsedValue) ? parsedValue : fallback;
};

const getCategoryParam = (
    value: string | null
): GalleryItemCategory | undefined => {
    if (!value) {
        return undefined;
    }

    return GALLERY_CATEGORIES.includes(value as GalleryItemCategory)
        ? (value as GalleryItemCategory)
        : undefined;
};

const getSourceParam = (
    value: string | null
): GallerySourceName | undefined => {
    if (!value) {
        return undefined;
    }

    return gallerySourceNames.includes(value as GallerySourceName)
        ? (value as GallerySourceName)
        : undefined;
};

const getSortParam = (value: string | null): GallerySort => {
    if (!value) {
        return "title";
    }

    return GALLERY_SORT_OPTIONS.includes(value as GallerySort)
        ? (value as GallerySort)
        : "title";
};

export const GET = async (request: NextRequest) => {
    const {searchParams} = request.nextUrl;

    const response = await getGalleryItems({
        page: getNumberParam(searchParams.get("page"), 1),
        limit: getNumberParam(searchParams.get("limit"), 24),
        category: getCategoryParam(searchParams.get("category")),
        source: getSourceParam(searchParams.get("source")),
        search: searchParams.get("search") ?? undefined,
        sort: getSortParam(searchParams.get("sort")),
    });

    return NextResponse.json(response);
};