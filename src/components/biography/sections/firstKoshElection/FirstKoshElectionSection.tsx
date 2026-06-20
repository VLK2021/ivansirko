import {FirstKoshElectionSectionEn} from "./FirstKoshElectionSection.en";
import {FirstKoshElectionSectionUk} from "./FirstKoshElectionSection.uk";

type FirstKoshElectionSectionProps = {
    currentLang: "uk" | "en";
};

export const FirstKoshElectionSection = ({
                                             currentLang,
                                         }: FirstKoshElectionSectionProps) => {
    return currentLang === "en" ? (
        <FirstKoshElectionSectionEn />
    ) : (
        <FirstKoshElectionSectionUk />
    );
};