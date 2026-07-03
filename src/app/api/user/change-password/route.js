import { cookies } from "next/headers";
import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";

import User from "@/models/User";

export async function PUT(request) {
  try {
    await connectDB();

    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = verifyToken(token);

    const {
      currentPassword,
      newPassword,
    } = await request.json();

    const user = await User.findById(decoded.id);

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

    const valid = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!valid) {
      return Response.json(
        {
          message:
            "Current password is incorrect",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword =
      await bcrypt.hash(
        newPassword,
        10
      );

    user.password = hashedPassword;

    await user.save();

    return Response.json({
      message:
        "Password updated successfully",
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