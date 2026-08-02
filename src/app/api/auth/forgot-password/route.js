import { connectDB } from "@/lib/database/db";

import { validate } from "@/utils/validate";

import { forgotPasswordSchema } from "@/validators/auth";

import { forgotPassword } from "@/services/user/user.service";

export async function POST(
  request,
) {
  try {
    await connectDB();

    const body =
      await request.json();

    const result = validate(
      forgotPasswordSchema,
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

    await forgotPassword(
      result.data.email,
    );

    return Response.json(
      {
        success: true,
        message:
          "If an account exists with this email, a password reset link has been sent.",
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message:
          "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}