import {HistoricalMemorySectionEn} from "./HistoricalMemorySection.en";
import {HistoricalMemorySectionUk} from "./HistoricalMemorySection.uk";

type HistoricalMemorySectionProps = {
    currentLang: "uk" | "en";
};

export const HistoricalMemorySection = ({
                                            currentLang,
                                        }: HistoricalMemorySectionProps) => {
    return currentLang === "en" ? (
        <HistoricalMemorySectionEn />
    ) : (
        <HistoricalMemorySectionUk />
    );
};