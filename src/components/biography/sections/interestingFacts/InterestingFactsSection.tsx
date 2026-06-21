import {InterestingFactsSectionUk} from "./InterestingFactsSection.uk";
import {
    InterestingFactsSectionEn
} from "@/src/components/biography/sections/interestingFacts/nterestingFactsSection.en";

type InterestingFactsSectionProps = {
    currentLang: "uk" | "en";
};

export const InterestingFactsSection = ({
                                            currentLang,
                                        }: InterestingFactsSectionProps) => {
    return currentLang === "en" ? (
        <InterestingFactsSectionEn />
    ) : (
        <InterestingFactsSectionUk />
    );
};