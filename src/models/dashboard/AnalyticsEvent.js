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

      eventType: {
        type: String,
        enum: [
          "view",
          "resume_download",
          "contact_click",
          "github_click",
          "linkedin_click",
          "project_click",
        ],
        default: "view",
      },

      label: {
        type: String,
        default: "",
        trim: true,
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


// import mongoose from "mongoose";

// const analyticsEventSchema = new mongoose.Schema(
//   {
//     portfolioId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Portfolio",
//       required: true,
//       index: true,
//     },

//     visitorId: {
//       type: String,
//       required: true,
//       trim: true,
//       index: true,
//     },

//     eventType: {
//       type: String,
//       enum: [
//         "view",
//         "resume_download",
//         "contact_click",
//         "github_click",
//         "linkedin_click",
//         "project_click",
//       ],
//       default: "view",
//       index: true,
//     },

//     label: {
//       type: String,
//       default: "",
//       trim: true,
//     },

//     country: {
//       type: String,
//       default: "Unknown",
//       trim: true,
//     },

//     device: {
//       type: String,
//       default: "Desktop",
//       enum: [
//         "Desktop",
//         "Mobile",
//         "Tablet",
//         "Unknown",
//       ],
//     },

//     browser: {
//       type: String,
//       default: "Unknown",
//       trim: true,
//     },

//     referrer: {
//       type: String,
//       default: "Direct",
//       trim: true,
//     },

//     visitedAt: {
//       type: Date,
//       default: Date.now,
//       index: true,
//     },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// analyticsEventSchema.index({
//   portfolioId: 1,
//   visitedAt: -1,
// });

// analyticsEventSchema.index({
//   portfolioId: 1,
//   eventType: 1,
// });

// analyticsEventSchema.index({
//   portfolioId: 1,
//   visitorId: 1,
// });

// export default mongoose.models.AnalyticsEvent ||
//   mongoose.model(
//     "AnalyticsEvent",
//     analyticsEventSchema
//   );