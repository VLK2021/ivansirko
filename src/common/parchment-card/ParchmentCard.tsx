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
                        y: -6,
                        scale: 1.018,
                        transition: {duration: 0.22, ease: "easeOut"},
                    }
                    : undefined
            }
            className={`
                group relative overflow-hidden
                border border-[rgba(91,43,14,0.46)]
                bg-[linear-gradient(135deg,rgba(255,238,190,0.22),rgba(226,188,109,0.16),rgba(95,47,15,0.12))]
                shadow-[inset_0_0_0_1px_rgba(255,245,215,0.12),inset_0_0_70px_rgba(73,32,9,0.16),0_12px_28px_rgba(54,24,7,0.14)]
                transition-all duration-300
                ${interactive ? "hover:border-[rgba(138,79,31,0.82)] hover:shadow-[inset_0_0_0_1px_rgba(255,245,215,0.18),inset_0_0_90px_rgba(73,32,9,0.22),0_20px_42px_rgba(54,24,7,0.22)]" : ""}
                ${className}
            `}
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(61,28,8,0.22),transparent_2px),radial-gradient(circle_at_76%_30%,rgba(61,28,8,0.16),transparent_2px),radial-gradient(circle_at_44%_82%,rgba(61,28,8,0.14),transparent_2px),radial-gradient(circle_at_55%_45%,rgba(255,246,214,0.22),transparent_42%)] bg-[length:72px_72px,108px_108px,144px_144px,100%_100%] opacity-80" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(61,28,8,0.28),transparent_30%),radial-gradient(circle_at_100%_0%,rgba(61,28,8,0.22),transparent_32%),radial-gradient(circle_at_0%_100%,rgba(61,28,8,0.22),transparent_32%),radial-gradient(circle_at_100%_100%,rgba(61,28,8,0.28),transparent_30%)]" />

            <div className="pointer-events-none absolute inset-[8px] border border-[rgba(91,43,14,0.34)]" />
            <div className="pointer-events-none absolute inset-[13px] border border-[rgba(255,241,199,0.12)]" />

            <span className="pointer-events-none absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-[rgba(126,70,26,0.72)]" />
            <span className="pointer-events-none absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-[rgba(126,70,26,0.72)]" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-[rgba(126,70,26,0.72)]" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-[rgba(126,70,26,0.72)]" />

            <div className="pointer-events-none absolute inset-x-10 top-[8px] h-px bg-gradient-to-r from-transparent via-[rgba(91,43,14,0.34)] to-transparent" />
            <div className="pointer-events-none absolute inset-x-10 bottom-[8px] h-px bg-gradient-to-r from-transparent via-[rgba(91,43,14,0.3)] to-transparent" />

            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_50%_20%,rgba(255,230,150,0.18),transparent_38%)]" />

            <div className={`relative z-10 h-full w-full ${innerClassName}`}>
                {children}
            </div>
        </motion.div>
    );
};