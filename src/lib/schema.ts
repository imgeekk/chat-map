import {z} from "zod";

export const SectionSchema = z.object({
    heading: z.string(),
    points: z.array(z.string())
});

export const OutputSchema = z.object({
    title: z.string(),
    summary: z.string(),
    sections: z.array(SectionSchema)
})