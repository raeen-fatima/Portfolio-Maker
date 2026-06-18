"use client";

import DeleteModal from "@/components/ui/DeleteModal";
import {
  GraduationCap,
  MoreVertical,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function EducationCard({
  education,
  onDelete,
  onEdit,
}) {
  const [showMenu, setShowMenu] =
    useState(false);
  const [showDelete, setShowDelete] =
    useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setShowMenu(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const yearRange = [
    education.startYear,
    education.endYear,
  ]
    .filter(Boolean)
    .join(" - ");

  return (
    <>
      {/* <div className="bg-white border border-zinc-900 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-zinc-300">
        <div className="flex justify-between items-start gap-4">
          <div className="flex gap-4">
            <div className="h-12 w-12 rounded-2xl bg-zinc-100 flex items-center justify-center shrink-0">
              <GraduationCap size={22} />
            </div>

            <div>
              <p className="text-sm font-medium text-zinc-500">
                {education.institution}
              </p>

              <h3 className="text-xl font-bold mt-1">
                {education.degree}
              </h3>

              {yearRange && (
                <p className="text-sm text-zinc-500 mt-3">
                  {yearRange}
                </p>
              )}
            </div>
          </div>

          <div
            className="relative shrink-0"
            ref={menuRef}
          >
            <button
              type="button"
              onClick={() =>
                setShowMenu((prev) => !prev)
              }
              className="p-2 rounded-lg hover:bg-zinc-100 transition"
            >
              <MoreVertical size={18} />
            </button>

            {showMenu && (
              <div className="absolute right-0 top-12 bg-white border rounded-xl shadow-lg w-44 z-20">
                <button
                  type="button"
                  onClick={() => {
                    onEdit(education);
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-xl"
                >
                  Edit Education
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowDelete(true);
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl text-red-500 hover:bg-red-50"
                >
                  Delete Education
                </button>
              </div>
            )}
          </div>
        </div>
      </div> */}
      <div
  className="
    group
    relative
    overflow-hidden
    rounded-[28px]
    border
    border-white/10
    bg-white/[0.03]
    p-6
    transition-all
    duration-300
    hover:border-white/20
  "
>
  {/* Timeline Dot */}
  <div
    className="
      absolute
      left-7
      top-8
      h-3
      w-3
      rounded-full
      bg-white
    "
  />

  <div className="ml-8">
    <div className="flex items-start justify-between gap-4">
      <div>
        <p
          className="
            text-xs
            uppercase
            tracking-[0.2em]
            text-zinc-600
          "
        >
          {education.institution}
        </p>

        <h3
          className="
            mt-2
            text-xl
            font-semibold
            tracking-tight
            text-white
          "
        >
          {education.degree}
        </h3>

        {yearRange && (
          <div
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-3
              py-1.5
              text-xs
              text-zinc-400
            "
          >
            <GraduationCap size={14} />
            {yearRange}
          </div>
        )}
      </div>

      {/* Menu */}
      <div
        className="relative shrink-0"
        ref={menuRef}
      >
        <button
          type="button"
          onClick={() =>
            setShowMenu((prev) => !prev)
          }
          className="
            rounded-xl
            p-2
            text-zinc-500
            transition
            hover:bg-white/[0.04]
            hover:text-white
          "
        >
          <MoreVertical size={18} />
        </button>

        {showMenu && (
          <div
            className="
              absolute
              right-7
              top-6
              z-50
              w-38
              overflow-hidden
              rounded-2xl
              border
              border-white/10
              bg-zinc-950
              shadow-[0_0_0_1px_rgba(255,255,255,0.05)]
              backdrop-blur-xl
            "
          >
            <button
              type="button"
              onClick={() => {
                onEdit(education);
                setShowMenu(false);
              }}
              className="
                w-full
                px-4
                py-3
                text-left
                text-sm
                text-zinc-300
                transition
                hover:bg-white/[0.04]
              "
            >
              Edit Education
            </button>
            <div className="h-px bg-white/10" />


            <button
              type="button"
              onClick={() => {
                setShowDelete(true);
                setShowMenu(false);
              }}
              className="
                w-full
                px-4
                py-3
                text-left
                text-sm
                text-red-400
                transition
                hover:bg-red-500/10
              "
            >
              Delete Education
            </button>
          </div>
        )}
      </div>
    </div>
  </div>
</div>

      <DeleteModal
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={() => {
          onDelete(education._id);
          setShowDelete(false);
        }}
        title="Delete Education"
        description={`Are you sure you want to delete "${education.degree}" from "${education.institution}"? This action cannot be undone.`}
        confirmText="Delete"
      />
    </>
  );
}
