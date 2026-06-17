"use client";

import {
  ChevronDown,
  LayoutDashboard,
  Settings,
} from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import LogoutButton from "@/components/ui/LogoutButton";

export default function UserDropdown({
  user,
}) {
  const [open, setOpen] =
    useState(false);

  return (
    <div className="relative">
      <button
        onClick={() =>
          setOpen(!open)
        }
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
            rounded-full
            bg-white
            font-semibold
            text-black
          "
        >
          {user.name
            ?.charAt(0)
            .toUpperCase()}
        </div>

        <ChevronDown
          size={16}
          className="text-zinc-400"
        />
      </button>

      {open && (
        <div
          className="
            absolute
            right-0
            mt-3
            w-56
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-zinc-950
            shadow-2xl
          "
        >
          <div className="border-b border-white/10 p-4">
            <p className="font-medium text-white">
              {user.name}
            </p>

            <p className="text-sm text-zinc-500">
              {user.email}
            </p>
          </div>

          <Link
            href="/dashboard"
            className="
              flex
              items-center
              gap-3
              px-4
              py-3
              text-zinc-300
              hover:bg-white/5
            "
          >
            <LayoutDashboard
              size={16}
            />
            Dashboard
          </Link>

          <Link
            href="/dashboard/settings"
            className="
              flex
              items-center
              gap-3
              px-4
              py-3
              text-zinc-300
              hover:bg-white/5
            "
          >
            <Settings size={16} />
            Settings
          </Link>

          <div className="border-t border-white/10 p-4">
            <LogoutButton />
          </div>
        </div>
      )}
    </div>
  );
}