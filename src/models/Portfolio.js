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
      instagram: String,
      image: String,
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
        company: {
          type: String,
          required: true,
        },

        role: {
          type: String,
          required: true,
        },

        location: {
          type: String,
          default: "",
        },

        startDate: {
          type: String,
          required: true,
        },

        endDate: {
          type: String,
          default: "",
        },

        current: {
          type: Boolean,
          default: false,
        },

        description: {
          type: String,
          default: "",
        },
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
    // certifications: [
    //   {
    //     title: {
    //       type: String,
    //       required: true,
    //     },

    //     issuer: {
    //       type: String,
    //       required: true,
    //     },

    //     issueDate: {
    //       type: String,
    //       required: true,
    //     },

    //     credentialId: {
    //       type: String,
    //       default: "",
    //     },

    //     credentialUrl: {
    //       type: String,
    //       default: "",
    //     },

    //     image: {
    //       type: String,
    //       default: "",
    //     },
    //   },
    // ],

    certifications: [
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
        },
      },
    ],
    contact: {
      email: {
        type: String,
        default: "",
      },

      phone: {
        type: String,
        default: "",
      },

      location: {
        type: String,
        default: "",
      },

      // contactFormEnabled: {
      //   type: Boolean,
      //   default: false,
      // },
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.models.Portfolio ||
  mongoose.model("Portfolio", portfolioSchema);
