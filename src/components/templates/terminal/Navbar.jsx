"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({
  heroData,
}) {
  const [open, setOpen] =
    useState(false);

  const navItems = [
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-20
          border-b
          border-zinc-800
          bg-black/90
          backdrop-blur
        "
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              className="
                font-mono
                text-green-500
                font-semibold
              "
            >
              $ whoami
            </a>

            {/* Desktop Navigation */}
            <nav
              className="
                hidden
                items-center
                gap-8
                font-mono
                lg:flex
              "
            >
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="
                    text-zinc-400
                    transition
                    hover:text-green-500
                  "
                >
                  {item.toLowerCase()}
                </a>
              ))}
            </nav>

            {/* Desktop User */}
            <div
              className="
                hidden
                font-mono
                text-green-500
                lg:block
              "
            >
              {heroData?.name}
            </div>

            {/* Mobile Button */}
            <button
              onClick={() =>
                setOpen(true)
              }
              className="
                text-green-500
                lg:hidden
              "
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          onClick={() =>
            setOpen(false)
          }
          className="
            fixed
            inset-0
            z-30
            bg-black/70
            lg:hidden
          "
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`
          fixed
          top-0
          right-0
          z-40
          h-screen
          w-72
          border-l
          border-zinc-800
          bg-black
          transition-transform
          duration-300
          lg:hidden

          ${
            open
              ? "translate-x-0"
              : "translate-x-full"
          }
        `}
      >
        {/* Drawer Header */}
        <div
          className="
            flex
            items-center
            justify-between
            border-b
            border-zinc-800
            p-5
          "
        >
          <div>
            <p
              className="
                font-mono
                text-green-500
                font-semibold
              "
            >
              $ whoami
            </p>

            <p
              className="
                mt-1
                text-xs
                text-zinc-500
              "
            >
              {heroData?.name}
            </p>
          </div>

          <button
            onClick={() =>
              setOpen(false)
            }
            className="
              text-green-500
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Links */}
        <nav
          className="
            flex
            flex-col
            p-5
            font-mono
          "
        >
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() =>
                setOpen(false)
              }
              className="
                border-b
                border-zinc-800
                py-4
                text-zinc-400
                transition
                hover:text-green-500
              "
            >
              {item.toLowerCase()}
            </a>
          ))}

          {/* Terminal Card */}
          <div
            className="
              mt-6
              rounded-lg
              border
              border-green-500/20
              bg-green-500/5
              p-4
            "
          >
            <p
              className="
                font-mono
                text-sm
                text-green-500
              "
            >
              {heroData?.name}
            </p>

            <p
              className="
                mt-1
                text-xs
                text-zinc-500
              "
            >
              terminal portfolio
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}