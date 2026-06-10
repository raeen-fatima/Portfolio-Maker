import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";

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

    const { name, title, tagline, resumeUrl, image } = await request.json();

    let portfolio = await Portfolio.findOne({
      userId: decoded.id,
    });

    if (!portfolio) {
      portfolio = await Portfolio.create({
        userId: decoded.id,
        hero: {
          name,
          title,
          tagline,
          resumeUrl,
          image,
        },
      });
    } else {
      portfolio.hero = {
        name,
        title,
        tagline,
        resumeUrl,
        image,
      };

      await portfolio.save();
    }

    return Response.json({
      success: true,
      message: "Hero section saved successfully",
      portfolio,
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

// Hero Form
//    ↓
// POST /api/portfolio/hero
//    ↓
// Find Logged-in User
//    ↓
// Find/Create Portfolio
//    ↓
// Save Hero Data
//    ↓
// Success Response

// Get Token
//      ↓
// Verify Token
//      ↓
// Get User ID
//      ↓
// Find Portfolio
//      ↓
// Update Hero Section
//      ↓
// Save
