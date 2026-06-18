"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import LogoutButton from "../ui/LogoutButton";

import {
  LayoutDashboard,
  FolderKanban,
  Palette,
  BarChart3,
  Settings,
  Blocks,
} from "lucide-react";

const navigation = [
  {
    section: "MAIN",
    items: [
      {
        title: "Overview",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    section: "BUILD",
    items: [
      {
        title: "Portfolio Builder",
        href: "/dashboard/portfolio",
        icon: FolderKanban,
        children: [
          {
            title: "Hero",
            href: "/dashboard/portfolio/hero",
          },
          {
            title: "About",
            href: "/dashboard/portfolio/about",
          },
          {
            title: "Skills",
            href: "/dashboard/portfolio/skills",
          },
          {
            title: "Projects",
            href: "/dashboard/portfolio/projects",
          },
          {
            title: "Experience",
            href: "/dashboard/portfolio/experience",
          },
          {
            title: "Education",
            href: "/dashboard/portfolio/education",
          },
          {
            title: "Certifications",
            href: "/dashboard/portfolio/certifications",
          },
          {
            title: "Templates",
            href: "/dashboard/templates",
          },
          {
            title: "Preview",
            href: "/dashboard/portfolio/preview",
          },
          {
            title: "Publish",
            href: "/dashboard/portfolio/publish",
          },
        ],
      },
    ],
  },

  {
    section: "INSIGHTS",
    items: [
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: BarChart3,
      },
    ],
  },

  {
    section: "ACCOUNT",
    items: [
      {
        title: "Settings",
        href: "/dashboard/settings",
        icon: Settings,
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [builderOpen, setBuilderOpen] = useState(true);

  return (
    <aside
      className="
        fixed left-0 top-0 z-40 hidden 
        h-screen
        w-72
        shrink-0
        border-r
        border-white/10
        bg-black
        lg:flex
        lg:flex-col
      "
    >
      {/* Logo */}
      <div
        className="
          flex
          h-20
          items-center
          border-b
          border-white/10
          px-6
        "
      >
        <Link
          href="/dashboard"
          className="
            flex
            items-center
            gap-3
          "
        >
          <div
            className="
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              border
              border-white/10
              bg-white/[0.03]
            "
          >
            <Blocks size={20} />
          </div>

          <div>
            <h2
              className="
                text-lg
                font-semibold
                tracking-tight
              "
            >
              <span className="text-white">Folio</span>

              <span className="text-zinc-500">Forge</span>
            </h2>

            <p
              className="
                text-xs
                text-zinc-600
              "
            >
              Portfolio Builder
            </p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        {navigation.map((group) => (
          <div key={group.section} className="mb-8">
            <p
              className="
                mb-3
                px-3
                text-xs
                font-semibold
                uppercase
                tracking-[0.15em]
                text-zinc-600
              "
            >
              {group.section}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;

                if (item.children) {
                  return (
                    <div key={item.title}>
                      <button
                        onClick={() => setBuilderOpen(!builderOpen)}
                        className="
            flex
            w-full
            items-center
            justify-between
            rounded-xl
            px-4
            py-3
            text-sm
            font-medium
            text-zinc-400
            transition
            hover:bg-white/[0.04]
            hover:text-white
          "
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={18} />
                          {item.title}
                        </div>

                        <ChevronDown
                          size={16}
                          className={`transition ${
                            builderOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {builderOpen && (
                        <div className="mt-2 pl-3">
                          <div className="space-y-1">
                            {item.children.map((child) => {
                              const active = pathname === child.href;

                              return (
                                <Link
                                  key={child.href}
                                  href={child.href}
                                  className={`
                     flex items-center gap-3 
                    rounded-xl 
                    px-3
                    py-2
                    text-sm
                    transition-all duration-200
                    ${
                      active
                        ? `
                          bg-white
                          text-black font-medium
                        `
                        : `
                          text-zinc-500
                          hover:text-white
                          hover:bg-white/[0.04]
                        `
                    }
                  `}
                                >
                                  <div
                                    className={`
                h-2
                w-2
                rounded-full
                shrink-0
                ${active ? "bg-black" : "bg-zinc-700"}
              `}
                                  />
                                  {child.title}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const active = pathname === item.href;

                return (
                  <Link
                    key={item.title}
                    href={item.href}
                    className={`
        flex
        items-center
        gap-3
        rounded-xl
        px-4
        py-3
        text-sm
        font-medium
        transition-all
        duration-200
        ${
          active
            ? `
              bg-white
              text-black
            `
            : `
              text-zinc-500
              hover:bg-white/[0.04]
              hover:text-white
            `
        }
      `}
                  >
                    <Icon size={18} />
                    {item.title}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div
        className="
          border-t
          border-white/10
          p-4
        "
      >
        {/* Progress Card */}
        <div
          className="
            mb-2
            rounded-2xl
            border
            border-white/10
            bg-white/[0.03]
            p-4
          "
        >
          <div className="flex items-center justify-between">
            <span
              className="
                text-sm
                font-medium
              "
            >
              Portfolio Completion
            </span>

            <span
              className="
                font-medium
                text-zinc-500
              "
            >
              65%
            </span>
          </div>

          <div
            className="
              mt-2
              h-1.5
              overflow-hidden
              rounded-full
              bg-white/10
            "
          >
            <div
              className="
                h-full
                w-[65%]
                rounded-full
                bg-white
              "
            />
          </div>
        </div>

        <div className="px-2">
          <LogoutButton />
        </div>
      </div>
    </aside>
  );
}
