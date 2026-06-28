import type {MetadataRoute} from "next";

const SITE_URL = "https://ivan-sirko.com";

const routes = [
    "",
    "/biography",
    "/military",
    "/documents",
    "/gallery",
    "/legends",
    "/legacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
    return routes.map((route) => ({
        url: `${SITE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: route === "" ? 1 : 0.8,
    }));
}