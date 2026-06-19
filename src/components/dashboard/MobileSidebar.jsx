
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import {
  Menu,
  X,
  LayoutDashboard,
  FolderKanban,
  Palette,
  BarChart3,
  Settings,
  Blocks,
} from "lucide-react";

const navigation = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    title: "Portfolio Builder",
    href: "/dashboard/portfolio",
    icon: FolderKanban,
  },

  {
    title: "Templates",
    href: "/dashboard/templates",
    icon: Palette,
  },

  {
    title: "Analytics",
    href: "/dashboard/analytics",
    icon: BarChart3,
  },

  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function MobileSidebar() {
  const [open, setOpen] =
    useState(false);

  const pathname = usePathname();

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="
          rounded-xl
          border
          border-white/10
          p-2.5
          text-white
          transition
          hover:bg-white/[0.05]
          lg:hidden
        "
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-40
          bg-black/70
          backdrop-blur-sm
          transition-all
          duration-300
          lg:hidden

          ${
            open
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Drawer */}
      <aside
        className={`
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-[300px]
          flex-col
          border-r
          border-white/10
          bg-black
          transition-transform
          duration-300
          lg:hidden

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div
          className="
            flex items-center justify-between
            h-20
            px-5
            border-b border-white/10
          "
        >
          <Link
            href="/dashboard"
            className="
              flex items-center
              gap-3
            "
          >
            <div
              className="
                flex items-center justify-center
                h-10 w-10
                bg-white/[0.03]
                rounded-xl border border-white/10
              "
            >
              <Blocks size={18} />
            </div>

            <div>
              <h2
                className="
                  font-semibold tracking-tight
                "
              >
                <span
                  className="
                    text-white
                  "
                >
                  Folio
                </span>

                <span
                  className="
                    text-zinc-500
                  "
                >
                  Forge
                </span>
              </h2>

              <p
                className="
                  text-xs text-zinc-600
                "
              >
                Portfolio Builder
              </p>
            </div>
          </Link>

          <button
            onClick={() =>
              setOpen(false)
            }
            className="
              rounded-xl
              p-2
              text-zinc-500
              transition
              hover:bg-white/[0.05]
              hover:text-white
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav */}
        <div
          className="
            flex-1
            p-4
          "
        >
          <p
            className="
              mb-3 px-3
              text-xs text-zinc-600 font-semibold tracking-[0.15em]
            "
          >
            MENU
          </p>

          <div
            className="
              space-y-1
            "
          >
            {navigation.map((item) => {
              const Icon = item.icon;

              const active =
                pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className={`
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                    text-sm
                    font-medium
                    transition

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

        {/* Bottom */}
        <div
          className="
            p-4
            border-t border-white/10
          "
        >
          <div
            className="
              p-4
              bg-white/[0.03]
              rounded-2xl border border-white/10
            "
          >
            <div
              className="
                flex items-center justify-between
              "
            >
              <span
                className="
                  text-sm
                "
              >
                Progress
              </span>

              <span
                className="
                  text-xs text-zinc-500
                "
              >
                65%
              </span>
            </div>

            <div
              className="
                overflow-hidden
                h-2
                mt-3
                bg-white/10
                rounded-full
              "
            >
              <div
                className="
                  h-full w-[65%]
                  bg-white
                "
                /
              >
            </div>

            <p
              className="
                mt-3
                text-xs text-zinc-500
              "
            >
              Complete your portfolio.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}