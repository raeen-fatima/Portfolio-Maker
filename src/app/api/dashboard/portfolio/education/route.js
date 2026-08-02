// import { cookies } from "next/headers";
// import { connectDB } from "@/lib/database/db";
// import { verifyToken } from "@/lib/auth/jwt";
// import Portfolio from "@/models/portfolio/Portfolio";

// async function getUserPortfolio() {
//   const cookieStore = await cookies();

//   const token =
//     cookieStore.get("token")?.value;

//   if (!token) {
//     return {
//       error: Response.json(
//         {
//           success: false,
//           message: "Unauthorized",
//         },
//         { status: 401 }
//       ),
//     };
//   }

//   const decoded = verifyToken(token);

//   const portfolio =
//     await Portfolio.findOne({
//       userId: decoded.id,
//     });

//   if (!portfolio) {
//     return {
//       error: Response.json(
//         {
//           success: false,
//           message:
//             "Portfolio not found",
//         },
//         { status: 404 }
//       ),
//     };
//   }

//   return { portfolio };
// }

// export async function GET() {
//   try {
//     await connectDB();

//     const { portfolio, error } =
//       await getUserPortfolio();

//     if (error) return error;

//     return Response.json({
//       success: true,
//       education:
//         portfolio.education || [],
//     });
//   } catch (error) {
//     console.log(error);

//     return Response.json(
//       {
//         success: false,
//         message:
//           "Something went wrong",
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function POST(request) {
//   try {
//     await connectDB();

//     const { portfolio, error } =
//       await getUserPortfolio();

//     if (error) return error;

//     const {
//       institution,
//       degree,
//       startYear,
//       endYear,
//     } = await request.json();

//     portfolio.education.push({
//       institution,
//       degree,
//       startYear,
//       endYear,
//     });

//     await portfolio.save();

//     return Response.json({
//       success: true,
//       message:
//         "Education added successfully",
//     });
//   } catch (error) {
//     console.log(error);

//     return Response.json(
//       {
//         success: false,
//         message:
//           "Something went wrong",
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function PUT(request) {
//   try {
//     await connectDB();

//     const { portfolio, error } =
//       await getUserPortfolio();

//     if (error) return error;

//     const {
//       educationId,
//       institution,
//       degree,
//       startYear,
//       endYear,
//     } = await request.json();

//     const education =
//       portfolio.education.id(
//         educationId
//       );

//     if (!education) {
//       return Response.json(
//         {
//           success: false,
//           message:
//             "Education not found",
//         },
//         { status: 404 }
//       );
//     }

//     education.institution =
//       institution;
//     education.degree = degree;
//     education.startYear =
//       startYear;
//     education.endYear = endYear;

//     await portfolio.save();

//     return Response.json({
//       success: true,
//       message:
//         "Education updated successfully",
//       education,
//     });
//   } catch (error) {
//     console.log(error);

//     return Response.json(
//       {
//         success: false,
//         message:
//           "Something went wrong",
//       },
//       { status: 500 }
//     );
//   }
// }

// export async function DELETE(request) {
//   try {
//     await connectDB();

//     const { portfolio, error } =
//       await getUserPortfolio();

//     if (error) return error;

//     const { educationId } =
//       await request.json();

//     portfolio.education =
//       portfolio.education.filter(
//         (item) =>
//           item._id.toString() !==
//           educationId
//       );

//     await portfolio.save();

//     return Response.json({
//       success: true,
//       message:
//         "Education deleted successfully",
//     });
//   } catch (error) {
//     console.log(error);

//     return Response.json(
//       {
//         success: false,
//         message:
//           "Something went wrong",
//       },
//       { status: 500 }
//     );
//   }
// }


import { connectDB } from "@/lib/database/db";
import { getCurrentUser } from "@/lib/auth/auth";

import {
  getEducation,
  saveEducation,
  updateEducation,
  deleteEducation,
} from "@/services/portfolio/portfolio.service";



export async function GET() {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const education =
      await getEducation(user.id);

    return Response.json({
      success: true,
      education,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const body =
      await request.json();

    const education =
      await saveEducation(
        user.id,
        body
      );

    return Response.json({
      success: true,
      message:
        "Education added successfully",
      education,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}


export async function PUT(request) {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const body =
      await request.json();

    const education =
      await updateEducation(
        user.id,
        body
      );

    return Response.json({
      success: true,
      message:
        "Education updated successfully",
      education,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const { educationId } =
      await request.json();

    await deleteEducation(
      user.id,
      educationId
    );

    return Response.json({
      success: true,
      message:
        "Education deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      { status: 500 }
    );
  }
}