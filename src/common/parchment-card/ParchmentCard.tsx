"use client";

import {motion} from "framer-motion";
import type {ReactNode} from "react";

type ParchmentCardProps = {
    children: ReactNode;
    className?: string;
    innerClassName?: string;
    animated?: boolean;
    interactive?: boolean;
};

export const ParchmentCard = ({
                                  children,
                                  className = "",
                                  innerClassName = "",
                                  animated = true,
                                  interactive = false,
                              }: ParchmentCardProps) => {
    const MotionTag = animated ? motion.div : "div";

    return (
        <MotionTag
            initial={animated ? {opacity: 0, y: 18} : undefined}
            whileInView={animated ? {opacity: 1, y: 0} : undefined}
            viewport={animated ? {once: true, amount: 0.2} : undefined}
            transition={animated ? {duration: 0.45, ease: "easeOut"} : undefined}
            whileHover={interactive ? {y: -4} : undefined}
            className={`
                relative
                overflow-hidden
                border
                border-[rgba(92,45,15,0.42)]
                bg-[linear-gradient(135deg,rgba(255,242,201,0.34),rgba(232,201,135,0.20),rgba(128,70,28,0.10))]
                shadow-[inset_0_0_0_1px_rgba(255,244,210,0.16),inset_0_0_70px_rgba(65,29,8,0.13),0_14px_34px_rgba(45,18,5,0.14)]
                ${interactive ? "transition duration-300 hover:shadow-[inset_0_0_0_1px_rgba(255,244,210,0.2),inset_0_0_80px_rgba(65,29,8,0.16),0_20px_44px_rgba(45,18,5,0.2)]" : ""}
                ${className}
            `}
        >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(65,29,8,0.18),transparent_2px),radial-gradient(circle_at_78%_28%,rgba(65,29,8,0.12),transparent_2px),radial-gradient(circle_at_44%_74%,rgba(65,29,8,0.10),transparent_2px)] bg-[length:92px_92px,132px_132px,168px_168px] opacity-75" />

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(70,31,9,0.20),transparent_32%),radial-gradient(circle_at_100%_0%,rgba(70,31,9,0.14),transparent_34%),radial-gradient(circle_at_0%_100%,rgba(70,31,9,0.14),transparent_34%),radial-gradient(circle_at_100%_100%,rgba(70,31,9,0.20),transparent_32%)]" />

            <div className="pointer-events-none absolute inset-[8px] border border-[rgba(92,45,15,0.28)]" />
            <div className="pointer-events-none absolute inset-[12px] border border-[rgba(255,244,210,0.10)]" />

            <span className="pointer-events-none absolute left-0 top-0 h-12 w-12 border-l-2 border-t-2 border-[rgba(138,79,31,0.58)]" />
            <span className="pointer-events-none absolute right-0 top-0 h-12 w-12 border-r-2 border-t-2 border-[rgba(138,79,31,0.58)]" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-12 w-12 border-b-2 border-l-2 border-[rgba(138,79,31,0.58)]" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-12 w-12 border-b-2 border-r-2 border-[rgba(138,79,31,0.58)]" />

            <div className={`relative z-10 h-full w-full ${innerClassName}`}>
                {children}
            </div>
        </MotionTag>
    );
};