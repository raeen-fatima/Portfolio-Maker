"use client";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { projectSchema } from "@/validators/portfolio";
// import ImageUpload from "@/components/ImageUpload";
import { toast } from "sonner";
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamic Import
const ImageUpload = dynamic(() => import("@/components/ui/ImageUpload"), {
  ssr: false,
});

export default function ProjectForm({
  editingProject,
  setEditingProject,
  fetchProjects,
}) {
  // Project Image State
  const [imageUrl, setImageUrl] = useState("");

  // React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
  });

  // Populate Form When Editing
  useEffect(() => {
    if (!editingProject) return;

    reset({
      title: editingProject.title || "",
      description: editingProject.description || "",
      githubUrl: editingProject.githubUrl || "",
      liveUrl: editingProject.liveUrl || "",
      technologies: editingProject.technologies?.join(", ") || "",
    });
  }, [editingProject, reset]);

  const displayImageUrl = imageUrl || editingProject?.image || "";

  // Create / Update Project
  const onSubmit = async (data) => {
    try {
      const method = editingProject ? "PUT" : "POST";

      const body = {
        ...data,
        image: imageUrl || editingProject?.image || "",
        technologies: data.technologies.split(",").map((tech) => tech.trim()),
      };

      // Add Project ID During Update
      if (editingProject) {
        body.projectId = editingProject._id;
      }

      const response = await fetch("/api/portfolio/projects", {
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

      // Reset Form
      reset();

      // Clear Uploaded Image
      setImageUrl("");

      // Exit Edit Mode
      setEditingProject?.(null);

      // Refresh Project List
      await fetchProjects?.();
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong");
    }
  };

  return (
    <div className="bg-white border border-zinc-200 rounded-3xl p-6 lg:p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          {editingProject ? "Edit Project" : "Add New Project"}
        </h2>
        <p className="text-gray-500 mt-2">
          {editingProject
            ? "Update your existing project."
            : "Showcase your best work."}
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
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
            <p className="text-red-500 text-sm mt-2">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-2">Description</label>

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
          <label className="block text-sm font-medium mb-2">GitHub URL</label>

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
          <label className="block text-sm font-medium mb-2">Technologies</label>

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

          <ImageUpload onUpload={setImageUrl} />
          {displayImageUrl && (
            <Image
              src={displayImageUrl}
              alt="Project Preview"
              width={400}
              height={300}
              className="w-full h-40 object-cover rounded-xl mt-3"
            />
          )}

          {imageUrl && (
            <p className="text-green-600 text-sm mt-2">
              ✓ Image uploaded successfully
            </p>
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
          {editingProject ? "Update Project" : "Save Project"}
        </button>
      </form>
    </div>
  );
}
