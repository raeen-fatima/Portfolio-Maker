"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import {
  ArrowRight,
  CheckCircle2,
  Circle,
  Eye,
  Rocket,
  FolderKanban,
  Code2,
  Briefcase,
  Award,
  TrendingUp,
} from "lucide-react";

export default function PortfolioBuilderPage() {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  const fetchDashboard = async () => {
    try {
      const response = await fetch("/api/dashboard/portfolio")

      const result = await response.json();

      if (response.ok) {
        setDashboard(result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  if (loading) {
    return (
      <div
        className="
          space-y-6
        "
      >
        <div
          className="
            h-64
            bg-white/[0.03]
            rounded-[32px]
            animate-pulse
          "
        />

        <div
          className="
            grid md:grid-cols-4
            gap-5
          "
        >
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="
                h-32
                bg-white/[0.03]
                rounded-[28px]
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
        flex min-h-[70vh]
        items-center justify-center
      "
      >
        <div
          className="
          max-w-md
          text-center
        "
        >
          <h2
            className="
            text-3xl
            font-bold
            text-white
          "
          >
            No Portfolio Found
          </h2>

          <p
            className="
            mt-3
            text-zinc-500
          "
          >
            Create your portfolio to start building your professional presence.
          </p>

          <Link
            href="/dashboard/portfolio/hero"
            className="
            inline-flex
            items-center
            gap-2
            mt-6
            rounded-xl
            bg-white
            px-5
            py-3
            font-medium
            text-black
          "
          >
            Start Building
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    );
  }

  const roadmap = [
    {
      title: "Hero",
      href: "/dashboard/portfolio/hero",
      completed: dashboard.sections.hero,
    },

    {
      title: "About",
      href: "/dashboard/portfolio/about",
      completed: dashboard.sections.about,
    },

    {
      title: "Skills",
      href: "/dashboard/portfolio/skills",
      completed: dashboard.sections.skills,
    },

    {
      title: "Projects",
      href: "/dashboard/portfolio/projects",
      completed: dashboard.sections.projects,
    },

    {
      title: "Experience",
      href: "/dashboard/portfolio/experience",
      completed: dashboard.sections.experience,
    },

    {
      title: "Education",
      href: "/dashboard/portfolio/education",
      completed: dashboard.sections.education,
    },

    {
      title: "Certifications",
      href: "/dashboard/portfolio/certifications",
      completed: dashboard.sections.certifications,
    },
    {
      title: "Templates",
      href: "/dashboard/portfolio/templates",
      completed: !!dashboard.selectedTemplate,
    },

    {
      title: "Publish",
      href: "/dashboard/portfolio/publish",
      completed: dashboard.isPublished,
    },
  ];

  const stats = [
    {
      title: "Projects",
      value: dashboard.stats.projects,
      icon: FolderKanban,
    },

    {
      title: "Skills",
      value: dashboard.stats.skills,
      icon: Code2,
    },

    {
      title: "Experience",
      value: dashboard.stats.experience,
      icon: Briefcase,
    },

    {
      title: "Certificates",
      value: dashboard.stats.certifications,
      icon: Award,
    },
  ];

  return (
    <div
      className="
        space-y-8
      "
    >
      {/* Hero Card */}
      <div
        className="
          p-8
          bg-white/[0.03]
          rounded-[32px] border border-white/10
        "
      >
        <div
          className="
            flex flex-col lg:flex-row lg:items-center lg:justify-between
            gap-8
          "
        >
          <div>
            <p
              className="
                text-sm text-zinc-500 uppercase tracking-[0.2em]
              "
            >
              Portfolio Builder
            </p>

            <h1
              className="
                mt-3
                text-4xl text-white font-bold tracking-tight
              "
            >
              {dashboard.portfolioName}
            </h1>

            <div
              className="
                flex flex-wrap
                mt-4
                gap-3
              "
            >
              <span
                className="
                  px-3 py-1
                  text-sm
                  bg-white/[0.03]
                  rounded-full border border-white/10
                "
              >
                {dashboard.isPublished ? "Published" : "Draft"}
              </span>

              <span
                className="
                  px-3 py-1
                  text-sm
                  bg-white/[0.03]
                  rounded-full border border-white/10
                "
              >
                {dashboard.selectedTemplate}
              </span>
            </div>
          </div>

          <div
            className="
              flex
              gap-3
            "
          >
            <Link
              href={`/u/${dashboard.slug}`}
              className="
                inline-flex items-center
                px-5 py-3
                text-white
                hover:bg-white/[0.04]
                rounded-xl border border-white/10
                transition
                gap-2
              "
            >
              <Eye size={18} />
              Preview
            </Link>

            <Link
              href="/dashboard/portfolio/publish"
              className="
                inline-flex items-center
                px-5 py-3
                font-medium text-black
                bg-white
                rounded-xl
                gap-2
              "
            >
              <Rocket size={18} />
              Publish
            </Link>
          </div>
        </div>
        {/* {dashboard.completion < 100 && (
          <div
            className="
              p-6
              bg-blue-500/5
              rounded-[32px] border border-blue-500/20
            "
          >
            <div
              className="
                flex flex-col lg:flex-row lg:items-center lg:justify-between
                gap-4
              "
            >
              <div>
                <p
                  className="
                    text-sm text-blue-400 uppercase tracking-[0.15em]
                  "
                >
                  Next Step
                </p>

                <h3
                  className="
                    mt-2
                    text-2xl font-semibold
                  "
                >
                  Continue Building Your Portfolio
                </h3>

                <p
                  className="
                    mt-2
                    text-zinc-400
                  "
                >
                  Complete the next unfinished section to improve your portfolio
                  score.
                </p>
              </div>

              <Link
                href={dashboard.nextStep}
                className="
                  inline-flex items-center
                  px-5 py-3
                  font-medium text-black
                  bg-white
                  rounded-xl
                  gap-2
                "
              >
                Start Building
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        )} */}

        <div
          className="
            grid md:grid-cols-3
            mt-10
            gap-6
          "
        >
          <div>
            <p
              className="
                text-zinc-500
              "
            >
              Completion
            </p>

            <h2
              className="
                mt-2
                text-5xl font-bold
              "
            >
              {dashboard.completion}%
            </h2>
          </div>

          <div>
            <p
              className="
                text-zinc-500
              "
            >
              Portfolio Score
            </p>

            <h2
              className="
                mt-2
                text-5xl font-bold
              "
            >
              {dashboard.score}
            </h2>
          </div>

          <div>
            <p
              className="
                text-zinc-500
              "
            >
              Views
            </p>

            <h2
              className="
                mt-2
                text-5xl font-bold
              "
            >
              {dashboard.views}
            </h2>
          </div>
        </div>

        <div
          className="
            overflow-hidden
            h-3
            mt-8
            bg-white/10
            rounded-full
          "
        >
          <div
            className="
              h-full
              bg-white
              rounded-full
            "
            style={{
              width: `${dashboard.completion}%`,
            }}
          />
        </div>
      </div>

      {/* Stats */}
      <div
        className="
          grid md:grid-cols-2 xl:grid-cols-4
          gap-5
        "
      >
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="
                p-6
                bg-white/[0.03]
                rounded-[28px] border border-white/10
              "
            >
              <div
                className="
                  flex items-center justify-between
                "
              >
                <Icon
                  size={20}
                  className="
                    text-zinc-500
                  "
                />

                <span
                  className="
                    text-zinc-500
                  "
                >
                  {item.title}
                </span>
              </div>

              <h3
                className="
                  mt-6
                  text-4xl font-bold
                "
              >
                {item.value}
              </h3>
            </div>
          );
        })}
      </div>

      <div
        className="
          grid lg:grid-cols-2
          gap-6
        "
      >
        {/* Roadmap */}
        <div
          className="
            p-6
            bg-white/[0.03]
            rounded-[32px] border border-white/10
          "
        >
          <h2
            className="
              text-xl font-semibold
            "
          >
            Builder Roadmap
          </h2>

          <div
            className="
              mt-6 space-y-3
            "
          >
            {roadmap.map((section) => (
              <Link
                key={section.title}
                href={section.href}
                className="
                  flex items-center justify-between
                  px-4 py-3
                  hover:bg-white/[0.04]
                  rounded-xl border border-white/10
                  transition
                "
              >
                <div
                  className="
                    flex items-center
                    gap-3
                  "
                >
                  {section.completed ? (
                    <CheckCircle2
                      size={18}
                      className="
                        text-green-400
                      "
                    />
                  ) : (
                    <Circle
                      size={18}
                      className="
                        text-zinc-600
                      "
                    />
                  )}

                  <span>{section.title}</span>
                </div>

                <ArrowRight size={16} />
              </Link>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div
          className="
            p-6
            bg-white/[0.03]
            rounded-[32px] border border-white/10
          "
        >
          <div
            className="
              flex items-center
              gap-2
            "
          >
            <TrendingUp size={18} />

            <h2
              className="
                text-xl font-semibold
              "
            >
              Portfolio Insights
            </h2>
          </div>

          <div
            className="
              mt-6 space-y-3
            "
          >
            {dashboard.insights?.length > 0 ? (
              dashboard.insights.map((item) => (
                <div
                  key={item}
                  className="
                    px-4 py-3
                    rounded-xl border border-white/10
                  "
                >
                  {item}
                </div>
              ))
            ) : (
              <div
                className="
                  px-4 py-3
                  text-green-400
                  bg-green-500/10
                  rounded-xl border border-green-500/20
                "
              >
                Portfolio looks great. Ready for publishing 🚀
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div
        className="
          p-8
          bg-gradient-to-r from-white/[0.04] to-white/[0.02]
          rounded-[32px] border border-white/10
        "
      >
        <h2
          className="
            text-2xl font-semibold
          "
        >
          Continue Building
        </h2>

        <p
          className="
            mt-2
            text-zinc-500
          "
        >
          Complete the remaining sections to improve your portfolio score and
          get ready for publishing.
        </p>

        <Link
          href={dashboard.nextStep}
          className="
            inline-flex items-center
            mt-6 px-5 py-3
            font-medium text-black
            bg-white
            rounded-xl
            gap-2
          "
        >
          Continue Building
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}
// import React from 'react'

// function page() {
//   return (
//     <div>
//       hyy
//     </div>
//   )
// }

// export default page
