import cloudinary from "@/lib/cloudinary";

export async function POST(request) {
  try {
    const formData = await request.formData();

    const file = formData.get("file");

    if (!file) {
      return Response.json(
        {
          success: false,
          message: "No file uploaded",
        },
        { status: 400 }
      );
    }

    const bytes = await file.arrayBuffer();

    const buffer = Buffer.from(bytes);

    const base64 =
      `data:${file.type};base64,${buffer.toString("base64")}`;

    const result =
      await cloudinary.uploader.upload(
        base64,
        {
          folder: "folioforge",
        }
      );

    return Response.json({
      success: true,
      imageUrl: result.secure_url,
    });
  } catch (error) {
  console.log(
    "FULL ERROR:",
    JSON.stringify(error, null, 2)
  );

  return Response.json(
    {
      success: false,
      error,
    },
    {
      status: 500,
    }
  );
}}