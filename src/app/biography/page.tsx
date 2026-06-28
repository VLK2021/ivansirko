import type {Metadata} from "next";

import {BiographyPage} from "@/src/components/biography";

export const metadata: Metadata = {
    title: "Biography",
    description:
        "Explore the biography of Ivan Sirko, his origin, political role, military leadership, family, final years, and historical memory.",
    alternates: {
        canonical: "/biography",
    },
    openGraph: {
        title: "Biography | Ivan Sirko",
        description:
            "A structured biography of Ivan Sirko, focused on his life, leadership, historical context, and memory.",
        url: "/biography",
        images: ["/opengraph-image.png"],
    },
    twitter: {
        title: "Biography | Ivan Sirko",
        description:
            "Learn about Ivan Sirko's life, leadership, military career, and historical legacy.",
        images: ["/opengraph-image.png"],
    },
};

export default function BiographyRoute() {
    return <BiographyPage />;
}