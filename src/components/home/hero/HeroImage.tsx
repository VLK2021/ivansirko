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
        </div>
    );
};