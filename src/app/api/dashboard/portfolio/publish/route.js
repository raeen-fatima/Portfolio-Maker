import { connectDB } from "@/lib/database/db";
import { getCurrentUser } from "@/lib/auth/auth";

import Portfolio from "@/models/portfolio/Portfolio";

export async function PUT() {
  try {
    await connectDB();

    const user = await getCurrentUser();

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    const portfolio = await Portfolio.findOne({
      userId: user.id,
    });

    if (!portfolio) {
      return Response.json(
        {
          success: false,
          message: "Portfolio not found",
        },
        { status: 404 },
      );
    }

    portfolio.isPublished = !portfolio.isPublished;

    // Generate slug first time only
    if (portfolio.isPublished && !portfolio.slug) {
      portfolio.slug = portfolio.hero?.name
        ?.toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
    }

    await portfolio.save();

    return Response.json({
      success: true,
      isPublished: portfolio.isPublished,
      slug: portfolio.slug,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}