import {EarlyYearsSectionEn} from "./EarlyYearsSection.en";
import {EarlyYearsSectionUk} from "./EarlyYearsSection.uk";

type SupportedLang = "uk" | "en";

type EarlyYearsSectionProps = {
    currentLang: SupportedLang;
};

export const EarlyYearsSection = ({currentLang}: EarlyYearsSectionProps) => {
    return currentLang === "en" ? <EarlyYearsSectionEn /> : <EarlyYearsSectionUk />;
};