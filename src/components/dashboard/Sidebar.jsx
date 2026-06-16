"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  FolderKanban,
  Code2,
  Briefcase,
  GraduationCap,
  LayoutTemplate,
  Eye,
  Globe ,
  Settings,
  ShieldCheck,
} from "lucide-react";

const links = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Hero",
    href: "/dashboard/hero",
    icon: User,
  },
  {
    name: "About",
    href: "/dashboard/about",
    icon: User,
  },
  {
    name: "Projects",
    href: "/dashboard/projects",
    icon: FolderKanban,
  },
  {
    name: "Skills",
    href: "/dashboard/skills",
    icon: Code2,
  },
  {
    name: "Experience",
    href: "/dashboard/experience",
    icon: Briefcase,
  },
  {
    name: "Education",
    href: "/dashboard/education",
    icon: GraduationCap,
  },
  {
    name: "Certifications",
    href: "/dashboard/certifications",
    icon: ShieldCheck,
  },
  {
    name: "Contact",
    href: "/dashboard/contact",
    icon: User,
  },
  {
    name: "Templates",
    href: "/dashboard/templates",
    icon: LayoutTemplate,
  },
  {
    name: "Preview",
    href: "/dashboard/preview",
    icon: Eye,
  },
  {
    name: "Publish",
    href: "/dashboard/publish",
    icon: Globe,
  },
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col bg-white">
      {/* Logo */}
      <div className="hidden lg:block border-b px-6 py-6">
        <h1 className="text-2xl font-bold tracking-tight">FolioForge</h1>

        <p className="mt-1 text-sm text-zinc-500">Build. Preview. Publish.</p>
      </div>

      {/* Navigation */}
      <nav
        className="
          flex-1
          overflow-y-auto
          p-4
          space-y-2
        "
      >
        {links.map((link) => {
          const Icon = link.icon;

          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`
                group
                flex
                items-center
                gap-3
                rounded-xl
                px-4
                py-3
                text-sm
                font-medium
                transition-all

                ${
                  active
                    ? "bg-black text-white shadow-md"
                    : "text-zinc-700 hover:bg-zinc-100"
                }
              `}
            >
              <Icon
                size={18}
                className={`
                  transition

                  ${
                    active
                      ? "text-white"
                      : "text-zinc-500 group-hover:text-black"
                  }
                `}
              />

              <span>{link.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="border-t p-4">
        <div
          className="
            rounded-xl
            bg-zinc-100
            px-4
            py-3
          "
        >
          <p className="text-sm font-medium">FolioForge</p>

          <p className="mt-1 text-xs text-zinc-500">Portfolio Builder v1.0</p>
        </div>
      </div>
    </div>
  );
}
