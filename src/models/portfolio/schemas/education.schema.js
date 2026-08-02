import mongoose from "mongoose";

export const EducationSchema = new mongoose.Schema(
  {
    institution: {
      type: String,
      required: true,
      trim: true,
    },

    degree: {
      type: String,
      required: true,
      trim: true,
    },

    startYear: {
      type: String,
      default: "",
    },

    endYear: {
      type: String,
      default: "",
    },
  },
  // {
  //   _id: false,
  // }
);