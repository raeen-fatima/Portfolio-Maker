import { z } from "zod";

export const skillSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(30),
});