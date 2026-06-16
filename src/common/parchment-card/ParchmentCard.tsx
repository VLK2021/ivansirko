"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

type ParchmentCardProps = {
    children: ReactNode;
    className?: string;
};

export const ParchmentCard = ({
                                  children,
                                  className,
                              }: ParchmentCardProps) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
            whileHover={{
                y: -4,
                transition: {
                    duration: 0.2,
                },
            }}
            className={clsx(
                `
                group
                relative
                overflow-hidden
                rounded-sm
                border
                border-[rgba(120,75,32,0.28)]
                bg-[linear-gradient(180deg,rgba(247,231,190,0.96)_0%,rgba(234,210,160,0.96)_100%)]
                shadow-[0_12px_30px_rgba(52,25,8,0.12)]
                transition-all
                duration-300
                `,
                className
            )}
        >
            <div
                className="
                pointer-events-none
                absolute
                inset-0
                opacity-60
                bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(94,52,21,0.08),transparent_40%)]
                "
            />

            <div
                className="
                pointer-events-none
                absolute
                inset-[8px]
                border
                border-[rgba(130,82,35,0.12)]
                "
            />

            <div
                className="
                pointer-events-none
                absolute
                top-0
                left-0
                h-8
                w-8
                border-l
                border-t
                border-[rgba(138,79,31,0.35)]
                "
            />

            <div
                className="
                pointer-events-none
                absolute
                top-0
                right-0
                h-8
                w-8
                border-r
                border-t
                border-[rgba(138,79,31,0.35)]
                "
            />

            <div
                className="
                pointer-events-none
                absolute
                bottom-0
                left-0
                h-8
                w-8
                border-l
                border-b
                border-[rgba(138,79,31,0.35)]
                "
            />

            <div
                className="
                pointer-events-none
                absolute
                bottom-0
                right-0
                h-8
                w-8
                border-r
                border-b
                border-[rgba(138,79,31,0.35)]
                "
            />

            <div className="relative z-10 h-full p-6">
                {children}
            </div>
        </motion.article>
    );
};