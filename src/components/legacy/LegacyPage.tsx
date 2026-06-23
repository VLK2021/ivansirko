import {LEGACY_SECTIONS} from "@/src/constants/legacy";
import {RouteBackground} from "@/src/common/routeBackground";
import en from "@/src/locales/en";
import uk from "@/src/locales/uk";
import {LegacyLanguage} from "@/src/types/legacy";
import {LegacyHero} from "./LegacyHero";
import {LegacyQuote} from "./LegacyQuote";
import {LegacySection} from "./LegacySection";

type LegacyPageProps = {
    currentLang: LegacyLanguage;
};

export const LegacyPage = ({currentLang}: LegacyPageProps) => {
    const locale = currentLang === "en" ? en : uk;
    const items = [...LEGACY_SECTIONS].sort((a, b) => a.order - b.order);

    return (
        <RouteBackground>
            <section className="relative z-10 overflow-hidden px-4 pb-24 pt-10 sm:px-6 lg:px-10">
                <div className="mx-auto max-w-[1440px]">
                    <LegacyHero
                        eyebrow={locale.legacy.eyebrow}
                        title={locale.legacy.title}
                        description={locale.legacy.description}
                    />

                    <LegacyQuote quote={locale.legacy.quote} />

                    <div className="relative mx-auto mt-24 max-w-6xl">
                        <div className="absolute left-4 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-[#94551f] to-transparent lg:block" />

                        <div className="space-y-24">
                            {items.map((item) => (
                                <LegacySection
                                    key={item.id}
                                    item={item}
                                    currentLang={currentLang}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </RouteBackground>
    );
};