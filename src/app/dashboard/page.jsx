"use client";

import Link from "next/link";

import {
  ArrowRight,
  Rocket,
  TrendingUp,
  Eye,
  Sparkles,
} from "lucide-react";

import { useDashboard } from "@/hooks/dashboard/useDashboard";
import StatCard from "@/components/dashboard/StatCard";
export default function DashboardPage() {
  const { dashboard, loading } =
    useDashboard();

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-48 rounded-[32px] bg-white/[0.03] animate-pulse" />

        <div className="grid gap-5 md:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                h-32
                rounded-[28px]
                bg-white/[0.03]
                animate-pulse
              "
            />
          ))}
        </div>
      </div>
    );
  }

  if (!dashboard) {
    return (
      <div
        className="
          rounded-[32px]
          border border-red-500/20
          bg-red-500/10
          p-8
          text-red-400
        "
      >
        Failed to load dashboard.
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero */}

      <div
        className="
          rounded-4xl
          border border-white/10
          bg-linear-to-br
          from-white/[0.05]
          to-white/[0.02]
          p-8
        "
      >
        <div
          className="
            flex
            flex-col
            gap-8
            lg:flex-row
            lg:items-center
            lg:justify-between
          "
        >
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                rounded-full
                border border-white/10
                bg-white/[0.03]
                px-3 py-1
                text-sm
              "
            >
              <Sparkles size={14} />
              Dashboard
            </div>

            <h1
              className="
                mt-4
                text-4xl
                font-bold
                tracking-tight
              "
            >
              Welcome back 👋
            </h1>

            <p
              className="
                mt-3
                max-w-xl
                text-zinc-500
              "
            >
              Your portfolio is{" "}
              {dashboard.completion}% complete.
              Continue building and get ready
              to publish.
            </p>
          </div>

          <Link
            href={dashboard.nextStep}
            className="
              inline-flex
              items-center
              gap-2
              rounded-xl
              bg-white
              px-5
              py-3
              font-medium
              text-black
            "
          >
            Continue Building
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Stats */}

      <div
        className="
          grid
          gap-5
          md:grid-cols-2
          xl:grid-cols-4
        "
      >
        <StatCard
          title="Completion"
          value={`${dashboard.completion}%`}
        />

        <StatCard
          title="Score"
          value={dashboard.score}
        />

        <StatCard
          title="Projects"
          value={dashboard.stats.projects}
        />

        <StatCard
          title="Skills"
          value={dashboard.stats.skills}
        />
      </div>

      {/* Builder */}

      <div
        className="
          rounded-[32px]
          border border-white/10
          bg-white/[0.03]
          p-8
        "
      >
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              Portfolio Builder
            </h2>

            <p className="mt-2 text-zinc-500">
              Manage all sections of your
              portfolio.
            </p>
          </div>

          <Link
            href="/dashboard/portfolio"
            className="
              inline-flex
              items-center
              gap-2
            "
          >
            Open Builder
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Bottom */}

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Insights */}

        <div
          className="
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-6
          "
        >
          <div className="flex items-center gap-2">
            <TrendingUp size={18} />

            <h2 className="text-xl font-semibold">
              Insights
            </h2>
          </div>

          <div className="mt-6 space-y-3">
            {dashboard.insights.map(
              (item) => (
                <div
                  key={item}
                  className="
                    rounded-xl
                    border border-white/10
                    px-4
                    py-3
                  "
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Publish */}

        <div
          className="
            rounded-[32px]
            border border-white/10
            bg-white/[0.03]
            p-6
          "
        >
          <div className="flex items-center gap-2">
            <Rocket size={18} />

            <h2 className="text-xl font-semibold">
              Publishing
            </h2>
          </div>

          <div className="mt-6">
            {dashboard.isPublished ? (
              <div
                className="
                  rounded-xl
                  border border-green-500/20
                  bg-green-500/10
                  px-4
                  py-3
                  text-green-400
                "
              >
                Portfolio is live 🚀
              </div>
            ) : (
              <div
                className="
                  rounded-xl
                  border border-yellow-500/20
                  bg-yellow-500/10
                  px-4
                  py-3
                  text-yellow-400
                "
              >
                Portfolio not published yet.
              </div>
            )}
          </div>

          <div className="mt-6 flex gap-3">
            <Link
              href={`/u/${dashboard.slug}`}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                border border-white/10
                px-4
                py-3
              "
            >
              <Eye size={18} />
              Preview
            </Link>

            <Link
              href="/dashboard/portfolio/publish"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-white
                px-4
                py-3
                font-medium
                text-black
              "
            >
              <Rocket size={18} />
              Publish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
