"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  ArrowRight,
  Rocket,
  FolderKanban,
  TrendingUp,
  CheckCircle2,
  Eye,
  Sparkles,
  Code2,
} from "lucide-react";

export default function DashboardPage() {
  const [dashboard, setDashboard] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    const fetchDashboard =
      async () => {
        try {
          const response =
            await fetch(
              "/api/portfolio/dashboard"
            );

          const result =
            await response.json();

          if (response.ok) {
            setDashboard(result);
          }
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      };

    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="h-48 rounded-[32px] bg-white/[0.03] animate-pulse" />

        <div className="grid md:grid-cols-4 gap-5">
          {[1, 2, 3, 4].map(
            (item) => (
              <div
                key={item}
                className="
                  h-32
                  rounded-[28px]
                  bg-white/[0.03]
                  animate-pulse
                "
              />
            )
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Hero */}

      <div
        className="
          rounded-[32px]
          border border-white/10
          bg-gradient-to-br
          from-white/[0.05]
          to-white/[0.02]
          p-8
        "
      >
        <div
          className="
            flex flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-8
          "
        >
          <div>
            <div
              className="
                inline-flex
                items-center
                gap-2
                px-3 py-1
                rounded-full
                border border-white/10
                bg-white/[0.03]
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
                text-zinc-500
                max-w-xl
              "
            >
              Your portfolio is
              {" "}
              {dashboard.completion}%
              {" "}
              complete.
              Continue building and
              get ready to publish.
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
        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-zinc-500">
            Completion
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {dashboard.completion}%
          </h2>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-zinc-500">
            Score
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {dashboard.score}
          </h2>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-zinc-500">
            Projects
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {dashboard.stats.projects}
          </h2>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-zinc-500">
            Skills
          </p>

          <h2 className="mt-3 text-4xl font-bold">
            {dashboard.stats.skills}
          </h2>
        </div>
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
        <div
          className="
            flex items-center
            justify-between
          "
        >
          <div>
            <h2 className="text-xl font-semibold">
              Portfolio Builder
            </h2>

            <p className="mt-2 text-zinc-500">
              Manage all sections of your portfolio.
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

      {/* Bottom Grid */}

      <div
        className="
          grid
          lg:grid-cols-2
          gap-6
        "
      >
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
                    px-4 py-3
                  "
                >
                  {item}
                </div>
              )
            )}
          </div>
        </div>

        {/* Publishing */}

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
                  px-4 py-3
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
                  px-4 py-3
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
                px-4 py-3
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
                px-4 py-3
                text-black
                font-medium
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