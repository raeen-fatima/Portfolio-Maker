import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";
import {
  isValidTemplateId,
  portfolioTemplates,
} from "@/lib/templates";

async function getPortfolio() {
  const cookieStore = await cookies();

  const token =
    cookieStore.get("token")?.value;

  if (!token) {
    return {
      error: Response.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      ),
    };
  }

  const decoded = verifyToken(token);

  const portfolio =
    await Portfolio.findOne({
      userId: decoded.id,
    });

  if (!portfolio) {
    return {
      error: Response.json(
        {
          success: false,
          message:
            "Portfolio not found",
        },
        { status: 404 }
      ),
    };
  }

  return { portfolio };
}

export async function GET() {
  try {
    await connectDB();

    const { portfolio, error } =
      await getPortfolio();

    if (error) return error;

    return Response.json({
      success: true,
      template:
        portfolio.template ||
        "template-1",
      templates: portfolioTemplates,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message:
          "Something went wrong",
      },
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();

    const { portfolio, error } =
      await getPortfolio();

    if (error) return error;

    const { template } =
      await request.json();

    if (!isValidTemplateId(template)) {
      return Response.json(
        {
          success: false,
          message:
            "Invalid template selected",
        },
        { status: 400 }
      );
    }

    portfolio.template = template;

    await portfolio.save();

    return Response.json({
      success: true,
      message:
        "Template selected successfully",
      template: portfolio.template,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message:
          "Something went wrong",
      },
      { status: 500 }
    );
  }
}
