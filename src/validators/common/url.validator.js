import { z } from "zod";

export const optionalUrl = z
  .string()
  .trim()
  .url("Please enter a valid URL")
  .optional()
  .or(z.literal(""));

export const requiredUrl = z
  .string()
  .trim()
  .url("Please enter a valid URL");