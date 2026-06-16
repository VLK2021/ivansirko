import { NextResponse } from "next/server";

import { getValidLanguage } from "@/src/helpers";
import { getWikidataRawData } from "@/src/services/research/wikidata";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const lang = getValidLanguage(searchParams.get("lang") ?? undefined);

        const data = await getWikidataRawData(lang);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            {
                source: "wikidata",
                error: "Failed to fetch Wikidata data",
                message: error instanceof Error ? error.message : "Unknown error",
            },
            {
                status: 500,
            },
        );
    }
}