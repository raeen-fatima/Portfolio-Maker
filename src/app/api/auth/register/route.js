import { connectDB } from "@/lib/database/db";

import { validate } from "@/utils/validate";

import { registerSchema } from "@/validators/auth/register.validator";

import { registerUser } from "@/services/user/user.service";

export async function POST(request) {
  try {
    await connectDB();

    const body =
      await request.json();

    const result = validate(
      registerSchema,
      body,
    );

    if (!result.success) {
      return Response.json(
        {
          success: false,
          errors: result.errors,
        },
        {
          status: 400,
        },
      );
    }

    await registerUser(
      result.data,
    );

    return Response.json(
      {
        success: true,
        message:
          "User registered successfully",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message:
          error.message ||
          "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}