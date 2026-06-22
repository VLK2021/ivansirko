import fs from "fs";
import path from "path";
import {GalleryItem} from "@/src/types/gallery";

const GALLERY_DIR = path.join(process.cwd(), "public", "images", "gallery");

const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

export const getGalleryItems = (): GalleryItem[] => {
    if (!fs.existsSync(GALLERY_DIR)) {
        return [];
    }

    return fs
        .readdirSync(GALLERY_DIR)
        .filter((fileName) => {
            const extension = path.extname(fileName).toLowerCase();

            return allowedExtensions.includes(extension);
        })
        .sort((a, b) =>
            a.localeCompare(b, undefined, {
                numeric: true,
                sensitivity: "base",
            })
        )
        .map((fileName, index) => {
            const id = fileName.replace(path.extname(fileName), "");

            return {
                id,
                order: index + 1,
                image: `/images/gallery/${fileName}`,
            };
        });
};