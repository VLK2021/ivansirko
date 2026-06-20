import {MilitaryTacticsSectionEn} from "./MilitaryTacticsSection.en";
import {MilitaryTacticsSectionUk} from "./MilitaryTacticsSection.uk";

type MilitaryTacticsSectionProps = {
    currentLang: "uk" | "en";
};

export const MilitaryTacticsSection = ({
                                           currentLang,
                                       }: MilitaryTacticsSectionProps) => {
    return currentLang === "en" ? (
        <MilitaryTacticsSectionEn />
    ) : (
        <MilitaryTacticsSectionUk />
    );
};