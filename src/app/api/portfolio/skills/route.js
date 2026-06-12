import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";
import { cookies } from "next/headers";

export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    const decoded = verifyToken(token);

    const portfolio = await Portfolio.findOne({
      userId: decoded.id,
    });

    skills: portfolio?.skills?.sort((a, b) => a.name.localeCompare(b.name)) ||
      [];

    return Response.json({
      success: true,
      skills: portfolio?.skills || [],
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
export async function POST(request) {
  try {
    await connectDB();

    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
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

    const decoded = verifyToken(token);

    const { name } = await request.json();

    console.log("Skill Received:", name);

    const portfolio = await Portfolio.findOne({
      userId: decoded.id,
    });

    // Portfolio Check
    if (!portfolio) {
      return Response.json(
        {
          success: false,
          message: "Portfolio not found",
        },
        {
          status: 404,
        },
      );
    }

    // Duplicate Check
    const exists = portfolio.skills.some(
      (skill) => skill.name.trim().toLowerCase() === name.trim().toLowerCase(),
    );

    if (exists) {
      return Response.json(
        {
          success: false,
          message: "Skill already exists",
        },
        {
          status: 400,
        },
      );
    }

    // Add Skill
    portfolio.skills.push({
      name: name.trim(),
    });

    await portfolio.save();

    console.log("Updated Skills:", portfolio.skills);

    return Response.json({
      success: true,
      message: "Skill added successfully",
      skill: {
        name: name.trim(),
      },
    });
  } catch (error) {
    console.log(error);

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
export async function DELETE(request) {
  try {
    await connectDB();

    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 },
      );
    }

    const decoded = verifyToken(token);

    const { skillId } = await request.json();
    console.log("Skill ID to delete:", skillId);
    const portfolio = await Portfolio.findOne({
      userId: decoded.id,
    });

    portfolio.skills = portfolio.skills.filter(
      (skill) => skill._id.toString() !== skillId,
    );

    await portfolio.save();

    return Response.json({
      success: true,
      message: "Skill deleted successfully",
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
