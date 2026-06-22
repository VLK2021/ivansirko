"use client";

import {useState} from "react";
import {GalleryItem} from "@/src/types/gallery";
import {GalleryImageModal} from "./GalleryImageModal";

type GalleryCardProps = {
    item: GalleryItem;
    detailsLabel: string;
    downloadLabel: string;
    closeLabel: string;
};

export const GalleryCard = ({
                                item,
                                detailsLabel,
                                downloadLabel,
                                closeLabel,
                            }: GalleryCardProps) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <article className="group relative h-[360px] overflow-hidden border border-[#6d4b25] bg-[#160903] shadow-[0_18px_60px_rgba(58,24,8,0.24)]">
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="absolute inset-0"
                    aria-label={detailsLabel}
                >
                    <img
                        src={item.image}
                        alt={item.id}
                        loading="lazy"
                        className="h-full w-full object-fill transition duration-500 group-hover:scale-[1.02]"
                    />
                </button>

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 via-black/35 to-transparent px-5 pb-4 pt-12">
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className="border border-[#d8b16a] bg-[#94551f] px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#160903] transition hover:bg-[#d8b16a]"
                    >
                        {detailsLabel}
                    </button>

                    <a
                        href={item.image}
                        download
                        className="border border-[#d8b16a] bg-transparent px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[#f7d78a] transition hover:bg-[#94551f] hover:text-[#160903]"
                    >
                        {downloadLabel}
                    </a>
                </div>
            </article>

            {isOpen && (
                <GalleryImageModal
                    item={item}
                    downloadLabel={downloadLabel}
                    closeLabel={closeLabel}
                    onClose={() => setIsOpen(false)}
                />
            )}
        </>
    );
};