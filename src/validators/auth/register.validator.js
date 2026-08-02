import { z } from "zod";

import {
  emailSchema,
} from "../common/email.validator";

export const registerSchema = z
  .object({
    name: z.string().trim().min(3, "Name must be at least 3 characters"),

    username: z.string().trim().min(3).max(20),

    email: emailSchema,

    image: z.string().optional(),

    password: z.string().min(6, "Password must be at least 6 characters"),

    confirmPassword: z.string(),
  })
  .refine(
    (data) =>
      data.password ===
      data.confirmPassword,
    {
      path: ["confirmPassword"],
      message:
        "Passwords do not match",
    }
  );