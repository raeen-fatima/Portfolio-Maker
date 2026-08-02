import { connectDB } from "@/lib/database/db";
import { getCurrentUser } from "@/lib/auth/auth";

import {
  getPortfolioSettings,
  updatePortfolioSettings,
} from "@/services/dashboard/dashboard.service";

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

    const data = await getPortfolioSettings(
      user.id,
    );

    return Response.json({
      success: true,
      ...data,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: error.message || "Something went wrong",
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

    const { slug, isPublished } =
      await request.json();

    const settings =
      await updatePortfolioSettings(
        user.id,
        slug,
        isPublished,
      );

    return Response.json({
      success: true,
      message:
        "Settings saved successfully",
      settings,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: error.message || "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}