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
        { status: 401 }
      );
    }

    const decoded =
      verifyToken(token);

    const portfolio =
      await Portfolio.findOne({
        userId: decoded.id,
      });

    if (!portfolio) {
      return Response.json({
        success: true,
        stats: {
          projects: 0,
          skills: 0,
          experience: 0,
          education: 0,
          completion: 0,
        },
      });
    }

    const sections = [
      portfolio.hero?.name,
      portfolio.about?.bio,
      portfolio.skills?.length > 0,
      portfolio.projects?.length > 0,
      portfolio.experience?.length > 0,
      portfolio.education?.length > 0,
      portfolio.certifications?.length > 0,
      portfolio.contact?.email,
    ];

    const completed =
      sections.filter(Boolean).length;

    const completion =
      Math.round(
        (completed / sections.length) *
          100
      );

    return Response.json({
      success: true,
      stats: {
        projects:
          portfolio.projects?.length || 0,
        skills:
          portfolio.skills?.length || 0,
        experience:
          portfolio.experience?.length ||
          0,
        education:
          portfolio.education?.length || 0,
        completion,
      },
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message:
          "Something went wrong",
      },
      { status: 500 }
    );
  }
}