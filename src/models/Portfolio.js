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
      name: String,
      title: String,
      tagline: String,
      resumeUrl: String,
      image: String,
    },

    about: {
      bio: String,
      location: String,
      email: String,
      phone: String,
      github: String,
      linkedin: String,
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
        technologies: [String],
      },
    ],
    experience: [
      {
        company: String,
        role: String,
        startDate: String,
        endDate: String,
        description: String,
      },
    ],

    education: [
      {
        institution: String,
        degree: String,
        startYear: String,
        endYear: String,
      },
    ],
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Portfolio ||
  mongoose.model("Portfolio", portfolioSchema);
