"use client";

import {CossackPathSectionUk} from "./CossackPathSection.uk";
import {CossackPathSectionEn} from "./CossackPathSection.en";

type Props = {
    currentLang: "uk" | "en";
};

export const CossackPathSection = ({currentLang}: Props) => {

    return currentLang === "en" ? <CossackPathSectionEn/> : <CossackPathSectionUk/>;
};