import {KalnykColonelSectionEn} from "./KalnykColonelSection.en";
import {KalnykColonelSectionUk} from "./KalnykColonelSection.uk";

type KalnykColonelSectionProps = {
    currentLang: "uk" | "en";
};

export const KalnykColonelSection = ({currentLang}: KalnykColonelSectionProps) => {
    return currentLang === "en" ? (
        <KalnykColonelSectionEn />
    ) : (
        <KalnykColonelSectionUk />
    );
};