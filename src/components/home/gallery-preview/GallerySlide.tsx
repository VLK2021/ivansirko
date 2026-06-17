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
            className="group text-center"
        >
            <div className="relative h-[145px] overflow-hidden border border-[rgba(91,43,14,0.55)] bg-[rgba(70,31,9,0.14)] shadow-[0_10px_20px_rgba(45,18,5,0.18)]">
                <Image
                    src={src}
                    alt={title}
                    fill
                    sizes="260px"
                    className="object-cover sepia-[0.18] transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_42%,rgba(42,17,5,0.26)_100%)]" />
            </div>

            <p className="mt-3 font-serif text-sm leading-5 text-[var(--sirko-ink)]">
                {title}
            </p>
        </motion.button>
    );
};