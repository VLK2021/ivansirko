"use client";

import Image from "next/image";
import {motion} from "framer-motion";

type GallerySlideProps = {
    src: string;
    title: string;
    onClick: () => void;
};

export const GallerySlide = ({src, title, onClick}: GallerySlideProps) => {
    return (
        <motion.button
            type="button"
            whileHover={{scale: 1.035}}
            whileTap={{scale: 0.98}}
            onClick={onClick}
            className="group relative h-[210px] w-full overflow-hidden border border-[rgba(91,43,14,0.5)] bg-[rgba(60,28,9,0.16)] shadow-[inset_0_0_0_1px_rgba(255,238,190,0.12),0_14px_28px_rgba(45,18,5,0.18)]"
        >
            <Image
                src={src}
                alt={title}
                fill
                sizes="(max-width: 768px) 80vw, 280px"
                className="object-cover sepia-[0.25] transition duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_38%,rgba(35,13,4,0.34)_100%)]" />

            <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(34,13,4,0.82))] px-4 pb-4 pt-10">
                <p className="font-serif text-sm font-black uppercase tracking-[0.08em] text-[var(--sirko-gold-pale)]">
                    {title}
                </p>
            </div>
        </motion.button>
    );
};