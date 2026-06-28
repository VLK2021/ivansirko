import type {Metadata} from "next";
import {cookies} from "next/headers";

import "./globals.css";
import {LanguageProvider} from "@/src/context";
import {SiteShell} from "@/src/components/layout";
import {getValidLanguage} from "@/src/helpers";

const SITE_URL = "https://ivan-sirko.com";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    title: {
        default: "Ivan Sirko — Interactive Historical Experience",
        template: "%s | Ivan Sirko",
    },
    description:
        "An interactive historical website dedicated to Ivan Sirko, his biography, military campaigns, legends, documents, gallery, and legacy.",
    keywords: [
        "Ivan Sirko",
        "Іван Сірко",
        "Cossacks",
        "Zaporizhian Sich",
        "Ukrainian history",
        "Cossack history",
    ],
    authors: [{name: "Kostiuk Volodymyr"}],
    creator: "Kostiuk Volodymyr",
    publisher: "Kostiuk Volodymyr",
    alternates: {
        canonical: "/",
        languages: {
            uk: "/",
            en: "/",
        },
    },
    openGraph: {
        type: "website",
        locale: "uk_UA",
        alternateLocale: "en_US",
        url: "/",
        siteName: "Ivan Sirko",
        title: "Ivan Sirko — Interactive Historical Experience",
        description:
            "Explore the life, campaigns, legends, documents, and legacy of Ivan Sirko through an interactive historical experience.",
        images: [
            {
                url: "/opengraph-image.png",
                width: 1200,
                height: 630,
                alt: "Ivan Sirko historical website preview",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Ivan Sirko — Interactive Historical Experience",
        description:
            "An interactive historical website dedicated to Ivan Sirko and the Zaporizhian Cossack era.",
        images: ["/opengraph-image.png"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
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