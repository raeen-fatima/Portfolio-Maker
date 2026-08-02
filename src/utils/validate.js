import { ZodError } from "zod";

export function validate(schema, data) {
  try {
    return {
      success: true,
      data: schema.parse(data),
    };
  } catch (error) {
    if (error instanceof ZodError) {
      return {
        success: false,
        errors: error.flatten().fieldErrors,
      };
    }

    throw error;
  }
}