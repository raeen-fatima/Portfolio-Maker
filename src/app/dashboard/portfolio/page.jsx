"use client";

import Link from "next/link";
import {
  FolderKanban,
  Code2,
  Briefcase,
  GraduationCap,
  ArrowRight,
  Eye,
  Sparkles,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function PortfolioPage() {
  const [views, setViews] = useState(0);

  const [completion, setCompletion] =
    useState(0);

  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    experience: 0,
    education: 0,
  });

  const fetchViews = async () => {
    try {
      const response = await fetch(
        "/api/portfolio/stats"
      );

      const result =
        await response.json();

      if (response.ok) {
        setViews(result.views);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchDashboardData =
    async () => {
      try {
        const response = await fetch(
          "/api/portfolio/dashboard"
        );

        const result =
          await response.json();

        if (response.ok) {
          setCompletion(
            result.stats.completion
          );

          setStats({
            projects:
              result.stats.projects,
            skills:
              result.stats.skills,
            experience:
              result.stats.experience,
            education:
              result.stats.education,
          });
        }
      } catch (error) {
        console.log(error);
      }
    };

  useEffect(() => {
    const loadData = async () => {
      await Promise.all([
        fetchViews(),
        fetchDashboardData(),
      ]);
    };

    loadData();
  }, []);

  const statCards = [
    {
      title: "Projects",
      value: stats.projects,
      icon: FolderKanban,
      color:
        "bg-blue-50 text-blue-600",
    },
    {
      title: "Skills",
      value: stats.skills,
      icon: Code2,
      color:
        "bg-green-50 text-green-600",
    },
    {
      title: "Experience",
      value: stats.experience,
      icon: Briefcase,
      color:
        "bg-purple-50 text-purple-600",
    },
    {
      title: "Education",
      value: stats.education,
      icon: GraduationCap,
      color:
        "bg-orange-50 text-orange-600",
    },
  ];

  const actions = [
    {
      title: "Hero Section",
      description:
        "Introduce yourself",
      href: "/dashboard/hero",
    },
    {
      title: "About Section",
      description:
        "Tell your story",
      href: "/dashboard/about",
    },
    {
      title: "Projects",
      description:
        "Showcase your work",
      href: "/dashboard/projects",
    },
    {
      title: "Templates",
      description:
        "Customize design",
      href: "/dashboard/templates",
    },
  ];

  return (
    <div className="space-y-8 p-6 lg:p-10">
      {/* Hero Banner */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          bg-gradient-to-r
          from-black
          via-zinc-900
          to-zinc-800
          p-8
          text-white
        "
      >
        <div className="relative z-10">
          <div
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-white/10
              px-4
              py-2
              text-sm
            "
          >
            <Sparkles size={16} />
            Portfolio Builder
          </div>

          <h1 className="mt-5 text-4xl font-bold">
            Build your professional
            portfolio
          </h1>

          <p className="mt-3 max-w-2xl text-zinc-300">
            Showcase your skills,
            projects and experience.
            Complete your portfolio and
            publish it to the world.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/dashboard/preview"
              className="
                rounded-xl
                bg-white
                px-5
                py-3
                font-medium
                text-black
                transition
                hover:bg-zinc-100
              "
            >
              Preview Portfolio
            </Link>

            <Link
              href="/dashboard/publish"
              className="
                rounded-xl
                border
                border-white/20
                px-5
                py-3
                transition
                hover:bg-white/10
              "
            >
              Publish Portfolio
            </Link>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          xl:grid-cols-4
        "
      >
        {statCards.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                rounded-3xl
                border
                bg-white
                p-6
                transition-all
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="flex items-center justify-between">
                <div
                  className={`${item.color} rounded-xl p-3`}
                >
                  <Icon size={20} />
                </div>

                <span className="text-sm text-zinc-500">
                  {item.title}
                </span>
              </div>

              <h2 className="mt-5 text-4xl font-bold">
                {item.value}
              </h2>
            </div>
          );
        })}
      </div>

      {/* Completion + Views */}
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="rounded-3xl border bg-white p-8">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-bold">
                Portfolio Completion
              </h2>

              <p className="mt-2 text-zinc-500">
                Complete all sections to
                improve your profile.
              </p>
            </div>

            <div className="text-4xl font-bold">
              {completion}%
            </div>
          </div>

          <div
            className="
              mt-6
              h-3
              overflow-hidden
              rounded-full
              bg-zinc-200
            "
          >
            <div
              className="
                h-full
                rounded-full
                bg-black
                transition-all
              "
              style={{
                width: `${completion}%`,
              }}
            />
          </div>
        </div>

        <div
          className="
            rounded-3xl
            bg-gradient-to-r
            from-indigo-500
            to-purple-600
            p-8
            text-white
          "
        >
          <div className="flex items-center gap-2">
            <Eye size={18} />

            <span className="text-white/80">
              Portfolio Views
            </span>
          </div>

          <h2 className="mt-4 text-5xl font-bold">
            {views}
          </h2>

          <p className="mt-2 text-white/80">
            Total public visits
          </p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="rounded-3xl border bg-white p-8">
        <h2 className="text-xl font-bold">
          Quick Actions
        </h2>

        <p className="mt-2 text-zinc-500">
          Continue building your
          portfolio.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {actions.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="
                flex
                items-center
                justify-between
                rounded-2xl
                border
                p-5
                transition-all
                hover:bg-zinc-50
                hover:shadow-sm
              "
            >
              <div>
                <h3 className="font-semibold">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-zinc-500">
                  {item.description}
                </p>
              </div>

              <ArrowRight size={18} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}