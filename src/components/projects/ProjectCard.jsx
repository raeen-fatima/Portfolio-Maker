"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "@/validators/portfolio";
import ImageUpload from "@/components/ImageUpload";

export default function ProjectForm() {
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = async (data) => {
    console.log({
      ...data,
      image: imageUrl,
    });
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Add New Project
        </h2>

        <p className="text-gray-500 mt-2">
          Showcase your best work.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
      >
        {/* Project Title */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Project Title
          </label>

          <input
            type="text"
            placeholder="Portfolio Builder"
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

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Description
          </label>

          <textarea
            rows={5}
            placeholder="Describe your project..."
            {...register("description")}
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
              resize-none
            "
          />

          {errors.description && (
            <p className="text-red-500 text-sm mt-2">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* GitHub URL */}
        <div>
          <label className="block text-sm font-medium mb-2">
            GitHub URL
          </label>

          <input
            type="text"
            placeholder="https://github.com/..."
            {...register("githubUrl")}
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

          {errors.githubUrl && (
            <p className="text-red-500 text-sm mt-2">
              {errors.githubUrl.message}
            </p>
          )}
        </div>

        {/* Live URL */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Live Demo URL
          </label>

          <input
            type="text"
            placeholder="https://your-project.vercel.app"
            {...register("liveUrl")}
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

          {errors.liveUrl && (
            <p className="text-red-500 text-sm mt-2">
              {errors.liveUrl.message}
            </p>
          )}
        </div>

        {/* Technologies */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Technologies
          </label>

          <input
            type="text"
            placeholder="Next.js, MongoDB, Tailwind CSS"
            {...register("technologies")}
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

          {errors.technologies && (
            <p className="text-red-500 text-sm mt-2">
              {errors.technologies.message}
            </p>
          )}
        </div>

        {/* Project Image */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Project Image
          </label>

          <ImageUpload
            onUpload={setImageUrl}
          />
        </div>

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
          Save Project
        </button>
      </form>
    </div>
  );
}