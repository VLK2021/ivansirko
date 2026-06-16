import Image from "next/image";

export const HeroImage = () => {
    return (
        <div className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-[calc(100svh-80px)]">
            <Image
                src="/images/sirko/sirko-hero-portrait.png"
                alt="Ivan Sirko historical portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover object-[22%_center] sm:object-[18%_center] lg:object-left"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[var(--sirko-parchment-200)]/90 lg:to-[var(--sirko-parchment-200)]" />

            <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[var(--sirko-parchment-200)] via-[var(--sirko-parchment-200)]/80 to-transparent" />

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[var(--sirko-parchment-200)]/80 to-transparent lg:hidden" />
        </div>
    );
};