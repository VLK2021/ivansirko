import Link from "next/link";

type FinalCtaButtonProps = {
    href: string;
    title: string;
    subtitle: string;
};

export const FinalCtaButton = ({href, title, subtitle}: FinalCtaButtonProps) => {
    return (
        <Link
            href={href}
            className="
                group
                relative
                flex
                min-h-[86px]
                w-full
                items-center
                justify-center
                overflow-hidden
                border
                border-[rgba(186,122,59,0.72)]
                bg-[linear-gradient(180deg,#8f4518_0%,#5d260b_100%)]
                px-8
                text-center
                shadow-[inset_0_0_0_1px_rgba(255,222,146,0.14),0_14px_28px_rgba(0,0,0,0.34)]
                transition
                duration-300
                hover:brightness-110
                hover:shadow-[inset_0_0_0_1px_rgba(255,222,146,0.22),0_18px_34px_rgba(0,0,0,0.42)]
            "
        >
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(255,219,133,0.18),transparent_52%)] opacity-70 transition duration-300 group-hover:opacity-100" />

            <span className="relative z-10">
                <span className="block font-serif text-xl font-black uppercase tracking-[0.1em] text-[var(--sirko-gold-pale)]">
                    {title}
                </span>

                <span className="mt-1 block font-serif text-sm font-black uppercase tracking-[0.08em] text-[rgba(255,232,176,0.82)]">
                    {subtitle}
                </span>
            </span>
        </Link>
    );
};