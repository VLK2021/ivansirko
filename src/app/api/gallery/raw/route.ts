import {NextResponse} from "next/server";
import {getRawGalleryItems} from "@/src/services/gallery";

export const revalidate = 86400;

export const GET = async () => {
    const response = await getRawGalleryItems();

    return NextResponse.json(response);
};