import type {Metadata} from "next";
import {cookies} from "next/headers";

import {LegendsPage} from "@/src/components/legends";
import {LegendsLanguage} from "@/src/types/legends";

export const metadata: Metadata = {
    title: "Legends",
    description:
        "Read legends, folklore, and traditional stories connected with Ivan Sirko, the Zaporizhian Cossacks, and historical memory.",
    alternates: {
        canonical: "/legends",
    },
    openGraph: {
        title: "Legends | Ivan Sirko",
        description:
            "Legends and traditional stories about Ivan Sirko, his image in folklore, and Cossack historical memory.",
        url: "/legends",
        images: ["/opengraph-image.png"],
    },
    twitter: {
        title: "Legends | Ivan Sirko",
        description:
            "Explore legends and folklore connected with Ivan Sirko.",
        images: ["/opengraph-image.png"],
    },
};

const getCurrentLang = async (): Promise<LegendsLanguage> => {
    const cookieStore = await cookies();

    const language =
        cookieStore.get("language")?.value ??
        cookieStore.get("lang")?.value ??
        cookieStore.get("locale")?.value ??
        cookieStore.get("NEXT_LOCALE")?.value;

    return language === "en" ? "en" : "uk";
};

const LegendsRoutePage = async () => {
    const currentLang = await getCurrentLang();

    return <LegendsPage currentLang={currentLang} />;
};

export default LegendsRoutePage;