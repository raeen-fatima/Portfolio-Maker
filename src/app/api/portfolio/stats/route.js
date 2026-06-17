import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";

export async function GET() {
  try {
    await connectDB();

    const cookieStore =
      await cookies();

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

    return Response.json({
      success: true,
      views:
        portfolio?.views || 0,
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