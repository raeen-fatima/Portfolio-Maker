"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  LayoutDashboard,
  Settings,
  LogOut,
  ArrowRight,
} from "lucide-react";
import LogoutButton from "@/components/ui/LogoutButton";

export default function MobileMenu({ user }) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Features", href: "#features" },
    { name: "Templates", href: "#templates" },
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Trigger */}
      <button
        onClick={() => setOpen(true)}
        className="
          lg:hidden
          flex items-center justify-center
          h-11 w-11 text-white/70
          rounded-xl
          border border-white/10
          bg-white/[0.03]
        "
      >
        <Menu size={20} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 z-[998]
          bg-black/60 backdrop-blur-sm
          transition-all duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Menu */}
      <div
        className={`
          fixed
          top-14
          left-4
          right-4
          z-[999]

          rounded-[28px]
          border border-white/10
          bg-zinc-950

          p-5

          transition-all duration-300

          ${
            open
              ? "translate-y-0 opacity-100"
              : "-translate-y-6 opacity-0 pointer-events-none"
          }
        `}
      >
        {/* Header */}
        <div
          className="
            flex items-center justify-between
          "
        >
          <h3
            className="
              font-semibold text-white
            "
          >
            FolioForge
          </h3>

          <button
            onClick={() => setOpen(false)}
            className="
              flex h-10 w-10
              items-center justify-center
              rounded-xl text-white/70
              border border-white/10
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Links */}
        <div
          className="
            mt-6 space-y-1
          "
        >
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="
                flex items-center justify-between
                rounded-xl
                px-4 py-3

                text-zinc-400
                hover:text-white
                hover:bg-white/[0.04]

                transition
              "
            >
              {link.name}
              <ArrowRight size={16} />
            </a>
          ))}
        </div>

        <div
          className="
            my-5
            border-t border-white/10
          "
          /
        >

        {user ? (
          <div
            className="
              space-y-2
            "
          >
            <Link
              href="/dashboard"
              className="
                flex items-center
                px-4 py-3
                text-md text-white/60
                hover:bg-white/[0.04]
                rounded-xl border border-white/10
                gap-3
              "
            >
              <LayoutDashboard size={18} />
              Dashboard
            </Link>

            <div
              className="
                flex items-center
                w-full
                px-4 py-3
                text-red-400
                bg-red-500/10
                rounded-xl border border-red-500/20
                gap-3
              "
            >
              
              <LogoutButton size={18} />
            </div>
          </div>
        ) : (
          <div
            className="
              space-y-3
            "
          >
            <Link
              href="/auth/login"
              className="
                block
                py-3
                text-center
                rounded-xl border border-white/10
              "
            >
              Sign In
            </Link>

            <Link
              href="/auth/register"
              className="
                block
                py-3
                text-center text-black font-medium
                bg-white
                rounded-xl
              "
            >
              Start Building
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
