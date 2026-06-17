"use client";

import Link from "next/link";
import {useEffect, useMemo, useState} from "react";

import {ParchmentCard} from "@/src/common/parchment-card";
import {useLanguage} from "@/src/context";
import {GALLERY_PREVIEW_IMAGES} from "@/src/constants/home/gallery-preview.constants";

import {GalleryPreviewModal} from "./GalleryPreviewModal";
import {GallerySlide} from "./GallerySlide";

const AUTO_SLIDE_DELAY = 3500;
const SLIDE_TRANSITION_MS = 520;

const getVisibleCount = () => {
    if (typeof window === "undefined") return 5;
    if (window.innerWidth >= 1280) return 5;
    if (window.innerWidth >= 768) return 3;
    return 1;
};

export const HomeGalleryPreview = () => {
    const {locale} = useLanguage();
    const images = useMemo(() => GALLERY_PREVIEW_IMAGES, []);

    const [activeIndex, setActiveIndex] = useState(0);
    const [visibleCount, setVisibleCount] = useState(5);
    const [withTransition, setWithTransition] = useState(true);
    const [openedImageIndex, setOpenedImageIndex] = useState<number | null>(null);

    const loopedImages = useMemo(() => [...images, ...images], [images]);

    const goNext = () => {
        setWithTransition(true);
        setActiveIndex((current) => current + 1);
    };

    const goPrev = () => {
        setWithTransition(true);

        if (activeIndex === 0) {
            setWithTransition(false);
            setActiveIndex(images.length);

            window.setTimeout(() => {
                setWithTransition(true);
                setActiveIndex(images.length - 1);
            }, 20);

            return;
        }

        setActiveIndex((current) => current - 1);
    };

    useEffect(() => {
        const handleResize = () => {
            setVisibleCount(getVisibleCount());
        };

        handleResize();

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const timer = window.setInterval(goNext, AUTO_SLIDE_DELAY);

        return () => window.clearInterval(timer);
    }, [activeIndex, images.length]);

    useEffect(() => {
        if (activeIndex < images.length) return;

        const resetTimer = window.setTimeout(() => {
            setWithTransition(false);
            setActiveIndex(0);

            window.setTimeout(() => {
                setWithTransition(true);
            }, 20);
        }, SLIDE_TRANSITION_MS);

        return () => window.clearTimeout(resetTimer);
    }, [activeIndex, images.length]);

    const openedImage =
        openedImageIndex === null
            ? null
            : {
                src: images[openedImageIndex].src,
                title: locale.home.galleryPreview.items[
                    images[openedImageIndex].titleKey
                    ],
            };

    return (
        <section className="relative px-4 pb-12 pt-1 sm:px-6 md:pb-14 lg:px-8">
            <ParchmentCard
                className="mx-auto w-full max-w-[92rem]"
                innerClassName="px-4 py-6 sm:px-6 md:px-7"
            >
                <div className="mb-6 flex items-center justify-center gap-4">
                    <button
                        type="button"
                        onClick={goPrev}
                        className="flex h-10 w-10 items-center justify-center border border-[rgba(91,43,14,0.55)] bg-[rgba(255,232,170,0.10)] font-serif text-2xl text-[var(--sirko-ink)] transition duration-300 hover:bg-[rgba(255,232,170,0.25)]"
                    >
                        ‹
                    </button>

                    <h2 className="font-serif text-xl font-black uppercase tracking-[0.12em] text-[var(--sirko-ink)]">
                        {locale.home.galleryPreview.kicker}
                    </h2>

                    <button
                        type="button"
                        onClick={goNext}
                        className="flex h-10 w-10 items-center justify-center border border-[rgba(91,43,14,0.55)] bg-[rgba(255,232,170,0.10)] font-serif text-2xl text-[var(--sirko-ink)] transition duration-300 hover:bg-[rgba(255,232,170,0.25)]"
                    >
                        ›
                    </button>
                </div>

                <div className="overflow-hidden">
                    <div
                        className="flex"
                        style={{
                            transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
                            transition: withTransition
                                ? `transform ${SLIDE_TRANSITION_MS}ms ease-out`
                                : "none",
                        }}
                    >
                        {loopedImages.map((image, index) => {
                            const realIndex = index % images.length;

                            return (
                                <div
                                    key={`${image.id}-${index}`}
                                    className="shrink-0 px-2"
                                    style={{
                                        flexBasis: `${100 / visibleCount}%`,
                                    }}
                                >
                                    <GallerySlide
                                        src={image.src}
                                        title={
                                            locale.home.galleryPreview.items[
                                                image.titleKey
                                                ]
                                        }
                                        onClick={() => setOpenedImageIndex(realIndex)}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-6 flex justify-center">
                    <Link
                        href="/gallery"
                        className="inline-flex min-h-11 items-center justify-center border border-[rgba(91,43,14,0.58)] bg-[rgba(255,232,170,0.08)] px-10 font-serif text-sm font-black uppercase tracking-[0.1em] text-[var(--sirko-ink)] transition duration-300 hover:bg-[rgba(255,230,170,0.22)]"
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