"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden"
      >
        <Menu size={24} />
      </button>

      {open && (
        <>
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />

          <div className="fixed top-0 left-0 h-screen w-72 bg-white z-50 shadow-xl">
            <div className="flex justify-end p-4">
              <button
                onClick={() => setOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <Sidebar />
          </div>
        </>
      )}
    </>
  );
}