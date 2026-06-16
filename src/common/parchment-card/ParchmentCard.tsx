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
            initial={{opacity: 0, y: 16}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, amount: 0.25}}
            transition={{duration: 0.45, ease: "easeOut"}}
            whileHover={
                interactive
                    ? {
                        y: -6,
                        scale: 1.015,
                        transition: {duration: 0.2},
                    }
                    : undefined
            }
            className={`
                relative overflow-hidden
                border border-[rgba(96,49,18,0.42)]
                bg-[linear-gradient(135deg,rgba(255,239,196,0.18),rgba(229,191,112,0.14),rgba(113,61,22,0.10))]
                shadow-[inset_0_0_0_1px_rgba(255,244,210,0.10),inset_0_0_50px_rgba(76,35,11,0.14),0_12px_26px_rgba(52,23,7,0.12)]
                transition-all duration-300
                ${interactive ? "hover:border-[rgba(138,79,31,0.72)] hover:shadow-[inset_0_0_0_1px_rgba(255,244,210,0.16),inset_0_0_70px_rgba(76,35,11,0.18),0_18px_38px_rgba(52,23,7,0.18)]" : ""}
                ${className}
            `}
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(74,34,10,0.20),transparent_2px),radial-gradient(circle_at_78%_28%,rgba(74,34,10,0.14),transparent_2px),radial-gradient(circle_at_48%_82%,rgba(74,34,10,0.12),transparent_2px)] bg-[length:78px_78px,118px_118px,154px_154px] opacity-70" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(72,32,10,0.20),transparent_32%),radial-gradient(circle_at_100%_0%,rgba(72,32,10,0.16),transparent_34%),radial-gradient(circle_at_0%_100%,rgba(72,32,10,0.16),transparent_34%),radial-gradient(circle_at_100%_100%,rgba(72,32,10,0.20),transparent_32%)]" />

            <div className="pointer-events-none absolute inset-[9px] border border-[rgba(98,51,18,0.30)]" />
            <div className="pointer-events-none absolute inset-[14px] border border-[rgba(255,244,210,0.10)]" />

            <span className="pointer-events-none absolute left-0 top-0 h-10 w-10 border-l-2 border-t-2 border-[rgba(128,73,29,0.58)]" />
            <span className="pointer-events-none absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-[rgba(128,73,29,0.58)]" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-[rgba(128,73,29,0.58)]" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-10 w-10 border-b-2 border-r-2 border-[rgba(128,73,29,0.58)]" />

            <div className={`relative z-10 h-full w-full ${innerClassName}`}>
                {children}
            </div>
        </motion.div>
    );
};