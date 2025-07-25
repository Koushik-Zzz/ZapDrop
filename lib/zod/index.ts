import * as z from "zod";

export const fileSchema = z.object({
    file: z.object({
        name: z.string(),
        size: z.number().int().positive("You cant upload file size less than 1 byte"),
        type: z.string()
    }),
    expiry: z.object({
        label: z.string(),
        value: z.string(),
        hours: z.union([z.literal(2), z.literal(5), z.literal(24)])
    })
})

export const completeSchema = z.object({
    key: z.string(),
    originalName: z.string(),
    fileSize: z.number(),
    mimeType: z.string(),
    expiresAt: z.string().datetime()
})

// Security constants
export const ALLOWED_HOURS = [2, 5, 24] as const;

// Convert hours to seconds with validation
export function hoursToSeconds(hours: number): number {
    if (!(ALLOWED_HOURS as readonly number[]).includes(hours)) {
        console.warn(`Invalid hours: ${hours}. Defaulting to 2 hours.`);
        return 7200;
    }
    
    return hours * 3600; 
}