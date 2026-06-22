import {cookies} from "next/headers";
import {GalleryPage} from "@/src/components/gallery";
import {getGalleryItems} from "@/src/helpers/gallery";
import {GalleryLanguage} from "@/src/types/gallery";

type GalleryRoutePageProps = {
    searchParams?: Promise<{
        page?: string;
    }>;
};

const getPage = (value?: string): number => {
    const page = Number(value);

    return Number.isFinite(page) && page > 0 ? page : 1;
};

const getCurrentLang = async (): Promise<GalleryLanguage> => {
    const cookieStore = await cookies();

    const language =
        cookieStore.get("language")?.value ??
        cookieStore.get("lang")?.value ??
        cookieStore.get("locale")?.value ??
        cookieStore.get("NEXT_LOCALE")?.value;

    return language === "en" ? "en" : "uk";
};

const GalleryRoutePage = async ({searchParams}: GalleryRoutePageProps) => {
    const params = await searchParams;
    const currentLang = await getCurrentLang();
    const items = getGalleryItems();

    return (
        <GalleryPage
            currentLang={currentLang}
            page={getPage(params?.page)}
            items={items}
        />
    );
};

export default GalleryRoutePage;