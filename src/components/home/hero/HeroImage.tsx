import Image from "next/image";

export const HeroImage = () => {
    return (
        <div className="sirko-hero-image">
            <Image
                src="/images/sirko/sirko-hero-portrait.png"
                alt="Ivan Sirko historical portrait"
                fill
                priority
                sizes="(max-width: 980px) 100vw, 52vw"
                className="object-cover object-left-center"
            />

            <div className="pointer-events-none absolute left-0 top-0 z-10 h-8 w-full bg-gradient-to-b from-[var(--sirko-parchment-100)] via-[var(--sirko-parchment-100)]/90 to-transparent" />
        </div>
    );
};