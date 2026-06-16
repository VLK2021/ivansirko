import { NextResponse } from "next/server";

import { getValidLanguage } from "@/src/helpers";
import { getCommonsRawData } from "@/src/services/research/commons";

export const dynamic = "force-dynamic";

export async function GET(
    request: Request,
) {
    try {
        const { searchParams } = new URL(
            request.url,
        );

        const lang = getValidLanguage(
            searchParams.get("lang") ?? undefined,
        );

        const data = await getCommonsRawData(
            lang,
        );

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json(
            {
                source: "commons",
                error:
                    "Failed to fetch Commons data",
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