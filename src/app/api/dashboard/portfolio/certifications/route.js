// import { cookies } from "next/headers";
// import { connectDB } from "@/lib/database/db";
// import { verifyToken } from "@/lib/auth/jwt";
// import Portfolio from "@/models/portfolio/Portfolio";

// export async function POST(request) {
//   try {
//     await connectDB();

//     const cookieStore = await cookies();

//     const token =
//       cookieStore.get("token")?.value;

//     if (!token) {
//       return Response.json(
//         {
//           message: "Unauthorized",
//         },
//         {
//           status: 401,
//         }
//       );
//     }

//     const decoded =
//       verifyToken(token);

//     const {
//       title,
//       issuer,
//       issueDate,
//       credentialUrl,
//     } = await request.json();

//     const portfolio =
//       await Portfolio.findOne({
//         user: decoded.userId,
//       });

//     if (!portfolio) {
//       return Response.json(
//         {
//           message: "Portfolio not found",
//         },
//         {
//           status: 404,
//         }
//       );
//     }

//     portfolio.certifications.push({
//       title,
//       issuer,
//       issueDate,
//       credentialUrl,
//     });

//     await portfolio.save();

//     return Response.json({
//       success: true,
//       message:
//         "Certification added successfully",
//     });
//   } catch (error) {
//     console.log(error);

//     return Response.json(
//       {
//         message: "Server Error",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

// export async function GET() {
//   try {
//     await connectDB();

//     const cookieStore = await cookies();

//     const token =
//       cookieStore.get("token")?.value;

//     if (!token) {
//       return Response.json(
//         {
//           message: "Unauthorized",
//         },
//         {
//           status: 401,
//         }
//       );
//     }

//     const decoded =
//       verifyToken(token);

//     const portfolio =
//       await Portfolio.findOne({
//         user: decoded.userId,
//       });

//     if (!portfolio) {
//       return Response.json(
//         {
//           certifications: [],
//         },
//         {
//           status: 200,
//         }
//       );
//     }

//     return Response.json({
//       certifications:
//         portfolio.certifications || [],
//     });
//   } catch (error) {
//     console.log(error);

//     return Response.json(
//       {
//         message: "Server Error",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }

// export async function PUT(request) {
//   try {
//     await connectDB();

//     const cookieStore = await cookies();

//     const token =
//       cookieStore.get("token")?.value;

//     if (!token) {
//       return Response.json(
//         { message: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const decoded =
//       verifyToken(token);

//     const {
//       certificationId,
//       title,
//       issuer,
//       issueDate,
//       credentialUrl,
//     } = await request.json();

//     const portfolio =
//       await Portfolio.findOne({
//         user: decoded.userId,
//       });

//     if (!portfolio) {
//       return Response.json(
//         {
//           message: "Portfolio not found",
//         },
//         {
//           status: 404,
//         }
//       );
//     }

//     const certification =
//       portfolio.certifications.id(
//         certificationId
//       );

//     if (!certification) {
//       return Response.json(
//         {
//           message:
//             "Certification not found",
//         },
//         {
//           status: 404,
//         }
//       );
//     }

//     certification.title = title;
//     certification.issuer = issuer;
//     certification.issueDate =
//       issueDate;
//     certification.credentialUrl =
//       credentialUrl;

//     await portfolio.save();

//     return Response.json({
//       success: true,
//       message:
//         "Certification updated successfully",
//     });
//   } catch (error) {
//     console.log(error);

//     return Response.json(
//       {
//         message: "Server Error",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
// export async function DELETE(request) {
//   try {
//     await connectDB();

//     const cookieStore = await cookies();

//     const token =
//       cookieStore.get("token")?.value;

//     if (!token) {
//       return Response.json(
//         { message: "Unauthorized" },
//         { status: 401 }
//       );
//     }

//     const decoded =
//       verifyToken(token);

//     const { certificationId } =
//       await request.json();

//     const portfolio =
//       await Portfolio.findOne({
//         user: decoded.userId,
//       });

//     if (!portfolio) {
//       return Response.json(
//         {
//           message: "Portfolio not found",
//         },
//         {
//           status: 404,
//         }
//       );
//     }

//     portfolio.certifications.pull(
//       certificationId
//     );

//     await portfolio.save();

//     return Response.json({
//       success: true,
//       message:
//         "Certification deleted successfully",
//     });
//   } catch (error) {
//     console.log(error);

//     return Response.json(
//       {
//         message: "Server Error",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }


import { connectDB } from "@/lib/database/db";
import { getCurrentUser } from "@/lib/auth/auth";

import {
  getCertifications,
  saveCertification,
  updateCertification,
  deleteCertification,
} from "@/services/portfolio/portfolio.service";
// "@/services/portfolio/certification.service"; for separate file, but we can use the same service file for all portfolio related services

export async function GET() {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const certifications = await getCertifications(user.id);

    return Response.json({
      success: true,
      certifications,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

export async function POST(request) {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const body = await request.json();

    const certification = await saveCertification(user.id, body);

    return Response.json({
      success: true,
      message: "Certification added successfully",
      certification,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

export async function PUT(request) {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const body = await request.json();

    const certification = await updateCertification(user.id, body);

    return Response.json({
      success: true,
      message: "Certification updated successfully",
      certification,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

export async function DELETE(request) {
  try {
    await connectDB();

    const user = await getCurrentUser();

    const { certificationId } = await request.json();

    await deleteCertification(user.id, certificationId);

    return Response.json({
      success: true,
      message: "Certification deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
