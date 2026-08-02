import { z } from "zod";

export const templateSchema = z.object({
  selectedTemplate: z.enum([
    "nova",
    "minimal",
    "terminal",
  ]),
});