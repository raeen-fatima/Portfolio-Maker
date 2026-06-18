"use client";
import ProjectForm from "@/components/projects/ProjectForm";
import ProjectCard from "@/components/projects/ProjectCard";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import BuilderHeader from "@/components/builder/BuilderHeader";
import { useRouter } from "next/navigation";


export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const router = useRouter();

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/portfolio/projects");

      const result = await response.json();

      if (!result.success) return;

      setProjects(result.projects);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadProjects = async () => {
      await fetchProjects();
    };

    loadProjects();
  }, []);

  const handleDelete = async (projectId) => {
    try {
      const response = await fetch("/api/portfolio/projects", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message);
        return;
      }

      toast.success(result.message);

      fetchProjects();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className="mx-auto max-w-7xl space-y-8 p-6 lg:p-10">
      {/* Header */}
      <BuilderHeader
        title="Projects"
        description="Showcase your best work and highlight projects that represent your skills."
        step={4}
        totalSteps={8}
      />

      {/* Project Form */}
      <div
        className="
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
        p-6
        lg:p-8
      "
      >
        <div>
          <h2 className="text-xl font-semibold text-white">
            {editingProject ? "Edit Project" : "Add New Project"}
          </h2>

          <p className="mt-2 text-zinc-500">
            Add projects that demonstrate your experience and expertise.
          </p>
        </div>

        <div className="mt-6">
          <ProjectForm
            editingProject={editingProject}
            setEditingProject={setEditingProject}
            fetchProjects={fetchProjects}
          />
        </div>
      </div>

      {/* Projects */}
      <div
        className="
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.03]
        p-6
        lg:p-8
      "
      >
        <div
          className="
          flex
          flex-col
          gap-4
          sm:flex-row
          sm:items-center
          sm:justify-between
        "
        >
          <div>
            <h2 className="text-xl font-semibold text-white">Your Projects</h2>

            <p className="mt-2 text-zinc-500">
              Projects currently displayed on your portfolio.
            </p>
          </div>

          <div
            className="
            inline-flex
            items-center
            rounded-full
            border
            border-white/10
            bg-white/[0.03]
            px-4
            py-2
            text-sm
            text-zinc-400
          "
          >
            {projects.length} Projects
          </div>
        </div>

        {projects.length === 0 ? (
          <div
            className="
            mt-8
            rounded-3xl
            border
            border-dashed
            border-white/10
            bg-white/[0.02]
            p-12
            text-center
          "
          >
            <h3 className="text-lg font-semibold text-white">
              No projects added yet
            </h3>

            <p className="mt-3 text-zinc-500">
              Add your first project to showcase your work.
            </p>
          </div>
        ) : (
          <div
            className="
            mt-8
            grid
            gap-5
            md:grid-cols-2
          "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project._id}
                project={project}
                onDelete={handleDelete}
                onEdit={setEditingProject}
              />
            ))}
          </div>
        )}
      </div>

      {/* Footer Navigation */}
      <div
        className="
        flex
        flex-col
        gap-3
        sm:flex-row
      "
      >
        <button
          type="button"
          onClick={() => router.push("/dashboard/portfolio/skills")}
          className="
          flex-1
          rounded-2xl
          border
          border-white/10
          py-3.5
          font-medium
          text-white
          transition
          hover:bg-white/[0.04]
        "
        >
          ← Back
        </button>

        <button
          type="button"
          onClick={() => router.push("/dashboard/portfolio/experience")}
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
          Continue →
        </button>
      </div>
    </div>
  );
}
