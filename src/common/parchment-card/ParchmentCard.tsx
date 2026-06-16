"use client";

import {motion} from "framer-motion";
import type {ReactNode} from "react";

type ParchmentCardProps = {
    children: ReactNode;
    className?: string;
    innerClassName?: string;
    interactive?: boolean;
};

export const ParchmentCard = ({
                                  children,
                                  className = "",
                                  innerClassName = "",
                                  interactive = false,
                              }: ParchmentCardProps) => {
    return (
        <motion.div
            whileHover={
                interactive
                    ? {
                        scale: 1.015,
                        transition: {duration: 0.24, ease: "easeOut"},
                    }
                    : undefined
            }
            className={`
                group
                relative
                overflow-hidden
                border
                border-[rgba(88,42,14,0.56)]
                bg-[linear-gradient(145deg,rgba(255,236,181,0.20)_0%,rgba(218,174,92,0.18)_42%,rgba(118,63,23,0.16)_100%)]
                shadow-[inset_0_0_0_1px_rgba(255,244,205,0.16),inset_0_0_46px_rgba(58,25,7,0.16),0_12px_28px_rgba(45,18,5,0.14)]
                transition-all
                duration-300
                ${interactive ? "hover:border-[rgba(156,94,37,0.86)] hover:shadow-[inset_0_0_0_1px_rgba(255,244,205,0.22),inset_0_0_70px_rgba(58,25,7,0.22),0_18px_40px_rgba(45,18,5,0.22)]" : ""}
                ${className}
            `}
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,245,205,0.28),transparent_38%),radial-gradient(circle_at_15%_20%,rgba(71,31,9,0.24),transparent_2px),radial-gradient(circle_at_74%_32%,rgba(71,31,9,0.16),transparent_2px),radial-gradient(circle_at_44%_78%,rgba(71,31,9,0.14),transparent_2px)] bg-[length:100%_100%,70px_70px,110px_110px,150px_150px] opacity-90" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(49,21,6,0.30),transparent_30%),radial-gradient(circle_at_100%_0%,rgba(49,21,6,0.24),transparent_32%),radial-gradient(circle_at_0%_100%,rgba(49,21,6,0.22),transparent_32%),radial-gradient(circle_at_100%_100%,rgba(49,21,6,0.30),transparent_30%)]" />

            <div className="pointer-events-none absolute inset-0 opacity-[0.28] bg-[linear-gradient(90deg,rgba(78,36,12,0.10)_1px,transparent_1px),linear-gradient(rgba(78,36,12,0.10)_1px,transparent_1px)] bg-[size:28px_28px]" />

            <div className="pointer-events-none absolute inset-[7px] border border-[rgba(89,43,15,0.38)]" />
            <div className="pointer-events-none absolute inset-[12px] border border-[rgba(255,239,191,0.12)]" />

            <span className="pointer-events-none absolute left-0 top-0 h-14 w-14 border-l-2 border-t-2 border-[rgba(126,70,26,0.82)]">
                <span className="absolute left-[7px] top-[7px] h-7 w-7 border-l border-t border-[rgba(255,223,154,0.18)]" />
            </span>

            <span className="pointer-events-none absolute right-0 top-0 h-14 w-14 border-r-2 border-t-2 border-[rgba(126,70,26,0.82)]">
                <span className="absolute right-[7px] top-[7px] h-7 w-7 border-r border-t border-[rgba(255,223,154,0.18)]" />
            </span>

            <span className="pointer-events-none absolute bottom-0 left-0 h-14 w-14 border-b-2 border-l-2 border-[rgba(126,70,26,0.82)]">
                <span className="absolute bottom-[7px] left-[7px] h-7 w-7 border-b border-l border-[rgba(255,223,154,0.18)]" />
            </span>

            <span className="pointer-events-none absolute bottom-0 right-0 h-14 w-14 border-b-2 border-r-2 border-[rgba(126,70,26,0.82)]">
                <span className="absolute bottom-[7px] right-[7px] h-7 w-7 border-b border-r border-[rgba(255,223,154,0.18)]" />
            </span>

            <div className="pointer-events-none absolute inset-x-12 top-[7px] h-px bg-gradient-to-r from-transparent via-[rgba(88,42,14,0.42)] to-transparent" />
            <div className="pointer-events-none absolute inset-x-12 bottom-[7px] h-px bg-gradient-to-r from-transparent via-[rgba(88,42,14,0.34)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-12 left-[7px] w-px bg-gradient-to-b from-transparent via-[rgba(88,42,14,0.34)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-12 right-[7px] w-px bg-gradient-to-b from-transparent via-[rgba(88,42,14,0.34)] to-transparent" />

            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_32%,rgba(255,224,137,0.22),transparent_42%)]" />

            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 shadow-[inset_0_0_34px_rgba(255,217,128,0.16)]" />

            <div className={`relative z-10 h-full w-full ${innerClassName}`}>
                {children}
            </div>
        </motion.div>
    );
};