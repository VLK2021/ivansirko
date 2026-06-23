import {cookies} from "next/headers";
import {LegacyPage} from "@/src/components/legacy";
import {LegacyLanguage} from "@/src/types/legacy";

const getCurrentLang = async (): Promise<LegacyLanguage> => {
    const cookieStore = await cookies();

    const language =
        cookieStore.get("language")?.value ??
        cookieStore.get("lang")?.value ??
        cookieStore.get("locale")?.value ??
        cookieStore.get("NEXT_LOCALE")?.value;

    return language === "en" ? "en" : "uk";
};

const LegacyRoutePage = async () => {
    const currentLang = await getCurrentLang();

    return <LegacyPage currentLang={currentLang} />;
};

export default LegacyRoutePage;