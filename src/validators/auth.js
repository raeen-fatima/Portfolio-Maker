import { z } from "zod";

export const registerSchema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),

    email: z.string().email("Please enter a valid email"),
    username: z.string().min(3).max(20),

    image: z.string().optional(),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

//Login Schema
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),

  password: z.string().min(6, "Password must be at least 6 characters"),
});
