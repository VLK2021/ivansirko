"use client";

import Link from "next/link";
import {useEffect, useMemo, useState} from "react";
import {motion} from "framer-motion";

import {ParchmentCard} from "@/src/common/parchment-card";
import {useLanguage} from "@/src/context";
import {GALLERY_PREVIEW_IMAGES} from "@/src/constants/home/gallery-preview.constants";

import {GalleryPreviewModal} from "./GalleryPreviewModal";
import {GallerySlide} from "./GallerySlide";

const AUTO_SLIDE_DELAY = 4200;

export const HomeGalleryPreview = () => {
    const {locale} = useLanguage();
    const [activeIndex, setActiveIndex] = useState(0);
    const [openedImageIndex, setOpenedImageIndex] = useState<number | null>(null);

    const images = useMemo(() => GALLERY_PREVIEW_IMAGES, []);

    const goPrev = () => {
        setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
    };

    const goNext = () => {
        setActiveIndex((current) => (current + 1) % images.length);
    };

    useEffect(() => {
        const interval = window.setInterval(goNext, AUTO_SLIDE_DELAY);

        return () => window.clearInterval(interval);
    }, [images.length]);

    const visibleImages = [
        images[activeIndex],
        images[(activeIndex + 1) % images.length],
        images[(activeIndex + 2) % images.length],
    ];

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
                innerClassName="px-5 py-7 sm:px-8"
            >
                <div className="mb-7 flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">
                    <div>
                        <p className="font-serif text-xs font-black uppercase tracking-[0.42em] text-[var(--sirko-bronze)]">
                            {locale.home.galleryPreview.kicker}
                        </p>

                        <h2 className="mt-2 font-serif text-3xl font-black uppercase tracking-[0.08em] text-[var(--sirko-ink)]">
                            {locale.home.galleryPreview.title}
                        </h2>
                    </div>

                    <Link
                        href="/gallery"
                        className="inline-flex min-h-11 items-center justify-center border border-[rgba(74,34,10,0.72)] bg-[linear-gradient(180deg,#8f4518_0%,#4f2109_100%)] px-8 font-serif text-sm font-black uppercase tracking-[0.1em] text-[var(--sirko-gold-pale)] shadow-[0_12px_24px_rgba(55,24,7,0.28)] transition duration-300 hover:brightness-110"
                    >
                        {locale.home.galleryPreview.action}
                    </Link>
                </div>

                <div className="relative">
                    <button
                        type="button"
                        onClick={goPrev}
                        className="absolute left-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 border border-[rgba(91,43,14,0.62)] bg-[rgba(255,232,170,0.26)] font-serif text-3xl text-[var(--sirko-ink)] shadow-[0_10px_22px_rgba(55,24,7,0.22)] transition hover:bg-[rgba(255,232,170,0.44)] md:block"
                    >
                        ‹
                    </button>

                    <motion.div
                        key={activeIndex}
                        initial={{opacity: 0, x: 28}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.45, ease: "easeOut"}}
                        className="grid grid-cols-1 gap-5 md:grid-cols-3"
                    >
                        {visibleImages.map((image) => {
                            const realIndex = images.findIndex((item) => item.id === image.id);

                            return (
                                <GallerySlide
                                    key={`${image.id}-${activeIndex}`}
                                    src={image.src}
                                    title={locale.home.galleryPreview.items[image.titleKey]}
                                    onClick={() => setOpenedImageIndex(realIndex)}
                                />
                            );
                        })}
                    </motion.div>

                    <button
                        type="button"
                        onClick={goNext}
                        className="absolute right-0 top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 border border-[rgba(91,43,14,0.62)] bg-[rgba(255,232,170,0.26)] font-serif text-3xl text-[var(--sirko-ink)] shadow-[0_10px_22px_rgba(55,24,7,0.22)] transition hover:bg-[rgba(255,232,170,0.44)] md:block"
                    >
                        ›
                    </button>
                </div>
            </ParchmentCard>

            <GalleryPreviewModal
                image={openedImage}
                onClose={() => setOpenedImageIndex(null)}
            />
        </section>
    );
};