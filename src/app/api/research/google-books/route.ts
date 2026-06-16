import { NextResponse } from "next/server";

import { getValidLanguage } from "@/src/helpers";
import { getGoogleBooksRawData } from "@/src/services/research/google-books";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const lang = getValidLanguage(searchParams.get("lang") ?? undefined);

        const data = await getGoogleBooksRawData(lang);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            {
                source: "google-books",
                error: "Failed to fetch Google Books data",
                message: error instanceof Error ? error.message : "Unknown error",
            },
            {
                status: 500,
            },
        );
    }
}