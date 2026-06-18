import {FamilySectionEn} from "./FamilySection.en";
import {FamilySectionUk} from "./FamilySection.uk";

type FamilySectionProps = {
    currentLang: "uk" | "en";
};

export const FamilySection = ({currentLang}: FamilySectionProps) => {
    return currentLang === "en" ? <FamilySectionEn /> : <FamilySectionUk />;
};