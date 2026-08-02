import { z } from "zod";

export const educationSchema = z.object({
  institution: z.string().trim().min(2),

  degree: z.string().trim().min(2),

  startYear: z.string().length(4),

  endYear: z.string().length(4).optional(),
});