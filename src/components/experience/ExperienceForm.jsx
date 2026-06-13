"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import {
  useForm,
  useWatch,
} from "react-hook-form";
import { toast } from "sonner";
import { experienceSchema } from "@/validators/portfolio";

export default function ExperienceForm({
  editingExperience,
  setEditingExperience,
  fetchExperience,
}) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      company: "",
      role: "",
      location: "",
      startDate: "",
      endDate: "",
      current: false,
      description: "",
    },
  });

  const isCurrent = useWatch({
    control,
    name: "current",
  });

  useEffect(() => {
    if (!editingExperience) return;

    reset({
      company: editingExperience.company || "",
      role: editingExperience.role || "",
      location: editingExperience.location || "",
      startDate: editingExperience.startDate || "",
      endDate: editingExperience.endDate || "",
      current: Boolean(editingExperience.current),
      description: editingExperience.description || "",
    });
  }, [editingExperience, reset]);

  const onSubmit = async (data) => {
    try {
      const method = editingExperience
        ? "PUT"
        : "POST";

      const body = {
        ...data,
        endDate: data.current ? "" : data.endDate,
      };

      if (editingExperience) {
        body.experienceId =
          editingExperience._id;
      }

      const response = await fetch(
        "/api/portfolio/experience",
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
        company: "",
        role: "",
        location: "",
        startDate: "",
        endDate: "",
        current: false,
        description: "",
      });

      setEditingExperience?.(null);
      await fetchExperience?.();
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          {editingExperience
            ? "Edit Experience"
            : "Add Experience"}
        </h2>

        <p className="text-gray-500 mt-2">
          Add jobs, internships, freelance work, or volunteer roles.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Company
            </label>

            <input
              type="text"
              placeholder="Acme Studio"
              {...register("company")}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 outline-none focus:border-black focus:bg-white transition"
            />

            {errors.company && (
              <p className="text-red-500 text-sm mt-2">
                {errors.company.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              Role
            </label>

            <input
              type="text"
              placeholder="Frontend Developer"
              {...register("role")}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 outline-none focus:border-black focus:bg-white transition"
            />

            {errors.role && (
              <p className="text-red-500 text-sm mt-2">
                {errors.role.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Location
          </label>

          <input
            type="text"
            placeholder="Remote, Mumbai, India"
            {...register("location")}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 outline-none focus:border-black focus:bg-white transition"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Start Date
            </label>

            <input
              type="month"
              {...register("startDate")}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 outline-none focus:border-black focus:bg-white transition"
            />

            {errors.startDate && (
              <p className="text-red-500 text-sm mt-2">
                {errors.startDate.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">
              End Date
            </label>

            <input
              type="month"
              disabled={isCurrent}
              {...register("endDate")}
              className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 outline-none focus:border-black focus:bg-white transition disabled:opacity-60"
            />
          </div>
        </div>

        <label className="flex items-center gap-3 text-sm font-medium">
          <input
            type="checkbox"
            {...register("current")}
            className="h-4 w-4 accent-black"
          />
          I currently work here
        </label>

        <div>
          <label className="block text-sm font-medium mb-2">
            Description
          </label>

          <textarea
            rows={5}
            placeholder="Describe your responsibilities and achievements..."
            {...register("description")}
            className="w-full bg-zinc-50 border border-zinc-200 rounded-2xl px-4 py-3.5 outline-none focus:border-black focus:bg-white transition resize-none"
          />

          {errors.description && (
            <p className="text-red-500 text-sm mt-2">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            type="submit"
            className="flex-1 bg-black text-white py-3.5 rounded-2xl font-medium hover:opacity-90 transition"
          >
            {editingExperience
              ? "Update Experience"
              : "Save Experience"}
          </button>

          {editingExperience && (
            <button
              type="button"
              onClick={() => {
                setEditingExperience(null);
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
