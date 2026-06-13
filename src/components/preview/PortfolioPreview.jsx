"use client";

import {
  Briefcase,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

const templateStyles = {
  "template-1": {
    shell: "bg-white text-zinc-950",
    hero: "bg-zinc-950 text-white",
    accent: "bg-zinc-950 text-white",
    subtle: "bg-zinc-100",
    border: "border-zinc-200",
  },
  "template-2": {
    shell: "bg-rose-50 text-zinc-950",
    hero: "bg-rose-600 text-white",
    accent: "bg-rose-600 text-white",
    subtle: "bg-white",
    border: "border-rose-200",
  },
  "template-3": {
    shell: "bg-emerald-50 text-zinc-950",
    hero: "bg-emerald-700 text-white",
    accent: "bg-amber-400 text-zinc-950",
    subtle: "bg-white",
    border: "border-emerald-200",
  },
  "template-4": {
    shell: "bg-sky-50 text-zinc-950",
    hero: "bg-sky-700 text-white",
    accent: "bg-sky-700 text-white",
    subtle: "bg-white",
    border: "border-sky-200",
  },
};

function formatMonth(value) {
  if (!value) return "";

  const [year, month] = value.split("-");
  const date = new Date(
    Number(year),
    Number(month) - 1
  );

  return date.toLocaleDateString("en", {
    month: "short",
    year: "numeric",
  });
}

function withFallback(value, fallback) {
  return value && value.trim()
    ? value
    : fallback;
}

export default function PortfolioPreview({
  portfolio,
}) {
  const template =
    portfolio?.template || "template-1";
  const styles =
    templateStyles[template] ||
    templateStyles["template-1"];

  const hero = portfolio?.hero || {};
  const about = portfolio?.about || {};
  const skills = portfolio?.skills || [];
  const projects = portfolio?.projects || [];
  const experience =
    portfolio?.experience || [];
  const education = portfolio?.education || [];

  const displayName = withFallback(
    hero.name,
    "Your Name"
  );
  const displayTitle = withFallback(
    hero.title,
    "Portfolio Title"
  );
  const displayTagline = withFallback(
    hero.tagline,
    "A short introduction about your work, strengths, and the kind of opportunities you are looking for."
  );

  return (
    <article
      className={`${styles.shell} rounded-3xl overflow-hidden border ${styles.border} shadow-sm`}
    >
      <section
        className={`${styles.hero} px-6 py-10 md:px-10 md:py-14`}
      >
        <div className="grid md:grid-cols-[1fr_220px] gap-8 items-center">
          <div>
            <p className="text-sm font-medium opacity-75">
              Portfolio Preview
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mt-3 leading-tight">
              {displayName}
            </h1>

            <p className="text-xl mt-3 opacity-90">
              {displayTitle}
            </p>

            <p className="mt-5 max-w-2xl leading-relaxed opacity-85">
              {displayTagline}
            </p>

            {hero.resumeUrl && (
              <a
                href={hero.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white text-zinc-950 px-5 py-3 rounded-2xl font-medium mt-7 hover:opacity-90 transition"
              >
                Resume
                <ExternalLink size={16} />
              </a>
            )}
          </div>

          <div className="justify-self-start md:justify-self-end">
            {hero.image ? (
              <Image
                src={hero.image}
                alt={displayName}
                width={220}
                height={220}
                className="h-44 w-44 md:h-56 md:w-56 rounded-3xl object-cover border-4 border-white/30"
              />
            ) : (
              <div className="h-44 w-44 md:h-56 md:w-56 rounded-3xl bg-white/15 border border-white/25 flex items-center justify-center text-5xl font-bold">
                {displayName.charAt(0)}
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="px-6 py-8 md:px-10 md:py-10 space-y-10">
        <section className="grid lg:grid-cols-[1.3fr_0.7fr] gap-6">
          <div
            className={`${styles.subtle} border ${styles.border} rounded-3xl p-6`}
          >
            <h2 className="text-2xl font-bold">
              About
            </h2>

            <p className="text-zinc-600 mt-4 leading-relaxed whitespace-pre-line">
              {withFallback(
                about.bio,
                "Add your about information to introduce yourself, your background, and what makes your work valuable."
              )}
            </p>
          </div>

          <div
            className={`${styles.subtle} border ${styles.border} rounded-3xl p-6 space-y-4`}
          >
            <h2 className="text-2xl font-bold">
              Contact
            </h2>

            {about.location && (
              <p className="flex items-center gap-3 text-zinc-600">
                <MapPin size={18} />
                {about.location}
              </p>
            )}

            {about.email && (
              <p className="flex items-center gap-3 text-zinc-600">
                <Mail size={18} />
                {about.email}
              </p>
            )}

            {about.phone && (
              <p className="flex items-center gap-3 text-zinc-600">
                <Phone size={18} />
                {about.phone}
              </p>
            )}

            {!about.location &&
              !about.email &&
              !about.phone && (
                <p className="text-zinc-500">
                  Contact details will appear here
                  after you complete About.
                </p>
              )}
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-bold">
              Skills
            </h2>
          </div>

          <div className="flex flex-wrap gap-3 mt-5">
            {(skills.length
              ? skills
              : [
                  { name: "React" },
                  { name: "Next.js" },
                  { name: "MongoDB" },
                ]
            ).map((skill) => (
              <span
                key={skill._id || skill.name}
                className={`${styles.accent} px-4 py-2 rounded-full text-sm font-medium`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-5 mt-5">
            {(projects.length
              ? projects
              : [
                  {
                    title: "Featured Project",
                    description:
                      "Your project cards will appear here with descriptions, technologies, and links.",
                    technologies: [
                      "Next.js",
                      "Tailwind CSS",
                    ],
                  },
                ]
            ).map((project) => (
              <div
                key={
                  project._id || project.title
                }
                className={`${styles.subtle} border ${styles.border} rounded-3xl p-5`}
              >
                <h3 className="text-lg font-bold">
                  {project.title}
                </h3>

                <p className="text-zinc-600 mt-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies?.map(
                    (tech) => (
                      <span
                        key={tech}
                        className="bg-zinc-100 text-zinc-700 px-3 py-1 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>

                <div className="flex flex-wrap gap-3 mt-5">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-medium"
                    >
                      <FaGithub size={16} />
                      GitHub
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-medium"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid lg:grid-cols-2 gap-6">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Briefcase size={22} />
              Experience
            </h2>

            <div className="space-y-4 mt-5">
              {(experience.length
                ? experience
                : [
                    {
                      company: "Company Name",
                      role: "Your Role",
                      startDate: "",
                      endDate: "",
                      current: false,
                      description:
                        "Your professional experience will appear here.",
                    },
                  ]
              ).map((item) => (
                <div
                  key={item._id || item.role}
                  className={`${styles.subtle} border ${styles.border} rounded-3xl p-5`}
                >
                  <h3 className="font-bold">
                    {item.role}
                  </h3>

                  <p className="text-zinc-500 mt-1">
                    {item.company}
                  </p>

                  {(item.startDate ||
                    item.endDate ||
                    item.current) && (
                    <p className="text-sm text-zinc-500 mt-2">
                      {formatMonth(
                        item.startDate
                      )}{" "}
                      -{" "}
                      {item.current
                        ? "Present"
                        : formatMonth(
                            item.endDate
                          )}
                    </p>
                  )}

                  <p className="text-zinc-600 mt-3 leading-relaxed whitespace-pre-line">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <GraduationCap size={24} />
              Education
            </h2>

            <div className="space-y-4 mt-5">
              {(education.length
                ? education
                : [
                    {
                      institution:
                        "Institution Name",
                      degree:
                        "Degree or Certification",
                      startYear: "",
                      endYear: "",
                    },
                  ]
              ).map((item) => (
                <div
                  key={item._id || item.degree}
                  className={`${styles.subtle} border ${styles.border} rounded-3xl p-5`}
                >
                  <h3 className="font-bold">
                    {item.degree}
                  </h3>

                  <p className="text-zinc-500 mt-1">
                    {item.institution}
                  </p>

                  {(item.startYear ||
                    item.endYear) && (
                    <p className="text-sm text-zinc-500 mt-2">
                      {[item.startYear, item.endYear]
                        .filter(Boolean)
                        .join(" - ")}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
