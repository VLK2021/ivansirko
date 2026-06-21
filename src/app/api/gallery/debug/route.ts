import {NextRequest, NextResponse} from "next/server";
import {
    gallerySourceNames,
    getRawGallerySourceByName,
    getRawGallerySources,
} from "@/src/services/gallery";
import {GallerySourceName} from "@/src/types/gallery";

const isGallerySourceName = (
    value: string | null
): value is GallerySourceName => {
    if (!value) {
        return false;
    }

    return gallerySourceNames.includes(value as GallerySourceName);
};

export const GET = async (request: NextRequest) => {
    const source = request.nextUrl.searchParams.get("source");

    if (!source) {
        const sources = await getRawGallerySources();

        return NextResponse.json(sources);
    }

    if (!isGallerySourceName(source)) {
        return NextResponse.json(
            {
                error: `Unknown gallery source: ${source}`,
                availableSources: gallerySourceNames,
            },
            {
                status: 400,
            }
        );
    }

    const result = await getRawGallerySourceByName(source);

    return NextResponse.json(result);
};