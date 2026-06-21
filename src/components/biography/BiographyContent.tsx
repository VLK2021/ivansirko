"use client";

import {EarlyYearsSection} from "./sections/earlyYears";
import {FamilySection} from "@/src/components/biography/sections/family";
import {CossackPathSection} from "@/src/components/biography/sections/cossackPath";
import {KalnykColonelSection} from "@/src/components/biography/sections/kalnykColonel";
import {FirstKoshElectionSection} from "@/src/components/biography/sections/firstKoshElection";
import {
    LeaderOfZaporizhiansSection,
} from "@/src/components/biography/sections/leaderOfZaporizhians";
import {HetmansSection} from "@/src/components/biography/sections/hetmans";
import {Uprising1668Section} from "@/src/components/biography/sections/uprising1668";
import {MilitaryTacticsSection} from "@/src/components/biography/sections/militaryTactics";
import {ExileAndReturnSection} from "@/src/components/biography/sections/exileAndReturn";
import {FinalYearsSection} from "@/src/components/biography/sections/finalYears/FinalYearsSection";
import {DeathAndBurialSection} from "@/src/components/biography/sections/deathAndBurial";

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
            <KalnykColonelSection currentLang={currentLang} />
            <FirstKoshElectionSection currentLang={currentLang}/>
            <LeaderOfZaporizhiansSection currentLang={currentLang}/>
            <HetmansSection currentLang={currentLang}/>
            <Uprising1668Section currentLang={currentLang}/>
            <MilitaryTacticsSection currentLang={currentLang}/>
            <ExileAndReturnSection currentLang={currentLang}/>
            <FinalYearsSection currentLang={currentLang}/>
            <DeathAndBurialSection currentLang={currentLang}/>
        </div>
    );
};