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
        { status: 401 },
      );
    }

    const decoded = verifyToken(token);

    const { bio, location, email, phone, github, linkedin } =
      await request.json();
    console.log({
      bio,
      location,
      email,
      phone,
      github,
      linkedin,
    });

    let portfolio = await Portfolio.findOne({
      userId: decoded.id,
    });

    if (!portfolio) {
      portfolio = await Portfolio.create({
        userId: decoded.id,
        about: {
          bio,
          location,
          email,
          phone,
          github,
          linkedin,
        },
      });
    } else {
      portfolio.about = {
        bio,
        location,
        email,
        phone,
        github,
        linkedin,
      };
      // console.log("Before Save:");
      // console.log(portfolio.about);

      await portfolio.save();
    }
    await portfolio.save();

    // console.log("After Save:");
    // console.log(portfolio.about);

    return Response.json({
      success: true,
      message: "About section saved successfully",
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

    return Response.json({
      success: true,
      about: portfolio?.about || {},
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

// About UI
// ↓
// POST API
// ↓
// MongoDB Save
// ↓
// GET API
// ↓
// Auto Fill
// ↓
// Refresh Test
// ↓
// About Complete
