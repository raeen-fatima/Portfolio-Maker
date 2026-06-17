"use client";
import DeleteModal from "@/components/ui/DeleteModal";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { MoreVertical } from "lucide-react";

export default function ProjectCard({ project, onDelete, onEdit }) {
  // Local UI state for the dropdown menu and delete confirmation modal.
  const [showMenu, setShowMenu] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  // Ref used to detect outside clicks for the menu.
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

  return (
    <>
      <div className="group
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
    hover:border-white/20">
        {/* Project image section */}
        {project.image && (
          <div className="relative overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={500}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        )}

        <div className="p-6">
          {/* Title and menu */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <h3 className="text-xl font-bold line-clamp-2 leading-tight">
                {project.title}
              </h3>
            </div>

            <div className="relative" ref={menuRef}>
              <button
                type="button"
                onClick={() => setShowMenu((prev) => !prev)}
                className="p-2 rounded-lg hover:bg-zinc-100 transition"
              >
                <MoreVertical size={18} />
              </button>

              {showMenu && (
                <div className="absolute right-0 top-12 bg-white border rounded-xl shadow-lg w-40 z-20">
                  <button
                    type="button"
                    onClick={() => {
                      onEdit(project);
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-gray-100 rounded-xl"
                  >
                    Edit Project
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setShowDelete(true);
                      setShowMenu(false);
                    }}
                    className="w-full text-left px-4 py-3 rounded-xl text-red-500 hover:bg-red-50"
                  >
                    Delete Project
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Project description */}
          <p className="text-gray-500 mt-3 line-clamp-3 leading-relaxed text-sm">
            {project.description}
          </p>

          {/* Technology tags */}
          <div className="flex uppercase flex-wrap gap-2 mt-5">
            {project.technologies?.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-zinc-100 text-zinc-700 rounded-full text-xs font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* External action links */}
<div className="mt-6 flex gap-3">
  <a
    href={project.githubUrl}
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

      {/* Delete confirmation modal */}

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
        confirmText="Delete"
      />
   
    </>
  );
}
