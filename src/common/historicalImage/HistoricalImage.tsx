"use client";

import Image from "next/image";
import {useEffect, useState} from "react";

type HistoricalImageProps = {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
    className?: string;
};

export const HistoricalImage = ({
                                    src,
                                    alt,
                                    caption,
                                    width,
                                    height,
                                    className = "",
                                }: HistoricalImageProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <figure className={className}>
                <button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="group block w-full border border-[rgba(91,43,14,0.42)] bg-[rgba(238,199,122,0.22)] p-3 shadow-[0_18px_34px_rgba(55,24,7,0.16)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_42px_rgba(55,24,7,0.22)]"
                >
                    <Image
                        src={src}
                        alt={alt}
                        width={width}
                        height={height}
                        className="h-auto w-full object-cover transition duration-500 group-hover:scale-[1.015]"
                    />
                </button>

                <figcaption className="mt-3 font-serif text-sm italic leading-6 text-[var(--sirko-ink-soft)]">
                    {caption}
                </figcaption>
            </figure>

            {isOpen && (
                <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[rgba(15,7,2,0.86)] p-4 backdrop-blur-sm">
                    <button
                        type="button"
                        aria-label="Закрити"
                        onClick={() => setIsOpen(false)}
                        className="absolute right-5 top-5 font-serif text-3xl text-[var(--sirko-parchment-100)] transition hover:text-white"
                    >
                        ×
                    </button>

                    <div className="w-full max-w-6xl">
                        <div className="border border-[rgba(232,201,135,0.5)] bg-[rgba(32,16,7,0.72)] p-3 shadow-[0_28px_80px_rgba(0,0,0,0.45)]">
                            <Image
                                src={src}
                                alt={alt}
                                width={width}
                                height={height}
                                className="max-h-[78vh] w-full object-contain"
                            />
                        </div>

                        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                            <p className="font-serif text-sm italic leading-6 text-[var(--sirko-parchment-100)]">
                                {caption}
                            </p>

                            <a
                                href={src}
                                download
                                className="shrink-0 border border-[rgba(232,201,135,0.55)] px-5 py-2.5 font-serif text-sm font-black uppercase tracking-[0.18em] text-[var(--sirko-parchment-100)] transition hover:bg-[rgba(232,201,135,0.16)]"
                            >
                                Завантажити
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};