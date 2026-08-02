import mongoose from "mongoose";

export const CertificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    issuer: {
      type: String,
      required: true,
      trim: true,
    },

    issueDate: {
      type: String,
      required: true,
    },

    credentialUrl: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    _id: false,
  }
);