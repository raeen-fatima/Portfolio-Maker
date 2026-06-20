import { cookies } from "next/headers";

import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";

import Portfolio from "@/models/Portfolio";

export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        {
          message: "Unauthorized",
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

    // Empty State
    if (!portfolio) {
      return Response.json({
        portfolioName:
          "Untitled Portfolio",

        selectedTemplate: null,

        slug: null,

        isPublished: false,

        views: 0,

        completion: 0,

        score: 0,

        nextStep:
          "/dashboard/portfolio/hero",

        sections: {
          hero: false,
          about: false,
          skills: false,
          projects: false,
          experience: false,
          education: false,
          certifications: false,
          templates: false,
          publish: false,
        },

        stats: {
          projects: 0,
          skills: 0,
          experience: 0,
          education: 0,
          certifications: 0,
        },

        insights: [
          "Start by creating your Hero section.",
        ],
      });
    }

    const sections = {
      hero: !!portfolio.hero?.name,

      about: !!portfolio.about?.bio,

      skills:
        portfolio.skills?.length > 0,

      projects:
        portfolio.projects?.length > 0,

      experience:
        portfolio.experience?.length >
        0,

      education:
        portfolio.education?.length >
        0,

      certifications:
        portfolio.certifications
          ?.length > 0,

      templates:
        !!portfolio.selectedTemplate,

      publish:
        portfolio.isPublished,
    };

    const completedSections =
      Object.values(sections).filter(
        Boolean
      ).length;

    const completion = Math.round(
      (completedSections /
        Object.keys(sections).length) *
        100
    );

    let score = 0;

    if (sections.hero) score += 10;

    if (sections.about) score += 10;

    if (sections.skills) score += 10;

    if (sections.projects) score += 20;

    if (sections.experience)
      score += 15;

    if (sections.education)
      score += 10;

    if (sections.certifications)
      score += 10;

    if (sections.templates)
      score += 5;

    if (sections.publish)
      score += 10;

    let nextStep =
      "/dashboard/portfolio/hero";

    if (!sections.hero) {
      nextStep =
        "/dashboard/portfolio/hero";
    } else if (!sections.about) {
      nextStep =
        "/dashboard/portfolio/about";
    } else if (!sections.skills) {
      nextStep =
        "/dashboard/portfolio/skills";
    } else if (!sections.projects) {
      nextStep =
        "/dashboard/portfolio/projects";
    } else if (
      !sections.experience
    ) {
      nextStep =
        "/dashboard/portfolio/experience";
    } else if (
      !sections.education
    ) {
      nextStep =
        "/dashboard/portfolio/education";
    } else if (
      !sections.certifications
    ) {
      nextStep =
        "/dashboard/portfolio/certifications";
    } else if (
      !sections.templates
    ) {
      nextStep =
        "/dashboard/templates";
    } else if (
      !sections.publish
    ) {
      nextStep =
        "/dashboard/portfolio/publish";
    }

    const insights = [];

    if (!sections.hero) {
      insights.push(
        "Complete your Hero section."
      );
    }

    if (!sections.projects) {
      insights.push(
        "Add projects to showcase your work."
      );
    }

    if (!sections.experience) {
      insights.push(
        "Add experience to improve credibility."
      );
    }

    if (!sections.education) {
      insights.push(
        "Add education details."
      );
    }

    if (!sections.certifications) {
      insights.push(
        "Add certifications to stand out."
      );
    }

    if (!sections.publish) {
      insights.push(
        "Publish your portfolio when ready."
      );
    }

    return Response.json({
      portfolioName:
        portfolio.hero?.name ||
        "Untitled Portfolio",

      selectedTemplate:
        portfolio.selectedTemplate,

      slug: portfolio.slug,

      isPublished:
        portfolio.isPublished,

      views:
        portfolio.views || 0,

      completion,

      score,

      nextStep,

      sections,

      stats: {
        projects:
          portfolio.projects?.length ||
          0,

        skills:
          portfolio.skills?.length ||
          0,

        experience:
          portfolio.experience
            ?.length || 0,

        education:
          portfolio.education
            ?.length || 0,

        certifications:
          portfolio.certifications
            ?.length || 0,
      },

      insights,
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