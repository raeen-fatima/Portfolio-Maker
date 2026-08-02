import { z } from "zod";

export const experienceSchema = z.object({
  company: z.string().trim().min(2),

  role: z.string().trim().min(2),

  location: z.string().trim(),

  startDate: z.string(),

  endDate: z.string().optional(),

  current: z.boolean(),

  description: z.string().trim().min(10),
});