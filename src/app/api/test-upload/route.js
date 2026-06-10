// src/app/api/test-upload/route.js

import cloudinary from "@/lib/cloudinary";

export async function GET() {
  try {
    const result = await cloudinary.uploader.upload(
      "https://res.cloudinary.com/demo/image/upload/sample.jpg"
    );

    return Response.json(result);
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        success: false,
        error,
      },
      {
        status: 500,
      }
    );
  }
}