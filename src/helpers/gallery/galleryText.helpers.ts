export const stripHtml = (value: unknown): string | null => {
    if (typeof value !== "string") {
        return null;
    }

    const cleanedValue = value
        .replace(/<[^>]*>/g, " ")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&amp;/g, "&")
        .replace(/&nbsp;/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    return cleanedValue.length > 0 ? cleanedValue : null;
};

export const cleanFileTitle = (value: unknown): string | null => {
    if (typeof value !== "string") {
        return null;
    }

    const cleanedTitle = value
        .replace(/^File:/i, "")
        .replace(/^Файл:/i, "")
        .replace(/\.[a-z0-9]+$/i, "")
        .replace(/_/g, " ")
        .replace(/\s+/g, " ")
        .trim();

    return cleanedTitle.length > 0 ? cleanedTitle : null;
};

export const extractYear = (...values: Array<unknown>): string | null => {
    for (const value of values) {
        if (typeof value !== "string") {
            continue;
        }

        const match = value.match(/\b(1[5-9]\d{2}|20\d{2})\b/);

        if (match) {
            return match[1];
        }
    }

    return null;
};

export const createStableId = (...parts: Array<unknown>): string => {
    return parts
        .filter((part) => typeof part === "string" || typeof part === "number")
        .join("-")
        .toLowerCase()
        .replace(/[^a-z0-9а-яіїєґ]+/gi, "-")
        .replace(/^-+|-+$/g, "")
        .slice(0, 140);
};

export const getStringValue = (
    source: Record<string, unknown>,
    key: string
): string | null => {
    const value = source[key];

    return typeof value === "string" && value.trim().length > 0
        ? value.trim()
        : null;
};

export const getNumberValue = (
    source: Record<string, unknown>,
    key: string
): number | null => {
    const value = source[key];

    return typeof value === "number" && Number.isFinite(value) ? value : null;
};

export const isRecord = (value: unknown): value is Record<string, unknown> => {
    return typeof value === "object" && value !== null && !Array.isArray(value);
};