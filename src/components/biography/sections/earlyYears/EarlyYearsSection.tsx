import {EarlyYearsSectionEn} from "./EarlyYearsSection.en";
import {EarlyYearsSectionUk} from "./EarlyYearsSection.uk";

type EarlyYearsSectionProps = {
    currentLang: "uk" | "en";
};

export const EarlyYearsSection = ({currentLang}: EarlyYearsSectionProps) => {
    return currentLang === "en" ? <EarlyYearsSectionEn /> : <EarlyYearsSectionUk />;
};