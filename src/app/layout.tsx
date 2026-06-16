import type {Metadata} from "next";
import {cookies} from "next/headers";

import "./globals.css";
import {LanguageProvider} from "@/src/context";
import {SiteShell} from "@/src/components/layout";
import {getValidLanguage} from "@/src/helpers";

export const metadata: Metadata = {
    title: "Ivan Sirko",
    description: "Interactive historical experience about Ivan Sirko.",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    const cookieStore = await cookies();
    const initialLang = getValidLanguage(cookieStore.get("lang")?.value);

    return (
        <html lang={initialLang} className="h-full antialiased">
        <body className="min-h-full">
        <LanguageProvider initialLang={initialLang}>
            <SiteShell>{children}</SiteShell>
        </LanguageProvider>
        </body>
        </html>
    );
}