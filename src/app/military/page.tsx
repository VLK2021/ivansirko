import {cookies} from "next/headers";
import {MilitaryPage} from "@/src/components/military";
import {MilitaryLanguage} from "@/src/types/military";

const getCurrentLang = async (): Promise<MilitaryLanguage> => {
    const cookieStore = await cookies();

    const language =
        cookieStore.get("language")?.value ??
        cookieStore.get("lang")?.value ??
        cookieStore.get("locale")?.value ??
        cookieStore.get("NEXT_LOCALE")?.value;

    return language === "en" ? "en" : "uk";
};

const MilitaryRoutePage = async () => {
    const currentLang = await getCurrentLang();

    return <MilitaryPage currentLang={currentLang} />;
};

export default MilitaryRoutePage;