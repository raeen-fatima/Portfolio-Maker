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

export default function Education({
  education,
}) {
  if (!education?.length) return null;

  return (
    <section
      id="education"
      className="
        bg-black
        px-6
        py-24
        text-zinc-100
      "
    >
      <div className="mx-auto max-w-6xl">
        <div
          className="
            overflow-hidden
            rounded-3xl
            border
            border-zinc-800
            bg-zinc-950
          "
        >
          {/* Terminal Header */}
          <div
            className="
              flex
              items-center
              gap-2
              border-b
              border-zinc-800
              px-5
              py-4
            "
          >
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />

            <span
              className="
                ml-4
                text-sm
                text-zinc-500
              "
            >
              education.log
            </span>
          </div>

          {/* Content */}
          <div
            className="
              p-8
              font-mono
              md:p-12
            "
          >
            <p className="text-green-500">
              $ cat education.log
            </p>

            <div className="mt-10 space-y-10">
              {education.map((item) => (
                <div
                  key={item._id}
                  className="
                    border-l-2
                    border-green-500
                    pl-6
                  "
                >
                  {/* Date */}
                  <p
                    className="
                      text-sm
                      text-green-400
                    "
                  >
                    [
                    {formatMonth(
                      item.startYear
                    )}

                    {item.endYear
                      ? ` - ${formatMonth(
                          item.endYear
                        )}`
                      : " - Present"}
                    ]
                  </p>

                  {/* Degree */}
                  <h3
                    className="
                      mt-3
                      text-xl
                      font-bold
                      text-white
                    "
                  >
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <p
                    className="
                      mt-2
                      text-zinc-400
                    "
                  >
                    {item.institution}
                  </p>

                  {/* Location */}
                  {item.location && (
                    <p
                      className="
                        mt-1
                        text-sm
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
                        mt-4
                        leading-7
                        text-zinc-400
                      "
                    >
                      {item.description}
                    </p>
                  )}
                </div>
              ))}
            </div>

            {/* Cursor */}
            <div
              className="
                mt-10
                flex
                items-center
                gap-2
                text-green-500
              "
            >
              <span>$</span>

              <span
                className="
                  h-5
                  w-3
                  animate-pulse
                  bg-green-500
                "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}