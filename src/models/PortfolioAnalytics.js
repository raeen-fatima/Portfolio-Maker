import mongoose from "mongoose";

const analyticsSchema = new mongoose.Schema(
  {
    portfolioId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Portfolio",
      unique: true,
      required: true,
    },

    totalViews: {
      type: Number,
      default: 0,
    },

    uniqueVisitors: {
      type: Number,
      default: 0,
    },

    todayViews: {
      type: Number,
      default: 0,
    },

    weeklyViews: {
      type: Number,
      default: 0,
    },

    monthlyViews: {
      type: Number,
      default: 0,
    },

    resumeDownloads: {
      type: Number,
      default: 0,
    },

    contactClicks: {
      type: Number,
      default: 0,
    },

    githubClicks: {
      type: Number,
      default: 0,
    },

    linkedinClicks: {
      type: Number,
      default: 0,
    },

    viewsHistory: [
      {
        date: String,
        views: Number,
      },
    ],

    countries: [
      {
        country: String,
        views: Number,
      },
    ],

    devices: [
      {
        device: String,
        views: Number,
      },
    ],

    browsers: [
      {
        browser: String,
        views: Number,
      },
    ],

    referrers: [
      {
        source: String,
        views: Number,
      },
    ],

    lastViewedAt: Date,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Analytics ||
mongoose.model("Analytics", analyticsSchema);