import { connectDB } from "@/lib/database/db";
import { getCurrentUser } from "@/lib/auth/auth";
import Portfolio from "@/models/portfolio/Portfolio";

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
        { status: 401 }
      );
    }

    const portfolio = await Portfolio.findOne({
      userId: user._id,
    }).lean();

    return Response.json({
      success: true,
      portfolio: portfolio || null,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
}