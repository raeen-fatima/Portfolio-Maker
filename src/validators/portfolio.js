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

export const aboutSchema = z.object({
  bio: z
    .string()
    .min(20, "Bio must be at least 20 characters"),

  location: z
    .string()
    .min(2, "Location is required"),

  email: z
    .email("Enter a valid email"),

  phone: z
    .string()
    .min(10, "Phone number is required"),

  github: z
    .string()
    .url("Enter a valid GitHub URL"),

  linkedin: z
    .string()
    .url("Enter a valid LinkedIn URL"),
});

// About Form
//      ↓
// Zod Validation
//      ↓
// POST API
//      ↓
// MongoDB
//      ↓
// GET API
//      ↓
// reset()
//      ↓
// Auto Fill
//      ↓
// Live Preview

export const projectSchema = z.object({
  title: z
    .string()
    .min(3, "Title is required"),

  description: z
    .string()
    .min(
      20,
      "Description must be at least 20 characters"
    ),

  image: z.string().optional(),

  githubUrl: z
    .string()
    .url("Enter a valid GitHub URL"),

  liveUrl: z
    .string()
    .url("Enter a valid Live URL"),

  technologies: z
    .string()
    .min(1, "Technology is required"),
});