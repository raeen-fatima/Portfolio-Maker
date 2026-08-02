import { z } from "zod";

export const publishSchema = z.object({
  isPublished: z.boolean(),
});