import { connectDB } from "@/lib/database/db";

import { getCurrentUser } from "@/lib/auth/auth";

import {
  findPortfolioByUserId,
  getEmptyOverview,
} from "@/services/dashboard/dashboard.service";

import { getPortfolioProgress } from "@/services/portfolio/portfolio.progress";
import { getPortfolioInsights } from "@/services/portfolio/portfolio.insights";

export async function GET() {
  try {
    // Connect Database
    await connectDB();

    // Get Current User
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

    // Get Portfolio
    const portfolio = await findPortfolioByUserId(user.id);

    // Empty State
    if (!portfolio) {
      return Response.json(getEmptyOverview());
    }

    // Portfolio Progress
    const { sections, completion, score, nextStep } =
      getPortfolioProgress(portfolio);

    // Portfolio Insights
    const insights = getPortfolioInsights(sections);

    // Response
    return Response.json({
      portfolioName: portfolio.hero?.name || "Untitled Portfolio",

      selectedTemplate: portfolio.selectedTemplate,

      slug: portfolio.slug,

      isPublished: portfolio.isPublished,

      views: portfolio.views || 0,

      completion,

      score,

      nextStep,

      sections,

      stats: {
        projects: portfolio.projects?.length || 0,

        skills: portfolio.skills?.length || 0,

        experience: portfolio.experience?.length || 0,

        education: portfolio.education?.length || 0,

        certifications: portfolio.certifications?.length || 0,
      },

      insights,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      {
        status: 500,
      },
    );
  }
}
