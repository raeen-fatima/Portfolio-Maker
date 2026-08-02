import { z } from "zod";

export const slugSchema = z
  .string()
  .trim()
  .min(3)
  .max(50)
  .regex(
    /^[a-z0-9-]+$/,
    "Slug can only contain lowercase letters, numbers and hyphens"
  );