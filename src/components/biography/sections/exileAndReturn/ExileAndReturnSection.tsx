import {ExileAndReturnSectionEn} from "./ExileAndReturnSection.en";
import {ExileAndReturnSectionUk} from "./ExileAndReturnSection.uk";

type ExileAndReturnSectionProps = {
    currentLang: "uk" | "en";
};

export const ExileAndReturnSection = ({
                                          currentLang,
                                      }: ExileAndReturnSectionProps) => {
    return currentLang === "en" ? (
        <ExileAndReturnSectionEn />
    ) : (
        <ExileAndReturnSectionUk />
    );
};