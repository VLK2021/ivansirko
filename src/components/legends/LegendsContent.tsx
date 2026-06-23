import {LegendItem, LegendsLanguage} from "@/src/types/legends";
import {LegendsArticle} from "@/src/components/legends/LegendsArticle";

type LegendsContentProps = {
    items: LegendItem[];
    currentLang: LegendsLanguage;
};

export const LegendsContent = ({
                                   items,
                                   currentLang,
                               }: LegendsContentProps) => {
    return (
        <div className="space-y-8">
            {items.map((item) => (
                <LegendsArticle
                    key={item.id}
                    item={item}
                    currentLang={currentLang}
                />
            ))}
        </div>
    );
};