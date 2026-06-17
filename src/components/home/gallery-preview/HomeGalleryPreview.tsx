"use client";

import Link from "next/link";
import {useEffect, useMemo, useState} from "react";
import {motion} from "framer-motion";

import {ParchmentCard} from "@/src/common/parchment-card";
import {useLanguage} from "@/src/context";
import {GALLERY_PREVIEW_IMAGES} from "@/src/constants/home/gallery-preview.constants";

import {GalleryPreviewModal} from "./GalleryPreviewModal";
import {GallerySlide} from "./GallerySlide";

const AUTO_SLIDE_DELAY = 3500;

export const HomeGalleryPreview = () => {
    const {locale} = useLanguage();
    const images = useMemo(() => GALLERY_PREVIEW_IMAGES, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const [openedImageIndex, setOpenedImageIndex] = useState<number | null>(null);

    const goNext = () => {
        setActiveIndex((current) => (current + 1) % images.length);
    };

    const goPrev = () => {
        setActiveIndex((current) =>
            current === 0 ? images.length - 1 : current - 1
        );
    };

    useEffect(() => {
        const timer = window.setInterval(goNext, AUTO_SLIDE_DELAY);
        return () => window.clearInterval(timer);
    }, [images.length]);

    const visibleImages = Array.from({length: 5}, (_, index) => {
        return images[(activeIndex + index) % images.length];
    });

    const openedImage =
        openedImageIndex === null
            ? null
            : {
                src: images[openedImageIndex].src,
                title: locale.home.galleryPreview.items[images[openedImageIndex].titleKey],
            };

    return (
        <section className="relative px-4 pb-12 pt-1 sm:px-6 md:pb-14 lg:px-8">
            <ParchmentCard
                className="mx-auto w-full max-w-[92rem]"
                innerClassName="relative px-5 py-6 sm:px-7"
            >
                <div className="mb-5 flex items-center justify-center">
                    <button
                        type="button"
                        onClick={goPrev}
                        className="mr-5 flex h-9 w-9 items-center justify-center border border-[rgba(91,43,14,0.52)] bg-[rgba(255,232,170,0.12)] font-serif text-2xl text-[var(--sirko-ink)] transition hover:bg-[rgba(255,232,170,0.28)]"
                    >
                        ‹
                    </button>

                    <h2 className="font-serif text-xl font-black uppercase tracking-[0.12em] text-[var(--sirko-ink)]">
                        {locale.home.galleryPreview.kicker}
                    </h2>

                    <button
                        type="button"
                        onClick={goNext}
                        className="ml-5 flex h-9 w-9 items-center justify-center border border-[rgba(91,43,14,0.52)] bg-[rgba(255,232,170,0.12)] font-serif text-2xl text-[var(--sirko-ink)] transition hover:bg-[rgba(255,232,170,0.28)]"
                    >
                        ›
                    </button>
                </div>

                <motion.div
                    key={activeIndex}
                    initial={{opacity: 0, x: 22}}
                    animate={{opacity: 1, x: 0}}
                    transition={{duration: 0.45, ease: "easeOut"}}
                    className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-5"
                >
                    {visibleImages.map((image, index) => {
                        const realIndex = images.findIndex((item) => item.id === image.id);

                        return (
                            <div
                                key={`${image.id}-${activeIndex}`}
                                className={`
                                    ${index > 0 ? "hidden md:block" : ""}
                                    ${index > 2 ? "md:hidden xl:block" : ""}
                                `}
                            >
                                <GallerySlide
                                    src={image.src}
                                    title={locale.home.galleryPreview.items[image.titleKey]}
                                    onClick={() => setOpenedImageIndex(realIndex)}
                                />
                            </div>
                        );
                    })}
                </motion.div>

                <div className="mt-6 flex justify-center">
                    <Link
                        href="/gallery"
                        className="inline-flex min-h-10 items-center justify-center border border-[rgba(91,43,14,0.58)] bg-[rgba(255,232,170,0.08)] px-10 font-serif text-sm font-black uppercase tracking-[0.1em] text-[var(--sirko-ink)] transition duration-300 hover:bg-[rgba(255,230,170,0.22)]"
                    >
                        {locale.home.galleryPreview.action}
                    </Link>
                </div>
            </ParchmentCard>

            <GalleryPreviewModal
                image={openedImage}
                onClose={() => setOpenedImageIndex(null)}
            />
        </section>
    );
};