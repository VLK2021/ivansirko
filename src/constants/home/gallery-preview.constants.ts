export type GalleryPreviewImage = {
    id: string;
    src: string;
    titleKey: "portrait" | "monument" | "grave" | "cossacks" | "illustration" | "sich" | "legacy";
};

export const GALLERY_PREVIEW_IMAGES: GalleryPreviewImage[] = [
    {
        id: "portrait",
        src: "/images/sirko/gallery/gallery-01.webp",
        titleKey: "portrait",
    },
    {
        id: "monument",
        src: "/images/sirko/gallery/gallery-02.webp",
        titleKey: "monument",
    },
    {
        id: "grave",
        src: "/images/sirko/gallery/gallery-03.webp",
        titleKey: "grave",
    },
    {
        id: "cossacks",
        src: "/images/sirko/gallery/gallery-04.webp",
        titleKey: "cossacks",
    },
    {
        id: "illustration",
        src: "/images/sirko/gallery/gallery-05.webp",
        titleKey: "illustration",
    },
    {
        id: "sich",
        src: "/images/sirko/gallery/gallery-06.webp",
        titleKey: "sich",
    },
    {
        id: "legacy",
        src: "/images/sirko/gallery/gallery-07.webp",
        titleKey: "legacy",
    },
];