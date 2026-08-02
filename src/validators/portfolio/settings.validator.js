import { z } from "zod";
import { slugSchema } from "../common/slug.validator";

export const settingsSchema = z.object({
  slug: slugSchema,
});