import { cookies } from "next/headers";

import { connectDB } from "@/lib/database/db";
import { generateToken } from "@/lib/auth/jwt";

import { loginUser } from "@/services/user/user.service";

import { validate } from "@/utils/validate";

import { loginSchema } from "@/validators/auth/auth";

export async function POST(request) {
  try {
    await connectDB();

    const body = await request.json();

    const result = validate(
      loginSchema,
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
      email,
      password,
    } = result.data;

    const user = await loginUser(
      email,
      password,
    );

    const token =
      generateToken(user);

    const cookieStore =
      await cookies();

    cookieStore.set(
      "token",
      token,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite: "strict",
        maxAge:
          60 * 60 * 24 * 7,
        path: "/",
      },
    );

    return Response.json(
      {
        success: true,
        message:
          "Login successful",
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