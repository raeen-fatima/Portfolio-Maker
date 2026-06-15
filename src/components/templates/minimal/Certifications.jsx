import {
  Award,
  ExternalLink,
} from "lucide-react";

export default function Certifications({
  certifications,
}) {
  if (!certifications?.length) return null;

  return (
    <section
      id="certifications"
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
            Certifications
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
            Certifications &
            achievements.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-500
            "
          >
            Professional certifications and
            credentials earned throughout my
            learning journey.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            mt-16
            grid
            gap-6
            md:grid-cols-2
          "
        >
          {certifications.map(
            (certificate) => (
              <div
                key={certificate._id}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-zinc-200
                  bg-white
                  p-8
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-lime-300
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                "
              >
                {/* Top Accent */}
                <div
                  className="
                    absolute
                    left-0
                    top-0
                    h-1
                    w-full
                    origin-left
                    scale-x-0
                    bg-lime-400
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
                />

                {/* Icon */}
                <div
                  className="
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-lime-50
                  "
                >
                  <Award
                    size={24}
                    className="text-lime-500"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-8
                    text-2xl
                    font-bold
                    tracking-tight
                    text-black
                  "
                >
                  {certificate.title}
                </h3>

                {/* Issuer */}
                <p
                  className="
                    mt-3
                    text-lg
                    text-zinc-700
                  "
                >
                  {certificate.issuer}
                </p>

                {/* Date */}
                <div className="mt-5">
                  <span
                    className="
                      inline-flex
                      rounded-full
                      bg-zinc-100
                      px-3
                      py-1
                      text-sm
                      text-zinc-600
                    "
                  >
                    {certificate.issueDate}
                  </span>
                </div>

                {/* Link */}
                {certificate.credentialUrl && (
                  <a
                    href={
                      certificate.credentialUrl
                    }
                    target="_blank"
                    rel="noreferrer"
                    className="
                      mt-8
                      inline-flex
                      items-center
                      gap-2
                      font-medium
                      text-black
                      transition
                      hover:text-lime-500
                    "
                  >
                    View Credential

                    <ExternalLink
                      size={18}
                    />
                  </a>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}