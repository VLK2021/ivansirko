export type GallerySourceName = "wikimedia" | "met" | "cleveland" | "artic";

export type GallerySourceStatus = "fulfilled" | "rejected";

export type GalleryItemCategory =
    | "portrait"
    | "painting"
    | "monument"
    | "burial"
    | "museum"
    | "artifact"
    | "illustration"
    | "other";

export type GallerySort = "title" | "year" | "source" | "category";

export interface GalleryRawItem {
    source: GallerySourceName;
    query: string;
    raw: unknown;
}

export interface GalleryRawSourceResult {
    source: GallerySourceName;
    status: GallerySourceStatus;
    total: number;
    items: GalleryRawItem[];
    error?: string;
}

export type GallerySourceService = () => Promise<GalleryRawSourceResult>;

export interface GallerySourceSummary {
    source: GallerySourceName;
    status: GallerySourceStatus;
    total: number;
    error?: string;
}

export interface GalleryItem {
    id: string;
    source: GallerySourceName;
    sourceItemId: string;
    query: string;
    title: string;
    description: string | null;
    category: GalleryItemCategory;
    imageUrl: string;
    thumbnailUrl: string;
    sourceUrl: string | null;
    author: string | null;
    license: string | null;
    year: string | null;
    location: string | null;
    width: number | null;
    height: number | null;
    mime: string | null;
    isPublicDomain: boolean;
    tags: string[];
}

export interface GalleryPublicItem {
    id: string;
    source: GallerySourceName;
    title: string;
    description: string | null;
    category: GalleryItemCategory;
    imageUrl: string;
    thumbnailUrl: string;
    sourceUrl: string | null;
    author: string | null;
    year: string | null;
}

export interface GalleryResponse {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
    sources: GallerySourceSummary[];
    items: GalleryPublicItem[];
}