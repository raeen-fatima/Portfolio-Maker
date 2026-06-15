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
        z-50
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
              font-semibold
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
            className="lg:hidden"
          >
            {open ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
              border-t
              border-zinc-200
              py-6
              lg:hidden
            "
          >
            <nav className="flex flex-col gap-5">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    text-zinc-700
                    transition
                    hover:text-lime-500
                  "
                >
                  {item}
                </a>
              ))}

              <a
                href="#contact"
                className="
                  mt-2
                  inline-flex
                  w-fit
                  rounded-full
                  bg-lime-300
                  px-5
                  py-2.5
                  text-sm
                  font-semibold
                  text-black
                "
              >
                Let's Talk
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}