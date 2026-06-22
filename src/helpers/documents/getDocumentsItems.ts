import fs from "fs";
import path from "path";
import {DocumentItem} from "@/src/types/documents/documents";

const DOCUMENTS_DIRECTORY = path.join(
    process.cwd(),
    "public",
    "images",
    "documents"
);

const ALLOWED_EXTENSIONS = [".jpg", ".jpeg", ".png", ".webp", ".avif"];

export const getDocumentsItems = (): DocumentItem[] => {
    if (!fs.existsSync(DOCUMENTS_DIRECTORY)) {
        return [];
    }

    return fs
        .readdirSync(DOCUMENTS_DIRECTORY)
        .filter((fileName) => {
            const extension = path.extname(fileName).toLowerCase();

            return ALLOWED_EXTENSIONS.includes(extension);
        })
        .sort((a, b) =>
            a.localeCompare(b, undefined, {
                numeric: true,
                sensitivity: "base",
            })
        )
        .map((fileName, index) => ({
            id: fileName.replace(path.extname(fileName), ""),
            order: index + 1,
            image: `/images/documents/${fileName}`,
        }));
};