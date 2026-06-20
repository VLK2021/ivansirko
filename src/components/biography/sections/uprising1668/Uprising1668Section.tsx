import {Uprising1668SectionEn} from "./Uprising1668Section.en";
import {Uprising1668SectionUk} from "./Uprising1668Section.uk";

type Uprising1668SectionProps = {
    currentLang: "uk" | "en";
};

export const Uprising1668Section = ({
                                        currentLang,
                                    }: Uprising1668SectionProps) => {
    return currentLang === "en"
        ? <Uprising1668SectionEn />
        : <Uprising1668SectionUk />;
};