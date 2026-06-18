"use client";

import {HistoricalSection} from "@/src/common/historicalSection";

type BiographySection = {
    id: string;
    title: string;
    text: string;
};

type BiographyContentProps = {
    sections: BiographySection[];
};

export const BiographyContent = ({sections}: BiographyContentProps) => {
    return (
        <div className="mt-14 max-w-[980px] space-y-8">
            {sections.map((section, index) => (
                <HistoricalSection
                    key={section.id}
                    id={section.id}
                    number={String(index + 1).padStart(2, "0")}
                    title={section.title}
                >
                    <p>{section.text}</p>
                </HistoricalSection>
            ))}
        </div>
    );
};