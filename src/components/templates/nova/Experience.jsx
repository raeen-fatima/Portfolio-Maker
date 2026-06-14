import { Briefcase, MapPin } from "lucide-react";

function formatDate(date) {
  if (!date) return "";

  const [year, month] = date.split("-");

  return new Date(year, month - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export default function Experience({ experiences }) {
  if (!experiences?.length) return null;

  return (
    <section
      id="experience"
      className="relative overflow-hidden border-t border-zinc-900 bg-black"
    >
      {/* Glow */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-violet-400">
            Experience
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl">
            Professional Journey
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            My experience across internships, freelance projects,
            and professional roles.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[15px] top-0 h-full w-px bg-zinc-800" />

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <div
                key={experience._id || index}
                className="relative pl-12"
              >
                {/* Dot */}
                <div
                  className="
                    absolute
                    left-0
                    top-2
                    flex
                    h-8
                    w-8
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-violet-500/30
                    bg-black
                  "
                >
                  <Briefcase
                    size={14}
                    className="text-violet-400"
                  />
                </div>

                {/* Card */}
                <div
                  className="
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-900/40
                    p-6
                    backdrop-blur-sm
                    transition-all
                    duration-300
                    hover:border-violet-500/30
                  "
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-bold text-white">
                      {experience.role}
                    </h3>

                    {experience.current && (
                      <span
                        className="
                          rounded-full
                          border
                          border-green-500/20
                          bg-green-500/10
                          px-3
                          py-1
                          text-xs
                          text-green-400
                        "
                      >
                        Current
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-lg text-violet-400">
                    {experience.company}
                  </p>

                  <div
                    className="
                      mt-3
                      flex
                      flex-wrap
                      items-center
                      gap-4
                      text-sm
                      text-zinc-500
                    "
                  >
                    <span>
                      {formatDate(experience.startDate)}
                      {" - "}
                      {experience.current
                        ? "Present"
                        : formatDate(experience.endDate)}
                    </span>

                    {experience.location && (
                      <span className="flex items-center gap-1">
                        <MapPin size={14} />
                        {experience.location}
                      </span>
                    )}
                  </div>

                  <p className="mt-5 leading-8 text-zinc-400">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}