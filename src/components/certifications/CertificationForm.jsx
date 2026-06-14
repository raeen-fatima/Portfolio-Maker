"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { certificationSchema } from "@/validators/portfolio";

export default function CertificationForm({
  editingCertification,
  setEditingCertification,
  fetchCertifications,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(certificationSchema),
    defaultValues: {
      title: "",
      issuer: "",
      issueDate: "",
      credentialUrl: "",
    },
  });

  useEffect(() => {
    if (!editingCertification) return;

    reset({
      title: editingCertification.title || "",
      issuer: editingCertification.issuer || "",
      issueDate: editingCertification.issueDate || "",
      credentialUrl:
        editingCertification.credentialUrl || "",
    });
  }, [editingCertification, reset]);

  const onSubmit = async (data) => {
    try {
      const method = editingCertification
        ? "PUT"
        : "POST";

      const body = { ...data };

      if (editingCertification) {
        body.certificationId =
          editingCertification._id;
      }

      const response = await fetch(
        "/api/portfolio/certifications",
        {
          method,
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      reset({
        title: "",
        issuer: "",
        issueDate: "",
        credentialUrl: "",
      });

      setEditingCertification?.(null);

      await fetchCertifications?.();
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          {editingCertification
            ? "Edit Certification"
            : "Add Certification"}
        </h2>

        <p className="text-gray-500 mt-2">
          Showcase certifications, licenses, and
          professional credentials.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        {/* Certification Title */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Certification Title
          </label>

          <input
            type="text"
            placeholder="Google Cybersecurity Professional Certificate"
            {...register("title")}
            className="
              w-full
              bg-zinc-50
              border
              border-zinc-200
              rounded-2xl
              px-4
              py-3.5
              outline-none
              focus:border-black
              focus:bg-white
              transition
            "
          />

          {errors.title && (
            <p className="text-red-500 text-sm mt-2">
              {errors.title.message}
            </p>
          )}
        </div>

        {/* Issuer */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Issuer
          </label>

          <input
            type="text"
            placeholder="Google"
            {...register("issuer")}
            className="
              w-full
              bg-zinc-50
              border
              border-zinc-200
              rounded-2xl
              px-4
              py-3.5
              outline-none
              focus:border-black
              focus:bg-white
              transition
            "
          />

          {errors.issuer && (
            <p className="text-red-500 text-sm mt-2">
              {errors.issuer.message}
            </p>
          )}
        </div>

        {/* Issue Date */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Issue Date
          </label>

          <input
            type="month"
            {...register("issueDate")}
            className="
              w-full
              bg-zinc-50
              border
              border-zinc-200
              rounded-2xl
              px-4
              py-3.5
              outline-none
              focus:border-black
              focus:bg-white
              transition
            "
          />

          {errors.issueDate && (
            <p className="text-red-500 text-sm mt-2">
              {errors.issueDate.message}
            </p>
          )}
        </div>

        {/* Credential URL */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Credential URL
          </label>

          <input
            type="text"
            placeholder="https://coursera.org/verify/..."
            {...register("credentialUrl")}
            className="
              w-full
              bg-zinc-50
              border
              border-zinc-200
              rounded-2xl
              px-4
              py-3.5
              outline-none
              focus:border-black
              focus:bg-white
              transition
            "
          />

          {errors.credentialUrl && (
            <p className="text-red-500 text-sm mt-2">
              {errors.credentialUrl.message}
            </p>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="
              flex-1
              bg-black
              text-white
              py-3.5
              rounded-2xl
              font-medium
              hover:opacity-90
              transition
            "
          >
            {editingCertification
              ? "Update Certification"
              : "Save Certification"}
          </button>

          {editingCertification && (
            <button
              type="button"
              onClick={() => {
                setEditingCertification(null);
                reset();
              }}
              className="
                px-6
                py-3.5
                border
                border-zinc-200
                rounded-2xl
                font-medium
                hover:bg-zinc-100
                transition
              "
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}