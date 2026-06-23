import {RouteBackground} from "@/src/common/routeBackground";
import en from "@/src/locales/en";
import uk from "@/src/locales/uk";
import {LegendsLanguage} from "@/src/types/legends";
import {LegendsAside} from "./LegendsAside";
import {LegendsContent} from "./LegendsContent";
import {LEGENDS_ITEMS} from "@/src/constants/legends/legends";

type LegendsPageProps = {
    currentLang: LegendsLanguage;
};

export const LegendsPage = ({currentLang}: LegendsPageProps) => {
    const locale = currentLang === "en" ? en : uk;
    const items = [...LEGENDS_ITEMS].sort((a, b) => a.order - b.order);

    return (
        <RouteBackground>
            <section className="relative z-10 mx-auto max-w-[1440px] px-4 pb-20 pt-10 sm:px-6 lg:px-10">
                <div className="mb-10 max-w-4xl lg:ml-[360px]">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#6f3f13]">
                        {locale.legends.eyebrow}
                    </p>

                    <h1 className="text-4xl font-semibold tracking-tight text-[#2a1205] sm:text-5xl lg:text-6xl">
                        {locale.legends.title}
                    </h1>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-[#5f3815] sm:text-lg">
                        {locale.legends.description}
                    </p>
                </div>

                <div className="relative">
                    <LegendsAside
                        items={items}
                        currentLang={currentLang}
                        title={locale.legends.asideTitle}
                    />

                    <div className="lg:ml-[360px]">
                        <LegendsContent
                            items={items}
                            currentLang={currentLang}
                        />
                    </div>
                </div>
            </section>
        </RouteBackground>
    );
};