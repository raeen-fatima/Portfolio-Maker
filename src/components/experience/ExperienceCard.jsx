"use client";

import DeleteModal from "@/components/ui/DeleteModal";
import { CalendarDays, MapPin, MoreVertical } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function formatMonth(value) {
  if (!value) return "";

  const [year, month] = value.split("-");
  const date = new Date(Number(year), Number(month) - 1);

  return date.toLocaleDateString("en", {
    month: "short",
    year: "numeric",
  });
}

export default function ExperienceCard({ experience, onDelete, onEdit }) {
  const [showMenu, setShowMenu] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dateRange = `${formatMonth(experience.startDate)} - ${
    experience.current ? "Present" : formatMonth(experience.endDate)
  }`;

  return (
    <>
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
          left-6
          top-8
          h-3
          w-3
          rounded-full
          bg-white
        "
        />

        <div className="ml-8">
          {/* Header */}
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
                {experience.company}
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
                {experience.role}
              </h3>

              {experience.current && (
                <div
                  className="
                  mt-3
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-green-500/20
                  bg-green-500/10
                  px-3
                  py-1
                  text-xs
                  font-medium
                  text-green-400
                "
                >
                  Current Position
                </div>
              )}
            </div>

            {/* Menu */}
            <div className="relative shrink-0" ref={menuRef}>
              <button
                type="button"
                onClick={() => setShowMenu((prev) => !prev)}
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
                  right-0
                  top-12
                  z-20
                  w-44
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/10
                  bg-zinc-950
                  shadow-xl
                "
                >
                  <button
                    type="button"
                    onClick={() => {
                      onEdit(experience);
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
                    Edit Experience
                  </button>

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
                    Delete Experience
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Date + Location */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span
              className="
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
              <CalendarDays size={14} />
              {dateRange}
            </span>

            {experience.location && (
              <span
                className="
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
                <MapPin size={14} />
                {experience.location}
              </span>
            )}
          </div>

          {/* Description */}
          {experience.description && (
            <p
              className="
              mt-6
              whitespace-pre-line
              leading-relaxed
              text-zinc-400
            "
            >
              {experience.description}
            </p>
          )}
        </div>
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
