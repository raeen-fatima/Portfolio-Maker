import Portfolio from "@/models/portfolio/Portfolio";
import Analytics from "@/models/dashboard/PortfolioAnalytics";
import AnalyticsEvent from "@/models/dashboard/AnalyticsEvent";
import {
  startOfDay,
  lastSevenDays,
  breakdown,
   incrementBreakdown,
} from "./analytics.helpers";



export async function getPortfolioAnalytics(
  userId,
) {
  const portfolio = await Portfolio.findOne({
    userId,
  }).lean();

  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

  const analytics = await Analytics.findOne({
    portfolioId: portfolio._id,
  }).lean();

  const events = await AnalyticsEvent.find({
    portfolioId: portfolio._id,
  })
    .sort({
      visitedAt: -1,
    })
    .lean();

  const now = new Date();

  const today = startOfDay(now);

  const weekStart = new Date(today);

  weekStart.setDate(
    weekStart.getDate() - 6,
  );

  const monthStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    1,
  );

  const views = events.filter(
    (event) =>
      (event.eventType || "view") ===
      "view",
  );

  const uniqueVisitors = new Set(
    views.map(
      (event) => event.visitorId,
    ),
  ).size;

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
    .filter(
      (event) =>
        event.eventType ===
        "project_click",
    )
    .forEach((event) => {
      const title =
        event.label || "Project";

      projectCounts.set(
        title,
        (projectCounts.get(title) ||
          0) + 1,
      );
    });

  return {
    summary: {
      totalViews: views.length,

      uniqueVisitors,

      todayViews: views.filter(
        (event) =>
          new Date(event.visitedAt) >=
          today,
      ).length,

      weeklyViews: views.filter(
        (event) =>
          new Date(event.visitedAt) >=
          weekStart,
      ).length,

      monthlyViews: views.filter(
        (event) =>
          new Date(event.visitedAt) >=
          monthStart,
      ).length,

      resumeDownloads:
        events.filter(
          (event) =>
            event.eventType ===
            "resume_download",
        ).length,

      contactClicks:
        events.filter(
          (event) =>
            event.eventType ===
            "contact_click",
        ).length,

      githubClicks:
        events.filter(
          (event) =>
            event.eventType ===
            "github_click",
        ).length,

      linkedinClicks:
        events.filter(
          (event) =>
            event.eventType ===
            "linkedin_click",
        ).length,

      portfolioScore: Math.round(
        (completedSections / 8) * 100,
      ),

      lastViewedAt:
        analytics?.lastViewedAt ||
        null,
    },

    views: lastSevenDays(events),

    devices: breakdown(
      events,
      "device",
    ),

    browsers: breakdown(
      events,
      "browser",
    ),

    countries: breakdown(
      events,
      "country",
    ),

    referrers: breakdown(
      events,
      "referrer",
    ),

    topProjects: [
      ...projectCounts.entries(),
    ]
      .map(([title, clicks]) => ({
        title,
        clicks,
      }))
      .sort(
        (a, b) =>
          b.clicks - a.clicks,
      )
      .slice(0, 5),
  };
}

//track route function

export async function trackAnalytics(body) {
  const {
    slug,
    visitorId,
    eventType = "view",
    label = "",
    device = "Desktop",
    browser = "Unknown",
    referrer = "Direct",
    country = "Unknown",
  } = body;

  if (!slug || !visitorId) {
    throw new Error("Tracking data is incomplete");
  }

  const allowedEvents = new Set([
    "view",
    "resume_download",
    "contact_click",
    "github_click",
    "linkedin_click",
    "project_click",
  ]);

  if (!allowedEvents.has(eventType)) {
    throw new Error("Unsupported analytics event");
  }

  const portfolio = await Portfolio.findOne({
    slug,
    isPublished: true,
  });

  if (!portfolio) {
    throw new Error("Portfolio not found");
  }

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

  let analytics = await Analytics.findOne({
    portfolioId: portfolio._id,
  });

  if (!analytics) {
    analytics = await Analytics.create({
      portfolioId: portfolio._id,
    });
  }

  if (eventType === "view") {
    const today =
      new Date().toISOString().split("T")[0];

    const day = analytics.viewsHistory.find(
      (item) => item.date === today,
    );

    analytics.totalViews += 1;

    analytics.uniqueVisitors +=
      wasUniqueVisitor ? 1 : 0;

    analytics.lastViewedAt =
      new Date();

    if (day) {
      day.views += 1;
    } else {
      analytics.viewsHistory.push({
        date: today,
        views: 1,
      });
    }

    incrementBreakdown(
      analytics.countries,
      "country",
      country,
    );

    incrementBreakdown(
      analytics.devices,
      "device",
      device,
    );

    incrementBreakdown(
      analytics.browsers,
      "browser",
      browser,
    );

    incrementBreakdown(
      analytics.referrers,
      "source",
      referrer,
    );
  } else if (
    eventType === "resume_download"
  ) {
    analytics.resumeDownloads += 1;
  } else if (
    eventType === "contact_click"
  ) {
    analytics.contactClicks += 1;
  } else if (
    eventType === "github_click"
  ) {
    analytics.githubClicks += 1;
  } else if (
    eventType === "linkedin_click"
  ) {
    analytics.linkedinClicks += 1;
  } else if (
    eventType === "project_click"
  ) {
    const project =
      analytics.projectClicks.find(
        (item) =>
          item.title === label,
      );

    if (project) {
      project.clicks += 1;
    } else {
      analytics.projectClicks.push({
        title: label || "Project",
        clicks: 1,
      });
    }
  }

  await analytics.save();
}