"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Menu Button */}
      <button
        onClick={() => setOpen(true)}
        className="
          rounded-lg
          p-2
          transition
          hover:bg-zinc-100
          lg:hidden
        "
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed
          inset-0
          z-40
          bg-black/50
          backdrop-blur-sm
          transition-opacity
          duration-300
          lg:hidden

          ${
            open
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      />

      {/* Drawer */}
      <div
        className={`
          fixed
          top-0
          left-0
          z-50
          h-screen
          w-72
          bg-white
          shadow-2xl
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
            flex
            items-center
            justify-between
            border-b
            px-5
            py-4
          "
        >
          <div>
            <h2 className="font-bold text-lg">
              FolioForge
            </h2>

            <p className="text-xs text-zinc-500">
              Portfolio Builder
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="
              rounded-lg
              p-2
              transition
              hover:bg-zinc-100
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="h-[calc(100vh-73px)]">
          <Sidebar />
        </div>
      </div>
    </>
  );
}