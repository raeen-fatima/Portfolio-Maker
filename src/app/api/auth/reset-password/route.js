import bcrypt from "bcryptjs";

import { connectDB } from "@/lib/db";
import User from "@/models/User";

export async function POST(request) {
  try {
    await connectDB();

    const { token, password } =
      await request.json();

    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpires: {
        $gt: Date.now(),
      },
    });

    if (!user) {
      return Response.json(
        {
          success: false,
          message:
            "Invalid or expired token",
        },
        {
          status: 400,
        }
      );
    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    user.password = hashedPassword;

    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;

    await user.save();

    return Response.json({
      success: true,
      message:
        "Password updated successfully",
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
      }
    );
  }
}