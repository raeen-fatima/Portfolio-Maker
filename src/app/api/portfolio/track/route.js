import { connectDB } from "@/lib/db";

import Portfolio from "@/models/Portfolio";
import Analytics from "@/models/Analytics";

export async function POST(request) {
  try {
    await connectDB();

    const { slug } = await request.json();

    if (!slug) {
      return Response.json(
        {
          message: "Slug is required",
        },
        {
          status: 400,
        }
      );
    }

    const portfolio =
      await Portfolio.findOne({
        slug,
        isPublished: true,
      });

    if (!portfolio) {
      return Response.json(
        {
          message: "Portfolio not found",
        },
        {
          status: 404,
        }
      );
    }

    let analytics =
      await Analytics.findOne({
        portfolioId: portfolio._id,
      });

    if (!analytics) {
      analytics =
        await Analytics.create({
          portfolioId:
            portfolio._id,
        });
    }

    analytics.totalViews += 1;
    analytics.todayViews += 1;
    analytics.weeklyViews += 1;
    analytics.monthlyViews += 1;

    analytics.lastViewedAt =
      new Date();

    const today = new Date()
      .toISOString()
      .split("T")[0];

    const existing =
      analytics.viewsHistory.find(
        (item) =>
          item.date === today
      );

    if (existing) {
      existing.views += 1;
    } else {
      analytics.viewsHistory.push({
        date: today,
        views: 1,
      });
    }

    await analytics.save();

    return Response.json({
      success: true,
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