"use client";

import {useEffect} from "react";
import {GalleryItem} from "@/src/types/gallery";

type GalleryImageModalProps = {
    item: GalleryItem;
    downloadLabel: string;
    closeLabel: string;
    onClose: () => void;
};

export const GalleryImageModal = ({
                                      item,
                                      downloadLabel,
                                      closeLabel,
                                      onClose,
                                  }: GalleryImageModalProps) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/82 p-8 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
        >
            <button
                type="button"
                onClick={onClose}
                className="absolute inset-0"
                aria-label={closeLabel}
            />

            <div className="relative z-10 flex h-[82vh] w-[82vw] max-w-[1320px] flex-col border border-[#6d4b25] bg-[#160903] shadow-[0_30px_100px_rgba(0,0,0,0.75)]">
                <div className="flex min-h-0 flex-1 items-center justify-center bg-black p-4">
                    <img
                        src={item.image}
                        alt={item.id}
                        className="max-h-full max-w-full object-contain"
                    />
                </div>

                <div className="flex items-center justify-center gap-6 border-t border-[#6d4b25] bg-[#160903] px-6 py-5">
                    <a
                        href={item.image}
                        download
                        className="border border-[#d8b16a] bg-[#94551f] px-8 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#160903] transition hover:bg-[#d8b16a]"
                    >
                        ↓ {downloadLabel}
                    </a>

                    <button
                        type="button"
                        onClick={onClose}
                        className="border border-[#d8b16a] bg-transparent px-8 py-3 text-xs font-black uppercase tracking-[0.18em] text-[#f7d78a] transition hover:bg-[#94551f] hover:text-[#160903]"
                    >
                        × {closeLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};