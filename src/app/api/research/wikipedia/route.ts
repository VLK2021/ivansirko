import { NextResponse } from "next/server";

import { getValidLanguage } from "@/src/helpers";
import { getWikipediaRawData } from "@/src/services/research/wikipedia";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const lang = getValidLanguage(searchParams.get("lang") ?? undefined);

        const data = await getWikipediaRawData(lang);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            {
                source: "wikipedia",
                error: "Failed to fetch Wikipedia data",
                message: error instanceof Error ? error.message : "Unknown error",
            },
            {
                status: 500,
            },
        );
    }
}