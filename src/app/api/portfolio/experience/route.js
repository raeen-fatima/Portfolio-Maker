import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";
import mongoose from "mongoose";

export async function POST(
  request
) {
  try {
    await connectDB();

    const cookieStore =
      await cookies();

    const token =
      cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const decoded =
      verifyToken(token);

    const {
      company,
      role,
      location,
      startDate,
      endDate,
      current,
      description,
    } = await request.json();

    const portfolio =
      await Portfolio.findOne({
        userId: decoded.id,
      });

    if (!portfolio) {
      return Response.json(
        {
          success: false,
          message:
            "Portfolio not found",
        },
        { status: 404 }
      );
    }

    portfolio.experience.push({
      company,
      role,
      location,
      startDate,
      endDate,
      current,
      description,
    });

    await portfolio.save();

    return Response.json({
      success: true,
      message:
        "Experience added successfully",
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

export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        {
          success: false,
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

    return Response.json({
      success: true,
      experience:
        portfolio?.experience || [],
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

export async function DELETE(request) {
  try {
    await connectDB();

    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const decoded =
      verifyToken(token);

    const { experienceId } =
      await request.json();

    const portfolio =
      await Portfolio.findOne({
        userId: decoded.id,
      });

    if (!portfolio) {
      return Response.json(
        {
          success: false,
          message:
            "Portfolio not found",
        },
        { status: 404 }
      );
    }

    portfolio.experience =
      portfolio.experience.filter(
        (item) =>
          item._id.toString() !==
          experienceId
      );

    await portfolio.save();

    return Response.json({
      success: true,
      message:
        "Experience deleted successfully",
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

    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        {
          success: false,
          message: "Unauthorized",
        },
        { status: 401 }
      );
    }

    const decoded =
      verifyToken(token);

    const {
      experienceId,
      company,
      role,
      location,
      startDate,
      endDate,
      current,
      description,
    } = await request.json();

    const portfolio =
      await Portfolio.findOne({
        userId: decoded.id,
      });

    if (!portfolio) {
      return Response.json(
        {
          success: false,
          message:
            "Portfolio not found",
        },
        { status: 404 }
      );
    }

    const experience =
      portfolio.experience.id(
        experienceId
      );

    if (!experience) {
      return Response.json(
        {
          success: false,
          message:
            "Experience not found",
        },
        { status: 404 }
      );
    }

    experience.company = company;
    experience.role = role;
    experience.location = location;
    experience.startDate = startDate;
    experience.endDate = current
      ? ""
      : endDate;
    experience.current = current;
    experience.description =
      description;

    await portfolio.save();

    return Response.json({
      success: true,
      message:
        "Experience updated successfully",
      experience,
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
