"use client";

import Image from "next/image";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";

type HistoricalImageProps = {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
    closeLabel: string;
    downloadLabel: string;
    className?: string;
};

export const HistoricalImage = ({
                                    src,
                                    alt,
                                    caption,
                                    width,
                                    height,
                                    closeLabel,
                                    downloadLabel,
                                    className = "",
                                }: HistoricalImageProps) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    const popup =
        typeof document !== "undefined" && isOpen
            ? createPortal(
                <div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-[rgba(15,7,2,0.88)] p-4 backdrop-blur-md"
                    onClick={() => setIsOpen(false)}
                >
                    <div
                        className="relative flex max-h-[92vh] w-full max-w-6xl flex-col border border-[rgba(232,201,135,0.45)] bg-[var(--sirko-wood-950)] shadow-[0_40px_100px_rgba(0,0,0,0.65)]"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="flex flex-wrap items-center justify-end gap-3 border-b border-[rgba(232,201,135,0.18)] p-4">
                            <a
                                href={src}
                                download
                                className="border border-[var(--sirko-bronze)] bg-[var(--sirko-bronze)] px-5 py-2.5 font-serif text-sm font-black uppercase tracking-[0.14em] text-[var(--sirko-wood-950)] transition-all duration-300 hover:border-[var(--sirko-parchment-100)] hover:bg-[var(--sirko-parchment-100)]"
                            >
                                ↓ {downloadLabel}
                            </a>

                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="border border-[rgba(232,201,135,0.45)] px-5 py-2.5 font-serif text-sm font-black uppercase tracking-[0.14em] text-[var(--sirko-parchment-100)] transition-all duration-300 hover:border-[var(--sirko-parchment-100)] hover:bg-[rgba(232,201,135,0.12)]"
                            >
                                ✕ {closeLabel}
                            </button>
                        </div>

                        <div className="flex min-h-0 flex-1 items-center justify-center bg-[rgba(0,0,0,0.15)] p-4">
                            <Image
                                src={src}
                                alt={alt}
                                width={width}
                                height={height}
                                className="max-h-[70vh] w-auto max-w-full object-contain"
                            />
                        </div>

                        <div className="border-t border-[rgba(232,201,135,0.18)] px-6 py-4">
                            <p className="text-center font-serif text-sm italic leading-7 text-[var(--sirko-parchment-100)]">
                                {caption}
                            </p>
                        </div>
                    </div>
                </div>,
                document.body,
            )
            : null;

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

            {popup}
        </>
    );
};