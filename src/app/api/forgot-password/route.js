import crypto from "crypto";

import { connectDB } from "@/lib/db";
import User from "@/models/User";
import { sendResetEmail } from "@/lib/mail";

export async function POST(request) {
  try {
    await connectDB();

    const { email } = await request.json();

    if (!email) {
      return Response.json(
        {
          success: false,
          message: "Email is required",
        },
        {
          status: 400,
        }
      );
    }

    const user = await User.findOne({ email });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const resetToken = crypto
      .randomBytes(32)
      .toString("hex");

    user.resetPasswordToken = resetToken;

    user.resetPasswordExpires =
      Date.now() + 1000 * 60 * 15;

    await user.save();

    const resetLink =
      `${process.env.NEXT_PUBLIC_APP_URL}/reset-password/${resetToken}`;

    await sendResetEmail(
      user.email,
      resetLink
    );

    return Response.json({
      success: true,
      message:
        "Password reset link sent successfully",
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

// Receive Email
//       ↓
// Find User
//       ↓
// Generate Reset Token
//       ↓
// Save Token in MongoDB
//       ↓
// Send Gmail