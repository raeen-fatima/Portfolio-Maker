import { z } from "zod";
import {
  imageSchema,
} from "../common/image.validator";
import {
  requiredUrl,
} from "../common/url.validator";

export const heroSchema = z.object({
  name: z.string().trim().min(2).max(50),

  title: z.string().trim().min(3).max(80),

  tagline: z.string().trim().min(10).max(200),

  resumeUrl: requiredUrl,

  image: imageSchema,
});