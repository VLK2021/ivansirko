import {LegendItem, LegendsLanguage} from "@/src/types/legends";

type LegendsAsideProps = {
    items: LegendItem[];
    currentLang: LegendsLanguage;
    title: string;
};

export const LegendsAside = ({
                                 items,
                                 currentLang,
                                 title,
                             }: LegendsAsideProps) => {
    return (
        <aside className="mb-8 lg:fixed lg:top-[130px] lg:w-[320px]">
            <div className="max-h-[calc(100vh-170px)] overflow-y-auto border border-[#9b6a2c]/65 bg-[#d9b56f]/55 p-5 shadow-[0_18px_55px_rgba(58,24,8,0.16)]">
                <h2 className="mb-5 text-sm font-black uppercase tracking-[0.22em] text-[#2a1205]">
                    {title}
                </h2>

                <nav className="space-y-2">
                    {items.map((item) => {
                        const legendTitle =
                            currentLang === "en"
                                ? item.titleEn
                                : item.titleUk;

                        return (
                            <a
                                key={item.id}
                                href={`#${item.slug}`}
                                className="block border border-[#9b6a2c]/35 bg-[#f3d98f]/45 px-4 py-3 text-sm font-semibold leading-5 text-[#2a1205] transition hover:border-[#d8b16a] hover:bg-[#94551f] hover:text-[#160903]"
                            >
                                {legendTitle}
                            </a>
                        );
                    })}
                </nav>
            </div>
        </aside>
    );
};