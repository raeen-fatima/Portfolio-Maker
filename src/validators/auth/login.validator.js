import { z } from "zod";

import {
  emailSchema,
} from "../common/email.validator";

export const loginSchema = z.object({
  email: emailSchema,

  password: z.string().min(6),
});