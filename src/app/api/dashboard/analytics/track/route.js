import { headers } from "next/headers";

import { connectDB } from "@/lib/database/db";

import { trackAnalytics } from "@/services/analytics/analytics.service";

export async function POST(request) {
  try {
    await connectDB();

    const body =
      await request.json();

    const requestHeaders =
      await headers();

    const country =
      requestHeaders.get(
        "x-vercel-ip-country",
      ) ||
      requestHeaders.get(
        "cf-ipcountry",
      ) ||
      "Unknown";

    await trackAnalytics({
      ...body,
      country,
    });

    return Response.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return Response.json(
      {
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}