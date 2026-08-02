import { z } from "zod";

import {
  optionalUrl,
} from "../common/url.validator";

export const certificationSchema =
  z.object({
    title: z.string().trim().min(2),

    issuer: z.string().trim().min(2),

    issueDate: z.string().min(1),

    credentialUrl: optionalUrl,
  });