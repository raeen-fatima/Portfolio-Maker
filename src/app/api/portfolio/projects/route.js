import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";

export async function POST(request) {
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
      title,
      description,
      image,
      githubUrl,
      liveUrl,
      technologies,
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

    portfolio.projects.push({
      title,
      description,
      image,
      githubUrl,
      liveUrl,
      technologies,
    });

    await portfolio.save();

    return Response.json({
      success: true,
      message:
        "Project added successfully",
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
      projects:
        portfolio?.projects || [],
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

    const { projectId } =
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

    portfolio.projects =
      portfolio.projects.filter(
        (project) =>
          project._id.toString() !==
          projectId
      );

    await portfolio.save();

    return Response.json({
      success: true,
      message:
        "Project deleted successfully",
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
        {
          status: 401,
        }
      );
    }

    const decoded =
      verifyToken(token);

    const {
      projectId,
      title,
      description,
      image,
      githubUrl,
      liveUrl,
      technologies,
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
        {
          status: 404,
        }
      );
    }

    const project =
      portfolio.projects.id(projectId);

    if (!project) {
      return Response.json(
        {
          success: false,
          message:
            "Project not found",
        },
        {
          status: 404,
        }
      );
    }

    project.title = title;
    project.description =
      description;
    project.image = image;
    project.githubUrl =
      githubUrl;
    project.liveUrl = liveUrl;
    project.technologies =
      technologies;

    await portfolio.save();

    return Response.json({
      success: true,
      message:
        "Project updated successfully",
      project,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message:
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}