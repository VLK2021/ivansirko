import {HetmansSectionEn} from "./HetmansSection.en";
import {HetmansSectionUk} from "./HetmansSection.uk";

type HetmansSectionProps = {
    currentLang: "uk" | "en";
};

export const HetmansSection = ({currentLang}: HetmansSectionProps) => {
    return currentLang === "en" ? <HetmansSectionEn /> : <HetmansSectionUk />;
};