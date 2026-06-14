import {
  Award,
  ExternalLink,
} from "lucide-react";

function formatDate(date) {
  if (!date) return "";

  const [year, month] = date.split("-");

  return new Date(year, month - 1).toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric",
    }
  );
}

export default function Certifications({
  certifications,
}) {
  if (!certifications?.length) return null;

  return (
    <section
      id="certifications"
      className="relative overflow-hidden border-t border-zinc-900 bg-black"
    >
      {/* Glow */}
      <div className="absolute top-20 left-0 h-72 w-72 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="absolute bottom-20 right-0 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">
        {/* Header */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.4em] text-violet-400">
            Certifications
          </p>

          <h2 className="mt-2 text-3xl font-bold text-white md:text-5xl">
            Licenses & Certifications
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Professional certifications and credentials
            that validate my skills and knowledge.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <div
              key={cert._id || index}
              className="
                group
                rounded-3xl
                border
                border-zinc-800
                bg-zinc-900/40
                p-6
                backdrop-blur-sm
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/30
              "
            >
              <div
                className="
                  mb-5
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-violet-500/10
                "
              >
                <Award
                  size={24}
                  className="text-violet-400"
                />
              </div>

              <h3 className="text-xl font-semibold text-white">
                {cert.title}
              </h3>

              <p className="mt-2 text-violet-400">
                {cert.issuer}
              </p>

              <p className="mt-3 text-sm text-zinc-500">
                {formatDate(cert.issueDate)}
              </p>

              {cert.credentialUrl && (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    mt-6
                    inline-flex
                    items-center
                    gap-2
                    text-sm
                    text-zinc-300
                    transition
                    hover:text-white
                  "
                >
                  View Credential
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}