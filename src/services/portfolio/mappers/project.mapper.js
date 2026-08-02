export function mapProjects(projects = []) {
  return projects.map((project) => ({
    _id: project._id?.toString() || "",
    title: project.title ?? "",
    description: project.description ?? "",
    image: project.image ?? "",
    githubUrl: project.githubUrl ?? "",
    liveUrl: project.liveUrl ?? "",
    technologies: project.technologies ?? [],
  }));
}