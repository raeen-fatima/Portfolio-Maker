import mongoose from "mongoose";

export const SkillSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);