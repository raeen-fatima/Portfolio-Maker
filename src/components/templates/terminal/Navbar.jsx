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
    <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-zinc-800
        bg-black/90
        backdrop-blur
      "
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <a
            href="#hero"
            className="
              font-mono
              text-green-500
            "
          >
            $ whoami
          </a>

          {/* Desktop */}
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

          {/* Right */}
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

          {/* Mobile */}
          <button
            onClick={() =>
              setOpen(!open)
            }
            className="
              text-green-500
              lg:hidden
            "
          >
            {open ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
              border-t
              border-zinc-800
              py-6
              font-mono
              lg:hidden
            "
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    text-zinc-400
                    hover:text-green-500
                  "
                >
                  {item.toLowerCase()}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}