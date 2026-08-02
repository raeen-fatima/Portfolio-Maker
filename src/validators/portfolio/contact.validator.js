import { z } from "zod";

import {
  emailSchema,
} from "../common/email.validator";

export const contactSchema = z.object({
  name: z.string().trim().min(2),

  email: emailSchema,

  message: z.string().trim().min(10),
});