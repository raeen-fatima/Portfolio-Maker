"use client";

import DeleteModal from "@/components/ui/DeleteModal";
import {
  MoreVertical,
  Pencil,
  Trash2,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function ProjectCard({
  project,
  onDelete,
  onEdit,
}) {
  const [showMenu, setShowMenu] =
    useState(false);

  const [showDelete, setShowDelete] =
    useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (
      event
    ) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(
          event.target
        )
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

  return (
    <>
      <div
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.03]
          transition-all
          duration-300
          hover:-translate-y-1
          hover:border-white/20
        "
      >
        {/* Project Image */}
        {project.image && (
          <div className="relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="
                h-56
                w-full
                object-cover
                transition-transform
                duration-500
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                left-4
                top-4
                rounded-full
                border
                border-white/10
                bg-black/70
                px-3
                py-1
                text-xs
                font-medium
                text-white
                backdrop-blur
              "
            >
              Project
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3
                className="
                  line-clamp-2
                  text-xl
                  font-semibold
                  tracking-tight
                  text-white
                "
              >
                {project.title}
              </h3>
            </div>

            {/* Menu */}
            <div
              className="relative"
              ref={menuRef}
            >
              <button
                type="button"
                onClick={() =>
                  setShowMenu(
                    (prev) => !prev
                  )
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
                <MoreVertical
                  size={18}
                />
              </button>

              {showMenu && (
                <div
                  className="
                    absolute
                    right-0
                    top-12
                    z-50
                    w-44
                    overflow-hidden
                    rounded-2xl
                    border
                    border-white/10
                    bg-zinc-950
                    shadow-2xl
                  "
                >
                  <button
                    type="button"
                    onClick={() => {
                      onEdit(project);
                      setShowMenu(false);
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-2
                      px-4
                      py-3
                      text-left
                      text-sm
                      text-zinc-300
                      transition
                      hover:bg-white/[0.04]
                    "
                  >
                    <Pencil
                      size={15}
                    />
                    Edit Project
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowDelete(
                        true
                      );
                      setShowMenu(
                        false
                      );
                    }}
                    className="
                      flex
                      w-full
                      items-center
                      gap-2
                      px-4
                      py-3
                      text-left
                      text-sm
                      text-red-400
                      transition
                      hover:bg-red-500/10
                    "
                  >
                    <Trash2
                      size={15}
                    />
                    Delete Project
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Description */}
          <p
            className="
              mt-3
              line-clamp-3
              text-sm
              leading-relaxed
              text-zinc-500
            "
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies
              ?.slice(0, 4)
              .map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.03]
                    px-3
                    py-1.5
                    text-[11px]
                    font-medium
                    uppercase
                    tracking-wide
                    text-zinc-400
                  "
                >
                  {tech}
                </span>
              ))}
          </div>

          {/* Actions */}
          <div className="mt-auto flex gap-3 pt-6">
            <a
              href={
                project.githubUrl
              }
              target="_blank"
              rel="noreferrer"
              className="
                flex-1
                rounded-xl
                border
                border-white/10
                px-4
                py-2.5
                text-center
                text-sm
                font-medium
                text-white
                transition
                hover:bg-white/[0.04]
              "
            >
              GitHub
            </a>

            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="
                flex-1
                rounded-xl
                bg-white
                px-4
                py-2.5
                text-center
                text-sm
                font-medium
                text-black
                transition
                hover:opacity-90
              "
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>

      <DeleteModal
        isOpen={showDelete}
        onClose={() =>
          setShowDelete(false)
        }
        onConfirm={() => {
          onDelete(project._id);
          setShowDelete(false);
        }}
        title="Delete Project"
        description={`Are you sure you want to delete "${project.title}"? This action cannot be undone.`}
        confirmText="Delete Project"
      />
    </>
  );
}