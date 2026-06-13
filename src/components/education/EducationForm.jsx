"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { educationSchema } from "@/validators/portfolio";

export default function EducationForm({
  editingEducation,
  setEditingEducation,
  fetchEducation,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      institution: "",
      degree: "",
      startYear: "",
      endYear: "",
    },
  });

  useEffect(() => {
    if (!editingEducation) return;

    reset({
      institution:
        editingEducation.institution || "",
      degree: editingEducation.degree || "",
      startYear:
        editingEducation.startYear || "",
      endYear:
        editingEducation.endYear || "",
    });
  }, [editingEducation, reset]);

  const onSubmit = async (data) => {
    try {
      const method = editingEducation
        ? "PUT"
        : "POST";

      const body = { ...data };

      if (editingEducation) {
        body.educationId =
          editingEducation._id;
      }

      const response = await fetch(
        "/api/portfolio/education",
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
        institution: "",
        degree: "",
        startYear: "",
        endYear: "",
      });

      setEditingEducation?.(null);
      await fetchEducation?.();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          {editingEducation
            ? "Edit Education"
            : "Add Education"}
        </h2>

        <p className="text-gray-500 mt-2">
          Add degrees, diplomas,
          certifications, and school history.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div>
          <label className="block text-sm font-medium mb-2">
            Institution
          </label>

          <input
            type="text"
            placeholder="University of Mumbai"
            {...register("institution")}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 outline-none focus:border-black focus:bg-white transition"
          />

          {errors.institution && (
            <p className="text-red-500 text-sm mt-2">
              {errors.institution.message}
            </p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Degree
          </label>

          <input
            type="text"
            placeholder="Bachelor of Computer Applications"
            {...register("degree")}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 outline-none focus:border-black focus:bg-white transition"
          />

          {errors.degree && (
            <p className="text-red-500 text-sm mt-2">
              {errors.degree.message}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Start Year
            </label>

            <input
              type="number"
              min="1950"
              max="2100"
              placeholder="2022"
              {...register("startYear")}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 outline-none focus:border-black focus:bg-white transition"
            />

            {errors.startYear && (
              <p className="text-red-500 text-sm mt-2">
                {errors.startYear.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              End Year
            </label>

            <input
              type="number"
              min="1950"
              max="2100"
              placeholder="2026"
              {...register("endYear")}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 outline-none focus:border-black focus:bg-white transition"
            />

            {errors.endYear && (
              <p className="text-red-500 text-sm mt-2">
                {errors.endYear.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-black text-white py-3.5 rounded-2xl font-medium hover:opacity-90 transition"
          >
            {editingEducation
              ? "Update Education"
              : "Save Education"}
          </button>

          {editingEducation && (
            <button
              type="button"
              onClick={() => {
                setEditingEducation(null);
                reset();
              }}
              className="px-6 py-3.5 border border-zinc-200 rounded-2xl font-medium hover:bg-zinc-100 transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
