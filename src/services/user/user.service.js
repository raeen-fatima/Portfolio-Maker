import bcrypt from "bcryptjs";
import { randomBytes } from "crypto";

import User from "@/models/user/User";

import { sendResetEmail } from "@/lib/email/mail";

// ===============================
// Auth Helpers
// ===============================

export async function findUserByEmail(email) {
  return await User.findOne({ email });
}

export async function findUserByUsername(username) {
  return await User.findOne({ username });
}

export async function findUserByResetToken(token) {
  return await User.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: {
      $gt: Date.now(),
    },
  });
}

// ===============================
// Authentication
// ===============================

export async function loginUser(
  email,
  password,
) {
  const user = await findUserByEmail(email);

  if (!user) {
    throw new Error(
      "Invalid email or password",
    );
  }

  const isPasswordCorrect =
    await bcrypt.compare(
      password,
      user.password,
    );

  if (!isPasswordCorrect) {
    throw new Error(
      "Invalid email or password",
    );
  }

  return user;
}

export async function registerUser(data) {
  const {
    name,
    username,
    email,
    image,
    password,
  } = data;

  const existingUser =
    await findUserByEmail(email);

  if (existingUser) {
    throw new Error(
      "User already exists",
    );
  }

  if (username) {
    const existingUsername =
      await findUserByUsername(
        username,
      );

    if (existingUsername) {
      throw new Error(
        "Username already exists",
      );
    }
  }

  const hashedPassword =
    await bcrypt.hash(
      password,
      10,
    );

  await User.create({
    name,
    username,
    email,
    image,
    password: hashedPassword,
  });
}

export async function forgotPassword(
  email,
) {
  const user =
    await findUserByEmail(email);

  // Prevent User Enumeration
  if (!user) {
    return;
  }

  const resetToken =
    randomBytes(32).toString("hex");

  user.resetPasswordToken =
    resetToken;

  user.resetPasswordExpires =
    Date.now() +
    15 * 60 * 1000;

  await user.save();

  const resetLink = `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password/${resetToken}`;

  await sendResetEmail(
    user.email,
    resetLink,
  );
}

export async function resetPassword(
  token,
  password,
) {
  const user =
    await findUserByResetToken(token);

  if (!user) {
    throw new Error(
      "Invalid or expired token",
    );
  }

  user.password =
    await bcrypt.hash(
      password,
      10,
    );

  user.resetPasswordToken =
    undefined;

  user.resetPasswordExpires =
    undefined;

  await user.save();
}

// ===============================
// Profile
// ===============================

export async function getProfile(
  userId,
) {
  const user = await User.findById(
    userId,
  ).select(
    "name username email image createdAt",
  );

  if (!user) {
    throw new Error("User not found");
  }

  return user;
}

export async function updateProfile(
  userId,
  name,
  username,
  image,
) {
  const trimmedName =
    name?.trim();

  const trimmedUsername =
    username?.trim();

  if (!trimmedName) {
    throw new Error(
      "Name is required",
    );
  }

  if (!trimmedUsername) {
    throw new Error(
      "Username is required",
    );
  }

  const user = await User.findById(
    userId,
  );

  if (!user) {
    throw new Error("User not found");
  }

  if (
    user.username?.toLowerCase() !==
    trimmedUsername.toLowerCase()
  ) {
    const existingUser =
      await User.findOne({
        username: trimmedUsername,
        _id: {
          $ne: userId,
        },
      });

    if (existingUser) {
      throw new Error(
        "Username already exists",
      );
    }
  }

  user.name = trimmedName;
  user.username = trimmedUsername;
  user.image = image;

  await user.save();

  return user;
}

export async function updatePassword(
  userId,
  currentPassword,
  newPassword,
) {
  const user = await User.findById(
    userId,
  );

  if (!user) {
    throw new Error("User not found");
  }

  const valid =
    await bcrypt.compare(
      currentPassword,
      user.password,
    );

  if (!valid) {
    throw new Error(
      "Current password is incorrect",
    );
  }

  user.password =
    await bcrypt.hash(
      newPassword,
      10,
    );

  await user.save();
}