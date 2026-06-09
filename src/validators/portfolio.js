import { z } from "zod";

export const heroSchema = z.object({
  name: z
    .string()
    .min(2, "Name is required"),

  title: z
    .string()
    .min(3, "Title is required"),

  tagline: z
    .string()
    .min(10, "Tagline is required"),

  resumeUrl: z
    .string()
    .url("Enter a valid URL"),
    
  image: z.
    string().url().optional(),
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