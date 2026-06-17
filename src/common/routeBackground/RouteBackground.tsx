import Image from "next/image";
import type {ReactNode} from "react";

type RouteBackgroundProps = {
    children: ReactNode;
};

export const RouteBackground = ({children}: RouteBackgroundProps) => {
    return (
        <section className="relative min-h-screen overflow-hidden">
            <div className="pointer-events-none fixed inset-0 -z-20">
                <Image
                    src="/images/sirko/legacy/legacy-bg.png"
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
            </div>

            <div className="pointer-events-none fixed inset-0 -z-10 bg-[rgba(229,190,112,0.68)]" />

            <div className="relative z-10">
                {children}
            </div>
        </section>
    );
};