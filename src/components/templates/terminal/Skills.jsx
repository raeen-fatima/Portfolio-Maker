export default function Skills({
  skills,
}) {
  if (!skills?.length) return null;

  return (
    <section
      id="skills"
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
              skills.sh
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
              $ skill --list
            </p>

            <div
              className="
                mt-8
                grid
                gap-4
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {skills.map((skill) => (
                <div
                  key={skill._id}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    border
                    border-zinc-800
                    bg-black/40
                    px-4
                    py-3
                    transition-all
                    duration-300
                    hover:border-green-500
                  "
                >
                  <span className="text-green-500">
                    ✓
                  </span>

                  <span className="text-zinc-300">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>

            {/* Terminal Cursor */}
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