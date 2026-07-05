import { headers } from "next/headers";
import { connectDB } from "@/lib/db";
import Portfolio from "@/models/Portfolio";
import Analytics from "@/models/PortfolioAnalytics";
import AnalyticsEvent from "@/models/AnalyticsEvent";

const allowedEvents = new Set([
  "view",
  "resume_download",
  "contact_click",
  "github_click",
  "linkedin_click",
  "project_click",
]);

function incrementBreakdown(items, key, value) {
  const existing = items.find((item) => item[key] === value);

  if (existing) existing.views += 1;
  else items.push({ [key]: value, views: 1 });
}

export async function POST(request) {
  try {
    await connectDB();

    const {
      slug,
      visitorId,
      eventType = "view",
      label = "",
      device = "Desktop",
      browser = "Unknown",
      referrer = "Direct",
    } = await request.json();

    if (!slug || !visitorId) {
      return Response.json(
        { message: "Tracking data is incomplete" },
        { status: 400 }
      );
    }

    if (!allowedEvents.has(eventType)) {
      return Response.json(
        { message: "Unsupported analytics event" },
        { status: 400 }
      );
    }

    const portfolio = await Portfolio.findOne({ slug, isPublished: true });

    if (!portfolio) {
      return Response.json(
        { message: "Portfolio not found" },
        { status: 404 }
      );
    }

    const requestHeaders = await headers();
    const country =
      requestHeaders.get("x-vercel-ip-country") ||
      requestHeaders.get("cf-ipcountry") ||
      "Unknown";

    const wasUniqueVisitor =
      eventType === "view" &&
      !(await AnalyticsEvent.exists({
        portfolioId: portfolio._id,
        visitorId,
        eventType: "view",
      }));

    await AnalyticsEvent.create({
      portfolioId: portfolio._id,
      visitorId,
      eventType,
      label: String(label).slice(0, 120),
      country,
      device,
      browser,
      referrer,
    });

    let analytics = await Analytics.findOne({ portfolioId: portfolio._id });

    if (!analytics) {
      analytics = await Analytics.create({ portfolioId: portfolio._id });
    }

    if (eventType === "view") {
      const today = new Date().toISOString().split("T")[0];
      const day = analytics.viewsHistory.find((item) => item.date === today);

      analytics.totalViews += 1;
      analytics.uniqueVisitors += wasUniqueVisitor ? 1 : 0;
      analytics.lastViewedAt = new Date();

      if (day) day.views += 1;
      else analytics.viewsHistory.push({ date: today, views: 1 });

      incrementBreakdown(analytics.countries, "country", country);
      incrementBreakdown(analytics.devices, "device", device);
      incrementBreakdown(analytics.browsers, "browser", browser);
      incrementBreakdown(analytics.referrers, "source", referrer);
    } else if (eventType === "resume_download") analytics.resumeDownloads += 1;
    else if (eventType === "contact_click") analytics.contactClicks += 1;
    else if (eventType === "github_click") analytics.githubClicks += 1;
    else if (eventType === "linkedin_click") analytics.linkedinClicks += 1;
    else if (eventType === "project_click") {
      const project = analytics.projectClicks.find((item) => item.title === label);
      if (project) project.clicks += 1;
      else analytics.projectClicks.push({ title: label || "Project", clicks: 1 });
    }

    await analytics.save();

    return Response.json({ success: true });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
