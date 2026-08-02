import { z } from "zod";

import { emailSchema } from "../common/email.validator";

import {
  imageSchema,
} from "../common/image.validator";

import {
  requiredUrl,
} from "../common/url.validator";

export const aboutSchema = z.object({
  bio: z.string().trim().min(20).max(1000),

  location: z.string().trim().min(2).max(100),

  email: emailSchema,

  phone: z.string().trim().min(10).max(20),

  github: requiredUrl,

  linkedin: requiredUrl,

  instagram: requiredUrl,

  image: imageSchema,
});