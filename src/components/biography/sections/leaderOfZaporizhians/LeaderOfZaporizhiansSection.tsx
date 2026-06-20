import {LeaderOfZaporizhiansSectionEn} from "./LeaderOfZaporizhiansSection.en";
import {LeaderOfZaporizhiansSectionUk} from "./LeaderOfZaporizhiansSection.uk";

type LeaderOfZaporizhiansSectionProps = {
    currentLang: "uk" | "en";
};

export const LeaderOfZaporizhiansSection = ({
                                                currentLang,
                                            }: LeaderOfZaporizhiansSectionProps) => {
    return currentLang === "en" ? (
        <LeaderOfZaporizhiansSectionEn />
    ) : (
        <LeaderOfZaporizhiansSectionUk />
    );
};