import { connectDB } from "@/lib/database/db";

import { validate } from "@/utils/validate";

import { resetPasswordSchema } from "@/validators/auth";

import { resetPassword } from "@/services/user/user.service";

export async function POST(request) {
  try {
    await connectDB();

    const body =
      await request.json();

    const result = validate(
      resetPasswordSchema,
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

    const {
      password,
    } = result.data;

    await resetPassword(
      body.token,
      password,
    );

    return Response.json(
      {
        success: true,
        message:
          "Password updated successfully",
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
          error.message ||
          "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}