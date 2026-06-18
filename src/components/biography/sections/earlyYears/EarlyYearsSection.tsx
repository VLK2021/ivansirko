import {EarlyYearsSectionEn} from "./EarlyYearsSection.en";
import {EarlyYearsSectionUk} from "./EarlyYearsSection.uk";

type EarlyYearsSectionProps = {
    isEnglish: boolean;
};

export const EarlyYearsSection = ({isEnglish}: EarlyYearsSectionProps) => {
    return isEnglish ? <EarlyYearsSectionEn /> : <EarlyYearsSectionUk />;
};