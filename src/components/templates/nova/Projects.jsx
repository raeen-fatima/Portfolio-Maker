import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Projects({ projects }) {
  if (!projects?.length) return null;

  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-zinc-900 bg-black"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="mb-14">
          <p className="text-xs uppercase tracking-[0.4em] text-violet-400">
            Projects
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl">
            Featured Work
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            A collection of projects showcasing my experience in building
            modern web applications and digital products.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-10">
          {projects.map((project, index) => (
            <div
              key={project._id || index}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/40
                backdrop-blur-sm
                transition-all
                duration-300
                hover:border-violet-500/30
              "
            >
              <div
                className={`
                  grid
                  lg:grid-cols-2
                  items-center
                  ${
                    index % 2 !== 0
                      ? "lg:[&>*:first-child]:order-2"
                      : ""
                  }
                `}
              >
                {/* Image */}
                <div className="relative h-[250px] sm:h-[320px] lg:h-[450px] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="
                      object-cover
                      transition-all
                      duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-10">
                  <div
                    className="
                      mb-4
                      inline-flex
                      rounded-full
                      border
                      border-violet-500/20
                      bg-violet-500/10
                      px-3
                      py-1
                      text-xs
                      uppercase
                      tracking-wider
                      text-violet-300
                    "
                  >
                    Project {index + 1}
                  </div>

                  <h3 className="text-2xl font-bold text-white lg:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 leading-8 text-zinc-400">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  {project.technologies?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="
                            rounded-full
                            border
                            border-violet-500/20
                            bg-violet-500/10
                            px-4
                            uppercase
                            py-2
                            text-sm
                            text-violet-300
                          "
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Buttons */}
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          bg-violet-600
                          px-6
                          py-3
                          font-medium
                          text-white
                          transition
                          hover:bg-violet-500
                        "
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex
                          items-center
                          justify-center
                          gap-2
                          rounded-xl
                          border
                          border-zinc-700
                          px-6
                          py-3
                          font-medium
                          text-zinc-300
                          transition
                          hover:border-violet-500
                          hover:text-white
                        "
                      >
                        <FaGithub size={18} />
                        Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}