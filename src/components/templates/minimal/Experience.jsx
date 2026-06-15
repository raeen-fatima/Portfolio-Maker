function formatMonth(dateString) {
  if (!dateString) return "";

  const [year, month] = dateString.split("-");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${months[Number(month) - 1]} ${year}`;
}

export default function Experience({
  experience,
}) {
  if (!experience?.length) return null;

  return (
    <section
      id="experience"
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
            Experience
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
            Professional journey &
            work experience.
          </h2>

          <p
            className="
              mt-6
              text-lg
              leading-8
              text-zinc-500
            "
          >
            My internships, freelance work,
            and professional experiences that
            helped shape my skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
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
            {experience.map((item) => (
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
                  "
                />

                {/* Date Badge */}
                <div className="flex flex-wrap items-center gap-3">
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
                    {formatMonth(item.startDate)}

                    {item.current
                      ? " — Present"
                      : ` — ${formatMonth(
                          item.endDate
                        )}`}
                  </span>

                  {item.current && (
                    <span
                      className="
                        rounded-full
                        bg-black
                        px-3
                        py-1
                        text-xs
                        font-medium
                        text-white
                      "
                    >
                      Current
                    </span>
                  )}
                </div>

                {/* Role */}
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
                  {item.role}
                </h3>

                {/* Company */}
                <p
                  className="
                    mt-2
                    text-lg
                    font-medium
                    text-zinc-800
                  "
                >
                  {item.company}
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