"use client";

import DeleteModal from "@/components/ui/DeleteModal";
import { Award, MoreVertical, ExternalLink } from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

function formatMonth(value) {
  if (!value) return "";

  const [year, month] = value.split("-");

  const date = new Date(Number(year), Number(month) - 1);

  return date.toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function CertificationCard({
  certification,
  fetchCertifications,
  setEditingCertification,
}) {
  const [showMenu, setShowMenu] = useState(false);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const menuRef = useRef(null);

  const handleDelete = async () => {
    try {
      const response = await fetch("/api/portfolio/certifications", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          certificationId: certification._id,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      await fetchCertifications();

      setShowDeleteModal(false);
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

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
        {/* Menu */}
        <div className="absolute right-5 top-5" ref={menuRef}>
          <button
            onClick={() => setShowMenu(!showMenu)}
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
            top-10
            z-50
            w-48
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-zinc-950
            shadow-xl
          "
            >
              <button
                onClick={() => {
                  setEditingCertification(certification);
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
                Edit Certification
              </button>

              <div className="h-px bg-white/10" />

              <button
                onClick={() => {
                  setShowDeleteModal(true);
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
                Delete Certification
              </button>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="pr-10">
          {/* Icon */}
          <div
            className="
          mb-5
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-2xl
          border
          border-white/10
          bg-white/[0.03]
        "
          >
            <Award size={20} className="text-white" />
          </div>

          {/* Issuer */}
          <p
            className="
          text-xs
          uppercase
          tracking-[0.2em]
          text-zinc-600
        "
          >
            {certification.issuer}
          </p>

          {/* Title */}
          <h3
            className="
          mt-2
          text-xl
          font-semibold
          tracking-tight
          text-white
        "
          >
            {certification.title}
          </h3>

          {/* Date */}
          <div
            className="
          mt-4
          inline-flex
          items-center
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
            Issued {formatMonth(certification.issueDate)}
          </div>

          {/* Credential Link */}
          {certification.credentialUrl && (
            <a
              href={certification.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
            mt-5
            inline-flex
            items-center
            gap-2
            text-sm
            font-medium
            text-white
            transition
            hover:text-zinc-300
          "
            >
              View Credential
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={handleDelete}
        title="Delete Certification"
        description={`Are you sure you want to delete "${certification.title}"? This action cannot be undone.`}
        confirmText="Delete Certification"
      />
    </>
  );
}
