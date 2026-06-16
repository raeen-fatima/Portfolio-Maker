import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";

export async function PUT() {
  try {
    await connectDB();

    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        {
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    const decoded = verifyToken(token);

    const portfolio = await Portfolio.findOne({
      userId: decoded.id,
    });

    if (!portfolio) {
      return Response.json(
        {
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
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}
