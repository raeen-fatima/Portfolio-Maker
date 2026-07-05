"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import {
  Download,
  Eye,
  Globe,
  Laptop,
  RefreshCw,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";

const emptySummary = {
  totalViews: 0,
  uniqueVisitors: 0,
  todayViews: 0,
  weeklyViews: 0,
  monthlyViews: 0,
  resumeDownloads: 0,
  contactClicks: 0,
  githubClicks: 0,
  linkedinClicks: 0,
  portfolioScore: 0,
};

export default function AnalyticsPage() {
  const [analytics, setAnalytics] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const loadAnalytics = useCallback(async () => {
    try {
      setError("");
      setLoading(true);
      const response = await fetch("/api/portfolio/analytics", {
        cache: "no-store",
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to load analytics");
      }

      setAnalytics(result);
    } catch (requestError) {
      setError(requestError.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAnalytics();
  }, [loadAnalytics]);

  const summary = analytics?.summary || emptySummary;
  const maxViews = Math.max(
    1,
    ...(analytics?.views || []).map((item) => item.views)
  );

  const insights = useMemo(() => {
    const items = [];
    const topDevice = analytics?.devices?.[0];
    const topSource = analytics?.referrers?.[0];

    if (!summary.totalViews) {
      return [
        "Publish and share your portfolio to begin collecting visitor data.",
        "Analytics records views only on your public portfolio URL.",
      ];
    }

    items.push(
      `${summary.weeklyViews} view${summary.weeklyViews === 1 ? "" : "s"} arrived during the last 7 days.`
    );
    if (topDevice) items.push(`${topDevice.name} is your most common device at ${topDevice.percent}%.`);
    if (topSource) items.push(`${topSource.name} sends the most traffic to your portfolio.`);
    if (!summary.resumeDownloads) items.push("No resume downloads yet; make the resume action prominent in your hero section.");

    return items.slice(0, 4);
  }, [analytics, summary]);

  if (loading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-zinc-400">
        <RefreshCw className="mr-3 animate-spin" size={20} />
        Loading portfolio analytics...
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Analytics</p>
          <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Portfolio performance</h1>
          <p className="mt-3 max-w-2xl text-zinc-500">
            Live visitor, engagement, device, and traffic data from your published portfolio.
          </p>
        </div>

        <button
          type="button"
          onClick={loadAnalytics}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 font-medium text-white transition hover:bg-white/[0.08]"
        >
          <RefreshCw size={17} />
          Refresh
        </button>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-red-300">
          {error}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Metric icon={<Eye size={20} />} label="Total views" value={summary.totalViews} detail={`${summary.todayViews} today`} />
        <Metric icon={<Users size={20} />} label="Unique visitors" value={summary.uniqueVisitors} detail={`${summary.monthlyViews} views this month`} />
        <Metric icon={<Download size={20} />} label="Resume downloads" value={summary.resumeDownloads} detail={`${summary.contactClicks} contact clicks`} />
        <Metric icon={<TrendingUp size={20} />} label="Portfolio score" value={`${summary.portfolioScore}%`} detail="Profile completion" />
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-7">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-white">Views overview</h2>
              <p className="mt-1 text-sm text-zinc-500">Last 7 days</p>
            </div>
            <span className="rounded-full bg-white/[0.06] px-3 py-1 text-sm text-zinc-300">
              {summary.weeklyViews} total
            </span>
          </div>

          <div className="mt-8 grid h-64 grid-cols-7 items-end gap-2 sm:gap-4">
            {(analytics?.views || []).map((item) => (
              <div key={item.date} className="flex h-full min-w-0 flex-col items-center justify-end gap-3">
                <span className="text-xs font-medium text-zinc-400">{item.views}</span>
                <div className="flex h-48 w-full items-end rounded-lg bg-white/[0.04] p-1">
                  <div
                    className="w-full rounded-md bg-white transition-all"
                    style={{ height: `${Math.max(item.views ? 8 : 2, (item.views / maxViews) * 100)}%` }}
                  />
                </div>
                <span className="text-xs text-zinc-500">{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <Breakdown title="Traffic sources" items={analytics?.referrers || []} />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <Breakdown title="Devices" items={analytics?.devices || []} icon={<Laptop size={18} />} />
        <Breakdown title="Browsers" items={analytics?.browsers || []} icon={<Globe size={18} />} />
        <Breakdown title="Countries" items={analytics?.countries || []} icon={<Smartphone size={18} />} />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold text-white">Engagement</h2>
          <div className="mt-6 space-y-4">
            <Engagement label="Contact clicks" value={summary.contactClicks} />
            <Engagement label="GitHub clicks" value={summary.githubClicks} />
            <Engagement label="LinkedIn clicks" value={summary.linkedinClicks} />
            <Engagement label="Resume downloads" value={summary.resumeDownloads} />
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold text-white">Top projects</h2>
          <div className="mt-6 space-y-3">
            {analytics?.topProjects?.length ? (
              analytics.topProjects.map((project) => (
                <Engagement key={project.title} label={project.title} value={project.clicks} suffix="clicks" />
              ))
            ) : (
              <Empty text="Project link clicks will appear here." />
            )}
          </div>
        </section>

        <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h2 className="text-xl font-semibold text-white">Insights</h2>
          <div className="mt-6 space-y-3">
            {insights.map((insight) => (
              <div key={insight} className="rounded-xl border border-white/10 bg-black/10 p-4 text-sm leading-6 text-zinc-300">
                {insight}
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

function Metric({ icon, label, value, detail }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] text-white">{icon}</div>
      <p className="mt-5 text-3xl font-bold text-white">{Number.isInteger(value) ? value.toLocaleString() : value}</p>
      <p className="mt-1 font-medium text-zinc-300">{label}</p>
      <p className="mt-2 text-sm text-zinc-500">{detail}</p>
    </div>
  );
}

function Breakdown({ title, items, icon }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center gap-2 text-white">{icon}<h2 className="text-xl font-semibold">{title}</h2></div>
      <div className="mt-6 space-y-5">
        {items.length ? items.slice(0, 5).map((item) => (
          <div key={item.name}>
            <div className="mb-2 flex justify-between gap-4 text-sm">
              <span className="truncate text-zinc-300">{item.name}</span>
              <span className="text-zinc-500">{item.percent}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full rounded-full bg-white" style={{ width: `${item.percent}%` }} />
            </div>
          </div>
        )) : <Empty text="No visitor data yet." />}
      </div>
    </section>
  );
}

function Engagement({ label, value, suffix = "" }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/10 p-4">
      <span className="truncate text-zinc-300">{label}</span>
      <span className="shrink-0 font-semibold text-white">{value.toLocaleString()} {suffix}</span>
    </div>
  );
}

function Empty({ text }) {
  return <p className="rounded-xl border border-dashed border-white/10 p-5 text-center text-sm text-zinc-500">{text}</p>;
}
