import type {Metadata} from "next";
import {cookies} from "next/headers";

import {LegacyPage} from "@/src/components/legacy";
import {LegacyLanguage} from "@/src/types/legacy";

export const metadata: Metadata = {
    title: "Legacy",
    description:
        "Explore the historical legacy of Ivan Sirko, his role in Ukrainian memory, culture, military tradition, monuments, and public remembrance.",
    alternates: {
        canonical: "/legacy",
    },
    openGraph: {
        title: "Legacy | Ivan Sirko",
        description:
            "A section about Ivan Sirko's historical legacy, cultural memory, monuments, and influence on Ukrainian history.",
        url: "/legacy",
        images: ["/opengraph-image.png"],
    },
    twitter: {
        title: "Legacy | Ivan Sirko",
        description:
            "Discover the legacy of Ivan Sirko in Ukrainian history and culture.",
        images: ["/opengraph-image.png"],
    },
};

const getCurrentLang = async (): Promise<LegacyLanguage> => {
    const cookieStore = await cookies();

    const language =
        cookieStore.get("language")?.value ??
        cookieStore.get("lang")?.value ??
        cookieStore.get("locale")?.value ??
        cookieStore.get("NEXT_LOCALE")?.value;

    return language === "en" ? "en" : "uk";
};

const LegacyRoutePage = async () => {
    const currentLang = await getCurrentLang();

    return <LegacyPage currentLang={currentLang} />;
};

export default LegacyRoutePage;