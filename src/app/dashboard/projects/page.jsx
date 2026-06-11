"use client";
import ProjectForm from "@/components/projects/ProjectForm";
import ProjectCard from "@/components/projects/ProjectCard";
import { useEffect, useState } from "react";
import { toast } from "sonner";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);

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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Projects</h1>

        <p className="text-gray-500 mt-2">Showcase your best projects.</p>
      </div>

      <ProjectForm
        editingProject={editingProject}
        setEditingProject={setEditingProject}
        fetchProjects={fetchProjects}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project._id}
            project={project}
            onDelete={handleDelete}
            onEdit={setEditingProject}
          />
        ))}
      </div>
    </div>
  );
}
