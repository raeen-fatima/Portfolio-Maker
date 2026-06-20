import { cookies } from "next/headers";

import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";

import User from "@/models/User";

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

    const user = await User.findById(
      decoded.id
    ).select("-password");

    if (!user) {
      return Response.json(
        {
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    return Response.json(user);
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message:
          "Something went wrong",
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

    const body =
      await request.json();

    const {
      name,
      username,
      image,
    } = body;

    const existingUser =
      await User.findOne({
        username,
        _id: {
          $ne: decoded.id,
        },
      });

    if (existingUser) {
      return Response.json(
        {
          message:
            "Username already exists",
        },
        {
          status: 400,
        }
      );
    }

    const user =
      await User.findByIdAndUpdate(
        decoded.id,
        {
          name,
          username,
          image,
        },
        {
          new: true,
        }
      ).select("-password");

    return Response.json({
      message:
        "Profile updated successfully",

      user,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message:
          "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}