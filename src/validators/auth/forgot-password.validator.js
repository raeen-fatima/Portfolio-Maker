import { z } from "zod";
import { emailSchema } from "../common/email.validator";

export const forgotPasswordSchema = z.object({
  email: emailSchema,
});