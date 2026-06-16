import Image from "next/image";

type FeatureCardIconProps = {
    src: string;
};

export const FeatureCardIcon = ({src}: FeatureCardIconProps) => {
    return (
        <div className="relative mb-5 h-24 w-24 sm:h-28 sm:w-28 lg:h-[120px] lg:w-[120px]">
            <Image
                src={src}
                alt=""
                fill
                sizes="120px"
                className="
                    object-contain
                    transition-all
                    duration-300
                    group-hover:scale-105
                    drop-shadow-[0_12px_24px_rgba(55,24,7,0.42)]
                "
            />
        </div>
    );
};