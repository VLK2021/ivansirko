import {HomeHero} from "./hero";
import {HomeIntro} from "./intro";
import {HomeFeatureCards} from "@/src/components/home/feature-cards";
import {HomeOverviewCards} from "@/src/components/home/overview-cards";
import {HomeMapLegends} from "@/src/components/home/map-legends";
import {HomeGalleryPreview} from "@/src/components/home/gallery-preview";
import {HomeLegacyPreview} from "@/src/components/home/legacy-preview";

export default function Home() {
    return (
        <main
            className="
                relative overflow-hidden
                bg-[linear-gradient(180deg,#f8e7b8_0%,#e8c987_42%,#d2a85d_100%)]
            "
        >
            <div
                className="
                    pointer-events-none absolute inset-0
                    bg-[radial-gradient(circle_at_12%_16%,rgba(62,28,8,0.18),transparent_2px),radial-gradient(circle_at_82%_34%,rgba(62,28,8,0.13),transparent_2px),radial-gradient(circle_at_38%_72%,rgba(62,28,8,0.11),transparent_2px)]
                    bg-[length:110px_110px,150px_150px,190px_190px]
                    opacity-70
                "
            />

            <div
                className="
                    pointer-events-none absolute inset-0
                    bg-[radial-gradient(circle_at_0%_0%,rgba(67,32,13,0.28),transparent_26%),radial-gradient(circle_at_100%_8%,rgba(67,32,13,0.22),transparent_28%),radial-gradient(circle_at_50%_100%,rgba(67,32,13,0.22),transparent_34%)]
                    mix-blend-multiply
                "
            />

            <div
                className="
                    pointer-events-none absolute inset-0
                    bg-[linear-gradient(90deg,rgba(80,40,14,0.035)_1px,transparent_1px),linear-gradient(rgba(80,40,14,0.035)_1px,transparent_1px)]
                    bg-[length:36px_36px]
                    opacity-60
                "
            />

            <div className="relative z-10">
                <HomeHero />
                <HomeIntro />
                <HomeFeatureCards />
                <HomeOverviewCards />
                <HomeMapLegends />
                <HomeGalleryPreview />
                <HomeLegacyPreview />
            </div>
        </main>
    );
}