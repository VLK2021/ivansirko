"use client";

import {EarlyYearsSection} from "./sections/earlyYears";

type BiographyContentProps = {
    currentLang: "uk" | "en";
};

export const BiographyContent = ({currentLang}: BiographyContentProps) => {
    return (
        <div className="mt-14 max-w-[980px] space-y-8">
            <EarlyYearsSection currentLang={currentLang} />
        </div>
    );
};