"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
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
      const method = editingExperience ? "PUT" : "POST";

      const body = {
        ...data,
        endDate: data.current ? "" : data.endDate,
      };

      if (editingExperience) {
        body.experienceId = editingExperience._id;
      }

      const response = await fetch("/api/portfolio/experience", {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

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
  const inputStyles = `
  w-full
  rounded-2xl
  border
  border-white/10
  bg-black
  px-4
  py-3.5
  text-white
  outline-none
  transition
  placeholder:text-zinc-600
  focus:border-white/20
`;
  

  return (
    <>
      <div className="mb-8">
        <div
          className="
          mb-4
          inline-flex
          items-center
          rounded-full
          border
          border-white/10
          bg-white/[0.03]
          px-3
          py-1.5
          text-xs
          uppercase
          tracking-[0.15em]
          text-zinc-500
        "
        >
          Experience Builder
        </div>

        <h2
          className="
          text-xl
          font-semibold
          tracking-tight
          text-white
        "
        >
          {editingExperience ? "Edit Experience" : "Add Experience"}
        </h2>

        <p className="mt-2 text-zinc-500">
          Add jobs, internships, freelance work, or volunteer experience.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Company + Role */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Company</label>

            <input
              type="text"
              placeholder="Acme Studio"
              {...register("company")}
              className={inputStyles}
            />

            {errors.company && (
              <p className="mt-2 text-sm text-red-500">
                {errors.company.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Role</label>

            <input
              type="text"
              placeholder="Frontend Developer"
              {...register("role")}
              className={inputStyles}
            />

            {errors.role && (
              <p className="mt-2 text-sm text-red-500">{errors.role.message}</p>
            )}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="mb-2 block text-sm font-medium">Location</label>

          <input
            type="text"
            placeholder="Remote, Delhi, India"
            {...register("location")}
            className={inputStyles}
          />
        </div>

        {/* Dates */}
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Start Date</label>

            <input
              type="month"
              {...register("startDate")}
              className={inputStyles}
            />

            {errors.startDate && (
              <p className="mt-2 text-sm text-red-500">
                {errors.startDate.message}
              </p>
            )}
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">End Date</label>

            <input
              type="month"
              disabled={isCurrent}
              {...register("endDate")}
              className={`${inputStyles} disabled:opacity-50`}
            />
          </div>
        </div>

        {/* Current Job */}
        <label
          className="
          flex
          items-center
          gap-3
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-4
        "
        >
          <input
            type="checkbox"
            {...register("current")}
            className="
            h-4
            w-4
            accent-white
          "
          />

          <span className="text-sm text-zinc-300">I currently work here</span>
        </label>

        {/* Description */}
        <div>
          <label className="mb-2 block text-sm font-medium">Description</label>

          <textarea
            rows={5}
            placeholder="Describe your responsibilities, achievements, and impact..."
            {...register("description")}
            className="
            w-full
            resize-none
            rounded-2xl
            border
            border-white/10
            bg-black
            px-4
            py-3.5
            text-white
            outline-none
            transition
            placeholder:text-zinc-600
            focus:border-white/20
          "
          />

          {errors.description && (
            <p className="mt-2 text-sm text-red-500">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Footer */}
        <div
          className="
          flex
          flex-col-reverse
          gap-3
          pt-2
          sm:flex-row
        "
        >
          {editingExperience && (
            <button
              type="button"
              onClick={() => {
                setEditingExperience(null);
                reset();
              }}
              className="
              rounded-2xl
              border
              border-white/10
              px-6
              py-3.5
              text-white
              transition
              hover:bg-white/[0.04]
            "
            >
              Cancel
            </button>
          )}

          <button
            type="submit"
            className="
            flex-1
            rounded-2xl
            bg-white
            py-3.5
            font-medium
            text-black
            transition
            hover:opacity-90
          "
          >
            {editingExperience ? "Update Experience" : "Save Experience"}
          </button>
        </div>
      </form>
    </>
  );
}
