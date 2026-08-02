import { getCurrentUser } from "@/lib/auth/auth";
import { connectDB } from "@/lib/database/db";
import { validate } from "@/utils/validate";
import { saveHero, getHero } from "@/services/portfolio/portfolio.service";
import { heroSchema } from "@/validators/portfolio";

export async function POST(request) {
  try {
    await connectDB();

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

    const body = await request.json();

    const result = validate(heroSchema, body);

    if (!result.success) {
      return Response.json(
        {
          success: false,
          errors: result.errors,
        },
        {
          status: 400,
        },
      );
    }

    const portfolio = await saveHero(user.id, result.data);

    return Response.json(
      {
        success: true,
        message: "Hero section saved successfully",
        portfolio,
      },
      {
        status: 200,
      },
    );
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

export async function GET() {
  try {
    await connectDB();

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

    const hero = await getHero(user.id);

    return Response.json(
      {
        success: true,
        hero,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 },
    );
  }
}

// Hero Form
//    ↓
// POST /api/dashboard/portfolio/hero
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

//Add GET Route
