import type { AppLanguage } from "@/src/helpers";
import { EIU_SIRKO_URL } from "./eiu.config";

export const getEIURawData = async (lang: AppLanguage) => {
    const response = await fetch(EIU_SIRKO_URL, {
        next: {
            revalidate: 86400,
        },
    });

    const text = await response.text();

    return {
        source: "eiu",
        lang,
        url: EIU_SIRKO_URL,
        status: response.status,
        fetchedAt: new Date().toISOString(),
        data: text,
    };
};