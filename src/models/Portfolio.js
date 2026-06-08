import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    slug: {
      type: String,
      unique: true,
    },

    template: {
      type: String,
      default: "template-1",
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    hero: {
      heading: String,
      subHeading: String,
      profileImage: String,
      resumeUrl: String,
    },

    about: {
      bio: String,
      location: String,
    },

    skills: [
      {
        name: String,
      },
    ],

    projects: [
      {
        title: String,
        description: String,
        image: String,
        githubUrl: String,
        liveUrl: String,
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Portfolio ||
  mongoose.model("Portfolio", portfolioSchema);