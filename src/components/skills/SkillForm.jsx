"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { skillSchema } from "@/validators/portfolio";
import { toast } from "sonner";

export default function SkillForm({ fetchSkills }) {
  // React Hook Form
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(skillSchema),
    defaultValues: {
      name: "",
    },
  });
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

  // Add Skill
  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/portfolio/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      // Clear Form

      resetField("name");

      // Refresh Skills
      await fetchSkills();
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

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
          Skills Builder
        </div>

        <h2
          className="
          text-xl
          font-semibold
          tracking-tight
          text-white
        "
        >
          Add Skill
        </h2>

        <p className="mt-2 text-zinc-500">
          Add technologies, frameworks, tools, and platforms you work with.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Skill Name */}
        <div>
          <label className="mb-2 block text-sm font-medium">Skill Name</label>

          <input
            type="text"
            placeholder="Next.js"
            {...register("name")}
            className={inputStyles}
          />

          <p className="mt-2 text-xs text-zinc-500">
            Examples: React, Next.js, MongoDB, Tailwind CSS, AWS.
          </p>

          {errors.name && (
            <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>

        {/* Quick Suggestions */}
        <div
          className="
          rounded-2xl
          border
          border-white/10
          bg-white/[0.02]
          p-4
        "
        >
          <p
            className="
            mb-3
            text-xs
            uppercase
            tracking-[0.15em]
            text-zinc-600
          "
          >
            Popular Skills
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "Next.js",
              "React",
              "MongoDB",
              "Node.js",
              "Tailwind CSS",
              "JavaScript",
            ].map((item) => (
              <span
                key={item}
                className="
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
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="
          w-full
          rounded-2xl
          bg-white
          py-3.5
          font-medium
          text-black
          transition
          hover:opacity-90
        "
        >
          Add Skill
        </button>
      </form>
    </>
  );
}
