import {GALLERY_ITEMS_PER_PAGE} from "@/src/constants/gallery";
import en from "@/src/locales/en";
import uk from "@/src/locales/uk";
import {RouteBackground} from "@/src/common/routeBackground";
import {GalleryItem, GalleryLanguage} from "@/src/types/gallery";
import {GalleryGrid} from "./GalleryGrid";
import {GalleryPagination} from "./GalleryPagination";

type GalleryPageProps = {
    currentLang: GalleryLanguage;
    page?: number;
    items: GalleryItem[];
};

export const GalleryPage = ({
                                currentLang,
                                page = 1,
                                items,
                            }: GalleryPageProps) => {
    const locale = currentLang === "en" ? en : uk;

    const sortedItems = [...items].sort((a, b) => a.order - b.order);

    const totalPages = Math.max(
        1,
        Math.ceil(sortedItems.length / GALLERY_ITEMS_PER_PAGE)
    );

    const currentPage = Math.min(Math.max(page, 1), totalPages);
    const startIndex = (currentPage - 1) * GALLERY_ITEMS_PER_PAGE;

    const pageItems = sortedItems.slice(
        startIndex,
        startIndex + GALLERY_ITEMS_PER_PAGE
    );

    return (
        <RouteBackground>
            <section className="relative z-10 mx-auto max-w-[1440px] px-4 pb-20 pt-10 sm:px-6 lg:px-10">
                <div className="mb-10 max-w-4xl">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#6f3f13]">
                        {locale.gallery.eyebrow}
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight text-[#2a1205] sm:text-5xl lg:text-6xl">
                        {locale.gallery.title}
                    </h1>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f3815] sm:text-lg">
                        {locale.gallery.description}
                    </p>

                    <p className="mt-4 text-sm text-[#6f3f13]">
                        {locale.gallery.found}:{" "}
                        <span className="font-semibold text-[#2a1205]">
                            {sortedItems.length}
                        </span>
                    </p>
                </div>

                <GalleryGrid
                    items={pageItems}
                    detailsLabel={locale.gallery.details}
                    downloadLabel={locale.gallery.download}
                    closeLabel={locale.gallery.close}
                />

                <GalleryPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    label={locale.gallery.page}
                />
            </section>
        </RouteBackground>
    );
};