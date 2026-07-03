import { cookies } from "next/headers";

import { connectDB } from "@/lib/db";

import { verifyToken } from "@/lib/jwt";

import Portfolio from "@/models/Portfolio";

import Analytics from "@/models/Analytics";

export async function GET() {
  try {
    await connectDB();

    const cookieStore =
      await cookies();

    const token =
      cookieStore.get("token")
        ?.value;

    if (!token) {
      return Response.json(
        {
          message:
            "Unauthorized",
        },
        {
          status: 401,
        }
      );
    }

    const decoded =
      verifyToken(token);

    const portfolio =
      await Portfolio.findOne({
        userId: decoded.id,
      });

    if (!portfolio) {
      return Response.json(
        {
          message:
            "Portfolio not found",
        },
        {
          status: 404,
        }
      );
    }

    let analytics =
      await Analytics.findOne({
        portfolioId:
          portfolio._id,
      });

    if (!analytics) {
      analytics =
        await Analytics.create({
          portfolioId:
            portfolio._id,
        });
    }

    return Response.json({
      analytics,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message:
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}