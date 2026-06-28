import type {Metadata} from "next";

import Home from "@/src/components/home/Home";

export const metadata: Metadata = {
    title: "Home",
    description:
        "Discover Ivan Sirko through an interactive historical experience about his life, military path, legends, documents, gallery, and legacy.",
    alternates: {
        canonical: "/",
    },
    openGraph: {
        title: "Ivan Sirko — Interactive Historical Experience",
        description:
            "An interactive historical website dedicated to Ivan Sirko, one of the most renowned Cossack leaders in Ukrainian history.",
        url: "/",
        images: ["/opengraph-image.png"],
    },
    twitter: {
        title: "Ivan Sirko — Interactive Historical Experience",
        description:
            "Explore Ivan Sirko's biography, campaigns, legends, documents, gallery, and legacy.",
        images: ["/opengraph-image.png"],
    },
};

export default function HomePage() {
    return <Home />;
}