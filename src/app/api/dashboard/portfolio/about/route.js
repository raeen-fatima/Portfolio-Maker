import { connectDB } from "@/lib/database/db";
import { getCurrentUser } from "@/lib/auth/auth";
import { saveAbout, getAbout } from "@/services/portfolio/portfolio.service";

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

    const {
      bio,
      location,
      email,
      phone,
      github,
      linkedin,
      instagram,
      image,
    } = await request.json();

    await saveAbout(user.id, {
      bio,
      location,
      email,
      phone,
      github,
      linkedin,
      instagram,
      image,
    });

    return Response.json({
      success: true,
      message: "About section saved successfully",
    });
  } catch (error) {
    console.error("Save About Error:", error);

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

    const about = await getAbout(user.id);

    return Response.json({
      success: true,
      about,
    });
  } catch (error) {
    console.error("Get About Error:", error);

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