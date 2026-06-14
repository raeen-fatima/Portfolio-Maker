"use client";

import DeleteModal from "@/components/ui/DeleteModal";
import {
  Award,
  MoreVertical,
  ExternalLink,
} from "lucide-react";
import { useRef, useState } from "react";
import { toast } from "sonner";

function formatMonth(value) {
  if (!value) return "";

  const [year, month] = value.split("-");

  const date = new Date(
    Number(year),
    Number(month) - 1
  );

  return date.toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric",
    }
  );
}

export default function CertificationCard({
  certification,
  fetchCertifications,
  setEditingCertification,
}) {
  const [showMenu, setShowMenu] =
    useState(false);

  const [showDeleteModal,
    setShowDeleteModal] =
    useState(false);

  const menuRef = useRef(null);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        "/api/portfolio/certifications",
        {
          method: "DELETE",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            certificationId:
              certification._id,
          }),
        }
      );

      const result =
        await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      await fetchCertifications();

      setShowDeleteModal(false);
    } catch (error) {
      console.log(error);

      toast.error(
        "Something went wrong"
      );
    }
  };

  return (
    <>
      <div
        className="
          relative
          rounded-3xl
          border
          border-zinc-200
          bg-white
          p-5
        "
      >
        {/* Menu */}
        <div
          className="absolute top-5 right-5"
          ref={menuRef}
        >
          <button
            onClick={() =>
              setShowMenu(!showMenu)
            }
            className="
              rounded-xl
              p-2
              hover:bg-zinc-100
            "
          >
            <MoreVertical size={18} />
          </button>

          {showMenu && (
            <div
              className="
                absolute
                right-0
                mt-2
                w-36
                overflow-hidden
                rounded-2xl
                border
                border-zinc-200
                bg-white
                shadow-lg
              "
            >
              <button
                onClick={() => {
                  setEditingCertification(
                    certification
                  );
                  setShowMenu(false);
                }}
                className="
                  w-full
                  px-4
                  py-3
                  text-left
                  text-sm
                  hover:bg-zinc-50
                "
              >
                Edit
              </button>

              <button
                onClick={() => {
                  setShowDeleteModal(
                    true
                  );
                  setShowMenu(false);
                }}
                className="
                  w-full
                  px-4
                  py-3
                  text-left
                  text-sm
                  text-red-500
                  hover:bg-zinc-50
                "
              >
                Delete
              </button>
            </div>
          )}
        </div>

        {/* Icon */}
        <div
          className="
            mb-4
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            bg-zinc-100
          "
        >
          <Award size={20} />
        </div>

        {/* Title */}
        <h3
          className="
            text-lg
            font-semibold
            pr-10
          "
        >
          {certification.title}
        </h3>

        {/* Issuer */}
        <p className="mt-2 text-zinc-600">
          {certification.issuer}
        </p>

        {/* Date */}
        <p
          className="
            mt-2
            text-sm
            text-zinc-400
          "
        >
          {formatMonth(
            certification.issueDate
          )}
        </p>

        {/* Credential */}
        {certification.credentialUrl && (
          <a
            href={
              certification.credentialUrl
            }
            target="_blank"
            rel="noopener noreferrer"
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-blue-600
              hover:underline
            "
          >
            View Credential
            <ExternalLink size={14} />
          </a>
        )}
      </div>

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() =>
          setShowDeleteModal(false)
        }
        onConfirm={handleDelete}
        title="Delete Certification"
        description="Are you sure you want to delete this certification?"
      />
    </>
  );
}