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
      <div className="bg-white border border-zinc-200 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-zinc-300">
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
