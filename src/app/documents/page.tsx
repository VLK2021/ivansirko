import type {Metadata} from "next";
import {cookies} from "next/headers";

import {DocumentsPage} from "@/src/components/documents";
import {getDocumentsItems} from "@/src/helpers/documents";
import {DocumentsLanguage} from "@/src/types/documents/documents";

type DocumentsRoutePageProps = {
    searchParams?: Promise<{
        page?: string;
    }>;
};

export const metadata: Metadata = {
    title: "Documents",
    description:
        "A collection of historical documents, sources, references, and archival materials related to Ivan Sirko and his era.",
    alternates: {
        canonical: "/documents",
    },
    openGraph: {
        title: "Documents | Ivan Sirko",
        description:
            "Historical documents and source materials connected with Ivan Sirko and the Zaporizhian Cossack period.",
        url: "/documents",
        images: ["/opengraph-image.png"],
    },
    twitter: {
        title: "Documents | Ivan Sirko",
        description:
            "Explore historical documents and references about Ivan Sirko.",
        images: ["/opengraph-image.png"],
    },
};

const getPage = (value?: string): number => {
    const page = Number(value);

    return Number.isFinite(page) && page > 0 ? page : 1;
};

const getCurrentLang = async (): Promise<DocumentsLanguage> => {
    const cookieStore = await cookies();

    const language =
        cookieStore.get("language")?.value ??
        cookieStore.get("lang")?.value ??
        cookieStore.get("locale")?.value ??
        cookieStore.get("NEXT_LOCALE")?.value;

    return language === "en" ? "en" : "uk";
};

const DocumentsRoutePage = async ({searchParams}: DocumentsRoutePageProps) => {
    const params = await searchParams;
    const currentLang = await getCurrentLang();
    const items = getDocumentsItems();

    return (
        <DocumentsPage
            currentLang={currentLang}
            page={getPage(params?.page)}
            items={items}
        />
    );
};

export default DocumentsRoutePage;