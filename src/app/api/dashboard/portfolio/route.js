import { connectDB } from "@/lib/database/db";
import { getCurrentUser } from "@/lib/auth/auth";
import { getPortfolioOverview } from "@/services/portfolio/portfolio.service";

export async function GET() {
  try {
    await connectDB();

    const user = await getCurrentUser();

    if (!user) {
      return Response.json(
        {
          message: "Unauthorized",
        },
        {
          status: 401,
        },
      );
    }

    const portfolio = await getPortfolioOverview(user.id);

    return Response.json({
      success: true,
      ...portfolio,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}