import Image from "next/image";

type FeatureCardIconProps = {
    src: string;
};

export const FeatureCardIcon = ({src}: FeatureCardIconProps) => {
    return (
        <div className="relative mb-4 h-20 w-20 sm:h-24 sm:w-24">
            <Image
                src={src}
                alt=""
                fill
                sizes="96px"
                className="object-contain drop-shadow-[0_10px_20px_rgba(55,24,7,0.35)]"
            />
        </div>
    );
};