import mongoose from "mongoose";

const portfolioSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
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
    },
    slug: {
      type: String,
      unique: true,
    },

    selectedTemplate: {
      type: String,
      default: "",
    },

    isPublished: {
      type: Boolean,
      default: false,
    },
    views: {
      type: Number,
      default: 0,
    },
  },

  {
    timestamps: true,
  },
);

export default mongoose.models.Portfolio ||
  mongoose.model("Portfolio", portfolioSchema);


// import mongoose from "mongoose";

// import { HeroSchema } from "./schemas/hero.schema";
// import { AboutSchema } from "./schemas/about.schema";
// import { SkillSchema } from "./schemas/skill.schema";
// import { ProjectSchema } from "./schemas/project.schema";
// import { ExperienceSchema } from "./schemas/experience.schema";
// import { EducationSchema } from "./schemas/education.schema";
// import { CertificationSchema } from "./schemas/certification.schema";
// import { ContactSchema } from "./schemas/contact.schema";

// const portfolioSchema = new mongoose.Schema(
//   {
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "User",
//       required: true,
//       index: true,
//     },

//     hero: {
//       type: HeroSchema,
//       default: () => ({}),
//     },

//     about: {
//       type: AboutSchema,
//       default: () => ({}),
//     },

//     skills: {
//       type: [SkillSchema],
//       default: [],
//     },

//     projects: {
//       type: [ProjectSchema],
//       default: [],
//     },

//     experience: {
//       type: [ExperienceSchema],
//       default: [],
//     },

//     education: {
//       type: [EducationSchema],
//       default: [],
//     },

//     certifications: {
//       type: [CertificationSchema],
//       default: [],
//     },

//     contact: {
//       type: ContactSchema,
//       default: () => ({}),
//     },

//     slug: {
//       type: String,
//       unique: true,
//       sparse: true,
//       trim: true,
//       lowercase: true,
//     },

//     selectedTemplate: {
//       type: String,
//       default: "nova",
//       trim: true,
//     },

//     isPublished: {
//       type: Boolean,
//       default: false,
//     },

//     views: {
//       type: Number,
//       default: 0,
//       min: 0,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.models.Portfolio ||
//   mongoose.model("Portfolio", portfolioSchema);