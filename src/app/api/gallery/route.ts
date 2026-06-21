import {NextResponse} from "next/server";
import {getGalleryItems} from "@/src/services/gallery";

export const revalidate = 86400;

export const GET = async () => {
    const response = await getGalleryItems();

    return NextResponse.json(response);
};