import {cookies} from "next/headers";
import {LegendsPage} from "@/src/components/legends";
import {LegendsLanguage} from "@/src/types/legends";

const getCurrentLang = async (): Promise<LegendsLanguage> => {
    const cookieStore = await cookies();

    const language =
        cookieStore.get("language")?.value ??
        cookieStore.get("lang")?.value ??
        cookieStore.get("locale")?.value ??
        cookieStore.get("NEXT_LOCALE")?.value;

    return language === "en" ? "en" : "uk";
};

const LegendsRoutePage = async () => {
    const currentLang = await getCurrentLang();

    return <LegendsPage currentLang={currentLang} />;
};

export default LegendsRoutePage;