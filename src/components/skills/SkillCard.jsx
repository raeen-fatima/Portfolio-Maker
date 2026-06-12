"use client";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import DeleteModal from "@/components/ui/DeleteModal";

export default function SkillCard({ skill, onDelete }) {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <div
      className="
        group
        flex
        items-center
        justify-between
        gap-4
        px-4
        py-3
        bg-white
        border
        border-zinc-200
        rounded-2xl
        hover:border-black
        hover:shadow-md
        transition-all
        duration-200
      "
    >
      {/* Skill Name */}
      <div className="flex items-center gap-3">
        <div
          className="
            w-2.5
            h-2.5
            rounded-full
            bg-black
          "
        />

        <span
          className="
            font-medium
            text-zinc-800
          "
        >
          {skill.name}
        </span>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => setShowDelete(true)}
        className="
          opacity-0
          group-hover:opacity-100
          p-2
          rounded-xl
          text-zinc-500
          hover:bg-red-50
          hover:text-red-500
          transition-all
        "
      >
        <Trash2 className="text-red-500" size={16} />
      </button>
      {/* Delete Modal */}
      <DeleteModal
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={() => {
          onDelete(skill._id);
          setShowDelete(false);
        }}
        title="Delete Skill"
        description={`Are you sure you want to delete "${skill.name}"? This action cannot be undone.`}
        confirmText="Delete"
      />
    </div>
  );
}
