import {LegendItem, LegendsLanguage} from "@/src/types/legends";

type LegendsArticleProps = {
    item: LegendItem;
    currentLang: LegendsLanguage;
};

export const LegendsArticle = ({
                                   item,
                                   currentLang,
                               }: LegendsArticleProps) => {
    const title = currentLang === "en" ? item.titleEn : item.titleUk;
    const summary = currentLang === "en" ? item.summaryEn : item.summaryUk;
    const content = currentLang === "en" ? item.contentEn : item.contentUk;

    return (
        <article
            id={item.slug}
            className="scroll-mt-28 border border-[#9b6a2c]/65 bg-[#d9b56f]/55 p-5 shadow-[0_18px_55px_rgba(58,24,8,0.16)] sm:p-7"
        >
            <div className="mb-6">
                <span className="mb-4 inline-flex border border-[#d8b16a] bg-[#94551f] px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-[#160903]">
                    {String(item.order).padStart(2, "0")}
                </span>

                <h2 className="text-2xl font-semibold tracking-tight text-[#2a1205] sm:text-3xl">
                    {title}
                </h2>

                <p className="mt-4 text-base leading-7 text-[#5f3815]">
                    {summary}
                </p>
            </div>

            {item.image && (
                <div className="mb-6 md:float-right md:ml-6 md:mb-4">
                    <img
                        src={item.image}
                        alt={title}
                        className="
                w-full
                md:w-[320px]
                border
                border-[#9b6a2c]/55
                bg-[#d9b56f]
                p-[4px]
            "
                    />
                </div>
            )}

            <div className="space-y-5 text-base leading-8 text-[#3a1808]">
                {content.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
            </div>
        </article>
    );
};