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
            whileHover={{scale: 1.025}}
            whileTap={{scale: 0.98}}
            onClick={onClick}
            className="group mx-auto block w-full text-center md:max-w-none"
        >
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[rgba(91,43,14,0.55)] bg-[rgba(70,31,9,0.14)] shadow-[0_10px_20px_rgba(45,18,5,0.18)] md:h-[150px] md:aspect-auto xl:h-[145px]">
                <Image
                    src={src}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 92vw, (max-width: 1280px) 30vw, 18vw"
                    className="object-contain object-center sepia-[0.18] transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,transparent_42%,rgba(42,17,5,0.26)_100%)]" />
            </div>

            <p className="mt-3 font-serif text-base leading-6 text-[var(--sirko-ink)] md:text-sm md:leading-5">
                {title}
            </p>
        </motion.button>
    );
};