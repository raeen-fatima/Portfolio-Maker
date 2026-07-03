import mongoose from "mongoose";

const analyticsEventSchema =
  new mongoose.Schema(
    {
      portfolioId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Portfolio",
        required: true,
      },

      visitorId: {
        type: String,
        required: true,
      },

      country: {
        type: String,
        default: "Unknown",
      },

      device: {
        type: String,
        default: "Desktop",
      },

      browser: {
        type: String,
        default: "Unknown",
      },

      referrer: {
        type: String,
        default: "Direct",
      },

      visitedAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.models.AnalyticsEvent ||
mongoose.model(
  "AnalyticsEvent",
  analyticsEventSchema
);