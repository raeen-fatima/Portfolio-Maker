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
    <div className="bg-white border border-zinc-200 rounded-3xl p-6">
      <h2 className="text-xl font-bold">Add Skill</h2>

      <p className="text-gray-500 mt-2">
        Add technologies and tools you work with.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        {/* Skill Name */}
        <div>
          <label className="block text-sm font-medium mb-2">Skill Name</label>

          <input
            type="text"
            //  key="skill-input"
            placeholder="Next.js"
            {...register("name")}
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

          {errors.name && (
            <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="
            w-full
            bg-black
            text-white
            py-3.5
            rounded-2xl
            font-medium
            hover:opacity-90
            transition
          "
        >
          Add Skill
        </button>
      </form>
    </div>
  );
}
