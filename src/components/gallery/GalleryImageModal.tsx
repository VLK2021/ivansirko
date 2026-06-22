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
            if (event.key === "Escape") onClose();
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
            className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto bg-black/78 px-3 pb-6 pt-[120px] backdrop-blur-md sm:px-6 sm:pt-[130px] lg:items-start lg:px-8 lg:pt-[130px]"
            role="dialog"
            aria-modal="true"
        >
            <button
                type="button"
                onClick={onClose}
                className="fixed inset-0"
                aria-label={closeLabel}
            />

            <div className="relative z-10 flex w-full max-w-[1180px] flex-col border border-[#9b6a2c]/80 bg-[#d9b56f] p-[6px] shadow-[0_30px_100px_rgba(0,0,0,0.7)] sm:p-2 lg:h-[calc(100vh-170px)]">
                <div className="min-h-0 flex-1 border border-[#9b6a2c]/55 bg-[#d9b56f] p-[6px]">
                    <img
                        src={item.image}
                        alt={item.id}
                        className="mx-auto block max-h-[55vh] w-full object-contain sm:max-h-[58vh] lg:h-full lg:max-h-full lg:w-full"
                    />
                </div>

                <div className="mt-3 grid grid-cols-2 gap-3 sm:flex sm:justify-center sm:gap-5">
                    <a
                        href={item.image}
                        download
                        className="border border-[#d8b16a] bg-[#94551f] px-4 py-3 text-center text-[10px] font-black uppercase tracking-[0.14em] text-[#160903] transition hover:bg-[#d8b16a] sm:px-8 sm:text-xs"
                    >
                        ↓ {downloadLabel}
                    </a>

                    <button
                        type="button"
                        onClick={onClose}
                        className="border border-[#94551f] bg-transparent px-4 py-3 text-[10px] font-black uppercase tracking-[0.14em] text-[#3a1808] transition hover:bg-[#94551f] hover:text-[#160903] sm:px-8 sm:text-xs"
                    >
                        × {closeLabel}
                    </button>
                </div>
            </div>
        </div>
    );
};