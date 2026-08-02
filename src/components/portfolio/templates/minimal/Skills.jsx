export default function Skills({
  skills,
}) {
  if (!skills?.length) return null;

  return (
    <section
      id="skills"
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
            Skills
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
            Technologies &
            tools I work with.
          </h2>
        </div>

        {/* Skills */}
        <div
          className="
            mt-16
            grid
            gap-12
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          <div>
            <h3
              className="
                mb-6
                text-lg
                font-semibold
                text-black
              "
            >
              Core Skills
            </h3>

            <div className="space-y-4">
              {skills.map((skill) => (
                <div
                  key={skill._id}
                  className="
                    flex
                    items-center
                    justify-between
                    border-b
                    border-zinc-200
                    pb-3
                  "
                >
                  <span className="text-zinc-700">
                    {skill.name}
                  </span>

                  <span className="text-lime-500">
                    ●
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Block */}
          <div
            className="
              rounded-3xl
              border
              border-zinc-200
              p-8
            "
          >
            <p
              className="
                text-sm
                uppercase
                tracking-wider
                text-zinc-500
              "
            >
              Focus
            </p>

            <h3
              className="
                mt-4
                text-2xl
                font-bold
                text-black
              "
            >
              Building scalable
              web applications.
            </h3>

            <p
              className="
                mt-4
                leading-7
                text-zinc-600
              "
            >
              Passionate about creating
              modern, performant and
              user-friendly digital
              experiences.
            </p>
          </div>

          {/* Decorative Block */}
          <div
            className="
              rounded-3xl
              border
              border-zinc-200
              p-8
            "
          >
            <p
              className="
                text-sm
                uppercase
                tracking-wider
                text-zinc-500
              "
            >
              Learning
            </p>

            <h3
              className="
                mt-4
                text-2xl
                font-bold
                text-black
              "
            >
              Always exploring
              new technologies.
            </h3>

            <p
              className="
                mt-4
                leading-7
                text-zinc-600
              "
            >
              Continuously improving
              through projects,
              experimentation and
              real-world problem solving.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}