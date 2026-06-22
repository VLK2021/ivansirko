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
            <article className="group relative h-[360px] overflow-hidden border border-[#5a2a0a] bg-[#160903] shadow-[0_18px_60px_rgba(58,24,8,0.24)]">
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
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                </button>

                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/85 via-black/45 to-transparent px-5 pb-4 pt-12">
                    <button
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className="border border-[#d8b16a] bg-[#94551f] px-3 py-1 text-[9px] font-black uppercase tracking-[0.1em] text-[#160903] transition hover:bg-[#d8b16a]"
                    >
                        {detailsLabel}
                    </button>

                    <a
                        href={item.image}
                        download
                        className="border border-[#d8b16a] bg-[#94551f] px-3 py-1 text-[9px] font-black uppercase tracking-[0.1em] text-[#160903] transition hover:bg-[#d8b16a]"
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