export default function Education({
  education,
}) {
  if (!education?.length) return null;

  return (
    <section
      id="education"
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
            Education
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
            Academic journey &
            learning path.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-500
            "
          >
            My educational background and
            the foundation that shaped my
            skills, knowledge, and growth.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Vertical Line */}
          <div
            className="
              absolute
              left-[7px]
              top-0
              h-full
              w-px
              bg-zinc-200
            "
          />

          <div className="space-y-16">
            {education.map((item) => (
              <div
                key={item._id}
                className="
                  relative
                  pl-12
                "
              >
                {/* Dot */}
                <div
                  className="
                    absolute
                    left-0
                    top-2
                    h-4
                    w-4
                    rounded-full
                    border-4
                    border-white
                    bg-lime-400
                    shadow-sm
                  "
                />

                {/* Date */}
                <span
                  className="
                    inline-flex
                    rounded-full
                    border
                    border-lime-200
                    bg-lime-50
                    px-4
                    py-1
                    text-sm
                    font-medium
                    text-lime-700
                  "
                >
                  {item.startYear}
                  {item.endYear
                    ? ` — ${item.endYear}`
                    : " — Present"}
                </span>

                {/* Degree */}
                <h3
                  className="
                    mt-5
                    text-2xl
                    font-bold
                    tracking-tight
                    text-black
                    md:text-3xl
                  "
                >
                  {item.degree}
                </h3>

                {/* Institution */}
                <p
                  className="
                    mt-2
                    text-lg
                    font-medium
                    text-zinc-800
                  "
                >
                  {item.institution}
                </p>

                {/* Location */}
                {item.location && (
                  <p
                    className="
                      mt-1
                      text-zinc-500
                    "
                  >
                    {item.location}
                  </p>
                )}

                {/* Description */}
                {item.description && (
                  <p
                    className="
                      mt-6
                      max-w-3xl
                      leading-8
                      text-zinc-600
                    "
                  >
                    {item.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}