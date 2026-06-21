import {DeathAndBurialSectionEn} from "./DeathAndBurialSection.en";
import {DeathAndBurialSectionUk} from "./DeathAndBurialSection.uk";

type DeathAndBurialSectionProps = {
    currentLang: "uk" | "en";
};

export const DeathAndBurialSection = ({
                                          currentLang,
                                      }: DeathAndBurialSectionProps) => {
    return currentLang === "en" ? (
        <DeathAndBurialSectionEn />
    ) : (
        <DeathAndBurialSectionUk />
    );
};