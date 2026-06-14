import { z } from "zod";

export const heroSchema = z.object({
  name: z.string().min(2, "Name is required"),

  title: z.string().min(3, "Title is required"),

  tagline: z.string().min(10, "Tagline is required"),

  resumeUrl: z.string().url("Enter a valid URL"),

  image: z.string().url().optional(),
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
  bio: z.string().min(20, "Bio must be at least 20 characters"),

  location: z.string().min(2, "Location is required"),

  email: z.email("Enter a valid email"),

  phone: z.string().min(10, "Phone number is required"),

  github: z.string().url("Enter a valid GitHub URL"),

  linkedin: z.string().url("Enter a valid LinkedIn URL"),
  instagram: z.string().url("Enter a valid Instagram URL"),
  image: z.string().url().optional(),
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
  title: z.string().min(3, "Title is required"),

  description: z.string().min(20, "Description must be at least 20 characters"),

  image: z.string().optional(),

  githubUrl: z.string().url("Enter a valid GitHub URL"),

  liveUrl: z.string().url("Enter a valid Live URL"),

  technologies: z.string().min(1, "Technology is required"),
});

export const skillSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Skill name is required")
    .max(30, "Skill name is too long"),
});

export const experienceSchema = z.object({
  company: z.string().trim().min(2, "Company name is required"),

  role: z.string().trim().min(2, "Role is required"),

  location: z.string().optional(),

  startDate: z.string().min(1, "Start date is required"),

  endDate: z.string().optional(),

  current: z.boolean(),

  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters"),
});

export const educationSchema = z.object({
  institution: z.string().trim().min(2, "Institution is required"),

  degree: z.string().trim().min(2, "Degree is required"),

  startYear: z
    .string()
    .min(4, "Start year is required")
    .max(4, "Enter a valid year"),

  endYear: z.string().max(4, "Enter a valid year").optional(),
});

// export const certificationSchema =
//   z.object({
//     title: z
//       .string()
//       .trim()
//       .min(
//         2,
//         "Certificate title is required"
//       ),

//     issuer: z
//       .string()
//       .trim()
//       .min(
//         2,
//         "Issuing organization is required"
//       ),

//     issueDate: z
//       .string()
//       .min(
//         1,
//         "Issue date is required"
//       ),

//     credentialId: z
//       .string()
//       .optional(),

//     credentialUrl: z
//       .string()
//       .trim()
//       .optional()
//       .refine(
//         (value) =>
//           !value ||
//           /^https?:\/\/.+/.test(value),
//         {
//           message:
//             "Please enter a valid URL",
//         }
//       ),
//   });

export const certificationSchema = z.object({
  title: z.string().min(2, "Certification title is required"),

  issuer: z.string().min(2, "Issuer is required"),

  issueDate: z.string().min(1, "Issue date is required"),

  credentialUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
});


export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .email("Please enter a valid email"),

  message: z
    .string()
    .min(10, "Message must be at least 10 characters"),
});