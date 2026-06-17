"use client";

import Image from "next/image";
import {AnimatePresence, motion} from "framer-motion";

type GalleryPreviewModalProps = {
    image: {
        src: string;
        title: string;
    } | null;
    onClose: () => void;
};

export const GalleryPreviewModal = ({image, onClose}: GalleryPreviewModalProps) => {
    return (
        <AnimatePresence>
            {image && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(18,7,2,0.86)] px-4 py-6 backdrop-blur-sm"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{scale: 0.94, opacity: 0}}
                        animate={{scale: 1, opacity: 1}}
                        exit={{scale: 0.94, opacity: 0}}
                        transition={{duration: 0.25}}
                        className="relative h-[82vh] w-full max-w-6xl overflow-hidden border border-[rgba(196,147,54,0.48)] bg-[rgba(33,14,4,0.95)] shadow-[0_30px_90px_rgba(0,0,0,0.55)]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={image.src}
                            alt={image.title}
                            fill
                            sizes="100vw"
                            className="object-contain"
                        />

                        <div className="absolute inset-x-0 top-0 flex items-center justify-between bg-[linear-gradient(180deg,rgba(20,8,3,0.92),transparent)] px-5 py-4">
                            <p className="font-serif text-sm font-black uppercase tracking-[0.12em] text-[var(--sirko-gold-pale)]">
                                {image.title}
                            </p>

                            <button
                                type="button"
                                onClick={onClose}
                                className="border border-[rgba(243,221,160,0.44)] px-4 py-2 font-serif text-xs font-black uppercase tracking-[0.14em] text-[var(--sirko-gold-pale)]"
                            >
                                Закрити
                            </button>
                        </div>

                        <a
                            href={image.src}
                            download
                            className="absolute bottom-5 left-1/2 inline-flex -translate-x-1/2 items-center justify-center border border-[rgba(74,34,10,0.72)] bg-[linear-gradient(180deg,#8f4518_0%,#4f2109_100%)] px-8 py-3 font-serif text-sm font-black uppercase tracking-[0.1em] text-[var(--sirko-gold-pale)] shadow-[0_12px_24px_rgba(0,0,0,0.38)]"
                        >
                            Завантажити
                        </a>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};