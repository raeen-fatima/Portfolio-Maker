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
      title,
      issuer,
      issueDate,
      credentialUrl,
    } = await request.json();

    const portfolio =
      await Portfolio.findOne({
        user: decoded.userId,
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

    portfolio.certifications.push({
      title,
      issuer,
      issueDate,
      credentialUrl,
    });

    await portfolio.save();

    return Response.json({
      success: true,
      message:
        "Certification added successfully",
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message: "Server Error",
      },
      {
        status: 500,
      }
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
        user: decoded.userId,
      });

    if (!portfolio) {
      return Response.json(
        {
          certifications: [],
        },
        {
          status: 200,
        }
      );
    }

    return Response.json({
      certifications:
        portfolio.certifications || [],
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message: "Server Error",
      },
      {
        status: 500,
      }
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
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded =
      verifyToken(token);

    const {
      certificationId,
      title,
      issuer,
      issueDate,
      credentialUrl,
    } = await request.json();

    const portfolio =
      await Portfolio.findOne({
        user: decoded.userId,
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

    const certification =
      portfolio.certifications.id(
        certificationId
      );

    if (!certification) {
      return Response.json(
        {
          message:
            "Certification not found",
        },
        {
          status: 404,
        }
      );
    }

    certification.title = title;
    certification.issuer = issuer;
    certification.issueDate =
      issueDate;
    certification.credentialUrl =
      credentialUrl;

    await portfolio.save();

    return Response.json({
      success: true,
      message:
        "Certification updated successfully",
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message: "Server Error",
      },
      {
        status: 500,
      }
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
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded =
      verifyToken(token);

    const { certificationId } =
      await request.json();

    const portfolio =
      await Portfolio.findOne({
        user: decoded.userId,
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

    portfolio.certifications.pull(
      certificationId
    );

    await portfolio.save();

    return Response.json({
      success: true,
      message:
        "Certification deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message: "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}