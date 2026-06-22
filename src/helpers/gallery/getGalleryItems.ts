import fs from "fs";
import path from "path";
import {GalleryItem} from "@/src/types/gallery";

const GALLERY_DIRECTORY = path.join(
    process.cwd(),
    "public",
    "images",
    "gallery"
);

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

export const getGalleryItems = (): GalleryItem[] => {
    if (!fs.existsSync(GALLERY_DIRECTORY)) {
        return [];
    }

    return fs
        .readdirSync(GALLERY_DIRECTORY)
        .filter((fileName) =>
            ALLOWED_EXTENSIONS.includes(path.extname(fileName).toLowerCase())
        )
        .sort((a, b) =>
            a.localeCompare(b, undefined, {
                numeric: true,
                sensitivity: "base",
            })
        )
        .map((fileName, index) => ({
            id: fileName.replace(path.extname(fileName), ""),
            order: index + 1,
            image: `/images/gallery/${fileName}`,
        }));
};