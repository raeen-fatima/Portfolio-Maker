"use client";
import { useState } from "react";
import { Trash2 } from "lucide-react";
import DeleteModal from "@/components/ui/DeleteModal";

export default function SkillCard({ skill, onDelete }) {
  const [showDelete, setShowDelete] = useState(false);
  return (
    <>
      <div
        className="
        group
        flex
        items-center
        justify-between
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-white/[0.03]
        px-5
        py-4
        transition-all
        duration-300
        hover:border-white/20
      "
      >
        {/* Skill */}
        <div className="flex items-center gap-3">
          <div
            className="
            h-2.5
            w-2.5
            rounded-full
            bg-white
          "
          />

          <span
            className="
            font-medium
            text-white
          "
          >
            {skill.name}
          </span>
        </div>

        {/* Actions */}
        <button
          onClick={() => setShowDelete(true)}
          className="
          rounded-xl
          p-2
          text-zinc-500
          opacity-0
          transition-all
          duration-200
          group-hover:opacity-100
          hover:bg-red-500/10
          hover:text-red-400
        "
        >
          <Trash2 size={16} />
        </button>
      </div>

      <DeleteModal
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={() => {
          onDelete(skill._id);
          setShowDelete(false);
        }}
        title="Delete Skill"
        description={`Are you sure you want to delete "${skill.name}"? This action cannot be undone.`}
        confirmText="Delete Skill"
      />
    </>
  );
}
