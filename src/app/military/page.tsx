import type {Metadata} from "next";
import {cookies} from "next/headers";

import {MilitaryPage} from "@/src/components/military";
import {MilitaryLanguage} from "@/src/types/military";

export const metadata: Metadata = {
    title: "Military Path",
    description:
        "Explore Ivan Sirko's military path through campaigns, raids, battles, strategic events, opponents, historical context, and verified source-based notes.",
    alternates: {
        canonical: "/military",
    },
    openGraph: {
        title: "Military Path | Ivan Sirko",
        description:
            "A structured overview of Ivan Sirko's military campaigns, battles, raids, and historical events.",
        url: "/military",
        images: ["/opengraph-image.png"],
    },
    twitter: {
        title: "Military Path | Ivan Sirko",
        description:
            "Explore Ivan Sirko's campaigns, battles, raids, and military legacy.",
        images: ["/opengraph-image.png"],
    },
};

const getCurrentLang = async (): Promise<MilitaryLanguage> => {
    const cookieStore = await cookies();

    const language =
        cookieStore.get("language")?.value ??
        cookieStore.get("lang")?.value ??
        cookieStore.get("locale")?.value ??
        cookieStore.get("NEXT_LOCALE")?.value;

    return language === "en" ? "en" : "uk";
};

const MilitaryRoutePage = async () => {
    const currentLang = await getCurrentLang();

    return <MilitaryPage currentLang={currentLang} />;
};

export default MilitaryRoutePage;