import {cookies} from "next/headers";
import {DocumentsPage} from "@/src/components/documents";
import {getDocumentsItems} from "@/src/helpers/documents";
import {DocumentsLanguage} from "@/src/types/documents/documents";

type DocumentsRoutePageProps = {
    searchParams?: Promise<{
        page?: string;
    }>;
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