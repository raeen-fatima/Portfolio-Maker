"use client";

import DeleteModal from "@/components/ui/DeleteModal";
import {
  CalendarDays,
  MapPin,
  MoreVertical,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

function formatMonth(value) {
  if (!value) return "";

  const [year, month] = value.split("-");
  const date = new Date(
    Number(year),
    Number(month) - 1
  );

  return date.toLocaleDateString("en", {
    month: "short",
    year: "numeric",
  });
}

export default function ExperienceCard({
  experience,
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

  const dateRange = `${formatMonth(
    experience.startDate
  )} - ${
    experience.current
      ? "Present"
      : formatMonth(experience.endDate)
  }`;

  return (
    <>
      <div className="bg-white border border-zinc-200 rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-zinc-300">
        <div className="flex justify-between items-start gap-4">
          <div>
            <p className="text-sm font-medium text-zinc-500">
              {experience.company}
            </p>

            <h3 className="text-xl font-bold mt-1">
              {experience.role}
            </h3>
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
                    onEdit(experience);
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-xl"
                >
                  Edit Experience
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setShowDelete(true);
                    setShowMenu(false);
                  }}
                  className="w-full text-left px-4 py-3 rounded-xl text-red-500 hover:bg-red-50"
                >
                  Delete Experience
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mt-4 text-sm text-zinc-500">
          <span className="inline-flex items-center gap-2">
            <CalendarDays size={16} />
            {dateRange}
          </span>

          {experience.location && (
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} />
              {experience.location}
            </span>
          )}
        </div>

        <p className="text-gray-600 mt-5 leading-relaxed whitespace-pre-line">
          {experience.description}
        </p>
      </div>

      <DeleteModal
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={() => {
          onDelete(experience._id);
          setShowDelete(false);
        }}
        title="Delete Experience"
        description={`Are you sure you want to delete "${experience.role}" at "${experience.company}"? This action cannot be undone.`}
        confirmText="Delete"
      />
    </>
  );
}
