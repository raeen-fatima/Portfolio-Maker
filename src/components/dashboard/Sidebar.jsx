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
  Settings,
} from "lucide-react";
import LogoutButton from "@/components/LogoutButton";
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
    name: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="h-full  flex flex-col">
      <h1 className="text-2xl font-bold px-6 py-6 border-b">FolioForge</h1>

      <nav className="flex-1 p-4 space-y-2">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <>
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  pathname === link.href
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Icon size={18} />
                <span>{link.name}</span>
              </Link>

            </>
          );
        })}
      </nav>
    </div>
  );
}
