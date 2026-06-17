"use client";

import Link from "next/link";
import {
  Eye,
  CheckCircle2,
  Palette,
  Globe,
  ArrowRight,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [views, setViews] = useState(0);

  const [dashboard, setDashboard] =
    useState({
      completion: 0,
      template: "Nova",
      isPublished: false,
      slug: "",
    });

  useEffect(() => {
    const loadDashboard =
      async () => {
        try {
          const [
            statsResponse,
            dashboardResponse,
          ] = await Promise.all([
            fetch(
              "/api/portfolio/stats"
            ),
            fetch(
              "/api/portfolio/dashboard"
            ),
          ]);

          const statsResult =
            await statsResponse.json();

          const dashboardResult =
            await dashboardResponse.json();

          if (
            statsResponse.ok
          ) {
            setViews(
              statsResult.views
            );
          }

          if (
            dashboardResponse.ok
          ) {
            setDashboard({
              completion:
                dashboardResult
                  .stats
                  .completion,
              template:
                dashboardResult
                  .stats
                  .template ||
                "Nova",
              isPublished:
                dashboardResult
                  .stats
                  .isPublished ||
                false,
              slug:
                dashboardResult
                  .stats.slug ||
                "",
            });
          }
        } catch (error) {
          console.log(error);
        }
      };

    loadDashboard();
  }, []);

  const cards = [
    {
      title:
        "Portfolio Views",
      value: views,
      icon: Eye,
      color:
        "from-blue-500 to-cyan-500",
    },
    {
      title: "Completion",
      value: `${dashboard.completion}%`,
      icon: CheckCircle2,
      color:
        "from-green-500 to-emerald-500",
    },
    {
      title: "Template",
      value:
        dashboard.template,
      icon: Palette,
      color:
        "from-purple-500 to-pink-500",
    },
    {
      title: "Status",
      value:
        dashboard.isPublished
          ? "Published"
          : "Draft",
      icon: Globe,
      color:
        "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="space-y-8 p-6 lg:p-10">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-500">
          Overview of your
          portfolio performance
          and progress.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {cards.map((card) => {
          const Icon =
            card.icon;

          return (
            <div
              key={card.title}
              className="
                overflow-hidden
                rounded-3xl
                border
                bg-white
                shadow-sm
              "
            >
              <div
                className={`h-2 bg-gradient-to-r ${card.color}`}
              />

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-zinc-500">
                    {card.title}
                  </p>

                  <Icon
                    size={18}
                  />
                </div>

                <h2 className="mt-4 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>
            </div>
          );
        })}
      </div>

      {/* URL Card */}
      <div className="rounded-3xl border bg-white p-8">
        <h2 className="text-xl font-bold">
          Portfolio URL
        </h2>

        <p className="mt-2 text-zinc-500">
          Share your portfolio
          with recruiters and
          clients.
        </p>

        <div className="mt-5 rounded-2xl border bg-zinc-50 p-4">
          {dashboard.slug
            ? `${process.env.NEXT_PUBLIC_APP_URL}/u/${dashboard.slug}`
            : "Slug not configured"}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/dashboard/settings"
            className="
              rounded-xl
              bg-black
              px-5
              py-3
              text-white
            "
          >
            Manage Settings
          </Link>

          {dashboard.slug && (
            <a
              href={`/u/${dashboard.slug}`}
              target="_blank"
              className="
                rounded-xl
                border
                px-5
                py-3
              "
            >
              Visit Portfolio
            </a>
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-3xl border bg-white p-8">
        <h2 className="text-xl font-bold">
          Quick Actions
        </h2>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Link
            href="/dashboard/portfolio"
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              p-5
              hover:bg-zinc-50
            "
          >
            <span>
              Continue Building
            </span>

            <ArrowRight
              size={18}
            />
          </Link>

          <Link
            href="/dashboard/templates"
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              p-5
              hover:bg-zinc-50
            "
          >
            <span>
              Change Template
            </span>

            <ArrowRight
              size={18}
            />
          </Link>

          <Link
            href="/dashboard/preview"
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              p-5
              hover:bg-zinc-50
            "
          >
            <span>
              Preview Portfolio
            </span>

            <ArrowRight
              size={18}
            />
          </Link>

          <Link
            href="/dashboard/publish"
            className="
              flex
              items-center
              justify-between
              rounded-2xl
              border
              p-5
              hover:bg-zinc-50
            "
          >
            <span>
              Publish Portfolio
            </span>

            <ArrowRight
              size={18}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}