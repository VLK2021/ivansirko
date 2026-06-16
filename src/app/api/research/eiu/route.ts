import { NextResponse } from "next/server";

import { getValidLanguage } from "@/src/helpers";
import { getEIURawData } from "@/src/services/research/eiu";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);

        const lang = getValidLanguage(
            searchParams.get("lang") ?? undefined,
        );

        const data = await getEIURawData(lang);

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            {
                source: "eiu",
                error: true,
                message:
                    error instanceof Error
                        ? error.message
                        : "Unknown error",
            },
            {
                status: 500,
            },
        );
    }
}