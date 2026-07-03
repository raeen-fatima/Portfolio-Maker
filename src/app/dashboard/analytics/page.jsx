"use client";

import {
  Eye,
  Users,
  Download,
  TrendingUp,
  Laptop,
  Smartphone,
  Globe,
  ArrowUpRight,
} from "lucide-react";

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Analytics
        </p>

        <h1 className="mt-3 text-4xl font-bold text-white">
          Portfolio Analytics
        </h1>

        <p className="mt-3 max-w-2xl text-zinc-500">
          Track portfolio performance, audience engagement and visitor insights.
        </p>
      </div>

      {/* Overview */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <Card
          icon={<Eye size={20} />}
          title="Total Views"
          value="1,248"
          growth="+12%"
        />

        <Card
          icon={<Users size={20} />}
          title="Visitors"
          value="843"
          growth="+8%"
        />

        <Card
          icon={<Download size={20} />}
          title="Resume Downloads"
          value="42"
          growth="+5%"
        />

        <Card
          icon={<TrendingUp size={20} />}
          title="Portfolio Score"
          value="91%"
          growth="Excellent"
        />
      </div>

      {/* Chart + Sources */}
      <div className="grid gap-6 xl:grid-cols-3">
        {/* Graph */}
        <div className="xl:col-span-2 rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold text-white">
                Views Overview
              </h2>

              <p className="mt-1 text-sm text-zinc-500">
                Last 7 days
              </p>
            </div>

            <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm text-green-400">
              +22%
            </span>
          </div>

          <div className="mt-10 flex h-[280px] items-end justify-between">
            {[30, 60, 42, 85, 55, 95, 70].map((item, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-3"
              >
                <div
                  style={{ height: `${item * 2}px` }}
                  className="w-8 rounded-full bg-white"
                />

                <span className="text-xs text-zinc-600">
                  {["M", "T", "W", "T", "F", "S", "S"][i]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Sources */}
        <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-xl font-semibold text-white">
            Traffic Sources
          </h2>

          <div className="mt-8 space-y-5">
            <Source name="Direct" percent="62%" />
            <Source name="GitHub" percent="18%" />
            <Source name="LinkedIn" percent="12%" />
            <Source name="Google" percent="8%" />
          </div>
        </div>
      </div>

      {/* Devices */}
      <div className="grid gap-5 md:grid-cols-3">
        <Device
          icon={<Laptop size={22} />}
          title="Desktop"
          value="68%"
        />

        <Device
          icon={<Smartphone size={22} />}
          title="Mobile"
          value="29%"
        />

        <Device
          icon={<Globe size={22} />}
          title="Tablet"
          value="3%"
        />
      </div>

      {/* Bottom */}
      <div className="grid gap-6 xl:grid-cols-2">
        {/* Projects */}
        <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-xl font-semibold text-white">
            Top Projects
          </h2>

          <div className="mt-8 space-y-5">
            <Project title="Portfolio Website" views="542" />
            <Project title="Expense Tracker" views="302" />
            <Project title="Weather App" views="187" />
          </div>
        </div>

        {/* AI */}
        <div className="rounded-[30px] border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-xl font-semibold text-white">
            Portfolio Insights
          </h2>

          <div className="mt-8 space-y-4">
            <Insight text="Your portfolio received 22% more visitors this week." />
            <Insight text="Projects section is the most viewed." />
            <Insight text="Publishing certifications could improve engagement." />
            <Insight text="Mobile visitors increased by 14%." />
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ icon, title, value, growth }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
      <div className="flex items-center justify-between">
        <div className="rounded-xl bg-white/[0.05] p-3 text-white">
          {icon}
        </div>

        <span className="flex items-center gap-1 text-sm text-green-400">
          {growth}
          <ArrowUpRight size={14} />
        </span>
      </div>

      <h2 className="mt-6 text-4xl font-bold text-white">
        {value}
      </h2>

      <p className="mt-2 text-zinc-500">
        {title}
      </p>
    </div>
  );
}

function Source({ name, percent }) {
  return (
    <div>
      <div className="mb-2 flex justify-between">
        <span>{name}</span>
        <span>{percent}</span>
      </div>

      <div className="h-2 rounded-full bg-white/10">
        <div
          style={{ width: percent }}
          className="h-full rounded-full bg-white"
        />
      </div>
    </div>
  );
}

function Device({ icon, title, value }) {
  return (
    <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-8 text-center">
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/[0.05] text-white">
        {icon}
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-4xl font-bold text-white">
        {value}
      </p>
    </div>
  );
}

function Project({ title, views }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/10 p-4">
      <div>
        <h3 className="font-medium text-white">{title}</h3>
        <p className="text-sm text-zinc-500">
          Most viewed project
        </p>
      </div>

      <span className="font-semibold text-white">
        {views}
      </span>
    </div>
  );
}

function Insight({ text }) {
  return (
    <div className="rounded-xl border border-white/10 p-4 text-zinc-300">
      {text}
    </div>
  );
}