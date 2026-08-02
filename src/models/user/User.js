import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    username: {
      type: String,
      unique: true,
      sparse: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },

    image: {
      type: String,
      default: "",
    },

    resetPasswordToken: {
      type: String,
    },

    resetPasswordExpires: {
      type: Date,
    },
  },
  {
    timestamps: true,
  },
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

export default User;

// User Model
//       ↓
// Create User API
//       ↓
// Save User in MongoDB

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//       trim: true,
//     },

//     username: {
//       type: String,
//       unique: true,
//       sparse: true,
//       trim: true,
//       lowercase: true,
//       default: "",
//     },

//     email: {
//       type: String,
//       required: true,
//       unique: true,
//       lowercase: true,
//       trim: true,
//       index: true,
//     },

//     password: {
//       type: String,
//       required: true,
//       select: false,
//     },

//     role: {
//       type: String,
//       enum: ["USER", "ADMIN"],
//       default: "USER",
//     },

//     image: {
//       type: String,
//       default: "",
//       trim: true,
//     },

//     resetPasswordToken: {
//       type: String,
//       default: "",
//       select: false,
//     },

//     resetPasswordExpires: {
//       type: Date,
//       default: null,
//       select: false,
//     },
//   },
//   {
//     timestamps: true,
//     versionKey: false,
//   }
// );

// export default mongoose.models.User ||
//   mongoose.model("User", userSchema);
