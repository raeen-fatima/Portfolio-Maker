import { z } from "zod";

import {
  imageSchema,
} from "../common/image.validator";

import {
  requiredUrl,
} from "../common/url.validator";

export const projectSchema = z.object({
  title: z.string().trim().min(3).max(100),

  description: z.string().trim().min(20).max(2000),

  image: imageSchema,

  githubUrl: requiredUrl,

  liveUrl: requiredUrl,

  technologies: z.string().trim().min(1),
});