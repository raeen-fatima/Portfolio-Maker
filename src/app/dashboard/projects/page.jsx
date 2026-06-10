import ProjectForm from "@/components/projects/ProjectForm";

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Projects
        </h1>

        <p className="text-gray-500 mt-2">
          Showcase your best projects.
        </p>
      </div>

      <ProjectForm />
    </div>
  );
}