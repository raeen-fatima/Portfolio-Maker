import { connectDB } from "@/lib/database/db";
import { getCurrentUser } from "@/lib/auth/auth";

import { updatePassword } from "@/services/user/user.service";

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
      currentPassword,
      newPassword,
    } = await request.json();

    await updatePassword(
      user.id,
      currentPassword,
      newPassword,
    );

    return Response.json({
      success: true,
      message:
        "Password updated successfully",
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