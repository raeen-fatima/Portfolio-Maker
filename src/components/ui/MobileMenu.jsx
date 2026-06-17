"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import LogoutButton from "../ui/LogoutButton";

export default function MobileMenu({
  user,
}) {
  const [open, setOpen] =
    useState(false);

  const links = [
    {
      name: "Features",
      href: "#features",
    },
    {
      name: "Templates",
      href: "#templates",
    },
    {
      name: "Pricing",
      href: "#pricing",
    },
  ];

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="
          text-white
          lg:hidden
        "
      >
        <Menu size={24} />
      </button>

      {open && (
        <div
          className="
            fixed
            inset-0
            z-[100]
            bg-black
          "
        >
          <div
            className="
              flex
              h-24
              items-center
              justify-between
              px-6
            "
          >
            <h2 className="text-xl font-semibold text-white">
              FolioForge
            </h2>

            <button
              onClick={() =>
                setOpen(false)
              }
              className="text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="px-6 pt-10">
            <nav className="space-y-6">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    block
                    text-2xl
                    font-medium
                    text-white
                  "
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="mt-12">
              {user ? (
                <div className="space-y-4">
                  <Link
                    href="/dashboard"
                    className="
                      block
                      rounded-xl
                      bg-white
                      px-5
                      py-4
                      text-center
                      font-medium
                      text-black
                    "
                  >
                    Dashboard
                  </Link>

                  <Link
                    href="/dashboard/settings"
                    className="
                      block
                      rounded-xl
                      border
                      border-white/10
                      px-5
                      py-4
                      text-center
                      text-white
                    "
                  >
                    Settings
                  </Link>

                  <div
                    className="
                      flex
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      py-4
                    "
                  >
                    <LogoutButton />
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <Link
                    href="/auth/login"
                    className="
                      block
                      rounded-xl
                      border
                      border-white/10
                      px-5
                      py-4
                      text-center
                      text-white
                    "
                  >
                    Sign In
                  </Link>

                  <Link
                    href="/auth/register"
                    className="
                      block
                      rounded-xl
                      bg-white
                      px-5
                      py-4
                      text-center
                      font-medium
                      text-black
                    "
                  >
                    Start Building
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}