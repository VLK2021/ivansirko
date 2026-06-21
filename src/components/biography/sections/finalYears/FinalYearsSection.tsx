import {FinalYearsSectionEn} from "./FinalYearsSection.en";
import {FinalYearsSectionUk} from "./FinalYearsSection.uk";

type FinalYearsSectionProps = {
    currentLang: "uk" | "en";
};

export const FinalYearsSection = ({
                                      currentLang,
                                  }: FinalYearsSectionProps) => {
    return currentLang === "en" ? (
        <FinalYearsSectionEn />
    ) : (
        <FinalYearsSectionUk />
    );
};