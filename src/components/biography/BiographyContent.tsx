"use client";

import {EarlyYearsSection} from "./sections/earlyYears";
import {FamilySection} from "@/src/components/biography/sections/family";
import {CossackPathSection} from "@/src/components/biography/sections/cossackPath";

type SupportedLang = "uk" | "en";

type BiographyContentProps = {
    currentLang: SupportedLang;
};

export const BiographyContent = ({currentLang}: BiographyContentProps) => {
    return (
        <div className="mt-14 max-w-[980px] space-y-8">
            <EarlyYearsSection currentLang={currentLang} />
            <FamilySection currentLang={currentLang} />
            <CossackPathSection currentLang={currentLang} />
        </div>
    );
};