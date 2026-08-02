import { connectDB } from "@/lib/database/db";
import { getCurrentUser } from "@/lib/auth/auth";

import { deletePortfolio } from "@/services/dashboard/dashboard.service";
export async function DELETE() {
  try {
    await connectDB();

    const user =
      await getCurrentUser();

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

    await deletePortfolio(
      user.id,
    );

    return Response.json({
      success: true,
      message:
        "Portfolio deleted successfully",
    });
  } catch (error) {
    console.log(error);

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