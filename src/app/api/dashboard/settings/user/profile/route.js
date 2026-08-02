import { connectDB } from "@/lib/database/db";
import { getCurrentUser } from "@/lib/auth/auth";

import {
  getProfile,
  updateProfile,
} from "@/services/user/user.service";

export async function GET() {
  try {
    await connectDB();

    const user = await getCurrentUser();

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    const profile =
      await getProfile(user.id);

    return Response.json({
      success: true,
      user: profile,
    });
  } catch (error) {
    console.log(error);

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

export async function PUT(request) {
  try {
    await connectDB();

    const user = await getCurrentUser();

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    const {
      name,
      username,
      image,
    } = await request.json();

    const updatedUser =
      await updateProfile(
        user.id,
        name,
        username,
        image,
      );

    return Response.json({
      success: true,
      message:
        "Profile updated successfully",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);

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