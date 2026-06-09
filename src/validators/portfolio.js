import { z } from "zod";

export const heroSchema = z.object({
  heading: z
    .string()
    .min(3, "Heading is required"),

  subHeading: z
    .string()
    .min(5, "Sub heading is required"),

  resumeUrl: z
    .string()
    .url("Enter a valid URL"),
});

// Hero Form
//      ↓
// Validation
//      ↓
// Submit
//      ↓
// /api/portfolio/hero
//      ↓
// MongoDB