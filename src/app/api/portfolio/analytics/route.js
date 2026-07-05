import { cookies } from "next/headers";
import { connectDB } from "@/lib/db";
import { verifyToken } from "@/lib/jwt";
import Portfolio from "@/models/Portfolio";
import Analytics from "@/models/PortfolioAnalytics";
import AnalyticsEvent from "@/models/AnalyticsEvent";

function startOfDay(date) {
  const value = new Date(date);
  value.setHours(0, 0, 0, 0);
  return value;
}

function lastSevenDays(events) {
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (6 - index));
    const key = date.toISOString().split("T")[0];

    return {
      date: key,
      label: date.toLocaleDateString("en", { weekday: "short" }),
      views: events.filter(
        (event) =>
          (event.eventType || "view") === "view" &&
          new Date(event.visitedAt).toISOString().split("T")[0] === key
      ).length,
    };
  });
}

function breakdown(events, field) {
  const counts = new Map();

  for (const event of events.filter((item) => (item.eventType || "view") === "view")) {
    const value = event[field] || "Unknown";
    counts.set(value, (counts.get(value) || 0) + 1);
  }

  const total = [...counts.values()].reduce((sum, value) => sum + value, 0);

  return [...counts.entries()]
    .map(([name, count]) => ({
      name,
      count,
      percent: total ? Math.round((count / total) * 100) : 0,
    }))
    .sort((a, b) => b.count - a.count);
}

export async function GET() {
  try {
    await connectDB();

    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const decoded = verifyToken(token);
    const portfolio = await Portfolio.findOne({ userId: decoded.id }).lean();

    if (!portfolio) {
      return Response.json({ message: "Portfolio not found" }, { status: 404 });
    }

    const analytics = await Analytics.findOne({ portfolioId: portfolio._id }).lean();
    const events = await AnalyticsEvent.find({ portfolioId: portfolio._id })
      .sort({ visitedAt: -1 })
      .lean();

    const now = new Date();
    const today = startOfDay(now);
    const weekStart = new Date(today);
    weekStart.setDate(weekStart.getDate() - 6);
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const views = events.filter((event) => (event.eventType || "view") === "view");
    const uniqueVisitors = new Set(views.map((event) => event.visitorId)).size;
    const completedSections = [
      portfolio.hero?.name,
      portfolio.about?.bio,
      portfolio.skills?.length,
      portfolio.projects?.length,
      portfolio.experience?.length,
      portfolio.education?.length,
      portfolio.certifications?.length,
      portfolio.isPublished,
    ].filter(Boolean).length;
    const projectCounts = new Map();

    events
      .filter((event) => event.eventType === "project_click")
      .forEach((event) => {
        const title = event.label || "Project";
        projectCounts.set(title, (projectCounts.get(title) || 0) + 1);
      });

    return Response.json({
      success: true,
      summary: {
        totalViews: views.length,
        uniqueVisitors,
        todayViews: views.filter((event) => new Date(event.visitedAt) >= today).length,
        weeklyViews: views.filter((event) => new Date(event.visitedAt) >= weekStart).length,
        monthlyViews: views.filter((event) => new Date(event.visitedAt) >= monthStart).length,
        resumeDownloads: events.filter((event) => event.eventType === "resume_download").length,
        contactClicks: events.filter((event) => event.eventType === "contact_click").length,
        githubClicks: events.filter((event) => event.eventType === "github_click").length,
        linkedinClicks: events.filter((event) => event.eventType === "linkedin_click").length,
        portfolioScore: Math.round((completedSections / 8) * 100),
        lastViewedAt: analytics?.lastViewedAt || null,
      },
      views: lastSevenDays(events),
      devices: breakdown(events, "device"),
      browsers: breakdown(events, "browser"),
      countries: breakdown(events, "country"),
      referrers: breakdown(events, "referrer"),
      topProjects: [...projectCounts.entries()]
        .map(([title, clicks]) => ({ title, clicks }))
        .sort((a, b) => b.clicks - a.clicks)
        .slice(0, 5),
    });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Something went wrong" }, { status: 500 });
  }
}
