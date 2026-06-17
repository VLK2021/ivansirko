export type GalleryPreviewImage = {
    id: string;
    src: string;
    titleKey: "portrait" | "monument" | "grave" | "cossacks" | "illustration" | "sich" | "legacy";
};

export const GALLERY_PREVIEW_IMAGES: GalleryPreviewImage[] = [
    {
        id: "portrait",
        src: "/images/sirko/gallery/gallery-01.png",
        titleKey: "portrait",
    },
    {
        id: "monument",
        src: "/images/sirko/gallery/gallery-02.png",
        titleKey: "monument",
    },
    {
        id: "grave",
        src: "/images/sirko/gallery/gallery-03.png",
        titleKey: "grave",
    },
    {
        id: "cossacks",
        src: "/images/sirko/gallery/gallery-04.png",
        titleKey: "cossacks",
    },
    {
        id: "illustration",
        src: "/images/sirko/gallery/gallery-05.png",
        titleKey: "illustration",
    },
    {
        id: "sich",
        src: "/images/sirko/gallery/gallery-06.png",
        titleKey: "sich",
    },
    {
        id: "legacy",
        src: "/images/sirko/gallery/gallery-7.png",
        titleKey: "legacy",
    },
];