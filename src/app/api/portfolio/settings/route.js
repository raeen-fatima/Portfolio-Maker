import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";
import User from "@/models/User";

function normalizeSlug(slug) {
  return slug
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

async function getLoggedInUser() {
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
  const user = await User.findById(
    decoded.id
  ).select("name email image");

  if (!user) {
    return {
      error: Response.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 }
      ),
    };
  }

  return { user };
}

export async function GET() {
  try {
    await connectDB();

    const { user, error } =
      await getLoggedInUser();

    if (error) return error;

    let portfolio =
      await Portfolio.findOne({
        userId: user._id,
      });

    if (!portfolio) {
      portfolio =
        await Portfolio.create({
          userId: user._id,
          template: "template-1",
          isPublished: false,
        });
    }

    return Response.json({
      success: true,
      user: {
        name: user.name,
        email: user.email,
        image: user.image,
      },
      settings: {
        slug: portfolio.slug || "",
        template:
          portfolio.template ||
          "template-1",
        isPublished:
          portfolio.isPublished,
      },
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

    const { user, error } =
      await getLoggedInUser();

    if (error) return error;

    const { slug, isPublished } =
      await request.json();

    const normalizedSlug =
      normalizeSlug(slug || "");

    if (
      normalizedSlug.length < 3 ||
      normalizedSlug.length > 40
    ) {
      return Response.json(
        {
          success: false,
          message:
            "Slug must be between 3 and 40 characters",
        },
        { status: 400 }
      );
    }

    const existingPortfolio =
      await Portfolio.findOne({
        slug: normalizedSlug,
        userId: { $ne: user._id },
      });

    if (existingPortfolio) {
      return Response.json(
        {
          success: false,
          message:
            "This portfolio URL is already taken",
        },
        { status: 400 }
      );
    }

    let portfolio =
      await Portfolio.findOne({
        userId: user._id,
      });

    if (!portfolio) {
      portfolio =
        await Portfolio.create({
          userId: user._id,
        });
    }

    portfolio.slug = normalizedSlug;
    portfolio.isPublished =
      Boolean(isPublished);

    await portfolio.save();

    return Response.json({
      success: true,
      message:
        "Settings saved successfully",
      settings: {
        slug: portfolio.slug,
        template:
          portfolio.template ||
          "template-1",
        isPublished:
          portfolio.isPublished,
      },
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
