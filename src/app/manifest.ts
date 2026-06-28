import type {MetadataRoute} from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Ivan Sirko — Interactive Historical Experience",
        short_name: "Ivan Sirko",
        description:
            "Interactive historical website dedicated to Ivan Sirko, his biography, military campaigns, legends, documents, gallery, and legacy.",
        start_url: "/",
        display: "standalone",
        background_color: "#160904",
        theme_color: "#160904",
        icons: [
            {
                src: "/icons/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icons/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
    };
}