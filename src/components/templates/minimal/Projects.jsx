
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects({
  projects,
}) {
  if (!projects?.length) return null;

  return (
    <section
      id="projects"
      className="
        border-b
        border-zinc-200
        bg-white
      "
    >
      <div className="mx-auto max-w-7xl px-6 py-24">
        
        {/* Header */}
        <div className="max-w-2xl">
          <p
            className="
              text-xs
              uppercase
              tracking-[0.35em]
              text-zinc-500
            "
          >
            Projects
          </p>

          <h2
            className="
              mt-4
              text-4xl
              font-bold
              tracking-tight
              text-black
              md:text-5xl
            "
          >
            Selected work &
            recent projects.
          </h2>
        </div>

        {/* Projects */}
        <div className="mt-20 space-y-24">
          {projects.map((project, index) => (
            <div
              key={project._id}
              className="
                grid
                gap-10
                border-t
                border-zinc-200
                pt-12
                lg:grid-cols-2
              "
            >
              {/* Image */}
              <div>
                {project.image && (
                  <div
                    className="
                      relative
                      overflow-hidden
                      rounded-3xl
                      border
                      border-zinc-200
                    "
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={800}
                      height={600}
                      className="
                        h-[300px]
                        w-full
                        object-cover
                        transition
                        duration-700
                        hover:scale-105
                      "
                    />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                
                <p className="text-sm text-lime-500 font-medium">
                  Project {String(index + 1).padStart(2, "0")}
                </p>

                <h3
                  className="
                    mt-3
                    text-3xl
                    font-bold
                    text-black
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    mt-6
                    leading-8
                    text-zinc-600
                  "
                >
                  {project.description}
                </p>

                {/* Technologies */}
                {project.technologies?.length >
                  0 && (
                  <div
                    className="
                      mt-8
                      flex
                      flex-wrap
                      gap-3
                    "
                  >
                    {project.technologies.map(
                      (tech) => (
                        <span
                          key={tech}
                          className="
                            rounded-full
                            border
                            border-zinc-200
                            px-4
                            py-2
                            text-sm
                            text-zinc-600
                          "
                        >
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                )}

                {/* Links */}
                <div
                  className="
                    mt-10
                    flex
                    flex-wrap
                    gap-6
                  "
                >
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        font-medium
                        text-black
                        transition
                        hover:text-lime-500
                      "
                    >
                      <FaGithub size={18} />
                      GitHub
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        inline-flex
                        items-center
                        gap-2
                        font-medium
                        text-black
                        transition
                        hover:text-lime-500
                      "
                    >
                      <ArrowUpRight size={18} />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}