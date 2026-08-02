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
    "Projects",
    "Education",
    "Experience",
    "Contact",
  ];

  return (
    <header
      className="
        sticky
        top-0
        z-20
        border-b
        border-zinc-200
        bg-white/90
        backdrop-blur-md
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            className="flex items-center gap-3"
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                bg-lime-300
                text-sm
                font-bold
                text-black
              "
            >
              {heroData?.name
                ?.split(" ")
                .map((n) => n[0])
                .slice(0, 2)
                .join("") || "PF"}
            </div>

            <div>
              <p
                className="
                  text-sm
                  font-bold
                  text-black
                "
              >
                {heroData?.name}
              </p>

              <p
                className="
                  text-xs
                  text-zinc-500
                "
              >
                Portfolio
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className="
              hidden
              items-center
              gap-8
              lg:flex
            "
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  text-sm
                  font-medium
                  text-zinc-600
                  transition
                  hover:text-lime-500
                "
              >
                {item}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="#contact"
            className="
              hidden
              rounded-full
              bg-lime-300
              px-5
              py-2.5
              text-sm
              font-bold
              text-black
              transition
              hover:bg-lime-400
              lg:block
            "
          >
            Let's Talk
          </a>

          {/* Mobile Button */}
          <button
            onClick={() =>
              setOpen(!open)
            }
            className="lg:hidden text-black"
          >
            {open ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
{/* Overlay */}
{open && (
  <div
    onClick={() => setOpen(false)}
    className="
      fixed
      inset-0
      bg-black/40
      z-30
      lg:hidden
    "
  />
)}

{/* Drawer */}
<div
  className={`
    fixed
    top-0
    right-0
    h-screen
    w-72
    bg-white/90
    backdrop-blur-md
    border-l
    border-zinc-200
    z-40
    p-6
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
  <div className="flex justify-end text-black">
    <button
      onClick={() => setOpen(false)}
    >
      <X size={24} />
    </button>
  </div>

  <nav className="mt-10 flex flex-col gap-6">
    {navItems.map((item) => (
      <a
        key={item}
        href={`#${item.toLowerCase()}`}
        onClick={() => setOpen(false)}
        className="
          text-lg
          font-medium
          text-zinc-700
          hover:text-lime-500
        "
      >
        {item}
      </a>
    ))}

    <a
      href="#contact"
      className="
        mt-4
        rounded-full
        bg-lime-300
        px-5
        py-3
        text-center
        font-semibold
        text-black
      "
    >
      Let's Talk
    </a>
  </nav>
</div>
        
      </div>
    </header>
  );
}