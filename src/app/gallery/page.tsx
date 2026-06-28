import type {Metadata} from "next";
import {cookies} from "next/headers";

import {GalleryPage} from "@/src/components/gallery";
import {getGalleryItems} from "@/src/helpers/gallery";
import {GalleryLanguage} from "@/src/types/gallery";

type GalleryRoutePageProps = {
    searchParams?: Promise<{
        page?: string;
    }>;
};

export const metadata: Metadata = {
    title: "Gallery",
    description:
        "A visual gallery of Ivan Sirko, Zaporizhian Cossacks, historical places, artworks, monuments, and visual materials connected with his legacy.",
    alternates: {
        canonical: "/gallery",
    },
    openGraph: {
        title: "Gallery | Ivan Sirko",
        description:
            "Explore visual materials, historical images, artworks, and monuments related to Ivan Sirko.",
        url: "/gallery",
        images: ["/opengraph-image.png"],
    },
    twitter: {
        title: "Gallery | Ivan Sirko",
        description:
            "A visual gallery dedicated to Ivan Sirko and the Zaporizhian Cossack era.",
        images: ["/opengraph-image.png"],
    },
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