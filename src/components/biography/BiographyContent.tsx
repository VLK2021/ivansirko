"use client";

import {EarlyYearsSection} from "./sections/earlyYears";

type BiographyContentProps = {
    isEnglish: boolean;
};

export const BiographyContent = ({isEnglish}: BiographyContentProps) => {
    return (
        <div className="mt-14 max-w-[980px] space-y-8">
            <EarlyYearsSection isEnglish={isEnglish} />
        </div>
    );
};